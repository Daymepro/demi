import { NextResponse } from "next/server";
import {promises as fs} from 'fs'

//FETCH ALL CATEGORIES
export const GET = async () => {

    try {
        // const path = process.cwd() + '/app/sampleData.json'
        // const file = await fs.readFile(path, 'utf8')
        // console.log(file)
    return new NextResponse(JSON.stringify({message: 'success'}), {status: 200})

    } catch (error) {
        console.log(error)
    return new NextResponse(JSON.stringify({message: 'something went wrong'}), {status: 500})

    }
}