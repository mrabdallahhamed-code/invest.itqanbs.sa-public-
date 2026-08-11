@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@700&family=Tajawal:wght@400;500;700;900&display=swap');
:root{
  --green:#3D5240; --green-dark:#2A3A2E; --green-tint:#E8ECE6;
  --gold:#C9A227; --cream:#FAF8F3; --ink:#23261F; --ink-soft:#5B5F55;
  --line:#DDD8C8; --white:#FFFFFF; --danger:#B3492E; --radius:14px;
}
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Tajawal',sans-serif;background:var(--cream);color:var(--ink);line-height:1.6;}
.display{font-family:'Amiri',serif;}
header.top{background:var(--white);border-bottom:1px solid var(--line);padding:16px 28px;display:flex;align-items:center;justify-content:space-between;}
.brand{display:flex;align-items:center;gap:10px;}
.brand .ar{font-family:'Amiri',serif;font-weight:700;font-size:19px;color:var(--gold);}
.brand .en{font-size:10px;letter-spacing:2px;color:var(--green);font-weight:700;display:block;}
main{max-width:960px;margin:0 auto;padding:32px 20px 60px;}
.card{background:var(--white);border:1px solid var(--line);border-radius:var(--radius);padding:24px;margin-bottom:18px;}
h1.page-title{font-family:'Amiri',serif;font-size:28px;color:var(--green-dark);margin-bottom:20px;}
label{display:block;font-size:13.5px;font-weight:700;color:var(--ink);margin-bottom:6px;margin-top:14px;}
input,select,textarea{width:100%;padding:11px 14px;border:1px solid var(--line);border-radius:8px;font-family:inherit;font-size:14px;background:var(--white);}
input:focus,select:focus,textarea:focus{outline:none;border-color:var(--gold);}
.btn{display:inline-block;background:var(--green);color:var(--white);border:none;padding:11px 22px;border-radius:8px;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;margin-top:16px;}
.btn:hover{background:var(--green-dark);}
.btn.gold{background:var(--gold);}
.btn.ghost{background:transparent;border:1px solid var(--line);color:var(--ink);}
.msg{font-size:13.5px;padding:10px 14px;border-radius:8px;margin-top:14px;}
.msg.err{background:#FBEAE4;color:var(--danger);}
.msg.ok{background:#E4EEE3;color:var(--green);}
table{width:100%;border-collapse:collapse;background:var(--white);border-radius:var(--radius);overflow:hidden;border:1px solid var(--line);margin-top:10px;}
th,td{padding:12px 14px;text-align:right;font-size:13.5px;}
th{background:var(--green-tint);color:var(--green-dark);}
tbody tr:not(:last-child) td{border-bottom:1px solid var(--line);}
.badge{display:inline-block;font-size:11px;font-weight:700;padding:4px 10px;border-radius:999px;}
.badge.ready{background:#E4EEE3;color:var(--green);}
.badge.notready{background:#F6EAD0;color:#96721A;}
.badge.pending{background:#EFE9DC;color:var(--ink-soft);}
.tabs{display:flex;gap:6px;margin-bottom:20px;border-bottom:1px solid var(--line);}
.tabs button{background:none;border:none;padding:12px 18px;font-family:inherit;font-size:14px;font-weight:700;color:var(--ink-soft);cursor:pointer;border-bottom:3px solid transparent;}
.tabs button.active{color:var(--green-dark);border-bottom-color:var(--gold);}
