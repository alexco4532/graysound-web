import { ThanksEmail } from '@/components/emails-templates/thanks';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(`${process.env.RESEND_ID}`);

type RequestBody = {
  type?: string;
  email: string;
  message: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body: RequestBody = JSON.parse(req.body);
  try {
    const data = await resend.sendEmail({
      from: 'Graysound <noreply@graysoundlab.com>',
      to: [`${body.email}`],
      subject: `Formularz zgłoszeniowy - Graysound`,
      react: ThanksEmail()
    });

    const notification = await resend.emails.send({
      from: 'Form <noreply@graysoundlab.com>',
      to: [
        'kontakt@graysoundlab.com',
        'valgardviggo@gmail.com',
        'jakub.samplawski@gmail.com',
        'j.samplawski@graysoundlab.com',
        'm.szymanska@graysoundlab.com'
      ],
      subject: `Zapytanie od ${body.email}`,
      text: `Adres email: ${body.email}. Wiadomość: ${body.message}`
    });

    res.status(200).json(notification);
  } catch (error) {
    res.status(400).json(error);
  }
};
