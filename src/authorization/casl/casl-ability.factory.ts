import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType, InferSubjects } from "@casl/ability";
import { Injectable } from "@nestjs/common";
import { Article } from "src/articles/schemas/article.schema";
import { User } from "src/users/schemas/user.schema";
import { Action } from "../action.enum";
import { Role } from "../role.enum";

type Subjects = InferSubjects<typeof Article | typeof User> | "all";

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
    createAuthorizeForUser(user: User) {
        const {can, cannot, build} = new AbilityBuilder<
            Ability<[Action, Subjects]>
        >(Ability as AbilityClass<AppAbility>);
        if(user.role === Role.ADMIN) {
            can(Action.Manage, 'all');
        }
        else if(user.role === Role.USER) {
            can(Action.Update, User, {username: user.username}); // users can update info 
            can(Action.Read, User, {role: user.role});
            can(Action.Read, Article, {scopeArticle: 'public'});
            can(Action.Update, Article)
        }
        return build({
            detectSubjectType: (item) => {
                return item.constructor as ExtractSubjectType<Subjects>;
            }
        });
    }
}