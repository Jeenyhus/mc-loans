import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, amount, term, email } = req.body;

        // Perform your backend logic here, such as saving to a database
        console.log('Received loan application:', { name, amount, term, email });

        res.status(200).json({ message: 'Loan application received successfully!' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
