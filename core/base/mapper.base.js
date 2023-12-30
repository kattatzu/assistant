"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapperBase = void 0;
class MapperBase {
    paginated(res) {
        return {
            result: res[0].map((e) => this.toModel(e)),
            count: res[1],
        };
    }
}
exports.MapperBase = MapperBase;
//# sourceMappingURL=mapper.base.js.map