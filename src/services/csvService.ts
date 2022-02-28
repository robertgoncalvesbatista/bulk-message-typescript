import fs from "fs";
import csvParser from "csv-parser";

const filepath = "./list.csv";

export default class csvService {
    load() {
        fs.createReadStream(filepath)
            .on("error", (err) => {
                console.log(err);
            })

            .pipe(csvParser())
            .on("data", (row) => {
                const data = row["Nome;Sobrenome"];
                let splitted = data.split(";");
                console.log(
                    `Meu nome é ${splitted[0]} e meu sobrenome é ${splitted[1]}`
                );
            });
    }
}
