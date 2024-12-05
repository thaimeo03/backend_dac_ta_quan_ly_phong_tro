import { BaseExceptionFilter, HttpAdapterHost, NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const { httpAdapter } = app.get(HttpAdapterHost)

    app.useGlobalFilters(new BaseExceptionFilter(httpAdapter)) // Exception filter is global
    app.enableCors({
        origin: 'http://localhost:3000',
        credentials: true
    })

    await app.listen(9999)
}
bootstrap()
