import { Module } from "@nestjs/common";
import { HttpModule } from "src/http/http.module";
import { CatsController } from "./controllers/cats.controller";
import { CoreModule } from "src/core/core.module";
import { CatsService } from "./services/cats.service";

@Module({
    imports: [CoreModule],
    providers: [CatsService],
    controllers: [CatsController],

    // export CatsSerivce provider
    exports: [CatsService],

})

export class CatsModule {}