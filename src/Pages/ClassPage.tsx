import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

type Props =
    {
        classKey: string
    }
type createData = {
    name: string,
    surname: number,
    no: number,
}
const ClassPage = (prop: Props) => {
    const [randomNumber, setRandomNumber] = useState<number>();
    const [rows, setRows] = useState<createData[]>([])



    useEffect(() => {
        fetch("/data/Classes.xlsx")
            .then((res) => res.arrayBuffer())
            .then((buffer) => {
                const workbook = XLSX.read(buffer, { type: "array" });
                const sheet = workbook.Sheets[prop.classKey];
                const jsonData = XLSX.utils.sheet_to_json(sheet);
                setRows(convertProcess(jsonData));
            });
        setRandomNumber(undefined)
    }, [prop.classKey]);

    const convertProcess = (list: any): any[] => {
        const converted = list.map((item: any) => ({
            no: item.no,
            name: item.name,
            surname: item.surname
        }));
        return converted;
    };
    const getRandom = (maxNumber: number): number => {

        return Math.floor(Math.random() * maxNumber);;
    }
    return (<>

        <Box
            sx={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
                background: "rgba(228, 2, 54,0.3)"

            }}
        >
            <Typography
                sx={{ paddingLeft: "20px" }}
            >
                {randomNumber ? rows[randomNumber].no + " - " + rows[randomNumber].name + " " + rows[randomNumber].surname : ""}
            </Typography>
            <Button size="small"
                sx={{
                    minWidth: 60,
                    padding: "5",
                    height: 50,
                    margin: "5px"
                }}
                onClick={() => {
                    setRandomNumber((prev) => {
                        let num = prev;
                        while (num === prev && rows.length > 1) {
                            num = getRandom(rows.length)
                        }
                        return num
                    }
                    )
                }}
                variant="contained"
                style={{ backgroundColor: "#298ACB" }}>
                Rastgele Öğrenci Seç
            </Button>

        </Box>
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TableContainer component={Paper}
                sx={{
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                    width: "50rem"
                }}
            >
                <Table aria-label="simple table" sx={{ background: "rgb(228, 2, 54,0.3)", }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"><strong>Numara</strong></TableCell>
                            <TableCell align="left"><strong>İsim</strong></TableCell>
                            <TableCell align="left"><strong>Soyisim</strong></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows ? rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.no}</TableCell>
                                <TableCell align="left">{row.name} </TableCell>
                                <TableCell align="left">{row.surname}</TableCell>

                            </TableRow>
                        )) : <TableRow></TableRow>}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>

    </>)
}
export default ClassPage;