import { userList } from '@/app/units/db/productList';
import {NextResponse} from 'next/server';


export function GET(request){
    let data = userList
    return NextResponse.json(data,{status:200, msg:'Product list get successfully'})
}