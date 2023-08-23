import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(`${process.env.RESEND_ID}`);

type RequestBody = {
  type: string;
  email: string;
  message: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body: RequestBody = JSON.parse(req.body);
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['alexco4532@gmail.com'],
      subject: `${body.type} - form`,
      text: `${body.email} asks: ${body.message}`
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
