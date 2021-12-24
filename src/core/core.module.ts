import { Module } from "@nestjs/common";
import { HttpModule } from "src/http/http.module";

@Module({
    imports: [HttpModule],
    exports: [HttpModule],
})

export class CoreModule {}