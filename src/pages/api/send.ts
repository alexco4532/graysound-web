import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/emails/default';
import { Resend } from 'resend';

const resend = new Resend("re_PfKCihug_KUcTqoHoTzMDvkzsJapM7CKy");

type RequestBody = {
    type: string;
    email: string;
    message: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const body: RequestBody = JSON.parse(req.body);
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['alexco4532@gmail.com'],
      subject: `${body.type} - formularz`,
      text: `${body.email} pyta: ${body.message}`,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
