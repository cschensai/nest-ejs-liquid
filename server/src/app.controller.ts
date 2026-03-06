import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import type { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // 路由
  @Get('hello')
  // 渲染文件
  @Render('hello')
  getHello(@Res() res: Response) {
    res.header('Content-Type', 'application/liquid');
    return { message: this.appService.getHello() };
  }

  @Get('health')
  getHealth(): { status: string } {
    return { status: 'ok' };
  }

  @Get('collectionlist')
  @Render('collection-list')
  async etCollectionList(@Res() res: Response): Promise<{ collections: any }> {
    const _collections = await this.appService.getCollectionList();
    res.setHeader('Content-Type', 'application/liquid');
    return { collections: _collections.hits };
  }
}
