/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import { google } from "googleapis";

export async function getSheetData() {
    const glAuth = await google.auth.getClient({
        projectId: "YOUR_PROJECT_ID",
        credentials: {
            "type": "service_account",
            "project_id": "YOUR_PROJECT_ID",
            "private_key_id": "YOUR_PRIVATE_KEY_ID",
            "private_key": "YOUR_PRIVATE_KEY",
            "client_email": "YOUR_CLIENT_EMAIL",
            "universe_domain": "googleapis.com"
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const glSheets = google.sheets({ version: "v4", auth: glAuth });

    const data = await glSheets.spreadsheets.values.get({
        spreadsheetId: "SHEET_ID",
        range: 'RANGE',
    });

    return { data: data.data.values };
}

export async function appendSheetData(data: any) {
    const sheetName = 'sheet1';

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        const range = `${sheetName}!A1`;

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'RAW',
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
                values: [[data]],
            },
        });
        console.log(response);

        return true;
    } catch (error) {
        console.log(error);

        return false;
    }
}