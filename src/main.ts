import { BaseExceptionFilter, HttpAdapterHost, NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const { httpAdapter } = app.get(HttpAdapterHost)

    app.useGlobalFilters(new BaseExceptionFilter(httpAdapter)) // Exception filter is global
    app.enableCors({
        origin: '*'
    })

    await app.listen(9999)
}
bootstrap()
