"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const filepath = "./list.csv";
class csvService {
    load() {
        fs_1.default.createReadStream(filepath)
            .on("error", (err) => {
            console.log(err);
        })
            .pipe((0, csv_parser_1.default)())
            .on("data", (row) => {
            console.log(row);
        })
            .on("end", () => {
            console.log("Fim");
        });
    }
}
exports.default = csvService;
