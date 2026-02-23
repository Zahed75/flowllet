const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const W = 1200, H = 630;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

// --- Background ---
const bg = ctx.createLinearGradient(0, 0, W, H);
bg.addColorStop(0, '#0f172a');
bg.addColorStop(0.5, '#1e1b4b');
bg.addColorStop(1, '#0f172a');
ctx.fillStyle = bg;
ctx.fillRect(0, 0, W, H);

// --- Decorative glow blobs ---
const blob1 = ctx.createRadialGradient(200, 150, 0, 200, 150, 300);
blob1.addColorStop(0, 'rgba(99,102,241,0.25)');
blob1.addColorStop(1, 'rgba(99,102,241,0)');
ctx.fillStyle = blob1;
ctx.fillRect(0, 0, W, H);

const blob2 = ctx.createRadialGradient(1000, 500, 0, 1000, 500, 250);
blob2.addColorStop(0, 'rgba(34,211,238,0.2)');
blob2.addColorStop(1, 'rgba(34,211,238,0)');
ctx.fillStyle = blob2;
ctx.fillRect(0, 0, W, H);

// --- Left content ---
// App name
ctx.font = 'bold 88px Arial';
const nameGrad = ctx.createLinearGradient(60, 0, 400, 0);
nameGrad.addColorStop(0, '#ffffff');
nameGrad.addColorStop(1, '#c7d2fe');
ctx.fillStyle = nameGrad;
ctx.fillText('Flowllet', 60, 160);

// Tagline
ctx.font = 'bold 36px Arial';
const tagGrad = ctx.createLinearGradient(60, 0, 500, 0);
tagGrad.addColorStop(0, '#818cf8');
tagGrad.addColorStop(1, '#67e8f9');
ctx.fillStyle = tagGrad;
ctx.fillText('Smart Money. Beautiful Mind.', 60, 220);

// Description
ctx.font = '22px Arial';
ctx.fillStyle = '#94a3b8';
ctx.fillText('Track expenses, notes, and loans — offline', 60, 270);
ctx.fillText('and always private. Phase 2 is live!', 60, 300);

// Badges
const badges = ['Multi-Currency', 'Offline First', 'Privacy First'];
let bx = 60;
badges.forEach(text => {
    const bw = ctx.measureText(text).width + 40;
    ctx.strokeStyle = 'rgba(99,102,241,0.6)';
    ctx.lineWidth = 1.5;
    ctx.fillStyle = 'rgba(99,102,241,0.15)';
    roundRect(ctx, bx, 330, bw, 40, 20);
    ctx.fill();
    ctx.stroke();
    ctx.font = 'bold 16px Arial';
    ctx.fillStyle = '#a5b4fc';
    ctx.fillText(text, bx + 20, 356);
    bx += bw + 14;
});

// Company credit
ctx.font = '18px Arial';
ctx.fillStyle = '#475569';
ctx.fillText('by Syscomatic Technologies Ltd.', 60, H - 48);

// --- Divider ---
ctx.strokeStyle = 'rgba(255,255,255,0.08)';
ctx.lineWidth = 1;
ctx.setLineDash([8, 6]);
ctx.beginPath();
ctx.moveTo(W * 0.52, 60);
ctx.lineTo(W * 0.52, H - 60);
ctx.stroke();
ctx.setLineDash([]);

// --- Right: Phone Mockup ---
const px = W * 0.56, py = 50, pw = 320, ph = 530, pr = 36;
// Phone body
ctx.fillStyle = '#1e293b';
ctx.strokeStyle = 'rgba(255,255,255,0.12)';
ctx.lineWidth = 2;
roundRect(ctx, px, py, pw, ph, pr);
ctx.fill();
ctx.stroke();

// Phone notch
ctx.fillStyle = '#0f172a';
roundRect(ctx, px + pw / 2 - 50, py - 1, 100, 28, 14);
ctx.fill();

// Screen content
const sx = px + 24, sw = pw - 48;

// Balance label
ctx.font = '14px Arial';
ctx.fillStyle = '#64748b';
ctx.fillText('Total Balance', sx, py + 70);

// Balance value
ctx.font = 'bold 38px Arial';
ctx.fillStyle = '#ffffff';
ctx.fillText('$12,540.00', sx, py + 115);

// Small separator line
ctx.strokeStyle = 'rgba(255,255,255,0.06)';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(sx, py + 135);
ctx.lineTo(sx + sw, py + 135);
ctx.stroke();

// Bar chart
const bars = [0.4, 0.65, 0.5, 0.9, 0.55, 0.75, 0.45];
const barW = 28, barGap = 8;
const chartBottom = py + 250, chartHeight = 90;
bars.forEach((h, i) => {
    const bh = chartHeight * h;
    const bx2 = sx + i * (barW + barGap);
    const isLast2 = i === 5;
    const barGrad = ctx.createLinearGradient(0, chartBottom - bh, 0, chartBottom);
    if (isLast2) {
        barGrad.addColorStop(0, '#22d3ee');
        barGrad.addColorStop(1, 'rgba(34,211,238,0.3)');
    } else {
        barGrad.addColorStop(0, `rgba(99,102,241,${0.4 + h * 0.5})`);
        barGrad.addColorStop(1, `rgba(99,102,241,0.1)`);
    }
    ctx.fillStyle = barGrad;
    roundRect(ctx, bx2, chartBottom - bh, barW, bh, 6);
    ctx.fill();
});

ctx.font = '12px Arial';
ctx.fillStyle = '#475569';
ctx.fillText('Weekly spending overview', sx, py + 275);

// Transactions
const txns = [
    { icon: '🛒', label: 'Groceries', sub: 'Today', amount: '-$42.50', color: '#f87171' },
    { icon: '💰', label: 'Salary', sub: 'Feb 22', amount: '+$3,200', color: '#4ade80' },
    { icon: '🚗', label: 'Transport', sub: 'Feb 21', amount: '-$18.00', color: '#f87171' },
];
txns.forEach((t, i) => {
    const ty = py + 305 + i * 66;
    // Row bg
    ctx.fillStyle = 'rgba(255,255,255,0.04)';
    roundRect(ctx, sx, ty, sw, 52, 12);
    ctx.fill();
    // Icon circle
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.beginPath();
    ctx.arc(sx + 26, ty + 26, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = '16px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillText(t.icon, sx + 17, ty + 32);
    // Label
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#f1f5f9';
    ctx.fillText(t.label, sx + 52, ty + 22);
    ctx.font = '12px Arial';
    ctx.fillStyle = '#64748b';
    ctx.fillText(t.sub, sx + 52, ty + 40);
    // Amount
    ctx.font = 'bold 15px Arial';
    ctx.fillStyle = t.color;
    const aw = ctx.measureText(t.amount).width;
    ctx.fillText(t.amount, sx + sw - aw, ty + 30);
});

// Helper: rounded rectangle
function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
}

// Save
const out = path.join(__dirname, '..', 'public', 'assets', 'og-image.png');
const buf = canvas.toBuffer('image/png');
fs.writeFileSync(out, buf);
console.log('OG image saved to:', out);
