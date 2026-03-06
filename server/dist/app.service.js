"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const algoliasearch_1 = require("algoliasearch");
let AppService = class AppService {
    getHello() {
        return 'Hello NestJS!';
    }
    async getCollectionList() {
        const APP_ID = 'MG1XDDDVEN';
        const API_KEY = '29ac67c9b7ad53c1dfa101a83ac86c30';
        const ALGOLIA_INDEX_NAME = 'fp_dev_products';
        const client = (0, algoliasearch_1.algoliasearch)(APP_ID, API_KEY);
        const index = await client.searchSingleIndex({
            indexName: ALGOLIA_INDEX_NAME,
            searchParams: {
                query: '',
                facetFilters: [['collections:' + 'injection-pump']],
                hitsPerPage: 50,
            },
        });
        return index;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map