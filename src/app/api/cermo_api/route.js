import { NextResponse } from 'next/server';

export async function POST(request) {
    const payload = await request.json();
    
    const baseUrl = 'https://services.leadconnectorhq.com/hooks/vcGx4bNYU5UQntQLaOEX/webhook-trigger/';
    
    const webhookUrls = {
        'buy': 'aae66603-8dde-417d-98b0-0d78f5f043c1',
        'sell': '3702e2ee-04cc-4d6b-8072-67791b1230d8',
        'sellbuy': '4c495a7f-a63a-465e-a5c4-480bac914a33',
        'instantoffer': 'c5752d1f-05f7-4d40-a37a-6cf4e2672174'
    };

    const webhookUrl = baseUrl + webhookUrls[payload.flow];

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send webhook' }, { status: 500 });
    }
}
