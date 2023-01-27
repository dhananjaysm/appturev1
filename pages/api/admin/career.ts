import { getAllRecords } from '#/lib/careers';
import { NextApiRequest, NextApiResponse } from 'next';

// export type Career = {
//     id: string;
//     Name: string;
//     Status: string;
//     Priority: string;
//     Tags:string[]
//     StartDate: string;
//   }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const {
  //   query: { table },
  // } = req;
  const records = await getAllRecords('careers');
  res.status(200).json({ records });
}
