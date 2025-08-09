var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios, { AxiosError } from "axios";
export function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const response = yield axios.get(url);
            return { data: response.data, status: response.status };
        }
        catch (error) {
            const axiosError = error;
            throw new Error(`Api request failed: ${axiosError.message} {Status: ${(_a = axiosError.response) === null || _a === void 0 ? void 0 : _a.status}}`);
        }
    });
}
//# sourceMappingURL=api.js.map