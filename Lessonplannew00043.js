<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lesson Plan Generator &#x2014; AcademixPoint</title>
<style id="axp-logo">
.axl { display: block; width: 100%; height: auto; overflow: visible; }
.axl .ln { fill: none; stroke-linejoin: miter; stroke-dasharray: 1; stroke-dashoffset: 1; animation: axlDraw 1s ease forwards; animation-delay: var(--d, 0s); }
.axl .in { stroke: #fff; }
.axl .og { stroke: #f5a11c; }
.axl .wh { stroke: #0b1a33; }
.axl .dt.in, .axl .afill { fill: #fff; }
.axl .sw { fill: #f5a11c; }
.axl .dt, .axl .afill, .axl .sw { opacity: 0; animation: axlFade .6s ease forwards; animation-delay: var(--d, 0s); }
@keyframes axlDraw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
@keyframes axlFade { from { opacity: 0; } to { opacity: 1; } }
@media (prefers-reduced-motion: reduce) {
  .axl .ln { animation: none; stroke-dashoffset: 0; }
  .axl .dt, .axl .afill, .axl .sw { animation: none; opacity: 1; }
}
#axp-sidebar .axp-logo { background: #fff; border-bottom: 1px solid var(--border, #e2e8f0); padding: 20px 22px 14px; overflow: hidden; flex-shrink: 0; }
#axp-sidebar .axl .in { stroke: #16124a; }
#axp-sidebar .axl .dt.in, #axp-sidebar .axl .afill { fill: #16124a; }
#axp-sidebar .axl .wh { stroke: #fff; }
#axp-sidebar .axp-logo .brand-full { width: 100%; max-width: 190px; }
#axp-sidebar .axp-logo .axp-logo-sub { display: block; margin-top: 10px; font-size: 8.5px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #8a6d1f; white-space: nowrap; }
#axp-nav .axp-nav-brand .axl { height: 46px; width: auto; display: block; }
@media (max-width: 480px) { #axp-nav .axp-nav-brand .axl { height: 38px; } }
.axp-tgl{width:24px;height:24px;display:block;overflow:visible;}
.axp-tgl .frame{fill:none;stroke:currentColor;stroke-width:1.8;}
.axp-tgl .pane{fill:currentColor;width:3px;opacity:.6;transition:width .28s cubic-bezier(.4,0,.2,1),opacity .28s ease;}
#axp-nav #axp-toggle-btn{width:38px;height:38px;padding:0;justify-content:center;border-radius:11px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);color:rgba(255,255,255,.9);transition:background .2s,border-color .2s,color .2s,transform .15s;}
#axp-nav #axp-toggle-btn:active{transform:scale(.93);}
#axp-sidebar.open ~ #axp-main-wrap #axp-toggle-btn{color:var(--gold,#f5c518);border-color:rgba(245,197,24,.55);}
#axp-sidebar.open ~ #axp-main-wrap #axp-toggle-btn .pane{width:6px;opacity:1;}
#axp-nav .nav-action-btn{min-height:36px;}
#axp-nav .nav-action-btn.signout{background:#e4405f;color:#fff;border:1.5px solid rgba(255,255,255,.9);border-radius:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:clamp(10px,2.6vw,12px);font-weight:700;letter-spacing:.5px;line-height:1;text-transform:uppercase;padding:0 clamp(9px,2.6vw,14px);min-height:38px;min-width:44px;gap:6px;-webkit-text-size-adjust:100%;transition:background .2s,color .2s,box-shadow .2s,transform .15s;}
#axp-nav .nav-action-btn.signout .bi{font-size:clamp(14px,3.6vw,16px);}
#axp-nav .nav-action-btn.signout .nb-lbl{display:inline;}#axp-nav .nav-action-btn.signout:focus-visible{background:#fff;color:#c4203f;outline:none;}
#axp-nav .nav-action-btn.signout:active{transform:scale(.96);}
@media (max-width:480px){#axp-nav .nav-action-btn{min-height:30px;padding-top:0;padding-bottom:0;}#axp-nav .nav-action-btn.signout{min-height:30px;min-width:36px;padding:0 9px;font-size:10px;gap:4px;}#axp-nav .nav-action-btn.signout .bi{font-size:14px;}#axp-nav .nav-action-btn.profile{padding:0 9px;font-size:10px;}#axp-nav .nav-action-btn.profile .bi{font-size:14px;}}
@media (max-width:420px){#axp-nav .nav-action-btn.profile .nb-lbl{display:none;}#axp-nav .nav-action-btn.signout{gap:5px;}}
html body #axp-float,html body #axp-float.axp-float-show{display:none!important;visibility:hidden!important;pointer-events:none!important;}
</style>
<style id="axp-icons">
.bi{display:inline-block;width:1em;height:1em;vertical-align:-.125em;line-height:1;background-color:currentColor;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-image:var(--bi-img);mask-image:var(--bi-img);font-style:normal;flex-shrink:0;}
.bi-arrow-clockwise{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 12a7 7 0 1 1-2.05-4.95'/%3E%3Cpath d='M20 4v5h-5'/%3E%3C/g%3E%3C/svg%3E")}
.bi-arrow-counterclockwise{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12a7 7 0 1 0 2.05-4.95'/%3E%3Cpath d='M4 4v5h5'/%3E%3C/g%3E%3C/svg%3E")}
.bi-arrow-repeat{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 12a8 8 0 0 1 14-5.3'/%3E%3Cpath d='M20 3v4.5h-4.5'/%3E%3Cpath d='M20 12a8 8 0 0 1-14 5.3'/%3E%3Cpath d='M4 21v-4.5h4.5'/%3E%3C/g%3E%3C/svg%3E")}
.bi-arrow-left{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 12H5M11 6l-6 6 6 6'/%3E%3C/g%3E%3C/svg%3E")}
.bi-arrow-right{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14M13 6l6 6-6 6'/%3E%3C/g%3E%3C/svg%3E")}
.bi-arrow-right-circle{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M7 12h10M13 8l4 4-4 4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-arrow-right-circle-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M7.5 12h9M13 8.5l3.5 3.5-3.5 3.5' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Ccircle cx='12' cy='12' r='10.4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-arrows-fullscreen{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5M4 4l5 5M20 4l-5 5M4 20l5-5M20 20l-5-5'/%3E%3C/g%3E%3C/svg%3E")}
.bi-chevron-down{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/g%3E%3C/svg%3E")}
.bi-chevron-up{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 15l6-6 6 6'/%3E%3C/g%3E%3C/svg%3E")}
.bi-chevron-left{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 6l-6 6 6 6'/%3E%3C/g%3E%3C/svg%3E")}
.bi-chevron-right{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 6l6 6-6 6'/%3E%3C/g%3E%3C/svg%3E")}
.bi-box-arrow-right{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5'/%3E%3Cpath d='M16 8l4 4-4 4M20 12H9'/%3E%3C/g%3E%3C/svg%3E")}
.bi-skip-forward{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 4.5v15l10-7.5z'/%3E%3Cpath d='M19 4v16'/%3E%3C/g%3E%3C/svg%3E")}
.bi-book-half{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 6c-2-1.5-5-2-8-2v14c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2z'/%3E%3Cpath d='M12 6v14'/%3E%3Cpath d='M12 6c-2-1.5-5-2-8-2v14c3 0 6 .5 8 2z' fill='%23000'/%3E%3C/g%3E%3C/svg%3E")}
.bi-bookmark-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Cpath d='M6 2h12v20l-6-5-6 5z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-bookmarks-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Cpath d='M8 2h11v19l-5.5-4.2L8 21z'/%3E%3Cpath d='M4.5 5h1.5v14.2l-1.5 1.1z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-clipboard-data{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='5' y='4' width='14' height='18' rx='2'/%3E%3Cpath d='M9 2h6v4H9z'/%3E%3Cpath d='M9 18v-3M12 18v-6M15 18v-4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-file-earmark-pdf{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z'/%3E%3Cpath d='M14 2v5h5'/%3E%3Cpath d='M8 17h8M8 13h4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-file-earmark-pdf-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M14 2v5h5' fill='none' stroke='%23000' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8.5 17h7M8.5 13h4' fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Cpath d='M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-file-earmark-richtext{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z'/%3E%3Cpath d='M14 2v5h5'/%3E%3Cpath d='M8 12h8M8 15.5h8M8 19h5'/%3E%3C/g%3E%3C/svg%3E")}
.bi-file-earmark-text-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M14 2v5h5' fill='none' stroke='%23000' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8.5 12h7M8.5 15.5h7M8.5 19h4' fill='none' stroke='%23000' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Cpath d='M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-journal-check{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z'/%3E%3Cpath d='M5 6H3M5 12H3M5 18H3'/%3E%3Cpath d='M9 11.5l2 2 4-4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-journal-richtext{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z'/%3E%3Cpath d='M5 6H3M5 12H3M5 18H3'/%3E%3Cpath d='M9 7h6M9 11h6M9 15h4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-journal-text{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z'/%3E%3Cpath d='M5 6H3M5 12H3M5 18H3'/%3E%3Cpath d='M9 7h6M9 11h6M9 15h4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-journal-x{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z'/%3E%3Cpath d='M5 6H3M5 12H3M5 18H3'/%3E%3Cpath d='M9.5 8.5l5 5M14.5 8.5l-5 5'/%3E%3C/g%3E%3C/svg%3E")}
.bi-list{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 6h16M4 12h16M4 18h16'/%3E%3C/g%3E%3C/svg%3E")}
.bi-list-check{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M11 6h9M11 12h9M11 18h9M3.5 6l1.5 1.5L8 4.5M3.5 12l1.5 1.5L8 10.5M3.5 18l1.5 1.5L8 16.5'/%3E%3C/g%3E%3C/svg%3E")}
.bi-list-ol{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 6h8M12 12h8M12 18h8'/%3E%3Cpath d='M4.6 4.6l1.5-1v5.4M3.8 12h2.4a1 1 0 0 1 .5 1.8L3.8 16h3M3.8 18.3h2.6l-1.3 1.5a1.2 1.2 0 1 1-1.3 2' stroke-width='1.4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-folder-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Cpath d='M3 5a2 2 0 0 1 2-2h4.2a2 2 0 0 1 1.5.7L12 5h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-folder2-open{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 19V6a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v2'/%3E%3Cpath d='M2.5 19.5l2.7-8.4a1.5 1.5 0 0 1 1.4-1.1H21a1 1 0 0 1 1 1.3l-2.4 7.5a1.5 1.5 0 0 1-1.4 1H2.5z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-floppy{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 3h11l4 4v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z'/%3E%3Cpath d='M8 3v5h7V3'/%3E%3Crect x='7' y='14' width='10' height='7'/%3E%3C/g%3E%3C/svg%3E")}
.bi-download{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 4v11M7 11l5 5 5-5M4 20h16'/%3E%3C/g%3E%3C/svg%3E")}
.bi-cloud-upload{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6.5 19a4.5 4.5 0 0 1-.6-8.96 6 6 0 0 1 11.6.96A4 4 0 0 1 17.5 19z'/%3E%3Cpath d='M12 17.5V12M9.5 14.5L12 12l2.5 2.5'/%3E%3C/g%3E%3C/svg%3E")}
.bi-cloud-download{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6.5 19a4.5 4.5 0 0 1-.6-8.96 6 6 0 0 1 11.6.96A4 4 0 0 1 17.5 19z'/%3E%3Cpath d='M12 12v5.5M9.5 15l2.5 2.5 2.5-2.5'/%3E%3C/g%3E%3C/svg%3E")}
.bi-cloud-check{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6.5 19a4.5 4.5 0 0 1-.6-8.96 6 6 0 0 1 11.6.96A4 4 0 0 1 17.5 19z'/%3E%3Cpath d='M9 14.5l2 2 4-4.5'/%3E%3C/g%3E%3C/svg%3E")}
.bi-cloud-check-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M9 14.5l2 2 4-4.5' fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Cpath d='M6.5 19a4.5 4.5 0 0 1-.6-8.96 6 6 0 0 1 11.6.96A4 4 0 0 1 17.5 19z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-calendar3{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='5' width='18' height='16' rx='2'/%3E%3Cpath d='M3 10h18M8 3v4M16 3v4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-calendar-check{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='5' width='18' height='16' rx='2'/%3E%3Cpath d='M3 10h18M8 3v4M16 3v4'/%3E%3Cpath d='M9 15.5l2 2 4-4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-calendar-x{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='5' width='18' height='16' rx='2'/%3E%3Cpath d='M3 10h18M8 3v4M16 3v4'/%3E%3Cpath d='M10 14l4 4M14 14l-4 4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-calendar-x-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M3 9.5h18' fill='none' stroke='%23000' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10 13.5l4 4M14 13.5l-4 4' fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Cpath d='M7 2h2v2h6V2h2v2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-clock{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 6.5V12l3.5 2'/%3E%3C/g%3E%3C/svg%3E")}
.bi-clock-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M12 6.5V12l3.5 2' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Ccircle cx='12' cy='12' r='10.4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-clock-history{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 12a9 9 0 1 0 3-6.7L3 8'/%3E%3Cpath d='M3 3v5h5'/%3E%3Cpath d='M12 7v5l3 2'/%3E%3C/g%3E%3C/svg%3E")}
.bi-hourglass-split{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 2h12M6 22h12M7 2v4.5a5 5 0 0 0 2.5 4.3L12 12l-2.5 1.2A5 5 0 0 0 7 17.5V22M17 2v4.5a5 5 0 0 1-2.5 4.3L12 12l2.5 1.2A5 5 0 0 1 17 17.5V22'/%3E%3C/g%3E%3C/svg%3E")}
.bi-check-circle{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M7.5 12.5l3 3 6-6.5'/%3E%3C/g%3E%3C/svg%3E")}
.bi-check-circle-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M7.5 12.5l3 3 6-6.5' fill='none' stroke='%23000' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Ccircle cx='12' cy='12' r='10.4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-check2-circle{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 11.1V12a9 9 0 1 1-5.3-8.2'/%3E%3Cpath d='M8.5 11.5l3.5 3.5L21 6'/%3E%3C/g%3E%3C/svg%3E")}
.bi-check-lg{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 12.5l5 5L20 6.5'/%3E%3C/g%3E%3C/svg%3E")}
.bi-x{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 6l12 12M18 6L6 18'/%3E%3C/g%3E%3C/svg%3E")}
.bi-x-lg{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 5l14 14M19 5L5 19'/%3E%3C/g%3E%3C/svg%3E")}
.bi-x-circle{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M8.5 8.5l7 7M15.5 8.5l-7 7'/%3E%3C/g%3E%3C/svg%3E")}
.bi-x-circle-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M8.5 8.5l7 7M15.5 8.5l-7 7' fill='none' stroke='%23000' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Ccircle cx='12' cy='12' r='10.4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-plus-lg{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 4v16M4 12h16'/%3E%3C/g%3E%3C/svg%3E")}
.bi-plus-circle{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 7.5v9M7.5 12h9'/%3E%3C/g%3E%3C/svg%3E")}
.bi-dash-circle{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M7.5 12h9'/%3E%3C/g%3E%3C/svg%3E")}
.bi-info-circle{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 11v6'/%3E%3C/g%3E%3Ccircle cx='12' cy='7.6' r='1.3' fill='%23000' stroke='none'/%3E%3C/svg%3E")}
.bi-info-circle-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M12 11v6' fill='none' stroke='%23000' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='12' cy='7.6' r='1.4' fill='%23000'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Ccircle cx='12' cy='12' r='10.4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-exclamation-circle{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 7v6.5'/%3E%3C/g%3E%3Ccircle cx='12' cy='16.8' r='1.3' fill='%23000' stroke='none'/%3E%3C/svg%3E")}
.bi-exclamation-circle-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M12 7v6.5' fill='none' stroke='%23000' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='12' cy='16.8' r='1.4' fill='%23000'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Ccircle cx='12' cy='12' r='10.4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-exclamation-triangle{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10.3 3.9L1.9 18.5A2 2 0 0 0 3.6 21.5h16.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z'/%3E%3Cpath d='M12 9.5v5'/%3E%3C/g%3E%3Ccircle cx='12' cy='17.6' r='1.3' fill='%23000' stroke='none'/%3E%3C/svg%3E")}
.bi-exclamation-triangle-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M12 9.5v5' fill='none' stroke='%23000' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='12' cy='17.6' r='1.4' fill='%23000'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Cpath d='M10.3 3.9L1.9 18.5A2 2 0 0 0 3.6 21.5h16.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-patch-check-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M8 12.3l2.8 2.8L16 9.5' fill='none' stroke='%23000' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Cpath d='M12.00 1.60L15.33 3.96L19.35 4.65L20.04 8.67L22.40 12.00L20.04 15.33L19.35 19.35L15.33 20.04L12.00 22.40L8.67 20.04L4.65 19.35L3.96 15.33L1.60 12.00L3.96 8.67L4.65 4.65L8.67 3.96z' stroke-linejoin='round'/%3E%3C/g%3E%3C/svg%3E")}
.bi-patch-question{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath fill='none' d='M12.00 1.60L15.33 3.96L19.35 4.65L20.04 8.67L22.40 12.00L20.04 15.33L19.35 19.35L15.33 20.04L12.00 22.40L8.67 20.04L4.65 19.35L3.96 15.33L1.60 12.00L3.96 8.67L4.65 4.65L8.67 3.96z' stroke-linejoin='round'/%3E%3C/g%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.6 9.8a2.5 2.5 0 1 1 3.6 2.2c-.8.5-1.2 1-1.2 1.8'/%3E%3C/g%3E%3Ccircle cx='12' cy='16.6' r='1.2' fill='%23000' stroke='none'/%3E%3C/svg%3E")}
.bi-patch-question-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M9.6 9.8a2.5 2.5 0 1 1 3.6 2.2c-.8.5-1.2 1-1.2 1.8' fill='none' stroke='%23000' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='12' cy='16.7' r='1.2' fill='%23000'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Cpath d='M12.00 1.60L15.33 3.96L19.35 4.65L20.04 8.67L22.40 12.00L20.04 15.33L19.35 19.35L15.33 20.04L12.00 22.40L8.67 20.04L4.65 19.35L3.96 15.33L1.60 12.00L3.96 8.67L4.65 4.65L8.67 3.96z' stroke-linejoin='round'/%3E%3C/g%3E%3C/svg%3E")}
.bi-shield-check{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2.5l8 3v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10v-6z'/%3E%3Cpath d='M8.3 12l2.7 2.7 5-5.4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-shield-check-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M8.3 12l2.7 2.7 5-5.4' fill='none' stroke='%23000' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Cpath d='M12 2.5l8 3v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10v-6z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-shield-fill-check{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M8.3 12l2.7 2.7 5-5.4' fill='none' stroke='%23000' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Cpath d='M12 2.5l8 3v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10v-6z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-shield-exclamation{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2.5l8 3v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10v-6z'/%3E%3Cpath d='M12 8v4.5'/%3E%3C/g%3E%3Ccircle cx='12' cy='15.8' r='1.2' fill='%23000' stroke='none'/%3E%3C/svg%3E")}
.bi-shield-exclamation-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M12 8v4.5' fill='none' stroke='%23000' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='12' cy='15.8' r='1.3' fill='%23000'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Cpath d='M12 2.5l8 3v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10v-6z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-shield-lock-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Ccircle cx='12' cy='10.8' r='1.9' fill='%23000'/%3E%3Cpath d='M12 12v3.4' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Cpath d='M12 2.5l8 3v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10v-6z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-lock-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Ccircle cx='12' cy='15' r='1.7' fill='%23000'/%3E%3Cpath d='M12 15.5v3' fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Crect x='4' y='10' width='16' height='12' rx='2'/%3E%3C/g%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 10V7a4 4 0 0 1 8 0v3'/%3E%3C/g%3E%3C/svg%3E")}
.bi-unlock-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Ccircle cx='12' cy='15' r='1.7' fill='%23000'/%3E%3Cpath d='M12 15.5v3' fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Crect x='4' y='10' width='16' height='12' rx='2'/%3E%3C/g%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 10V7a4 4 0 0 1 7.6-1.8'/%3E%3C/g%3E%3C/svg%3E")}
.bi-person-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Ccircle cx='12' cy='7.5' r='4.5'/%3E%3Cpath d='M3.5 22a8.5 8 0 0 1 17 0z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-person-circle{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3Cpath d='M5.8 19a7 7 0 0 1 12.4 0'/%3E%3C/g%3E%3C/svg%3E")}
.bi-person-plus-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Ccircle cx='9' cy='7.5' r='4.2'/%3E%3Cpath d='M1.5 21a7.5 7 0 0 1 15 0z'/%3E%3Cpath d='M19 9v3h-3v2h3v3h2v-3h3v-2h-3V9z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-people-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Ccircle cx='9' cy='8' r='3.6'/%3E%3Cpath d='M2 21a7 6.5 0 0 1 14 0z'/%3E%3Ccircle cx='17.2' cy='9' r='2.9'/%3E%3Cpath d='M17.2 14a5 5 0 0 1 4.8 6.6h-4.4a9 9 0 0 0-2.2-4.8 5 5 0 0 1 1.8-1.8z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-mortarboard-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Cpath d='M12 3L1 9l11 6 9-4.9V16h2V9z'/%3E%3Cpath d='M5.5 13.3v3.7c0 1.5 3 3 6.5 3s6.5-1.5 6.5-3v-3.7L12 17z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-headset{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 15v-3a8 8 0 0 1 16 0v3'/%3E%3Crect x='3' y='14' width='4' height='6' rx='1.5'/%3E%3Crect x='17' y='14' width='4' height='6' rx='1.5'/%3E%3Cpath d='M19 20v.5a2.5 2.5 0 0 1-2.5 2.5H13'/%3E%3C/g%3E%3C/svg%3E")}
.bi-telephone-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Cpath d='M20.5 16.7l-3.5-1.6a1.5 1.5 0 0 0-1.8.4l-1.3 1.6a12 12 0 0 1-5.6-5.6l1.6-1.3a1.5 1.5 0 0 0 .4-1.8L8.7 4.9A1.5 1.5 0 0 0 7 4L4 4.7A1.5 1.5 0 0 0 2.9 6.3C3.7 15 9 20.3 17.7 21.1a1.5 1.5 0 0 0 1.6-1.1l.7-3A1.5 1.5 0 0 0 20.5 16.7z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-envelope-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M2.8 6.5l9.2 7 9.2-7' fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Crect x='2' y='4' width='20' height='16' rx='2'/%3E%3C/g%3E%3C/svg%3E")}
.bi-whatsapp{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 21l1.6-4.8A9 9 0 1 1 8 19.5z'/%3E%3C/g%3E%3Cpath transform='translate(6.4 6.2) scale(.5)' d='M20.5 16.7l-3.5-1.6a1.5 1.5 0 0 0-1.8.4l-1.3 1.6a12 12 0 0 1-5.6-5.6l1.6-1.3a1.5 1.5 0 0 0 .4-1.8L8.7 4.9A1.5 1.5 0 0 0 7 4L4 4.7A1.5 1.5 0 0 0 2.9 6.3C3.7 15 9 20.3 17.7 21.1a1.5 1.5 0 0 0 1.6-1.1l.7-3A1.5 1.5 0 0 0 20.5 16.7z' fill='%23000'/%3E%3C/svg%3E")}
.bi-google{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6.8A9 9 0 1 0 21 12h-8.5'/%3E%3C/g%3E%3C/svg%3E")}
.bi-send-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Cpath d='M22 2L2 9.5l7.2 3.3L12.5 21z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-chat-left-text{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7l-4 4z'/%3E%3Cpath d='M8 8h8M8 12h5'/%3E%3C/g%3E%3C/svg%3E")}
.bi-chat-left-quote-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Ccircle cx='9' cy='8.8' r='1.7' fill='%23000'/%3E%3Ccircle cx='14.8' cy='8.8' r='1.7' fill='%23000'/%3E%3Cpath d='M9 9.5l-.9 2.8' fill='none' stroke='%23000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14.8 9.5l-.9 2.8' fill='none' stroke='%23000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Cpath d='M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7l-4 4z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-megaphone{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 10v4a1 1 0 0 0 1 1h3l9 5V4L7 9H4a1 1 0 0 0-1 1z'/%3E%3Cpath d='M19.5 9a4 4 0 0 1 0 6'/%3E%3Cpath d='M7 15l1.2 5h2.3'/%3E%3C/g%3E%3C/svg%3E")}
.bi-megaphone-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Cpath d='M3 10v4a1 1 0 0 0 1 1h3l9 5V4L7 9H4a1 1 0 0 0-1 1z'/%3E%3Cpath d='M7 15.5l1.2 4.5h2.3L9.3 16.5z'/%3E%3C/g%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19.5 9a4 4 0 0 1 0 6'/%3E%3C/g%3E%3C/svg%3E")}
.bi-gift-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M12 6v15' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Crect x='3' y='9' width='18' height='12' rx='1'/%3E%3Crect x='2' y='6' width='20' height='4.2' rx='1'/%3E%3Cpath d='M12 6C9 6 7 3.5 9 2.7S12 4 12 6zM12 6c3 0 5-2.5 3-3.3S12 4 12 6z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-translate{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h11M8.5 3v2M5 5c.5 4 3.5 7 7 8.5M12.5 5c-.5 4-3.5 7-8 9'/%3E%3Cpath d='M12.5 21l4.5-11 4.5 11M14 17.5h6'/%3E%3C/g%3E%3C/svg%3E")}
.bi-globe{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M2 12h20'/%3E%3Cellipse cx='12' cy='12' rx='4.5' ry='10'/%3E%3C/g%3E%3C/svg%3E")}
.bi-building{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 21V3h10v18M15 9h4v12M3 21h18'/%3E%3Cpath d='M8.5 7h1M11.5 7h1M8.5 11h1M11.5 11h1M8.5 15h1M11.5 15h1'/%3E%3C/g%3E%3C/svg%3E")}
.bi-gear-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Ccircle cx='12' cy='12' r='3' fill='%23000'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Ccircle cx='12' cy='12' r='7'/%3E%3Crect x='10.3' y='1.5' width='3.4' height='5' rx='.8' transform='rotate(0 12 12)'/%3E%3Crect x='10.3' y='1.5' width='3.4' height='5' rx='.8' transform='rotate(45 12 12)'/%3E%3Crect x='10.3' y='1.5' width='3.4' height='5' rx='.8' transform='rotate(90 12 12)'/%3E%3Crect x='10.3' y='1.5' width='3.4' height='5' rx='.8' transform='rotate(135 12 12)'/%3E%3Crect x='10.3' y='1.5' width='3.4' height='5' rx='.8' transform='rotate(180 12 12)'/%3E%3Crect x='10.3' y='1.5' width='3.4' height='5' rx='.8' transform='rotate(225 12 12)'/%3E%3Crect x='10.3' y='1.5' width='3.4' height='5' rx='.8' transform='rotate(270 12 12)'/%3E%3Crect x='10.3' y='1.5' width='3.4' height='5' rx='.8' transform='rotate(315 12 12)'/%3E%3C/g%3E%3C/svg%3E")}
.bi-tools{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 6.5a5 5 0 0 1-6.7 4.7L5.5 20a2.1 2.1 0 0 1-3-3l8.8-8.8A5 5 0 0 1 17.5 2.2L14 5.7l1.6 2.7 2.7 1.6z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-scissors{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='6' cy='6' r='3'/%3E%3Ccircle cx='6' cy='18' r='3'/%3E%3Cpath d='M8.2 8.2L20 20M8.2 15.8L20 4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-trash3{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M5.5 6l1 14a1.5 1.5 0 0 0 1.5 1.4h8a1.5 1.5 0 0 0 1.5-1.4l1-14M10 11v6M14 11v6'/%3E%3C/g%3E%3C/svg%3E")}
.bi-search{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='10.5' cy='10.5' r='7'/%3E%3Cpath d='M16 16l5 5'/%3E%3C/g%3E%3C/svg%3E")}
.bi-pencil-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Cpath d='M16.5 3.2a1.9 1.9 0 0 1 2.7 0l1.6 1.6a1.9 1.9 0 0 1 0 2.7L8.4 19.9 2.5 21.5l1.6-5.9z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-pencil-square{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'/%3E%3Cpath d='M17.5 3.5a2 2 0 0 1 3 3L12 15l-4 1 1-4z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-eye{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/g%3E%3C/svg%3E")}
.bi-eye-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Ccircle cx='12' cy='12' r='3.2' fill='%23000'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Cpath d='M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-eye-slash{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M4 4l16 16'/%3E%3C/g%3E%3C/svg%3E")}
.bi-lightning-charge-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Cpath d='M13.5 2L5 13.5h6l-1.5 8.5L19 10.5h-6.2z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-star-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Cpath d='M12.00 2.00L14.59 8.94L21.99 9.26L16.18 13.86L18.17 20.99L12.00 16.90L5.83 20.99L7.82 13.86L2.01 9.26L9.41 8.94z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-stars{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Cpath d='M10 6Q11.44 12.56 18 14Q11.44 15.44 10 22Q8.56 15.44 2 14Q8.56 12.56 10 6z'/%3E%3Cpath d='M19 1.9Q19.648 4.852 22.6 5.5Q19.648 6.148 19 9.1Q18.352 6.148 15.4 5.5Q18.352 4.852 19 1.9z'/%3E%3Cpath d='M19 15.7Q19.504 17.996 21.8 18.5Q19.504 19.004 19 21.3Q18.496 19.004 16.2 18.5Q18.496 17.996 19 15.7z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-magic{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 21l11-11'/%3E%3C/g%3E%3Cg fill='%23000'%3E%3Cpath d='M16.5 2.5Q17.4 6.6 21.5 7.5Q17.4 8.4 16.5 12.5Q15.6 8.4 11.5 7.5Q15.6 6.6 16.5 2.5z'/%3E%3Cpath d='M6 2.4Q6.468 4.532 8.6 5Q6.468 5.468 6 7.6Q5.532 5.468 3.4 5Q5.532 4.532 6 2.4z'/%3E%3Cpath d='M20 12.8Q20.396 14.604 22.2 15Q20.396 15.396 20 17.2Q19.604 15.396 17.8 15Q19.604 14.604 20 12.8z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-play-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Cpath d='M7 4.5v15a1 1 0 0 0 1.5.9l12-7.5a1 1 0 0 0 0-1.8L8.5 3.6A1 1 0 0 0 7 4.5z'/%3E%3C/g%3E%3C/svg%3E")}
.bi-play-circle-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Cpath d='M10 8l6 4-6 4z' fill='%23000'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Ccircle cx='12' cy='12' r='10.4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-pause-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Crect x='6' y='4' width='4.2' height='16' rx='1'/%3E%3Crect x='13.8' y='4' width='4.2' height='16' rx='1'/%3E%3C/g%3E%3C/svg%3E")}
.bi-pause-circle-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cmask id='m'%3E%3Crect width='24' height='24' fill='%23fff'/%3E%3Crect x='8.2' y='8' width='2.6' height='8' rx='.6' fill='%23000'/%3E%3Crect x='13.2' y='8' width='2.6' height='8' rx='.6' fill='%23000'/%3E%3C/mask%3E%3Cg fill='%23000' mask='url(%23m)'%3E%3Ccircle cx='12' cy='12' r='10.4'/%3E%3C/g%3E%3C/svg%3E")}
.bi-emoji-smile{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M7.5 14a5 5 0 0 0 9 0'/%3E%3C/g%3E%3Ccircle cx='9' cy='9.5' r='1.3' fill='%23000' stroke='none'/%3E%3Ccircle cx='15' cy='9.5' r='1.3' fill='%23000' stroke='none'/%3E%3C/svg%3E")}
.bi-key-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='8' cy='15' r='4.5'/%3E%3Cpath d='M11.5 11.8L21 2.5M17 6.5l3 3M14 9.5l2 2'/%3E%3C/g%3E%3C/svg%3E")}
.bi-wallet-fill{--bi-img:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Cpath d='M3 7a2 2 0 0 1 2-2h13v3H5a2 2 0 0 0-2 2zM3 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/%3E%3C/g%3E%3C/svg%3E")}
.bi[style*='display:block'],.sow-state .bi{margin-left:auto;margin-right:auto;}
.axp-flag{display:inline-block;width:1.35em;height:.9em;vertical-align:-.12em;border:1px solid rgba(0,0,0,.18);background-size:100% 100%;background-repeat:no-repeat;flex-shrink:0;}
.axp-flag-gb{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='40' fill='%23012169'/%3E%3Cpath d='M0 0L60 40M60 0L0 40' stroke='%23fff' stroke-width='8'/%3E%3Cpath d='M0 0L60 40M60 0L0 40' stroke='%23C8102E' stroke-width='3'/%3E%3Cpath d='M30 0V40M0 20H60' stroke='%23fff' stroke-width='13'/%3E%3Cpath d='M30 0V40M0 20H60' stroke='%23C8102E' stroke-width='7'/%3E%3C/svg%3E");}
.axp-flag-tz{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect width='60' height='40' fill='%231EB53A'/%3E%3Cpath d='M0 40H60V0z' fill='%2300A3DD'/%3E%3Cpath d='M0 40L60 0' stroke='%23FCD116' stroke-width='15'/%3E%3Cpath d='M0 40L60 0' stroke='%23000' stroke-width='9'/%3E%3C/svg%3E");}
</style>
<script>
window.axpIconText=function(el,icon,text,style){if(!el)return;el.textContent='';var i=document.createElement('i');i.className='bi bi-'+icon;if(style)i.style.cssText=style;el.appendChild(i);el.appendChild(document.createTextNode(' '+(text==null?'':text)));};
</script>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap">
<script src="https://accounts.google.com/gsi/client" async defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js"></script>

<script>
(function () {
  var S = 10;
  var PT = 0.352778 * S;
  function n(v) { return (Math.round(v * S * 100) / 100); }
  function xesc(t) {
    return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function col(a) {
    a = Array.prototype.slice.call(a);
    if (a.length >= 3) return 'rgb(' + a[0] + ',' + a[1] + ',' + a[2] + ')';
    if (a.length === 1 && typeof a[0] === 'number') return 'rgb(' + a[0] + ',' + a[0] + ',' + a[0] + ')';
    if (a.length === 1 && typeof a[0] === 'string') return a[0];
    return 'rgb(0,0,0)';
  }

  function AxpSvgDoc(JsPDF) {
    var inner = new JsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    var pages = [], cur = null;
    var st = { fill: 'rgb(255,255,255)', draw: 'rgb(0,0,0)', text: 'rgb(0,0,0)', lw: 0.2, bold: false, size: 12 };
    var watermark = '';
    function newPage() { cur = []; pages.push(cur); }
    newPage();
    var api = {
      setFillColor: function () { st.fill = col(arguments); inner.setFillColor.apply(inner, arguments); return api; },
      setDrawColor: function () { st.draw = col(arguments); inner.setDrawColor.apply(inner, arguments); return api; },
      setTextColor: function () { st.text = col(arguments); inner.setTextColor.apply(inner, arguments); return api; },
      setLineWidth: function (w) { st.lw = w; inner.setLineWidth(w); return api; },
      setFont: function (name, style) { st.bold = /bold/i.test(style || ''); inner.setFont(name, style); return api; },
      setFontSize: function (sz) { st.size = sz; inner.setFontSize(sz); return api; },
      getTextWidth: function (t) { return inner.getTextWidth(t); },
      splitTextToSize: function (t, w) { return inner.splitTextToSize(t, w); },
      rect: function (x, y, w, h, style) {
        style = String(style || 'S').toUpperCase();
        var fill = style.indexOf('F') !== -1, stroke = style.indexOf('D') !== -1 || style.indexOf('S') !== -1;
        cur.push('<rect x="' + n(x) + '" y="' + n(y) + '" width="' + n(w) + '" height="' + n(h) + '" fill="' +
          (fill ? st.fill : 'none') + '"' + (stroke ? ' stroke="' + st.draw + '" stroke-width="' + n(st.lw) + '"' : '') + '/>');
        return api;
      },
      line: function (x1, y1, x2, y2) {
        cur.push('<line x1="' + n(x1) + '" y1="' + n(y1) + '" x2="' + n(x2) + '" y2="' + n(y2) +
          '" stroke="' + st.draw + '" stroke-width="' + n(st.lw) + '"/>');
        return api;
      },
      text: function (t, x, y, o) {
        if (t === null || t === undefined || t === '') return api;
        var lines = Array.isArray(t) ? t : [t];
        var anchor = (o && o.align === 'center') ? 'middle' : (o && o.align === 'right') ? 'end' : 'start';
        lines.forEach(function (ln, i) {
          ln = String(ln);
          if (!ln) return;
          cur.push('<text x="' + n(x) + '" y="' + n(y + i * st.size * 0.352778 * 1.15) + '" font-size="' + (Math.round(st.size * PT * 100) / 100) +
            '"' + (st.bold ? ' font-weight="bold"' : '') + ' fill="' + st.text + '" text-anchor="' + anchor +
            '" xml:space="preserve" style="white-space:pre">' + xesc(ln) + '</text>');
        });
        return api;
      },
      addPage: function () { inner.addPage.apply(inner, arguments); newPage(); return api; },
      save: function () {  },
      setWatermark: function (w) { watermark = w || ''; return api; },
      pageCount: function () { return pages.length; },
      toHTML: function () {
        var out = pages.map(function (items, i) {
          return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2970 2100" role="img" aria-label="Page ' + (i + 1) + ' of ' + pages.length + '" ' +
            'style="display:block;width:100%;min-width:620px;max-width:1200px;height:auto;margin:0 auto 14px;background:#fff;' +
            'font-family:Helvetica,Arial,\'Liberation Sans\',sans-serif;text-rendering:geometricPrecision;">' +
            '<rect x="0" y="0" width="2970" height="2100" fill="#ffffff"/>' + items.join('') +
            (watermark ? '<text x="1485" y="1210" font-size="330" font-weight="bold" fill="rgba(200,30,30,0.10)" text-anchor="middle" transform="rotate(-28 1485 1050)" style="pointer-events:none;user-select:none;-webkit-user-select:none;">' + xesc(watermark) + '</text>' : '') +
            '</svg>';
        }).join('');
        return '<div class="axp-pdf-preview" style="background:#e8e8e8;padding:10px 6px;"><div style="overflow-x:auto;">' + out + '</div></div>';
      }
    };
    return api;
  }
  window.AxpSvgDoc = AxpSvgDoc;


  window.axpSupHtml = function (h) { return String(h).replace(/(\d)(st|nd|rd|th)\b/g, '$1<sup style="text-transform:lowercase;">$2</sup>'); };
  window.axpTextSup = function (doc, txt, x, y, fs) {
    txt = String(txt == null ? '' : txt);
    var re = /(\d)(st|nd|rd|th)\b/g, m, last = 0, parts = [];
    while ((m = re.exec(txt))) { parts.push([txt.slice(last, m.index + 1), 0]); parts.push([m[2], 1]); last = m.index + 1 + m[2].length; }
    if (!parts.length) { doc.text(txt, x, y); return; }
    if (last < txt.length) parts.push([txt.slice(last), 0]);
    var cx = x, small = fs * 0.6, rise = fs * 0.3528 * 0.38;
    parts.forEach(function (p) {
      if (!p[0]) return;
      if (p[1]) { doc.setFontSize(small); doc.text(p[0], cx, y - rise); cx += doc.getTextWidth(p[0]); doc.setFontSize(fs); }
      else { doc.setFontSize(fs); doc.text(p[0], cx, y); cx += doc.getTextWidth(p[0]); }
    });
    doc.setFontSize(fs);
  };

  window.axpWithJsPdf = function (cb) {
    function get() { return (window.jspdf && window.jspdf.jsPDF) ? window.jspdf.jsPDF : (window.jsPDF || null); }
    var J = get();
    if (J) { cb(J); return; }
    var sc = document.createElement('script');
    sc.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    sc.onload = function () { cb(get()); };
    sc.onerror = function () { cb(null); };
    document.head.appendChild(sc);
  };
})();

(function () {
  var topics = [
    ['Introduction to Biology', [
      ['Describe the scope of biology', 'Branches of Biology', ['Discuss the branches of biology in groups', 'Make a table of the branches and what each studies']],
      ['Explain the importance of studying biology', 'Importance of Biology', ['Identify careers related to biology']]]],
    ['Safety in the Laboratory', [
      ['Observe safety rules in the laboratory', 'Laboratory Rules', ['State the rules to follow in a biology laboratory', 'Demonstrate the use of first aid kit items']],
      ['Use laboratory apparatus correctly', 'Laboratory Apparatus', ['Identify common laboratory apparatus and their uses']]]],
    ['Cell Structure', [
      ['Describe the structure of a cell', 'Plant and Animal Cells', ['Prepare and observe temporary slides of plant cells', 'Draw and label an animal cell', 'Compare plant and animal cells']],
      ['Explain functions of cell organelles', 'Cell Organelles', ['Match organelles with their functions', 'Discuss specialised cells and their adaptations']]]],
    ['Transport in Living Organisms', [
      ['Explain diffusion and osmosis', 'Diffusion', ['Perform an experiment to show diffusion in liquids']],
      ['Explain diffusion and osmosis', 'Osmosis', ['Investigate osmosis using potato strips', 'Discuss importance of osmosis to plants and animals']],
      ['Describe transport in plants', 'Transpiration', ['Demonstrate transpiration using a potted plant']]]],
    ['Nutrition', [
      ['Identify classes of food', 'Classes of Food', ['Test for starch, reducing sugars and proteins', 'Plan a balanced diet for a school child']],
      ['Describe the human digestive system', 'The Digestive System', ['Label the parts of the human alimentary canal', 'Explain the role of enzymes in digestion']]]],
    ['Respiration', [
      ['Explain the process of respiration', 'Aerobic Respiration', ['Show that carbon dioxide is released during respiration']],
      ['Explain the process of respiration', 'Anaerobic Respiration', ['Investigate fermentation by yeast']]]],
    ['Reproduction', [
      ['Describe reproduction in flowering plants', 'Parts of a Flower', ['Dissect and draw a flower', 'Describe pollination and fertilisation']],
      ['Describe human reproduction', 'The Reproductive System', ['Label the male and female reproductive systems']]]]
  ];
  var refs = ['Biology for Secondary Schools Form Two, pg. '];
  var methods = ['Discussion, Group work', 'Demonstration', 'Experiment', 'Brainstorming', 'Question and answer', 'Observation'];
  var resources = ['Textbooks, Charts', 'Microscope, Slides', 'Specimens', 'Chalkboard, Charts', 'Laboratory apparatus', 'Pictures, Models'];
  var tools = ['Oral questions', 'Exercise', 'Practical test', 'Quiz', 'Observation', 'Written test'];
  var rows = [], k = 0, pg = 2;
  topics.forEach(function (t) {
    t[1].forEach(function (c) {
      c[2].forEach(function (act) {
        rows.push({
          mainComp: t[0], specComp: c[0], mainActivity: c[1], specActivity: act, periods: '2',
          tlMethods: methods[k % methods.length], tlResources: resources[(k + 2) % resources.length],
          assessmentTool: tools[(k + 1) % tools.length], reference: refs[0] + pg + '-' + (pg + 5), remarks: ''
        });
        k++;
      });
      pg += 6;
    });
  });
  window.AXP_SAMPLE_SOW_ROWS = rows;
})();
</script>
<style>
.header,header,#header {display : none;}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --bg:#f4f5ff;
  --surface:#ffffff;
  --surface2:#eef0ff;
  --surface3:#e4e6ff;
  --border:#d8daff;
  --border2:#b8badd;
  --accent:#4A3AFF;
  --accent-dim:#3429CC;
  --navy:#0d1b2e;
  --green:#1e9e52;
  --red:#e4405f;
  --gold:#F5C518;
  --text:#1a1a2e;
  --text2:#3a3a5c;
  --text3:#7a7a9a;
  --font:'Space Grotesk',sans-serif;
  --mono:'JetBrains Mono',monospace;
  --sidebar-w:240px;
  --nav-h:52px;
  --content-max:760px;
  --tr:0.2s ease;
}
html,body{
  height:100%;
  height:100dvh;
  background:var(--bg);
  color:var(--text);
  font-family:var(--font);
  font-size:14px;
  line-height:1.5;
  overflow:hidden;
  -webkit-text-size-adjust:100%;
}
::-webkit-scrollbar{width:4px;height:4px;}
::-webkit-scrollbar-track{background:var(--surface2);}
::-webkit-scrollbar-thumb{background:var(--border2);}
#footer,footer,.footer{display:none!important;}

#axp-app{
  display:flex;
  height:100vh;
  height:100dvh;
  width:100%;
  overflow:hidden;
}

#axp-sidebar{
  width:var(--sidebar-w);
  min-width:var(--sidebar-w);
  flex-shrink:0;
  background:var(--surface);
  border-right:2px solid var(--accent);
  display:flex;
  flex-direction:column;
  z-index:300;
  overflow-y:auto;
  overflow-x:hidden;
  transition:transform .25s ease;
  height:100vh;
  height:100dvh;
  -webkit-overflow-scrolling:touch;
  overscroll-behavior:contain;
}

#axp-main-wrap{
  flex:1;
  display:flex;
  flex-direction:column;
  min-width:0;
  height:100vh;
  height:100dvh;
  overflow:hidden;
}

#axp-nav{
  height:var(--nav-h);
  min-height:var(--nav-h);
  flex-shrink:0;
  background:var(--navy);
  border-bottom:2px solid var(--accent);
  display:flex;
  align-items:center;
  padding:0 16px;
  gap:10px;
  z-index:100;
  width:100%;
}
#axp-toggle-btn{
  background:transparent;border:none;color:rgba(255,255,255,.85);
  cursor:pointer;font-size:20px;padding:4px 6px;
  display:flex;align-items:center;line-height:1;
}
.axp-nav-brand{display:flex;align-items:center;gap:8px;text-decoration:none;flex-shrink:0;}
.axp-nav-brand-text{font-size:14px;font-weight:800;letter-spacing:1.5px;line-height:1;}
.axp-nav-brand-text span:first-child{color:#7eb8ff;}
.axp-nav-brand-text span:last-child{color:var(--gold);}
.axp-nav-spacer{flex:1;}
.nav-pill{display:flex;align-items:center;gap:5px;padding:3px 10px;border-radius:20px;font-size:10px;font-weight:600;flex-shrink:0;white-space:nowrap;}
.nav-pill.guest{background:rgba(255,255,255,.1);color:rgba(255,255,255,.6);border:1px solid rgba(255,255,255,.2);}
.nav-pill.active-pill{background:rgba(30,158,82,.2);color:#6fd99a;border:1px solid rgba(30,158,82,.4);}
.nav-pill.pending-pill{background:rgba(245,197,24,.15);color:var(--gold);border:1px solid rgba(245,197,24,.3);}
.status-user-mini-avatar{width:22px;height:22px;border-radius:50%;object-fit:cover;border:1.5px solid var(--accent);}
#statusActions{display:flex;align-items:center;gap:6px;}
.nav-action-btn{border:none;padding:5px 11px;font-size:11px;font-weight:700;cursor:pointer;letter-spacing:.3px;text-transform:uppercase;display:flex;align-items:center;gap:5px;font-family:var(--font);white-space:nowrap;}
.nav-action-btn.signin{background:var(--accent);color:#fff;}
.nav-action-btn.profile{background:rgba(255,255,255,.1);color:rgba(255,255,255,.8);border:1px solid rgba(255,255,255,.2);}
.nav-action-btn.signout{background:transparent;color:rgba(255,255,255,.45);border:1px solid rgba(255,255,255,.18);font-size:10px;padding:4px 8px;}

#axp-content{
  flex:1;
  min-height:0;
  overflow-y:auto;
  overflow-x:hidden;
  position:relative;
  background:var(--bg);
  -webkit-overflow-scrolling:touch;
  overscroll-behavior:contain;
}

.content-inner{
  max-width:var(--content-max);
  margin:0 auto;
  background:var(--surface);
  min-height:100%;
  padding-bottom:60px;
}

#sidebar-overlay{
  display:none;position:fixed;inset:0;
  background:rgba(0,0,0,.5);z-index:299;
  cursor:pointer;
}

.axp-logo{padding:16px 14px 14px;border-bottom:1px solid var(--border);}
.axp-logo-text{font-size:13px;font-weight:700;letter-spacing:3px;color:var(--accent);text-transform:uppercase;}
.axp-logo-sub{font-size:10px;color:var(--text3);letter-spacing:1px;margin-top:2px;}
.axp-nav-section{padding:12px 10px 4px;font-size:9px;letter-spacing:2px;color:var(--accent);text-transform:uppercase;font-weight:700;}
.axp-nav-btn{
  display:flex;align-items:center;gap:10px;padding:9px 14px;
  width:100%;background:transparent;border:none;color:var(--text2);
  font-family:var(--font);font-size:13px;cursor:pointer;text-align:left;
  transition:background var(--tr),color var(--tr);white-space:nowrap;
  text-decoration:none;
}
.axp-nav-btn.active{background:var(--surface2);color:var(--text);border-left:2px solid var(--accent);padding-left:12px;}
.axp-nav-btn i{font-size:14px;width:18px;flex-shrink:0;color:var(--accent);}
.axp-sidebar-spacer{flex:1;}
.axp-sidebar-bottom{border-top:1px solid var(--border);padding:10px;}

.sidebar-info-panel{
  display:none;margin:0 10px 10px;
  background:var(--surface2);border:1px solid var(--border);border-left:3px solid var(--accent);
  padding:10px;font-size:12px;color:var(--text2);line-height:1.5;
  animation:fadeIn .2s ease;
}
.sidebar-info-panel.show{display:block;}
.sidebar-info-panel h4{font-size:11px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;}
.sidebar-info-panel p{margin-bottom:6px;}
.sidebar-info-close{display:flex;align-items:center;justify-content:flex-end;margin-top:4px;}
.sidebar-info-close button{background:none;border:none;color:var(--text3);font-size:10px;cursor:pointer;font-family:var(--font);}

.sidebar-pay-box{
  margin:8px 10px 10px;
  background:linear-gradient(135deg,rgba(13,27,46,.95),rgba(26,45,74,.95));
  border:1px solid var(--gold);border-radius:0;padding:12px;
}
.sidebar-pay-box h4{color:var(--gold);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;}
.sidebar-pay-amount{font-family:var(--mono);font-size:20px;font-weight:700;color:#fff;display:block;margin:4px 0;}
.sidebar-pay-period{color:rgba(255,255,255,.55);font-size:10px;display:block;margin-bottom:8px;}
.sidebar-pay-btn{display:flex;align-items:center;justify-content:center;gap:5px;width:100%;background:var(--green);color:white;border:none;padding:7px;font-size:11px;font-weight:700;cursor:pointer;letter-spacing:.5px;text-transform:uppercase;font-family:var(--font);text-decoration:none;}

.main-panel{display:none;}
.main-panel.active{display:block;animation:fadeIn .2s ease;}
@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}

.page-header{background:var(--navy);color:white;padding:16px 20px 0;border-bottom:3px solid var(--accent);position:relative;overflow:hidden;}
.page-header::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(-45deg,transparent,transparent 14px,rgba(74,58,255,.06) 14px,rgba(74,58,255,.06) 28px);}
.page-header-inner{position:relative;z-index:2;padding-bottom:12px;}
.header-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(74,58,255,.2);border:1px solid rgba(74,58,255,.4);color:#a89fff;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:3px 10px;margin-bottom:8px;}
.header-badge i{font-size:10px;color:var(--green);}
.page-header h1{font-size:1.2rem;font-weight:800;letter-spacing:.5px;line-height:1.2;color:#fff;margin-bottom:3px;}
.page-header p{font-size:.75rem;line-height:1.5;color:rgba(255,255,255,.7);margin-bottom:8px;}
.header-stats{display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:4px;}
.header-stat{display:inline-flex;align-items:center;gap:4px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);padding:2px 7px;font-size:.58rem;font-weight:600;color:rgba(255,255,255,.85);white-space:nowrap;}
.header-stat i{font-size:.62rem;color:var(--green);}
.header-cursor{display:inline-block;width:2px;height:.9em;background:var(--green);margin-left:2px;vertical-align:middle;animation:cursorBlink 1s step-end infinite;}
@keyframes cursorBlink{0%,100%{opacity:1}50%{opacity:0}}
.header-ticker{position:relative;width:100%;background:var(--accent);overflow:hidden;height:26px;display:flex;align-items:center;border-top:1px solid rgba(255,255,255,.15);}
.header-ticker::before,.header-ticker::after{content:'';position:absolute;top:0;width:40px;height:100%;z-index:2;pointer-events:none;}
.header-ticker::before{left:0;background:linear-gradient(to right,var(--accent),transparent);}
.header-ticker::after{right:0;background:linear-gradient(to left,var(--accent),transparent);}
.header-ticker-track{display:flex;align-items:center;white-space:nowrap;animation:tickerScroll 22s linear infinite;}
@keyframes tickerScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.header-ticker-item{display:inline-flex;align-items:center;gap:7px;font-size:.65rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#fff;padding:0 20px;}
.ticker-dot{width:4px;height:4px;background:var(--gold);border-radius:50%;flex-shrink:0;}
.ticker-star{color:var(--gold);font-size:.58rem;}

.activation-banner{
  display:none;background:linear-gradient(90deg,var(--navy),#1a2d4a);
  border-bottom:2px solid var(--gold);padding:9px 16px;
  align-items:center;gap:10px;font-size:.72rem;color:rgba(255,255,255,.85);
}
.activation-banner.show{display:flex;}
.activation-banner i{color:var(--gold);font-size:.9rem;flex-shrink:0;}
.activation-banner-text{flex:1;line-height:1.45;}
.activation-banner-text strong{color:#ffd97a;}
.activation-banner-btn{background:var(--gold);color:var(--navy);border:none;padding:5px 12px;font-size:.65rem;font-weight:800;cursor:pointer;letter-spacing:.3px;text-transform:uppercase;display:flex;align-items:center;gap:4px;flex-shrink:0;font-family:var(--font);}

.video-section{background:var(--navy);border-bottom:1px solid var(--border);padding:0;text-align:center;}
.video-toggle-btn{display:inline-flex;align-items:center;gap:8px;background:var(--accent);color:white;border:none;padding:6px 16px;font-size:.72rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;cursor:pointer;margin:8px auto;font-family:var(--font);}
.video-toggle-btn i{font-size:.95rem;}
.btn-label{display:flex;flex-direction:column;text-align:left;}
.btn-sub{font-size:.56rem;font-weight:400;opacity:.8;display:block;text-align:left;text-transform:none;margin-top:1px;}
.video-container{display:none;background:var(--surface2);border-top:1px solid var(--border);padding:10px 14px 8px;}
.video-container.show{display:block;}
.video-player-bar{display:flex;align-items:center;justify-content:space-between;margin-bottom:7px;}
.video-player-title{font-size:.68rem;font-weight:700;color:var(--accent);letter-spacing:1px;text-transform:uppercase;display:flex;align-items:center;gap:6px;}
.video-player-title i{color:var(--green);}
.video-player-controls{display:flex;align-items:center;gap:5px;}
.video-ctrl-btn{display:inline-flex;align-items:center;justify-content:center;gap:4px;border:none;cursor:pointer;font-size:.62rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;padding:4px 9px;font-family:var(--font);}
.video-ctrl-pause{background:var(--surface3);color:var(--text2);border:1px solid var(--border2);}
.video-ctrl-close{background:var(--red);color:white;}
.video-wrapper{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;background:#000;}
.video-wrapper iframe,.video-wrapper>div{position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:none;}
.video-mini{display:none;position:fixed;top:50%;right:14px;transform:translateY(-50%);width:210px;z-index:7000;background:var(--navy);border:2px solid var(--accent);}
.video-mini.show{display:block;}
.video-mini-bar{display:flex;align-items:center;justify-content:space-between;background:var(--accent);padding:4px 7px;}
.video-mini-label{font-size:.56rem;font-weight:700;color:white;letter-spacing:.8px;text-transform:uppercase;display:flex;align-items:center;gap:4px;}
.video-mini-label i{color:var(--gold);}
.video-mini-controls{display:flex;gap:4px;}
.video-mini-btn{background:rgba(255,255,255,.15);border:none;color:white;width:20px;height:20px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.58rem;}
.video-mini-btn.close-mini{background:var(--red);}
.video-mini-frame{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;background:#000;pointer-events:none;}
.video-mini-frame iframe,.video-mini-frame>div{position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:none;}
.video-mini-expand{display:flex;align-items:center;justify-content:center;gap:4px;background:rgba(74,58,255,.15);border:none;color:#a89fff;font-size:.58rem;font-weight:700;letter-spacing:.8px;text-transform:uppercase;padding:4px;width:100%;cursor:pointer;border-top:1px solid rgba(255,255,255,.08);font-family:var(--font);}
.video-player-title-full{display:inline;}
.video-player-title-short{display:none;}

.progress-container{background:var(--surface);padding:9px 16px 7px;border-bottom:1px solid var(--border);}
.progress-meta{display:flex;align-items:center;justify-content:space-between;margin-bottom:5px;}
.progress-step-info{font-size:.62rem;font-weight:700;color:var(--accent);letter-spacing:1px;text-transform:uppercase;font-family:var(--mono);}
.progress-pct{font-size:.62rem;font-weight:700;color:var(--green);letter-spacing:.5px;font-family:var(--mono);}
.progress-pct-bar{height:3px;background:var(--surface3);margin-bottom:9px;overflow:hidden;}
.progress-pct-fill{height:100%;background:linear-gradient(90deg,var(--accent),var(--green));width:0%;transition:width .3s ease;}
.progress-bar{display:flex;justify-content:space-between;align-items:center;position:relative;margin-bottom:5px;}
.progress-line{position:absolute;top:50%;left:0;right:0;height:1px;background:var(--border);z-index:1;}
.progress-fill{height:100%;background:var(--accent);transition:width .3s ease;width:0%;}
.step-indicator{width:24px;height:24px;background:var(--surface2);border:1.5px solid var(--border2);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.62rem;position:relative;z-index:2;color:var(--text3);font-family:var(--mono);}
.step-indicator.active{background:var(--accent);border-color:var(--accent);color:white;}
.step-indicator.completed{background:var(--green);border-color:var(--green);color:white;}
.step-labels{display:flex;justify-content:space-between;margin-top:3px;}
.step-label{font-size:.52rem;color:var(--text3);text-align:center;width:58px;letter-spacing:.3px;text-transform:uppercase;font-weight:600;}
.step-label.active{color:var(--accent);font-weight:700;}
.step-label.completed-label{color:var(--green);}
.step-label.completed-label:before{content:"\2713\00a0";font-weight:800;}
.step-indicator.done{font-size:0;color:transparent;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M5 12.5l4.5 4.5L19 7.5' fill='none' stroke='%23fff' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center;background-size:72%;}
.step-indicator.pop{animation:axpStepPop .6s cubic-bezier(.2,1.4,.4,1);}
@keyframes axpStepPop{0%{transform:scale(.45)}60%{transform:scale(1.4)}100%{transform:scale(1)}}
.axp-step-cheer{position:fixed;left:50%;bottom:22px;transform:translateX(-50%);z-index:10950;display:flex;align-items:center;gap:8px;padding:11px 16px;background:var(--green,#1e9e52);color:#fff;font-family:var(--font,Arial,sans-serif);font-size:.78rem;font-weight:700;max-width:calc(100vw - 28px);animation:axpCheerIn .35s ease both;}
.axp-step-cheer.out{animation:axpCheerOut .3s ease both;}
.axp-step-cheer i{font-size:1.05rem;flex-shrink:0;}
@keyframes axpCheerIn{from{opacity:0;transform:translate(-50%,14px)}to{opacity:1;transform:translate(-50%,0)}}
@keyframes axpCheerOut{to{opacity:0;transform:translate(-50%,10px)}}
@media(prefers-reduced-motion:reduce){.step-indicator.pop,.axp-step-cheer,.axp-step-cheer.out{animation:none}}

.form-content{padding:14px 18px;background:var(--surface);}
.step{display:none;}
.step.active{display:block;animation:fadeIn .2s ease;}
.step-title{font-size:.88rem;color:var(--text);font-weight:800;letter-spacing:.5px;text-transform:uppercase;padding:7px 12px;background:var(--surface2);border-top:2px solid var(--accent);margin-bottom:2px;}
.step-description{color:var(--text3);font-size:.7rem;margin:5px 0 10px;line-height:1.45;}
.form-group{margin-bottom:10px;}
.form-group label{display:block;margin-bottom:3px;font-weight:600;color:var(--text2);font-size:.76rem;letter-spacing:.3px;}
.form-group input,.form-group select,.form-group textarea{width:100%;padding:7px 10px;border:1px solid var(--border);font-size:.82rem;transition:border-color var(--tr);background:var(--surface2);font-family:var(--font);color:var(--text);line-height:1.35;outline:none;border-radius:0;}
.form-group select{background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%234A3AFF%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 9px center;background-size:16px;padding-right:30px;appearance:none;}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--accent);background:var(--surface);}
.form-group input.error,.form-group select.error,.form-group textarea.error{border-color:var(--red);}
.edit-subject-select{width:100%;padding:7px 10px;border:1px solid var(--border);font-size:.82rem;font-family:var(--font);color:var(--text);background-color:var(--surface2);line-height:1.35;outline:none;border-radius:0;cursor:pointer;transition:border-color var(--tr);background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%234A3AFF%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 9px center;background-size:16px;padding-right:30px;appearance:none;}
.edit-subject-select:focus{border-color:var(--accent);background-color:var(--surface);}
.error-message{color:var(--red);font-size:.66rem;margin-top:2px;display:none;line-height:1.3;}
.error-message.show{display:block;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.notice{display:flex;align-items:flex-start;gap:7px;background:#fffbea;border:1px solid #f0d060;border-left:3px solid #f5a623;padding:7px 10px;margin-bottom:8px;color:#6b4f00;font-size:.7rem;line-height:1.45;}
.notice-icon{font-size:.82rem;flex-shrink:0;margin-top:1px;color:#f5a623;}
.notice strong{color:#c0392b;}
.contact-info{display:flex;align-items:center;justify-content:space-between;gap:10px;background:var(--surface2);border:1px solid var(--border);border-left:3px solid var(--accent);padding:7px 12px;margin-bottom:10px;font-size:.72rem;}
.contact-info p{margin:0;color:var(--text2);font-size:.68rem;}
.contact-info strong{display:block;font-size:.8rem;color:var(--red);font-weight:800;}
.contact-info-text{flex:1;}
.contact-info a{display:inline-flex;align-items:center;gap:4px;background:var(--accent);color:white;padding:4px 11px;text-decoration:none;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;flex-shrink:0;font-family:var(--font);}
.auth-nudge{display:none;background:#fff3cd;border:1px solid #ffc107;border-left:3px solid #f5a623;padding:9px 12px;margin-bottom:12px;font-size:.7rem;color:#664d03;line-height:1.5;}
.auth-nudge.show{display:block;}
.auth-nudge-btn{display:inline-flex;align-items:center;gap:5px;background:var(--accent);color:white;border:none;padding:4px 11px;font-size:.68rem;font-weight:700;cursor:pointer;margin-top:5px;font-family:var(--font);}
.buttons{display:flex;justify-content:space-between;margin-top:14px;padding-top:10px;border-top:1px solid var(--border);}
.btn{padding:8px 18px;border:none;font-size:.78rem;font-weight:700;cursor:pointer;transition:background var(--tr);text-transform:uppercase;letter-spacing:.4px;font-family:var(--font);}
.btn-primary{background:var(--accent);color:white;}
.btn-secondary{background:var(--surface3);color:var(--text2);border:1px solid var(--border2);}
.btn:disabled{opacity:.45;cursor:not-allowed;}
#mtaala-container{background:transparent;border:none;padding:0;margin-bottom:0;}
#mtaala-question{margin:0 0 6px;font-size:.7rem;color:var(--text2);font-weight:600;}
.mtaala-links{display:flex;flex-wrap:wrap;gap:5px;}
.mtaala-btn{display:inline-flex;align-items:center;gap:4px;text-decoration:none;font-size:.68rem;font-weight:700;letter-spacing:.3px;padding:4px 9px;white-space:nowrap;flex-shrink:0;font-family:var(--font);}
.mtaala-btn i{font-size:.68rem;flex-shrink:0;}
.mtaala-btn-full{display:inline;}
.mtaala-btn-short{display:none;}
.mtaala-btn-cta{background:rgba(0,0,0,.15);padding:1px 4px;font-size:.56rem;letter-spacing:.5px;text-transform:uppercase;margin-left:2px;}
.mtaala-btn--red{background:var(--red);color:#fff;}
.mtaala-btn--blue{background:var(--accent);color:#fff;}
.mtaala-btn--green{background:var(--green);color:#fff;}
#customDurationFields{display:none;}
#customDistributionFields{display:none;}

.loading{display:none;position:fixed;inset:0;width:100%;height:100%;background:radial-gradient(ellipse at 50% 40%,rgba(22,44,84,.97) 0%,rgba(11,26,51,.98) 70%);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);z-index:99999;justify-content:center;align-items:center;flex-direction:column;padding:24px;}
.loading.show{display:flex;animation:axpLdIn .25s ease both;}
.axp-ld-logo{width:min(78vw,340px);position:relative;}
.axp-ld-logo .axl{filter:drop-shadow(0 6px 24px rgba(245,161,28,.18));}
.axp-ld-logo.fade{animation:axpLdFade .45s ease both;}
.axp-ld-track{position:relative;width:min(56vw,200px);height:3px;margin-top:26px;background:rgba(255,255,255,.14);overflow:hidden;}
.axp-ld-track::before{content:"";position:absolute;top:0;left:0;height:100%;width:40%;background:linear-gradient(90deg,transparent,#f5a11c 40%,#ffd36b 60%,transparent);animation:axpLdBar 1.3s cubic-bezier(.65,0,.35,1) infinite;}
.axp-ld-msg{margin-top:16px;min-height:1.3em;font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:clamp(13px,3.6vw,15px);font-weight:500;letter-spacing:.4px;text-transform:none;color:rgba(255,255,255,.72);text-align:center;transition:opacity .35s ease,transform .35s ease;}
.axp-ld-msg.swap{opacity:0;transform:translateY(6px);}
.axp-ld-ico{width:46px;height:46px;margin-top:20px;}
.axp-ld-ico svg{width:100%;height:100%;overflow:visible;}
.axp-ld-ico svg *{fill:none;stroke:#f5a11c;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1;animation:axpIcoDraw 1.1s cubic-bezier(.65,0,.35,1) forwards;}
.axp-ld-ico svg *:nth-child(2){animation-delay:.35s;}.axp-ld-ico svg *:nth-child(3){animation-delay:.6s;}.axp-ld-ico svg *:nth-child(4){animation-delay:.8s;}
@keyframes axpIcoDraw{to{stroke-dashoffset:0}}
@media (prefers-reduced-motion:reduce){.axp-ld-ico svg *{animation:none;stroke-dashoffset:0}}
@keyframes axpLdIn{from{opacity:0}to{opacity:1}}
@keyframes axpLdFade{0%{opacity:1}100%{opacity:0}}
@keyframes axpLdBar{0%{left:-45%}100%{left:105%}}
@media (prefers-reduced-motion:reduce){.axp-ld-track::before{animation-duration:2.6s}}
@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}

#endContentAds{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);z-index:9990;}
#buttonPopId{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:white;width:min(92%,500px);max-height:80vh;padding:24px;overflow:auto;border-top:3px solid var(--accent);}
#gotoEdit{display:block;position:absolute;top:10px;right:14px;cursor:pointer;font-size:1.4rem;text-decoration:none;font-family:Arial,sans-serif;color:var(--red);font-weight:600;line-height:1;}
#wordToshow{padding:4px;margin:4px 4px 70px;text-transform:capitalize;font-size:.82rem;font-weight:600;color:var(--text2);line-height:1.6;}
.btnImp{display:flex;align-items:center;justify-content:center;gap:10px;margin-top:16px;}
#downloadPdfBtn,#refreshBtn{padding:10px 16px;flex:1;border:none;outline:none;color:white;text-transform:capitalize;letter-spacing:.5px;font-weight:700;font-size:.82rem;cursor:pointer;transition:background var(--tr);font-family:var(--font);}
#downloadPdfBtn{background:var(--navy);}
#refreshBtn{display:none;background:var(--accent);}

#andalio{padding:2px;margin:0;text-align:center;font-size:150%;text-transform:uppercase;}
h2,h5{padding:2px;margin:0;text-align:center;font-size:95%;text-transform:uppercase;}
h3{margin:0;text-align:center;text-transform:uppercase;font-size:95%;}
table{width:94%;margin:10px auto;border-collapse:collapse;font-size:14px;}
th,td{border:1px solid black;padding:2px 8px;text-align:left;}
.details-tb th,.details-tb td{border:none;}
.details-tb td:nth-child(1),.details-tb td:nth-child(3){text-transform:uppercase;font-weight:bold;color:black;text-align:left;}
.details-tb td:nth-child(1){width:4%;font-size:95%;}
.details-tb td:nth-child(3){width:18%;font-size:90%;}
.details-tb td:nth-child(2),.details-tb td:nth-child(4){width:40%;text-transform:uppercase;font-weight:bold;color:black;text-align:center;font-size:95%;border-bottom:2px dotted black;}
.sylabus-tb td:nth-child(1){font-size:12px;width:24%;text-transform:uppercase;color:black;font-weight:bold;border:none;}
.sylabus-tb td:nth-child(2){border:none;font-size:14px;color:black;border-bottom:2px solid black;}
.student-tb th,.student-tb td{font-size:14px;text-transform:uppercase;text-align:center;color:black;min-height:12px;height:15px;padding:3px 2px;}
.student-tb td:empty::after{content:'\00a0';visibility:hidden;}
.lesson-tb th{text-align:center;text-transform:uppercase;font-weight:bold;font-family:Verdana,Geneva,Tahoma,sans-serif;font-size:14px;}
.lesson-tb td:nth-child(1){text-align:left;font-size:14px;width:17%;text-transform:uppercase;color:black;font-weight:bold;padding:4px;}
.lesson-tb td:nth-child(2){text-align:center;font-size:15px;width:5%;text-transform:uppercase;color:black;font-weight:bold;padding:4px;}
.lesson-tb td:nth-child(3),.lesson-tb td:nth-child(4),.lesson-tb td:nth-child(5){text-align:left;padding:4px;font-size:14px;}
.lesson-tb td:nth-child(3){width:30%;}
.lesson-tb td:nth-child(4){width:24%;}
.lesson-tb td:nth-child(5){width:22%;}
.table-footer{width:94%;margin:10px auto;font-size:14px;color:black;}
.tb-footer{margin:10px;font-size:14px;font-weight:bold;color:black;}
.container1{width:1080px;margin:5px auto;position:absolute;left:-99999px;}

.auth-overlay{display:none;position:fixed;inset:0;background:rgba(5,5,5,.88);z-index:10500;align-items:center;justify-content:center;}
.auth-overlay.show{display:flex;}
.auth-popup{background:#fff;width:92%;max-width:400px;overflow:hidden;animation:slideUp .4s cubic-bezier(.22,.61,.36,1);border-top:3px solid var(--accent);}
@keyframes slideUp{from{transform:translateY(60px);opacity:0}to{transform:translateY(0);opacity:1}}
.auth-header{background:var(--navy);padding:20px;text-align:center;position:relative;overflow:hidden;}
.auth-header::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(-45deg,transparent,transparent 14px,rgba(255,255,255,.04) 14px,rgba(255,255,255,.04) 28px);}
.auth-header-icon{position:relative;z-index:1;width:50px;height:50px;background:var(--accent);margin:0 auto 10px;display:flex;align-items:center;justify-content:center;}
.auth-header-icon i{font-size:1.4rem;color:white;}
.auth-header h2{position:relative;z-index:1;color:#fff;font-size:.95rem;font-weight:800;margin:0 0 4px;text-transform:uppercase;letter-spacing:.5px;}
.auth-header p{position:relative;z-index:1;color:rgba(255,255,255,.65);font-size:.7rem;margin:0;line-height:1.5;}
.auth-body{padding:18px;}
.auth-info-box{background:var(--surface2);border:1px solid var(--border);border-left:3px solid var(--accent);padding:9px 11px;margin-bottom:14px;font-size:.7rem;color:var(--text2);line-height:1.5;}
.auth-info-box i{color:var(--accent);margin-right:4px;}
.auth-google-btn{width:100%;display:flex;align-items:center;justify-content:center;gap:10px;background:#fff;border:2px solid var(--border);padding:11px;font-size:.85rem;font-weight:700;cursor:pointer;letter-spacing:.3px;transition:border-color var(--tr),background var(--tr);color:var(--text);position:relative;overflow:hidden;font-family:var(--font);}
.auth-google-btn img{width:20px;height:20px;}
.auth-divider{display:flex;align-items:center;gap:10px;margin:12px 0;color:#aaa;font-size:.68rem;font-weight:600;}
.auth-divider::before,.auth-divider::after{content:'';flex:1;height:1px;background:var(--border);}
.auth-footer{padding:10px 18px;background:var(--surface2);border-top:1px solid var(--border);font-size:.66rem;color:var(--text3);text-align:center;line-height:1.5;}
.auth-footer strong{color:var(--green);}
.auth-close-btn{position:absolute;top:8px;right:8px;background:rgba(255,255,255,.15);border:none;color:white;width:24px;height:24px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.85rem;z-index:2;}

.axp-cd{display:flex;flex-wrap:nowrap;gap:clamp(3px,1.5vw,8px);justify-content:flex-start;margin-top:6px;width:100%;max-width:300px;box-sizing:border-box;}
.axp-dlg .axp-cd,.axp-cd.center{justify-content:center;margin-left:auto;margin-right:auto;}
.axp-cd-u{flex:1 1 0;min-width:0;background:var(--navy);color:#fff;padding:clamp(4px,1.5vw,7px) 2px;text-align:center;border-bottom:2px solid var(--gold);}
.axp-cd-u b{display:block;font-size:clamp(.9rem,4.6vw,1.3rem);font-weight:800;line-height:1.1;font-variant-numeric:tabular-nums;font-feature-settings:'tnum';}
.axp-cd-u small{display:block;font-size:clamp(.48rem,2.1vw,.6rem);text-transform:uppercase;letter-spacing:.4px;opacity:.7;margin-top:2px;}
.axp-cd-sep{align-self:center;color:var(--text3);font-weight:800;font-size:clamp(.8rem,3.6vw,1.1rem);flex:0 0 auto;margin:0 -2px;}
.axp-dlg-extra{margin:-6px 0 16px;}
.axp-dlg-extra:empty{display:none;}
.axp-dlg-overlay{display:none;position:fixed;inset:0;background:rgba(5,5,5,.78);z-index:2147483646;align-items:center;justify-content:center;padding:16px;}
.axp-dlg-overlay.show{display:flex;}
.axp-dlg{background:#fff;width:100%;max-width:360px;border-top:4px solid var(--green);padding:22px 20px 18px;text-align:center;animation:slideUp .3s cubic-bezier(.22,.61,.36,1);}
.axp-dlg.error{border-top-color:var(--red);}
.axp-dlg.warn{border-top-color:#f5a623;}
.axp-dlg-icon{font-size:2.4rem;line-height:1;margin-bottom:8px;color:var(--green);}
.axp-dlg.error .axp-dlg-icon{color:var(--red);}
.axp-dlg.warn .axp-dlg-icon{color:#f5a623;}
.axp-dlg h3{margin:0 0 6px;font-size:1rem;font-weight:800;color:var(--navy);}
.axp-dlg p{margin:0 0 16px;font-size:.8rem;line-height:1.55;color:var(--text2);white-space:pre-line;}
.axp-dlg-btns{display:flex;gap:8px;}
.axp-dlg-btns button{flex:1;padding:10px;border:none;font-size:.8rem;font-weight:700;cursor:pointer;text-transform:uppercase;letter-spacing:.4px;font-family:var(--font);}
.axp-dlg-ok{background:var(--green);color:#fff;}
.axp-dlg.error .axp-dlg-ok{background:var(--red);}
.axp-dlg-cancel{background:var(--surface2);color:var(--text);border:1px solid var(--border)!important;}
.profile-overlay{display:none;position:fixed;inset:0;background:rgba(5,5,5,.88);z-index:10600;align-items:center;justify-content:center;}
.profile-overlay.show{display:flex;}
.profile-popup{background:#fff;width:92%;max-width:440px;overflow:hidden;border-top:3px solid var(--green);animation:slideUp .4s cubic-bezier(.22,.61,.36,1);max-height:90dvh;overflow-y:auto;}
.profile-header{background:var(--navy);padding:14px 18px;position:sticky;top:0;z-index:1;}
.profile-header h2{color:#fff;font-size:.9rem;font-weight:800;margin:0 0 3px;text-transform:uppercase;letter-spacing:.5px;}
.profile-header p{color:rgba(255,255,255,.6);font-size:.68rem;margin:0;}
.profile-user-badge{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.08);padding:8px 10px;margin-top:8px;}
.profile-avatar{width:34px;height:34px;border-radius:50%;object-fit:cover;border:2px solid var(--accent);flex-shrink:0;}
.profile-avatar-placeholder{width:34px;height:34px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;color:white;font-size:.95rem;font-weight:700;flex-shrink:0;}
.profile-user-info{flex:1;min-width:0;}
.profile-user-name{color:#fff;font-size:.78rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.profile-user-email{color:rgba(255,255,255,.5);font-size:.65rem;}
.profile-body{padding:16px;}
.profile-form-group{margin-bottom:11px;}
.profile-form-group label{display:block;margin-bottom:3px;font-weight:700;font-size:.74rem;color:var(--text);}
.profile-form-group label span{color:var(--red);}
.profile-form-group input,.profile-form-group select{width:100%;padding:7px 10px;border:1.5px solid var(--border);font-size:.8rem;box-sizing:border-box;font-family:var(--font);background:var(--surface2);transition:border-color var(--tr);color:var(--text);outline:none;}
.profile-form-group input:focus,.profile-form-group select:focus{border-color:var(--accent);}
.profile-form-group input[readonly]{background:var(--surface3);color:var(--text3);cursor:not-allowed;border-style:dashed;}
.profile-email-note{font-size:.63rem;color:var(--text3);margin-top:2px;display:flex;align-items:center;gap:4px;}
.profile-subjects-wrap{display:flex;flex-direction:column;gap:6px;}
.profile-subject-row{display:flex;gap:6px;align-items:center;}
.profile-subject-row select{flex:1;}
.profile-subject-remove{background:var(--red);color:white;border:none;width:26px;height:26px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.78rem;flex-shrink:0;}
.profile-add-subject-btn{display:inline-flex;align-items:center;gap:5px;background:var(--surface2);border:1px solid var(--border);color:var(--accent);padding:4px 9px;font-size:.7rem;font-weight:700;cursor:pointer;letter-spacing:.3px;margin-top:3px;font-family:var(--font);}
.profile-add-subject-btn:disabled{opacity:.4;cursor:not-allowed;}
.profile-note-box{background:#fffbea;border:1px solid #f0d060;border-left:3px solid #f5a623;padding:7px 10px;margin-bottom:12px;font-size:.7rem;color:#6b4f00;line-height:1.45;display:flex;gap:6px;}
.profile-note-box i{color:#f5a623;flex-shrink:0;margin-top:1px;}
.profile-save-btn{width:100%;background:var(--green);color:white;border:none;padding:11px;font-size:.85rem;font-weight:700;cursor:pointer;text-transform:uppercase;letter-spacing:.5px;display:flex;align-items:center;justify-content:center;gap:7px;font-family:var(--font);}
.profile-save-btn:disabled{opacity:.5;cursor:not-allowed;}
.profile-err{background:#fff5f7;border:1px solid #ffd6de;color:var(--red);font-size:.7rem;padding:6px 10px;margin-top:8px;display:none;}
.profile-err.show{display:block;}
.profile-activation-section{background:linear-gradient(135deg,var(--navy),#1a2d4a);margin:14px -16px -16px;padding:14px 16px;border-top:2px solid var(--gold);}
.profile-activation-section h3{color:var(--gold);font-size:.8rem;font-weight:800;text-transform:uppercase;letter-spacing:.5px;margin:0 0 5px;display:flex;align-items:center;gap:6px;}
.profile-activation-section p{color:rgba(255,255,255,.7);font-size:.7rem;line-height:1.5;margin:0 0 8px;}
.profile-activation-btn{display:flex;align-items:center;justify-content:center;gap:6px;width:100%;background:var(--gold);color:var(--navy);border:none;padding:9px;font-size:.8rem;font-weight:800;cursor:pointer;text-transform:uppercase;letter-spacing:.5px;text-decoration:none;font-family:var(--font);}

.profile-overlay{background:radial-gradient(ellipse at 50% 30%,rgba(74,58,255,.35),rgba(8,12,30,.92) 70%);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);padding:12px;box-sizing:border-box;}
.profile-popup{width:100%;max-width:420px;background:#fff;border:0;border-top:0;position:relative;animation:axpPopIn .35s cubic-bezier(.22,.61,.36,1);scrollbar-width:thin;scrollbar-color:#4A3AFF #eef0ff;}
.profile-popup::before{content:"";display:block;height:4px;background:linear-gradient(90deg,#F5C518,#ffdf6b 50%,#F5C518);position:sticky;top:0;z-index:3;}
@keyframes axpPopIn{from{opacity:0;transform:translateY(18px) scale(.97)}to{opacity:1;transform:none}}
.profile-header{background:linear-gradient(135deg,#1a1450 0%,#3429CC 55%,#4A3AFF 100%);padding:14px 16px 14px;position:relative;top:auto;overflow:hidden;}
.profile-header::after{content:"";position:absolute;right:-30px;top:-40px;width:130px;height:130px;border:22px solid rgba(245,197,24,.16);border-radius:50%;pointer-events:none;}
.profile-header h2{color:#F5C518;font-size:.82rem;letter-spacing:1.4px;margin:0 0 2px;display:flex;align-items:center;gap:7px;}
.profile-header p{color:rgba(255,255,255,.72);font-size:.66rem;}
.profile-close{position:absolute;top:10px;right:10px;z-index:2;width:30px;height:30px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.28);color:#fff;font-size:.8rem;cursor:pointer;padding:0;transition:background .2s,color .2s;}.profile-close:focus-visible{background:#F5C518;color:#1a1450;outline:none;}
.profile-user-badge{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.16);margin-top:10px;padding:8px 10px;position:relative;z-index:1;}
.profile-avatar,.profile-avatar-placeholder{width:36px;height:36px;border:2px solid #F5C518;}
.profile-avatar-placeholder{background:#F5C518;color:#1a1450;}
.profile-user-name{font-size:.8rem;}
.profile-user-email{color:rgba(255,255,255,.7);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.profile-body{padding:14px 16px 16px;display:grid;grid-template-columns:1fr 1fr;column-gap:10px;row-gap:0;background:#fff;}
.profile-body>*{grid-column:1/-1;}
.profile-body>.pf-half{grid-column:span 1;min-width:0;}
.profile-note-box,.pf-email{display:none;}
.profile-form-group{margin-bottom:10px;}
.profile-form-group label{font-size:.66rem;font-weight:700;color:#3429CC;text-transform:uppercase;letter-spacing:.7px;margin-bottom:4px;}
.profile-form-group label span{color:#e0a800;}
.profile-form-group input,.profile-form-group select{padding:9px 10px;font-size:.82rem;border:1.5px solid #d8daff;background:#f7f8ff;border-left:3px solid #4A3AFF;transition:border-color .2s,box-shadow .2s,background .2s;}
.profile-form-group input:focus,.profile-form-group select:focus{border-color:#4A3AFF;border-left-color:#F5C518;background:#fff;}
.profile-form-group input[readonly]{background:#eceeff;}
.profile-email-note{font-size:.6rem;margin-top:3px;}
.profile-add-subject-btn{background:#fff;border:1.5px dashed #4A3AFF;color:#4A3AFF;padding:5px 11px;transition:background .2s,color .2s,border-color .2s;}
.profile-subject-remove{background:#3429CC;}
.profile-save-btn{background:linear-gradient(180deg,#ffd84a,#F5C518);color:#1a1450;font-weight:800;padding:12px;margin-top:4px;transition:transform .15s,box-shadow .2s,filter .2s;}
.profile-save-btn:active:not(:disabled){transform:scale(.98);}
.profile-activation-section{background:linear-gradient(135deg,#1a1450,#3429CC);margin:14px -16px -16px;border-top:3px solid #F5C518;}
.profile-activation-section h3{color:#F5C518;}
.profile-activation-btn{background:#F5C518;color:#1a1450;}
@media (max-width:420px){.profile-overlay{padding:8px;}.profile-popup{max-height:94dvh;}.profile-body{column-gap:8px;}.profile-form-group input,.profile-form-group select{font-size:16px;padding:8px 9px;}}
@media (max-width:340px){.profile-body>.pf-half{grid-column:1/-1;}}
.panel-header{padding:16px 18px 12px;border-bottom:2px solid var(--accent);background:var(--surface);}
.panel-header h2{font-size:1rem;font-weight:800;color:var(--text);letter-spacing:.5px;text-transform:uppercase;display:flex;align-items:center;gap:8px;}
.panel-header h2 i{color:var(--accent);}
.panel-header p{font-size:.7rem;color:var(--text3);margin-top:3px;line-height:1.45;}
.panel-back{display:inline-flex;align-items:center;gap:5px;background:none;border:1px solid var(--border2);color:var(--text2);padding:5px 11px;font-size:.7rem;font-weight:600;cursor:pointer;font-family:var(--font);margin-bottom:10px;}
.panel-body{padding:16px 18px;background:var(--surface);}
.panel-section-title{font-size:.68rem;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:1.5px;margin:16px 0 8px;border-bottom:1px solid var(--border);padding-bottom:4px;}
.panel-section-title:first-child{margin-top:0;}
.setting-select{padding:5px 26px 5px 8px;border:1px solid var(--border);background-color:var(--surface2);font-size:.74rem;font-family:var(--font);color:var(--text);outline:none;border-radius:0;cursor:pointer;appearance:none;background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%234A3AFF%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 6px center;background-size:14px;}
.setting-select:focus{border-color:var(--accent);}
body.axp-hide-ticker .header-ticker{display:none;}
body.axp-hide-ai #axp-chat-trigger,body.axp-hide-ai #axp-chat-widget{display:none!important;}
body.axp-reduce-motion *,body.axp-reduce-motion *::before,body.axp-reduce-motion *::after{animation:none!important;transition:none!important;}
.setting-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);}
.setting-row:last-child{border-bottom:none;}
.setting-label{font-size:.78rem;color:var(--text);}
.setting-sub{font-size:.65rem;color:var(--text3);margin-top:1px;}
.toggle-switch{position:relative;width:36px;height:20px;flex-shrink:0;}
.toggle-switch input{opacity:0;width:0;height:0;}
.toggle-slider{position:absolute;inset:0;background:var(--border2);cursor:pointer;transition:.3s;border-radius:20px;}
.toggle-slider::before{content:'';position:absolute;width:14px;height:14px;left:3px;top:3px;background:white;transition:.3s;border-radius:50%;}
.toggle-switch input:checked+.toggle-slider{background:var(--accent);}
.toggle-switch input:checked+.toggle-slider::before{transform:translateX(16px);}
.panel-save-btn{width:100%;background:var(--accent);color:white;border:none;padding:10px;font-size:.82rem;font-weight:700;cursor:pointer;text-transform:uppercase;letter-spacing:.5px;display:flex;align-items:center;justify-content:center;gap:7px;font-family:var(--font);margin-top:14px;}
.panel-success{background:#edfff4;border:1px solid #a8e6c0;border-left:3px solid var(--green);padding:8px 12px;font-size:.72rem;color:#155724;display:none;margin-top:8px;}
.panel-success.show{display:block;}

.saved-plan-card{background:var(--surface);border:1px solid var(--border);border-left:3px solid var(--accent);margin-bottom:10px;overflow:hidden;}
.saved-plan-card-header{display:flex;align-items:flex-start;justify-content:space-between;padding:10px 12px 8px;background:var(--surface2);border-bottom:1px solid var(--border);gap:8px;}
.saved-plan-card-title{font-weight:700;font-size:.82rem;color:var(--text);line-height:1.35;}
.saved-plan-card-subject{display:inline-flex;align-items:center;gap:4px;background:var(--accent);color:white;padding:2px 8px;font-size:.62rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;margin-top:3px;}
.saved-plan-card-meta{padding:8px 12px;display:flex;flex-wrap:wrap;gap:6px;align-items:center;}
.saved-plan-meta-item{display:inline-flex;align-items:center;gap:4px;font-size:.65rem;color:var(--text3);font-weight:600;}
.saved-plan-meta-item i{font-size:.65rem;color:var(--accent);}
.saved-plan-card-actions{padding:8px 12px;border-top:1px solid var(--border);display:flex;gap:8px;}
.saved-plan-dl-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:5px;background:var(--navy);color:white;border:none;padding:7px 10px;font-size:.72rem;font-weight:700;cursor:pointer;text-transform:uppercase;letter-spacing:.3px;font-family:var(--font);}
.saved-plan-view-btn{display:flex;align-items:center;justify-content:center;gap:5px;background:var(--surface3);color:var(--text2);border:1px solid var(--border2);padding:7px 12px;font-size:.72rem;font-weight:700;cursor:pointer;font-family:var(--font);}

.reference-year-overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(5,5,5,.7);z-index:10001;padding:16px;align-items:center;justify-content:center;}
.reference-year-overlay.show{display:flex;}
.reference-year-popup{background:white;width:100%;max-width:400px;overflow:hidden;animation:slideUp .35s cubic-bezier(.22,.61,.36,1);border-top:4px solid var(--accent);}
.reference-year-header{background:var(--navy);padding:16px 18px;color:white;position:relative;overflow:hidden;}
.reference-year-header::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(-45deg,transparent,transparent 12px,rgba(74,58,255,.08) 12px,rgba(74,58,255,.08) 24px);}
.reference-year-header h3{position:relative;z-index:1;margin:0 0 4px;font-size:.95rem;font-weight:800;display:flex;align-items:center;gap:7px;letter-spacing:.3px;}
.reference-year-header p{position:relative;z-index:1;margin:0;font-size:.72rem;opacity:.8;line-height:1.45;}
.reference-year-body{padding:16px 18px 18px;}
.current-year-display{background:var(--surface2);border:1px solid var(--border);border-left:4px solid var(--gold);padding:10px 14px;margin-bottom:14px;display:flex;align-items:center;justify-content:space-between;}
.current-year-display p{margin:0;color:var(--text2);font-size:.72rem;font-weight:600;text-transform:uppercase;letter-spacing:.5px;}
.current-year-display .year-value{font-size:1.6rem;font-weight:800;color:var(--accent);font-family:var(--mono);}
.year-input-group{margin-bottom:14px;}
.year-input-group label{display:block;margin-bottom:5px;font-weight:700;color:var(--text);font-size:.76rem;letter-spacing:.3px;text-transform:uppercase;}
.year-input-group input{width:100%;padding:10px 12px;border:2px solid var(--border);font-size:1.1rem;text-align:center;font-weight:700;font-family:var(--mono);outline:none;background:var(--surface2);color:var(--text);}
.year-input-group input:focus{border-color:var(--accent);background:white;}
.reference-year-buttons{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;}
.ref-year-btn{padding:10px 12px;border:none;font-size:.78rem;font-weight:700;cursor:pointer;font-family:var(--font);letter-spacing:.3px;text-transform:uppercase;display:flex;align-items:center;justify-content:center;gap:5px;transition:opacity .15s;}
.ref-year-btn-change{background:var(--green);color:white;}
.ref-year-btn-leave{background:var(--surface3);color:var(--text);border:1px solid var(--border2);}
.ref-year-never-btn{display:block;width:100%;background:none;border:none;color:var(--accent);font-size:.7rem;cursor:pointer;text-decoration:underline;font-family:var(--font);text-align:center;margin-top:8px;padding:4px;}
.year-note{margin-top:10px;padding:8px 10px;background:var(--surface2);border-left:3px solid var(--accent);font-size:.7rem;color:var(--text2);display:flex;gap:6px;align-items:flex-start;line-height:1.5;}
.year-note i{color:var(--accent);flex-shrink:0;margin-top:1px;}


@media(min-width:769px){
  #axp-toggle-btn{display:none;}
  #axp-sidebar{
    position:relative;
    transform:none!important;
    height:100vh;
    height:100dvh;
    overflow-y:auto;
    -webkit-overflow-scrolling:touch;
  }
  #sidebar-overlay{display:none!important;}
  .content-inner{}
}
@media(max-width:768px){
  #axp-toggle-btn{display:flex;}
  #axp-sidebar{
    position:fixed;top:0;left:0;
    height:100vh;
    height:100dvh;
    z-index:300;
    transform:translateX(calc(-1 * var(--sidebar-w)));
    overflow-y:auto;
    -webkit-overflow-scrolling:touch;
    overscroll-behavior:contain;
  }
  #axp-sidebar.open{transform:translateX(0);}
  #sidebar-overlay.show{display:block;}
  .form-row{grid-template-columns:1fr;gap:10px;}
  .mtaala-btn-full{display:none;}
  .mtaala-btn-short{display:inline;}
  .video-player-title-full{display:none;}
  .video-player-title-short{display:inline;}
  .buttons{flex-direction:column;gap:7px;}
  .btn{width:100%;padding:10px 8px;text-align:center;}
  .content-inner{max-width:100%;}
  #buttonPopId{width:92%;padding:16px;}
  .btnImp{flex-direction:column;gap:8px;}
  #downloadPdfBtn,#refreshBtn{width:100%;}
  .activation-banner{flex-direction:column;gap:5px;padding:7px 12px;font-size:.68rem;}
  .activation-banner-btn{width:100%;justify-content:center;}
}
@media(max-width:500px){
  html,body{overflow:hidden;height:100dvh;}
  #axp-app{height:100dvh;}
  #axp-main-wrap{height:100dvh;}
  #axp-content{
    overflow-y:auto;
    -webkit-overflow-scrolling:touch;
    overscroll-behavior:contain;
    padding-bottom:env(safe-area-inset-bottom,20px);
  }
  #axp-sidebar{
    overflow-y:auto;
    -webkit-overflow-scrolling:touch;
    height:100dvh;
  }
  .page-header{padding:12px 12px 0;}
  .page-header h1{font-size:1rem;}
  .page-header p{font-size:.7rem;}
  .header-stats{gap:4px;}
  .header-stat{font-size:.54rem;padding:2px 5px;}
  .form-content{padding:10px 10px;}
  .step-title{font-size:.78rem;padding:6px 8px;}
  .step-label{font-size:.44rem;width:40px;}
  .step-indicator{width:20px;height:20px;font-size:.56rem;}
  .notice{font-size:.66rem;padding:6px 8px;}
  .contact-info{flex-direction:column;align-items:flex-start;gap:6px;}
  .contact-info a{width:100%;justify-content:center;}
  .auth-popup{width:98%;}
  .profile-popup{width:98%;}
  .reference-year-popup{width:96%;}
  .reference-year-buttons{grid-template-columns:1fr;}
  .video-mini{width:175px;right:6px;}
  #buttonPopId{width:96%;max-height:82vh;}
}
@media(max-width:350px){
  .step-label{display:none;}
  .step-indicator{width:18px;height:18px;font-size:.52rem;}
  .axp-nav-brand-text{display:none;}
}

.payment-overlay{display:none;position:fixed;inset:0;z-index:10700;align-items:center;justify-content:center;padding:12px;background:rgba(5,8,20,.72);}
.payment-overlay.show{display:flex;animation:payFade .2s ease;}
@keyframes payFade{from{opacity:0}to{opacity:1}}
.payment-popup{position:relative;background:#fff;width:100%;max-width:380px;max-height:calc(100vh - 24px);max-height:calc(100dvh - 24px);overflow-y:auto;overflow-x:hidden;border-radius:0;border:1px solid var(--border);scrollbar-width:thin;}
.payment-popup *{border-radius:0!important;}
.payment-header{padding:12px 14px 10px;text-align:center;color:#fff;background:var(--navy);border-bottom:3px solid var(--gold);}
.payment-logo{display:block;margin:0 auto 8px;}
.payment-logo .axl{display:block;width:auto;height:34px;margin:0 auto;}
.payment-header h2{color:#fff;font-size:.95rem;font-weight:800;margin:0 0 4px;letter-spacing:.2px;text-transform:none;}
.payment-header p{display:block;color:rgba(255,255,255,.85);font-size:.7rem;margin:0;padding:0;background:none;border:0;}
.payment-body{padding:12px 14px 12px;}
.payment-perks{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:10px;}
.payment-perk{display:flex;flex-direction:column;align-items:center;gap:4px;padding:7px 4px;text-align:center;font-size:.6rem;font-weight:700;line-height:1.3;color:var(--text2);background:#fff;border:1px solid var(--border);}
.payment-perk i{font-size:.95rem;color:var(--accent);background:none;width:auto;height:auto;}
.payment-info-box{display:flex;align-items:flex-start;gap:8px;background:var(--surface2);border:1px solid var(--border);padding:8px 10px;margin-bottom:10px;font-size:.66rem;color:var(--text2);line-height:1.5;}
.payment-info-box i{color:var(--accent);flex-shrink:0;margin-top:1px;font-size:.85rem;}
.payment-section-label{display:flex;align-items:center;justify-content:space-between;margin:0 0 6px;font-size:.64rem;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--text);}
.payment-section-label em{font-style:normal;font-weight:600;letter-spacing:0;text-transform:none;color:var(--text3);font-size:.62rem;}
.pay-row{position:relative;display:flex;align-items:center;gap:9px;padding:8px 10px;margin-bottom:6px;background:#fff;border:1.5px solid var(--border);cursor:pointer;}
.pay-row input{position:absolute;opacity:0;pointer-events:none;width:1px;height:1px;}
.pay-row.is-on{border-color:var(--accent);background:#f3f1ff;}
.pay-row.is-locked{cursor:default;}
.pay-check{flex:0 0 auto;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:.7rem;color:transparent;border:2px solid #c6c9ff;background:#fff;}
.pay-row.is-on .pay-check{color:#fff;background:var(--accent);border-color:var(--accent);}
.pay-info{flex:1;min-width:0;}
.pay-name{display:block;font-size:.75rem;font-weight:700;color:var(--text);line-height:1.3;}
.pay-tag{display:inline-block;margin-top:2px;font-size:.55rem;font-weight:800;letter-spacing:.6px;text-transform:uppercase;color:var(--accent);background:rgba(74,58,255,.1);padding:1px 5px;}
.pay-price{flex:0 0 auto;text-align:right;font-family:var(--mono);font-size:.76rem;font-weight:800;color:var(--navy);}
.pay-price small{display:block;font-size:.52rem;font-weight:600;color:var(--text3);letter-spacing:.4px;}
.pay-state{padding:10px;text-align:center;font-size:.72rem;color:var(--text3);border:1.5px dashed var(--border);margin-bottom:8px;}
.pay-state.is-error{color:#b4232a;border-color:#ffc9cf;background:#fff1f2;text-align:left;}
.pay-state a{font-weight:800;color:var(--accent);}
.payment-amount-display{text-align:center;color:#fff;padding:10px 12px;margin:10px 0 8px;background:var(--navy);border:1px solid var(--gold);}
.payment-amount-label{font-size:.6rem;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,.65);margin-bottom:2px;}
.payment-amount-value{font-size:1.5rem;font-weight:800;color:var(--gold);font-family:var(--mono);line-height:1.15;}
.payment-amount-period{font-size:.62rem;color:rgba(255,255,255,.65);margin-top:3px;line-height:1.4;}
.payment-user-info{display:grid;grid-template-columns:1fr 1fr;gap:3px 10px;background:var(--surface2);border:1px solid var(--border);padding:7px 10px;margin-bottom:10px;}
.payment-user-row{display:flex;align-items:center;gap:6px;font-size:.66rem;color:var(--text2);padding:1px 0;min-width:0;}
.payment-user-row span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.payment-user-row i{color:var(--accent);font-size:.75rem;flex-shrink:0;}
.payment-btn-row{display:grid;grid-template-columns:1fr 1.5fr;gap:8px;}
.payment-btn-cancel,.payment-btn-done{background:#fff;color:var(--text2);border:1.5px solid var(--border2);padding:10px;font-size:.74rem;font-weight:700;cursor:pointer;font-family:var(--font);display:flex;align-items:center;justify-content:center;gap:6px;}
.payment-btn-done{width:100%;}
.payment-btn-pay,.payment-btn-whatsapp{background:#25D366;color:#fff;border:none;padding:10px;font-size:.78rem;font-weight:800;cursor:pointer;font-family:var(--font);letter-spacing:.3px;text-transform:uppercase;display:flex;align-items:center;justify-content:center;gap:7px;}
.payment-btn-pay i,.payment-btn-whatsapp i{font-size:1rem;}
.payment-btn-whatsapp{width:100%;}
.payment-success-badge{display:flex;align-items:center;justify-content:center;gap:8px;padding:9px;margin-bottom:10px;font-size:.8rem;font-weight:800;color:#0f7a3a;background:#e9fff2;border:1px solid #a8e6c0;}
.payment-success-badge i{font-size:1.2rem;color:#16a34a;}
.payment-id-display{text-align:center;color:#fff;padding:12px 12px;margin-bottom:10px;background:var(--navy);border:2px dashed rgba(245,197,24,.7);}
.payment-id-label{font-size:.6rem;text-transform:uppercase;letter-spacing:2px;color:rgba(255,255,255,.6);margin-bottom:5px;}
.payment-id-value{font-size:2.2rem;font-weight:800;font-family:var(--mono);letter-spacing:7px;line-height:1;padding-left:7px;color:var(--gold);}
.payment-id-note{font-size:.62rem;color:rgba(255,255,255,.6);margin-top:6px;line-height:1.4;}
.payment-waiting-box{display:flex;align-items:flex-start;gap:9px;background:#fffbea;border:1px solid #f3dc8a;padding:8px 10px;margin-bottom:10px;font-size:.68rem;color:#6b4f00;line-height:1.45;}
.payment-waiting-box i{font-size:1.05rem;color:#f59e0b;flex-shrink:0;margin-top:1px;animation:spin 1.4s linear infinite;}
.payment-waiting-box strong{display:block;margin-bottom:2px;font-size:.74rem;}
.payment-waiting-box p{margin:0;}
.payment-whatsapp-retry{margin-bottom:8px;}
.payment-footer{padding:8px 14px;background:var(--surface2);border-top:1px solid var(--border);font-size:.64rem;color:var(--text3);text-align:center;}
.payment-footer::before{content:'\1F512  ';}
.payment-footer strong{color:#16a34a;}
@media(max-width:480px){
  .payment-overlay{padding:12px;align-items:center;}
  .payment-popup{max-width:340px;max-height:80vh;max-height:80dvh;}
  .payment-perks{display:none;}
  .payment-logo .axl{height:30px;}
  .payment-body{padding:10px 12px;}
  .payment-id-value{font-size:2rem;letter-spacing:6px;}
}
  
  @media(max-width:480px){
  #statusName{display:none!important;}
  .nav-pill{font-size:9px;padding:2px 7px;}
  .nav-action-btn{font-size:10px;padding:4px 8px;}
  .nav-action-btn.signin{padding:5px 9px;}
  .axp-nav{gap:6px;}
  .axp-nav-brand-text{font-size:12px;letter-spacing:1px;}
}
@media(max-width:380px){
  .nav-pill{max-width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .nav-action-btn span:not(.bi){display:none;}
}
  @media(max-width:600px){
  #statusName{font-size:10px!important;}
}
#statusName[data-short]::after{content:none;}
@media(max-width:500px){
  #statusName{display:none!important;}
}
  @media(max-width:420px){
  .badge-label{display:none;}
  .nav-pill{min-width:24px;justify-content:center;}
}
  
 .tlm-widget{border:1px solid var(--border);background:var(--surface);}
.tlm-search-wrap{display:flex;align-items:center;gap:6px;padding:7px 8px;border-bottom:1px solid var(--border);background:var(--surface2);}
.tlm-search-icon{color:var(--text3);font-size:.85rem;flex-shrink:0;}
.tlm-search-input{flex:1;border:none;outline:none;background:transparent;font-family:var(--font);font-size:.78rem;color:var(--text);}
.tlm-search-input::placeholder{color:var(--text3);}
.tlm-search-clear{background:none;border:none;cursor:pointer;color:var(--text3);font-size:.75rem;display:none;padding:2px 4px;}
.tlm-checkbox-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:2px;padding:6px;max-height:200px;overflow-y:auto;}
.tlm-checkbox-grid::-webkit-scrollbar{width:3px;}
.tlm-checkbox-grid::-webkit-scrollbar-thumb{background:var(--border2);}
.tlm-item{display:flex;align-items:center;gap:6px;padding:5px 7px;cursor:pointer;user-select:none;transition:background .12s;font-size:.75rem;color:var(--text2);border:1px solid transparent;}
.tlm-item.checked{background:rgba(74,58,255,.08);border-color:rgba(74,58,255,.25);color:var(--text);}
.tlm-item input[type="checkbox"]{display:none;}
.tlm-check-box{width:14px;height:14px;flex-shrink:0;border:1.5px solid var(--border2);background:var(--surface);display:flex;align-items:center;justify-content:center;transition:background .12s,border-color .12s;}
.tlm-item.checked .tlm-check-box{background:var(--accent);border-color:var(--accent);}
.tlm-check-icon{color:#fff;font-size:.55rem;display:none;}
.tlm-item.checked .tlm-check-icon{display:block;}
.tlm-item-icon{font-size:.8rem;color:var(--accent);flex-shrink:0;}
.tlm-item.checked .tlm-item-icon{color:var(--accent-dim);}
.tlm-no-results{grid-column:1/-1;text-align:center;padding:16px;color:var(--text3);font-size:.72rem;}
.tlm-chips-wrap{display:flex;flex-wrap:wrap;gap:4px;padding:6px 8px;min-height:34px;border-top:1px solid var(--border);border-bottom:1px solid var(--border);background:var(--surface);}
.tlm-chip{display:inline-flex;align-items:center;gap:4px;background:var(--accent);color:#fff;font-size:.62rem;font-weight:700;letter-spacing:.3px;padding:2px 7px 2px 8px;text-transform:uppercase;}
.tlm-chip-remove{background:rgba(255,255,255,.25);border:none;color:#fff;width:14px;height:14px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.6rem;flex-shrink:0;}
.tlm-chips-placeholder{font-size:.68rem;color:var(--text3);align-self:center;}
.tlm-manual-row{display:flex;align-items:center;gap:0;border-top:1px solid var(--border);background:var(--surface2);}
.tlm-manual-label{display:flex;align-items:center;gap:5px;padding:6px 9px;font-size:.62rem;font-weight:700;color:var(--text3);letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;border-right:1px solid var(--border);flex-shrink:0;}
.tlm-manual-input{flex:1;border:none;outline:none;background:transparent;font-family:var(--font);font-size:.78rem;color:var(--text);padding:7px 9px;}
.tlm-manual-input::placeholder{color:var(--text3);}
.tlm-manual-add{background:var(--accent);border:none;color:#fff;padding:6px 11px;font-size:.7rem;font-weight:700;cursor:pointer;letter-spacing:.4px;text-transform:uppercase;font-family:var(--font);white-space:nowrap;display:flex;align-items:center;gap:4px;flex-shrink:0;transition:background .12s;}
@media(max-width:500px){.tlm-checkbox-grid{grid-template-columns:repeat(auto-fill,minmax(110px,1fr));}}
  

.axp-native-select-offscreen{position:absolute!important;left:-99999px!important;width:1px;height:1px;opacity:1;}
.axp-combo-wrap{position:relative;}

.axp-combo-trigger{
  width:100%;display:flex;align-items:center;justify-content:space-between;
  padding:7px 10px;border:1px solid var(--border);font-size:.82rem;
  background:var(--surface2) url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%234A3AFF%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E") no-repeat right 9px center;
  background-size:16px;color:var(--text);font-family:var(--font);cursor:pointer;text-align:left;outline:none;
}
.axp-combo-trigger.open,.axp-combo-trigger:focus{border-color:var(--accent);background-color:var(--surface);}
.axp-combo-trigger:disabled{background-color:var(--surface3);color:var(--text3);cursor:not-allowed;}
.axp-combo-trigger-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;}
.axp-combo-trigger-text.placeholder{color:var(--text3);}
.axp-combo-arrow{display:none;}

.axp-combo-panel{
  display:none;position:absolute;top:100%;left:0;right:0;margin-top:2px;
  background:var(--surface);border:1px solid var(--border);z-index:50;
  
}
.axp-combo-panel.show{display:block;}

.axp-combo-search-wrap{display:flex;align-items:center;gap:6px;padding:7px 8px;border-bottom:1px solid var(--border);background:var(--surface2);}
.axp-combo-search-icon{color:var(--text3);font-size:.82rem;flex-shrink:0;}
.axp-combo-search-input{flex:1;border:none;outline:none;background:transparent;font-family:var(--font);font-size:.8rem;color:var(--text);}
.axp-combo-search-input::placeholder{color:var(--text3);}
.axp-combo-search-clear{background:none;border:none;cursor:pointer;color:var(--text3);font-size:.72rem;display:none;padding:2px 4px;}
.axp-combo-search-clear.show{display:block;}

.axp-combo-list{max-height:220px;overflow-y:auto;}
.axp-combo-item{padding:7px 10px;font-size:.8rem;color:var(--text);cursor:pointer;}.axp-combo-item.hl{background:var(--surface2);}
.axp-combo-item.selected{background:rgba(74,58,255,.08);color:var(--accent);font-weight:600;}
.axp-combo-empty{padding:14px 10px;font-size:.76rem;color:var(--text3);font-style:italic;text-align:center;}

/* Teaching & Learning resources: two searchable dropdowns (introduction + Stage 2 / last stage) */
.tlm-dual{display:flex;flex-direction:column;gap:12px;}
.tlm-dd-cap{font-size:.68rem;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.4px;margin-bottom:4px;}
.tlm-dd-hint{font-weight:500;text-transform:none;letter-spacing:0;}
.tlm-dd{position:relative;}
.axp-combo-trigger-text.tlm-dd-default{color:var(--text2);}
.tlm-dd.error .axp-combo-trigger{border-color:var(--red,#d33);}
.axp-combo-item.tlm-dd-custom{font-style:italic;color:var(--accent);}
</style>
</head>
<body>

<div class="loading" id="loadingIndicator" role="status" aria-live="polite" aria-label="Loading"><div class="axp-ld-logo" id="axpLdLogo"></div><div class="axp-ld-track" aria-hidden="true"></div><div class="axp-ld-ico" id="axpLdIco" aria-hidden="true"></div><div class="axp-ld-msg" id="axpLdMsg">Welcome back — signing you in</div></div>
<div id="sidebar-overlay"></div>

<div class="auth-overlay" id="authOverlay">
  <div class="auth-popup">
    <div class="auth-header">
      <button class="auth-close-btn" id="authCloseBtn"><i class="bi bi-x-lg"></i></button>
      <div class="auth-header-icon"><i class="bi bi-shield-lock-fill"></i></div>
      <h2>Sign In to Continue</h2>
      <p>Sign in with your Google account to use this system</p>
    </div>
    <div class="auth-body">
      <div class="auth-info-box">
        <i class="bi bi-info-circle-fill"></i>
        You can fill Step 1 without an account. Sign in with Google to continue to the remaining steps.
      </div>
      <div id="gsi-button-container" style="display:flex;justify-content:center;margin:8px 0 4px;min-height:44px;"></div>
      <button class="auth-google-btn" id="googleSignInBtn" style="display:none;">
        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google">
        Continue with Google
      </button>
      <div class="auth-divider">or</div>
      <div style="font-size:.7rem;color:var(--text3);text-align:center;line-height:1.6;">
        An account is created automatically &#x2014; no extra registration needed.
      </div>
    </div>
    <div class="auth-footer">
      Sign in to continue &#x2014; <strong>account required</strong> to use this system fully.
    </div>
  </div>
</div>

<div class="axp-dlg-overlay" id="axpDlgOverlay" role="dialog" aria-modal="true" aria-labelledby="axpDlgTitle">
  <div class="axp-dlg" id="axpDlg">
    <div class="axp-dlg-icon" id="axpDlgIcon"><i class="bi bi-check-circle-fill"></i></div>
    <h3 id="axpDlgTitle"></h3>
    <p id="axpDlgMsg"></p>
    <div class="axp-dlg-extra" id="axpDlgExtra"></div>
    <div class="axp-dlg-btns">
      <button type="button" class="axp-dlg-cancel" id="axpDlgCancel" style="display:none">Cancel</button>
      <button type="button" class="axp-dlg-ok" id="axpDlgOk">OK</button>
    </div>
  </div>
</div>

<div class="profile-overlay" id="profileOverlay">
  <div class="profile-popup">
    <div class="profile-header">
      <button class="profile-close" type="button" aria-label="Close" onclick="this.closest('.profile-overlay').click()"><i class="bi bi-x-lg"></i></button>
      <h2><i class="bi bi-person-fill"></i> My Account</h2>
      <p>Auto-filled into your lesson plans</p>
      <div class="profile-user-badge">
        <img id="profileAvatarImg" class="profile-avatar" src="" alt="" style="display:none">
        <div id="profileAvatarPlaceholder" class="profile-avatar-placeholder">?</div>
        <div class="profile-user-info">
          <div class="profile-user-name" id="profileUserName">&#x2014;</div>
          <div class="profile-user-email" id="profileUserEmail">&#x2014;</div>
        </div>
      </div>
    </div>
    <div class="profile-body">
      <div class="profile-note-box">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <span>Your details will be used to auto-fill lesson plans. <strong>Email address cannot be changed.</strong></span>
      </div>
      <div class="profile-form-group">
        <label>Full Name <span>*</span></label>
        <input type="text" id="profileFullName" placeholder="e.g. Juma Hassan Mwanga" autocomplete="name">
        <div class="profile-email-note" id="profileNameNote"><i class="bi bi-info-circle-fill"></i> <span>Use your real name. It will appear on your lesson plans.</span></div>
      </div>
      <div class="profile-form-group pf-half">
        <label>Phone Number <span>*</span></label>
        <input type="tel" id="profilePhone" placeholder="0712345678" autocomplete="tel">
      </div>
      <div class="profile-form-group pf-half">
        <label>District <span>*</span></label>
        <input type="text" id="profileDistrict" placeholder="e.g. Dodoma">
      </div>
      <div class="profile-form-group">
        <label>School Name <span>*</span></label>
        <input type="text" id="profileSchool" placeholder="e.g. Msalato Secondary School" autocomplete="organization">
      </div>
      <div class="profile-form-group pf-email">
        <label>Google Email (read-only)</label>
        <input type="email" id="profileEmail" readonly>
        <div class="profile-email-note"><i class="bi bi-lock-fill"></i> Email comes from Google and cannot be changed</div>
      </div>
      <div class="profile-form-group">
        <label>Subjects You Teach (Up to 3)</label>
        <div class="profile-subjects-wrap" id="profileSubjectsWrap">
          <div class="profile-subject-row">
            <select class="profile-subject-select"><option value="">Select Subject</option><option>Academic Communication</option><option>Accountancy</option><option>Advanced Mathematics</option><option>Agriculture</option><option>Basic Applied Mathematics</option><option>Mathematics</option><option>Biology</option><option>Book-Keeping</option><option>Business Studies</option><option>Chemistry</option><option>Computer Science</option><option>Divinity</option><option>Economics</option><option>Elimu ya Dini ya Kiislam</option><option>English Language</option><option>Fasihi ya Kiswahili</option><option>Geography</option><option>Historia Ya Tanzania na Maadili</option><option>History</option><option>Kiswahili</option><option>Literature In English</option><option>Physics</option><option>Sport Studies</option><option>Food and Human Nutrition</option><option>Textiles Garment Construction</option><option>Design,Sewing and Cloth Technology</option></select>
          </div>
        </div>
        <button class="profile-add-subject-btn" id="profileAddSubjectBtn" type="button"><i class="bi bi-plus-lg"></i> Add Subject</button>
      </div>
      <div class="profile-err" id="profileErr"></div>
      <button class="profile-save-btn" id="profileSaveBtn" type="button">
        <i class="bi bi-check-circle-fill"></i> Save &amp; Continue
      </button>
      <div class="profile-activation-section" id="profileActivationSection" style="display:none;">
        <h3><i class="bi bi-shield-check"></i> Next Step &#x2014; Activate Account</h3>
        <p>Thank you for completing your profile! To use this system fully, complete the activation process.</p>
        <a data-axp-pay-tel class="profile-activation-btn">
          <i class="bi bi-telephone-fill"></i> Contact: <span data-axp-pay="phone">&#x2026;</span>
        </a>
      </div>
    </div>
  </div>
</div>
  
<div class="payment-overlay" id="paymentOverlay">
  <div class="payment-popup">
    <div class="payment-header">
      <div class="payment-logo"><svg class="axl" viewBox="0 0 1260 650" role="img" aria-label="Academix Point.com" focusable="false" xmlns="http://www.w3.org/2000/svg"><path class="afill" d="M22 632 L96 612 L140 452 L230 430 V488 L296 470 L287 18 L208 40 Z M222 198 L166 384 L230 366 Z" fill-rule="evenodd" style="--d:0.6s"/><path class="ln in aout" d="M22 632 L96 612 L140 452 L230 430 V488 L296 470 L287 18 L208 40 Z M222 198 L166 384 L230 366 Z" pathLength="1" stroke-width="5" style="--d:0.1s"/><path class="ln wh" d="M229 322 L296 386 L232 462" pathLength="1" stroke-width="5" style="--d:0.6s"/><path class="ln in" d="M387 375 A50 50 0 1 0 387 445" pathLength="1" stroke-width="28" style="--d:0.30s"/><circle class="ln in" cx="462" cy="410" r="50" pathLength="1" stroke-width="28" style="--d:0.35s"/><path class="ln in" d="M511 346 V474" pathLength="1" stroke-width="28" style="--d:0.40s"/><circle class="ln in" cx="575" cy="410" r="50" pathLength="1" stroke-width="28" style="--d:0.45s"/><path class="ln in" d="M624 290 V474" pathLength="1" stroke-width="28" style="--d:0.50s"/><path class="ln in" d="M642 410 H742 A50 50 0 1 0 730 442" pathLength="1" stroke-width="28" style="--d:0.55s"/><path class="ln in" d="M774 346 V474" pathLength="1" stroke-width="28" style="--d:0.60s"/><path class="ln in" d="M774 388 A28 28 0 0 1 830 388 V474" pathLength="1" stroke-width="28" style="--d:0.65s"/><path class="ln in" d="M830 388 A28 28 0 0 1 886 388 V474" pathLength="1" stroke-width="28" style="--d:0.70s"/><path class="ln in" d="M925 346 V474" pathLength="1" stroke-width="28" style="--d:0.75s"/><circle class="dt in" cx="925" cy="305" r="18" style="--d:0.80s"/><path class="sw" d="M688 506 L932 456 L934 470 L785 526 Z" style="--d:0.85s"/><path class="ln og" d="M940 352 L1040 474" pathLength="1" stroke-width="28" style="--d:0.85s"/><path class="ln og" d="M1040 352 L940 474" pathLength="1" stroke-width="28" style="--d:0.90s"/><path class="ln in" d="M902 496 V558" pathLength="1" stroke-width="13" style="--d:0.95s"/><path class="ln in" d="M902 502 H924 A17 17 0 0 1 924 536 H902" pathLength="1" stroke-width="13" style="--d:1.00s"/><circle class="ln in" cx="972" cy="535" r="19" pathLength="1" stroke-width="13" style="--d:1.05s"/><path class="ln in" d="M1012 515 V558" pathLength="1" stroke-width="13" style="--d:1.10s"/><circle class="dt in" cx="1012" cy="498" r="7.5" style="--d:1.15s"/><path class="ln in" d="M1042 515 V558" pathLength="1" stroke-width="13" style="--d:1.20s"/><path class="ln in" d="M1042 530 A15 15 0 0 1 1072 530 V558" pathLength="1" stroke-width="13" style="--d:1.25s"/><path class="ln in" d="M1100 498 V548 Q1100 558 1110 558 H1116" pathLength="1" stroke-width="13" style="--d:1.30s"/><path class="ln in" d="M1089 515 H1116" pathLength="1" stroke-width="13" style="--d:1.35s"/><circle class="dt in" cx="1134" cy="550" r="7.5" style="--d:1.40s"/><path class="ln in" d="M1168 531 A12 12 0 1 0 1168 551" pathLength="1" stroke-width="6" style="--d:1.45s"/><circle class="ln in" cx="1192" cy="541" r="12" pathLength="1" stroke-width="6" style="--d:1.50s"/><path class="ln in" d="M1214 529 V557" pathLength="1" stroke-width="6" style="--d:1.55s"/><path class="ln in" d="M1214 538 A8 8 0 0 1 1230 538 V557" pathLength="1" stroke-width="6" style="--d:1.60s"/><path class="ln in" d="M1230 538 A8 8 0 0 1 1246 538 V557" pathLength="1" stroke-width="6" style="--d:1.65s"/></svg></div>
      <h2 id="paymentPopupTitle">Activate Your Account</h2>
      <p id="paymentPopupSubtitle">Pay Tshs <span data-axp-pay="lessonplanPrice">&#x2026;</span> for <span data-axp-pay="lessonplanPeriod">&#x2026;</span> full access</p>
    </div>
    <div class="payment-body">
      <div id="paymentStep1">
  <div class="payment-perks">
    <div class="payment-perk"><i class="bi bi-lightning-charge-fill"></i>Quick activation</div>
    <div class="payment-perk"><i class="bi bi-whatsapp"></i>Pay via WhatsApp</div>
    <div class="payment-perk"><i class="bi bi-shield-lock-fill"></i>Secure &amp; confirmed by admin</div>
  </div>
  <div class="payment-info-box">
    <i class="bi bi-info-circle-fill"></i>
    <span>Select what you'd like to activate. <strong>Lesson Plan access</strong> is required and always included. After clicking <strong>Pay Now</strong>, a Payment ID will be generated and you'll be redirected to WhatsApp.</span>
  </div>
  <div class="payment-section-label"><span>Your selection</span><em>Tap to add extras</em></div>
  <div id="paymentCartWrap"></div>
  <div class="payment-amount-display">
    <div class="payment-amount-label">Total to Pay</div>
    <div class="payment-amount-value">Tshs <span id="paymentCartTotal">&#x2026;</span></div>
    <div class="payment-amount-period">Lesson Plan: <span data-axp-pay="lessonplanPeriod">&#x2026;</span> &middot; Logbook/SOW: <span data-axp-pay="featurePeriod">&#x2026;</span></div>
  </div>
  <div class="payment-user-info" id="paymentUserInfo">
    <div class="payment-user-row"><i class="bi bi-person-fill"></i> <span id="payUserName">&#x2014;</span></div>
    <div class="payment-user-row"><i class="bi bi-envelope-fill"></i> <span id="payUserEmail">&#x2014;</span></div>
    <div class="payment-user-row"><i class="bi bi-telephone-fill"></i> <span id="payUserPhone">&#x2014;</span></div>
    <div class="payment-user-row"><i class="bi bi-building"></i> <span id="payUserSchool">&#x2014;</span></div>
  </div>
  <div class="payment-btn-row">
    <button class="payment-btn-cancel" id="paymentCancelBtn"><i class="bi bi-x-circle"></i> Cancel</button>
    <button class="payment-btn-pay" id="paymentPayBtn"><i class="bi bi-whatsapp"></i> Pay Now</button>
  </div>
</div>
      <div id="paymentStep2" style="display:none;">
        <div class="payment-success-badge">
          <i class="bi bi-check-circle-fill"></i>
          <span>Payment Request Sent!</span>
        </div>
        <div class="payment-id-display">
          <div class="payment-id-label">Your Payment ID</div>
          <div class="payment-id-value" id="generatedPaymentId">&#x2014;</div>
          <div class="payment-id-note">Save this ID &#x2014; admin will use it to activate your account</div>
        </div>
        <div class="payment-waiting-box">
          <i class="bi bi-hourglass-split"></i>
          <div>
            <strong>Waiting for activation...</strong>
            <p>Your account will be activated within a few minutes after payment is confirmed by admin.</p>
          </div>
        </div>
        <div class="payment-whatsapp-retry">
          <button class="payment-btn-whatsapp" id="paymentWhatsappRetryBtn"><i class="bi bi-whatsapp"></i> Open WhatsApp Again</button>
        </div>
        <button class="payment-btn-done" id="paymentDoneBtn"><i class="bi bi-x-circle"></i> Close &amp; Wait</button>
      </div>
    </div>
    <div class="payment-footer">
      Contact <strong data-axp-pay="phone">&#x2026;</strong> for any payment issues.
    </div>
  </div>
</div>
  
<div class="payment-overlay" id="featurePayOverlay">
  <div class="payment-popup">
    <div class="payment-header">
      <div class="payment-logo"><svg class="axl" viewBox="0 0 1260 650" role="img" aria-label="Academix Point.com" focusable="false" xmlns="http://www.w3.org/2000/svg"><path class="afill" d="M22 632 L96 612 L140 452 L230 430 V488 L296 470 L287 18 L208 40 Z M222 198 L166 384 L230 366 Z" fill-rule="evenodd" style="--d:0.6s"/><path class="ln in aout" d="M22 632 L96 612 L140 452 L230 430 V488 L296 470 L287 18 L208 40 Z M222 198 L166 384 L230 366 Z" pathLength="1" stroke-width="5" style="--d:0.1s"/><path class="ln wh" d="M229 322 L296 386 L232 462" pathLength="1" stroke-width="5" style="--d:0.6s"/><path class="ln in" d="M387 375 A50 50 0 1 0 387 445" pathLength="1" stroke-width="28" style="--d:0.30s"/><circle class="ln in" cx="462" cy="410" r="50" pathLength="1" stroke-width="28" style="--d:0.35s"/><path class="ln in" d="M511 346 V474" pathLength="1" stroke-width="28" style="--d:0.40s"/><circle class="ln in" cx="575" cy="410" r="50" pathLength="1" stroke-width="28" style="--d:0.45s"/><path class="ln in" d="M624 290 V474" pathLength="1" stroke-width="28" style="--d:0.50s"/><path class="ln in" d="M642 410 H742 A50 50 0 1 0 730 442" pathLength="1" stroke-width="28" style="--d:0.55s"/><path class="ln in" d="M774 346 V474" pathLength="1" stroke-width="28" style="--d:0.60s"/><path class="ln in" d="M774 388 A28 28 0 0 1 830 388 V474" pathLength="1" stroke-width="28" style="--d:0.65s"/><path class="ln in" d="M830 388 A28 28 0 0 1 886 388 V474" pathLength="1" stroke-width="28" style="--d:0.70s"/><path class="ln in" d="M925 346 V474" pathLength="1" stroke-width="28" style="--d:0.75s"/><circle class="dt in" cx="925" cy="305" r="18" style="--d:0.80s"/><path class="sw" d="M688 506 L932 456 L934 470 L785 526 Z" style="--d:0.85s"/><path class="ln og" d="M940 352 L1040 474" pathLength="1" stroke-width="28" style="--d:0.85s"/><path class="ln og" d="M1040 352 L940 474" pathLength="1" stroke-width="28" style="--d:0.90s"/><path class="ln in" d="M902 496 V558" pathLength="1" stroke-width="13" style="--d:0.95s"/><path class="ln in" d="M902 502 H924 A17 17 0 0 1 924 536 H902" pathLength="1" stroke-width="13" style="--d:1.00s"/><circle class="ln in" cx="972" cy="535" r="19" pathLength="1" stroke-width="13" style="--d:1.05s"/><path class="ln in" d="M1012 515 V558" pathLength="1" stroke-width="13" style="--d:1.10s"/><circle class="dt in" cx="1012" cy="498" r="7.5" style="--d:1.15s"/><path class="ln in" d="M1042 515 V558" pathLength="1" stroke-width="13" style="--d:1.20s"/><path class="ln in" d="M1042 530 A15 15 0 0 1 1072 530 V558" pathLength="1" stroke-width="13" style="--d:1.25s"/><path class="ln in" d="M1100 498 V548 Q1100 558 1110 558 H1116" pathLength="1" stroke-width="13" style="--d:1.30s"/><path class="ln in" d="M1089 515 H1116" pathLength="1" stroke-width="13" style="--d:1.35s"/><circle class="dt in" cx="1134" cy="550" r="7.5" style="--d:1.40s"/><path class="ln in" d="M1168 531 A12 12 0 1 0 1168 551" pathLength="1" stroke-width="6" style="--d:1.45s"/><circle class="ln in" cx="1192" cy="541" r="12" pathLength="1" stroke-width="6" style="--d:1.50s"/><path class="ln in" d="M1214 529 V557" pathLength="1" stroke-width="6" style="--d:1.55s"/><path class="ln in" d="M1214 538 A8 8 0 0 1 1230 538 V557" pathLength="1" stroke-width="6" style="--d:1.60s"/><path class="ln in" d="M1230 538 A8 8 0 0 1 1246 538 V557" pathLength="1" stroke-width="6" style="--d:1.65s"/></svg></div>
      <h2>Unlock Feature</h2>
      <p>Select the items you want to activate</p>
    </div>
    <div class="payment-body">
      <div id="featurePayStep1">
        <div class="payment-perks">
          <div class="payment-perk"><i class="bi bi-lightning-charge-fill"></i>Quick activation</div>
          <div class="payment-perk"><i class="bi bi-whatsapp"></i>Pay via WhatsApp</div>
          <div class="payment-perk"><i class="bi bi-shield-lock-fill"></i>Secure &amp; confirmed by admin</div>
        </div>
        <div class="payment-info-box">
          <i class="bi bi-info-circle-fill"></i>
          <span>Select the items below, then click <strong>Pay Now</strong>. A Payment ID will be generated and you'll be redirected to WhatsApp to confirm.</span>
        </div>
        <div class="payment-section-label"><span>Your selection</span><em>Tap to select</em></div>
        <div id="featurePayItemsWrap"></div>
        <div class="payment-amount-display">
          <div class="payment-amount-label">Total to Pay</div>
          <div class="payment-amount-value">Tshs <span id="featurePayTotal">0</span></div>
        </div>
        <div class="payment-btn-row">
          <button class="payment-btn-cancel" id="featurePayCancelBtn"><i class="bi bi-x-circle"></i> Cancel</button>
          <button class="payment-btn-pay" id="featurePayPayBtn"><i class="bi bi-whatsapp"></i> Pay Now</button>
        </div>
      </div>
      <div id="featurePayStep2" style="display:none;">
        <div class="payment-success-badge">
          <i class="bi bi-check-circle-fill"></i>
          <span>Payment Request Sent!</span>
        </div>
        <div class="payment-id-display">
          <div class="payment-id-label">Your Payment ID</div>
          <div class="payment-id-value" id="featurePayGeneratedId">&#x2014;</div>
          <div class="payment-id-note">Save this ID &#x2014; admin will use it to activate access</div>
        </div>
        <div class="payment-waiting-box">
          <i class="bi bi-hourglass-split"></i>
          <div>
            <strong>Waiting for activation...</strong>
            <p>Access will unlock automatically within a few minutes after payment is confirmed.</p>
          </div>
        </div>
        <div class="payment-whatsapp-retry">
          <button class="payment-btn-whatsapp" id="featurePayRetryWaBtn"><i class="bi bi-whatsapp"></i> Open WhatsApp Again</button>
        </div>
        <button class="payment-btn-done" id="featurePayDoneBtn"><i class="bi bi-x-circle"></i> Close &amp; Wait</button>
      </div>
    </div>
    <div class="payment-footer">
      Contact <strong data-axp-pay="phone">&#x2026;</strong> for any payment issues.
    </div>
  </div>
</div>

<div id="axp-app">
  <aside id="axp-sidebar">
    <div class="axp-logo">
      <div class="brand-full"><svg class="axl" viewBox="0 0 1260 650" role="img" aria-label="Academix Point.com" focusable="false" xmlns="http://www.w3.org/2000/svg"><path class="afill" d="M22 632 L96 612 L140 452 L230 430 V488 L296 470 L287 18 L208 40 Z M222 198 L166 384 L230 366 Z" fill-rule="evenodd" style="--d:0.6s"/><path class="ln in aout" d="M22 632 L96 612 L140 452 L230 430 V488 L296 470 L287 18 L208 40 Z M222 198 L166 384 L230 366 Z" pathLength="1" stroke-width="5" style="--d:0.1s"/><path class="ln wh" d="M229 322 L296 386 L232 462" pathLength="1" stroke-width="5" style="--d:0.6s"/><path class="ln in" d="M387 375 A50 50 0 1 0 387 445" pathLength="1" stroke-width="28" style="--d:0.30s"/><circle class="ln in" cx="462" cy="410" r="50" pathLength="1" stroke-width="28" style="--d:0.35s"/><path class="ln in" d="M511 346 V474" pathLength="1" stroke-width="28" style="--d:0.40s"/><circle class="ln in" cx="575" cy="410" r="50" pathLength="1" stroke-width="28" style="--d:0.45s"/><path class="ln in" d="M624 290 V474" pathLength="1" stroke-width="28" style="--d:0.50s"/><path class="ln in" d="M642 410 H742 A50 50 0 1 0 730 442" pathLength="1" stroke-width="28" style="--d:0.55s"/><path class="ln in" d="M774 346 V474" pathLength="1" stroke-width="28" style="--d:0.60s"/><path class="ln in" d="M774 388 A28 28 0 0 1 830 388 V474" pathLength="1" stroke-width="28" style="--d:0.65s"/><path class="ln in" d="M830 388 A28 28 0 0 1 886 388 V474" pathLength="1" stroke-width="28" style="--d:0.70s"/><path class="ln in" d="M925 346 V474" pathLength="1" stroke-width="28" style="--d:0.75s"/><circle class="dt in" cx="925" cy="305" r="18" style="--d:0.80s"/><path class="sw" d="M688 506 L932 456 L934 470 L785 526 Z" style="--d:0.85s"/><path class="ln og" d="M940 352 L1040 474" pathLength="1" stroke-width="28" style="--d:0.85s"/><path class="ln og" d="M1040 352 L940 474" pathLength="1" stroke-width="28" style="--d:0.90s"/><path class="ln in" d="M902 496 V558" pathLength="1" stroke-width="13" style="--d:0.95s"/><path class="ln in" d="M902 502 H924 A17 17 0 0 1 924 536 H902" pathLength="1" stroke-width="13" style="--d:1.00s"/><circle class="ln in" cx="972" cy="535" r="19" pathLength="1" stroke-width="13" style="--d:1.05s"/><path class="ln in" d="M1012 515 V558" pathLength="1" stroke-width="13" style="--d:1.10s"/><circle class="dt in" cx="1012" cy="498" r="7.5" style="--d:1.15s"/><path class="ln in" d="M1042 515 V558" pathLength="1" stroke-width="13" style="--d:1.20s"/><path class="ln in" d="M1042 530 A15 15 0 0 1 1072 530 V558" pathLength="1" stroke-width="13" style="--d:1.25s"/><path class="ln in" d="M1100 498 V548 Q1100 558 1110 558 H1116" pathLength="1" stroke-width="13" style="--d:1.30s"/><path class="ln in" d="M1089 515 H1116" pathLength="1" stroke-width="13" style="--d:1.35s"/><circle class="dt in" cx="1134" cy="550" r="7.5" style="--d:1.40s"/><path class="ln in" d="M1168 531 A12 12 0 1 0 1168 551" pathLength="1" stroke-width="6" style="--d:1.45s"/><circle class="ln in" cx="1192" cy="541" r="12" pathLength="1" stroke-width="6" style="--d:1.50s"/><path class="ln in" d="M1214 529 V557" pathLength="1" stroke-width="6" style="--d:1.55s"/><path class="ln in" d="M1214 538 A8 8 0 0 1 1230 538 V557" pathLength="1" stroke-width="6" style="--d:1.60s"/><path class="ln in" d="M1230 538 A8 8 0 0 1 1246 538 V557" pathLength="1" stroke-width="6" style="--d:1.65s"/></svg></div>
      <div class="axp-logo-sub">LESSON PLAN SYSTEM</div>
    </div>
    <div class="axp-nav-section">System</div>
    <button class="axp-nav-btn active" id="sb-lessonplan"><i class="bi bi-file-earmark-text-fill"></i> Lesson Plan</button>
    <div class="axp-nav-section">Other Syllabi</div>
    <a class="axp-nav-btn" href="https://www.academixpoint.com/p/create-lesson-plan-old-mode.html" target="_blank"><i class="bi bi-mortarboard-fill"></i> O-Level (Form IV)</a>
    <a class="axp-nav-btn" href="https://www.academixpoint.com/p/create-swahili-medium-lesson-plans.html" target="_blank"><i class="bi bi-translate"></i> Primary (Kiswahili)</a>
    <a class="axp-nav-btn" href="https://www.academixpoint.com/p/create-english-medium-lesson-plans.html" target="_blank"><i class="bi bi-globe"></i> Primary (English)</a>
    <div class="axp-nav-section">Help &amp; Info</div>
    <button class="axp-nav-btn" id="sb-video"><i class="bi bi-play-circle-fill"></i> Video Tutorial</button>
    <button class="axp-nav-btn" id="sb-howto"><i class="bi bi-info-circle-fill"></i> How the System Works</button>
    <button class="axp-nav-btn" id="sb-steps"><i class="bi bi-list-ol"></i> Steps to Create LP</button>
    <button class="axp-nav-btn" id="sb-contact"><i class="bi bi-telephone-fill"></i> Contact Us</button>
    <button class="axp-nav-btn" id="sb-refyear"><i class="bi bi-calendar3"></i> Reference Year Settings</button>
    <button class="axp-nav-btn" id="sb-savedplans"><i class="bi bi-folder-fill"></i> My Saved Plans</button>
    <div class="axp-nav-section">Samples</div>
    <button class="axp-nav-btn" id="sb-samplesow"><i class="bi bi-journal-text"></i> Sample Scheme of Work</button>
    <button class="axp-nav-btn" id="sb-samplelp"><i class="bi bi-file-earmark-richtext"></i> Sample Lesson Plan</button>
    <button class="axp-nav-btn" id="sb-samplelogbook"><i class="bi bi-book-half"></i> Sample Logbook</button>
    <div class="axp-nav-section">Account</div>
    <button class="axp-nav-btn" id="sb-agent" style="display:none;"><i class="bi bi-people-fill"></i> Grant Access</button>
    <button class="axp-nav-btn" id="sb-myaccess"><i class="bi bi-patch-check-fill"></i> My Access &amp; Activations</button>
    <button class="axp-nav-btn" id="sb-profile"><i class="bi bi-person-circle"></i> Edit My Profile</button>
    <button class="axp-nav-btn" id="sb-settings"><i class="bi bi-gear-fill"></i> Settings</button>
    <div class="axp-sidebar-spacer"></div>
    <div class="sidebar-pay-box" id="sidebarPayBox" style="display:none;">
      <h4><i class="bi bi-shield-check"></i> Activate Your Account</h4>
      <span class="sidebar-pay-amount">Tshs <span data-axp-pay="lessonplanPrice">&#x2026;</span></span>
      <span class="sidebar-pay-period">for <span data-axp-pay="lessonplanPeriod">&#x2026;</span> &#x2014; Full system access</span>
      <button class="sidebar-pay-btn" id="sidebarPayBtn"><i class="bi bi-shield-fill-check"></i> Activate Now</button>
    </div>
    <div class="axp-sidebar-bottom">
      <div style="font-size:9px;color:var(--text3);letter-spacing:.5px;text-align:center;">&copy; AcademixPoint &bull; Tanzania</div>
    </div>
  </aside>

  <div id="axp-main-wrap">
    <nav id="axp-nav">
      <button id="axp-toggle-btn" aria-label="Toggle sidebar" aria-controls="axp-sidebar"><svg class="axp-tgl" viewBox="0 0 24 24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><rect class="frame" x="3" y="4.5" width="18" height="15" rx="4.5"/><rect class="pane" x="6.5" y="8" width="3" height="8" rx="1.5"/></svg></button>
      <a class="axp-nav-brand" href="#">
        <svg class="axl" viewBox="0 0 1260 650" role="img" aria-label="Academix Point.com" focusable="false" xmlns="http://www.w3.org/2000/svg"><path class="afill" d="M22 632 L96 612 L140 452 L230 430 V488 L296 470 L287 18 L208 40 Z M222 198 L166 384 L230 366 Z" fill-rule="evenodd" style="--d:0.6s"/><path class="ln in aout" d="M22 632 L96 612 L140 452 L230 430 V488 L296 470 L287 18 L208 40 Z M222 198 L166 384 L230 366 Z" pathLength="1" stroke-width="5" style="--d:0.1s"/><path class="ln wh" d="M229 322 L296 386 L232 462" pathLength="1" stroke-width="5" style="--d:0.6s"/><path class="ln in" d="M387 375 A50 50 0 1 0 387 445" pathLength="1" stroke-width="28" style="--d:0.30s"/><circle class="ln in" cx="462" cy="410" r="50" pathLength="1" stroke-width="28" style="--d:0.35s"/><path class="ln in" d="M511 346 V474" pathLength="1" stroke-width="28" style="--d:0.40s"/><circle class="ln in" cx="575" cy="410" r="50" pathLength="1" stroke-width="28" style="--d:0.45s"/><path class="ln in" d="M624 290 V474" pathLength="1" stroke-width="28" style="--d:0.50s"/><path class="ln in" d="M642 410 H742 A50 50 0 1 0 730 442" pathLength="1" stroke-width="28" style="--d:0.55s"/><path class="ln in" d="M774 346 V474" pathLength="1" stroke-width="28" style="--d:0.60s"/><path class="ln in" d="M774 388 A28 28 0 0 1 830 388 V474" pathLength="1" stroke-width="28" style="--d:0.65s"/><path class="ln in" d="M830 388 A28 28 0 0 1 886 388 V474" pathLength="1" stroke-width="28" style="--d:0.70s"/><path class="ln in" d="M925 346 V474" pathLength="1" stroke-width="28" style="--d:0.75s"/><circle class="dt in" cx="925" cy="305" r="18" style="--d:0.80s"/><path class="sw" d="M688 506 L932 456 L934 470 L785 526 Z" style="--d:0.85s"/><path class="ln og" d="M940 352 L1040 474" pathLength="1" stroke-width="28" style="--d:0.85s"/><path class="ln og" d="M1040 352 L940 474" pathLength="1" stroke-width="28" style="--d:0.90s"/><path class="ln in" d="M902 496 V558" pathLength="1" stroke-width="13" style="--d:0.95s"/><path class="ln in" d="M902 502 H924 A17 17 0 0 1 924 536 H902" pathLength="1" stroke-width="13" style="--d:1.00s"/><circle class="ln in" cx="972" cy="535" r="19" pathLength="1" stroke-width="13" style="--d:1.05s"/><path class="ln in" d="M1012 515 V558" pathLength="1" stroke-width="13" style="--d:1.10s"/><circle class="dt in" cx="1012" cy="498" r="7.5" style="--d:1.15s"/><path class="ln in" d="M1042 515 V558" pathLength="1" stroke-width="13" style="--d:1.20s"/><path class="ln in" d="M1042 530 A15 15 0 0 1 1072 530 V558" pathLength="1" stroke-width="13" style="--d:1.25s"/><path class="ln in" d="M1100 498 V548 Q1100 558 1110 558 H1116" pathLength="1" stroke-width="13" style="--d:1.30s"/><path class="ln in" d="M1089 515 H1116" pathLength="1" stroke-width="13" style="--d:1.35s"/><circle class="dt in" cx="1134" cy="550" r="7.5" style="--d:1.40s"/><path class="ln in" d="M1168 531 A12 12 0 1 0 1168 551" pathLength="1" stroke-width="6" style="--d:1.45s"/><circle class="ln in" cx="1192" cy="541" r="12" pathLength="1" stroke-width="6" style="--d:1.50s"/><path class="ln in" d="M1214 529 V557" pathLength="1" stroke-width="6" style="--d:1.55s"/><path class="ln in" d="M1214 538 A8 8 0 0 1 1230 538 V557" pathLength="1" stroke-width="6" style="--d:1.60s"/><path class="ln in" d="M1230 538 A8 8 0 0 1 1246 538 V557" pathLength="1" stroke-width="6" style="--d:1.65s"/></svg>
      </a>
      <div class="axp-nav-spacer"></div>
      <span id="statusBadge" class="nav-pill guest"><i class="bi bi-person-circle"></i> Guest</span>
      <span id="statusName" style="display:none;font-size:11px;color:rgba(255,255,255,.7);"></span>
      <div id="statusActions">
        <button class="nav-action-btn signin" id="statusSignInBtn"><i class="bi bi-google"></i> Sign In</button>
      </div>
    </nav>

    <div id="axp-content">
      <div class="content-inner">

        <div class="main-panel active" id="panel-lessonplan">
          <div class="activation-banner" id="paymentNoticeBar">
            <i class="bi bi-shield-exclamation"></i>
            <div class="activation-banner-text">
              Your account is not yet fully activated. <strong>Contact us</strong> to complete the process and get full access.
            </div>
            <button class="activation-banner-btn" onclick="showPaymentPopup('pending')"><i class="bi bi-arrow-right-circle-fill"></i> Details</button>
          </div>
          <div class="page-header">
            <div class="page-header-inner">
              <div class="header-badge"><i class="bi bi-mortarboard-fill"></i> Tanzania &mdash; New Syllabus Platform</div>
              <h1>Lesson Plan Generator<span class="header-cursor"></span></h1>
              <p>Create your own lesson plan (New Syllabus &mdash; Form I, II, III, V &amp; VI)</p>
              <div class="header-stats">
                <div class="header-stat"><i class="bi bi-shield-check-fill"></i> Secure</div>
                <div class="header-stat"><i class="bi bi-file-earmark-pdf-fill"></i> PDF</div>
                <div class="header-stat"><i class="bi bi-lightning-charge-fill"></i> Instant</div>
                <div class="header-stat"><i class="bi bi-translate"></i> EN &amp; SW</div>
              </div>
            </div>
            <div class="header-ticker">
              <div class="header-ticker-track">
                <span class="header-ticker-item"><span class="ticker-dot"></span> LESSON PLAN &mdash; NEW SYLLABUS <i class="bi bi-star-fill ticker-star"></i></span>
                <span class="header-ticker-item"><span class="ticker-dot"></span> FORM I &bull; FORM II &bull; FORM III &bull; FORM V &bull; FORM VI <i class="bi bi-star-fill ticker-star"></i></span>
                <span class="header-ticker-item"><span class="ticker-dot"></span> TUMEBORESHA &mdash; EDUCATIONAL PLATFORM <i class="bi bi-star-fill ticker-star"></i></span>
                <span class="header-ticker-item"><span class="ticker-dot"></span> MPANGO WA SOMO &mdash; MTAALA MPYA <i class="bi bi-star-fill ticker-star"></i></span>
                <span class="header-ticker-item"><span class="ticker-dot"></span> LESSON PLAN &mdash; NEW SYLLABUS <i class="bi bi-star-fill ticker-star"></i></span>
                <span class="header-ticker-item"><span class="ticker-dot"></span> FORM I &bull; FORM II &bull; FORM III &bull; FORM V &bull; FORM VI <i class="bi bi-star-fill ticker-star"></i></span>
                <span class="header-ticker-item"><span class="ticker-dot"></span> TUMEBORESHA &mdash; EDUCATIONAL PLATFORM <i class="bi bi-star-fill ticker-star"></i></span>
                <span class="header-ticker-item"><span class="ticker-dot"></span> MPANGO WA SOMO &mdash; MTAALA MPYA <i class="bi bi-star-fill ticker-star"></i></span>
              </div>
            </div>
          </div>

          <div class="video-section" id="videoSectionWrap" style="display:none;">
            <button type="button" class="video-toggle-btn" id="videoToggleBtn">
              <i class="bi bi-play-circle-fill"></i>
              <span class="btn-label"><span>Watch Tutorial Video</span><span class="btn-sub">Jinsi ya kutumia mfumo huu &mdash; Swahili</span></span>
            </button>
            <div class="video-container" id="videoContainer">
              <div class="video-player-bar">
                <div class="video-player-title"><i class="bi bi-play-circle-fill"></i><span class="video-player-title-full">Tutorial &mdash; New Syllabus Lesson Plan</span><span class="video-player-title-short">Tutorial</span></div>
                <div class="video-player-controls">
                  <button class="video-ctrl-btn video-ctrl-pause" id="videoPauseBtn"><i class="bi bi-pause-fill" id="pauseIcon"></i><span id="pauseLabel">Pause</span></button>
                  <button class="video-ctrl-btn video-ctrl-close" id="videoCloseBtn"><i class="bi bi-x-lg"></i> Close</button>
                </div>
              </div>
              <div class="video-wrapper"><div id="youtubePlayer"></div></div>
            </div>
          </div>
          <div class="video-mini" id="videoMini">
            <div class="video-mini-bar">
              <div class="video-mini-label"><i class="bi bi-play-fill"></i> Now Playing</div>
              <div class="video-mini-controls">
                <button class="video-mini-btn" id="miniPauseBtn"><i class="bi bi-pause-fill" id="miniPauseIcon"></i></button>
                <button class="video-mini-btn close-mini" id="miniCloseBtn"><i class="bi bi-x-lg"></i></button>
              </div>
            </div>
            <div class="video-mini-frame"><div id="youtubeMiniPlayer"></div></div>
            <button class="video-mini-expand" id="miniExpandBtn"><i class="bi bi-arrows-fullscreen"></i> Expand</button>
          </div>
          
          <div id="quickSowLogbookBar" style="display:none;padding:10px 16px;background:var(--surface);border-bottom:1px solid var(--border);gap:8px;">
  <button type="button" class="sow-tool-btn accent" id="quickSowBtn" style="flex:1;justify-content:center;">
    <i class="bi bi-journal-text"></i> Scheme of Work
  </button>
  <button type="button" class="sow-tool-btn primary" id="quickLogbookBtn" style="flex:1;justify-content:center;">
    <i class="bi bi-book-half"></i> Logbook
  </button>
</div>

          <div class="progress-container">
            <div class="progress-meta">
              <div class="progress-step-info" id="stepInfoLabel">Step 1 of 5 &mdash; Teacher Info</div>
              <div class="progress-pct" id="stepPctLabel">0% Complete</div>
            </div>
            <div class="progress-pct-bar"><div class="progress-pct-fill" id="progressPctFill"></div></div>
            <div class="progress-bar">
              <div class="progress-line"><div class="progress-fill" id="progressFill"></div></div>
              <div class="step-indicator active" data-step="1">1</div>
              <div class="step-indicator" data-step="2">2</div>
              <div class="step-indicator" data-step="3">3</div>
              <div class="step-indicator" data-step="4">4</div>
              <div class="step-indicator" data-step="5">5</div>
            </div>
            <div class="step-labels">
              <div class="step-label active">Teacher Info</div>
              <div class="step-label">Schedule</div>
              <div class="step-label">Syllabus</div>
              <div class="step-label">Students</div>
              <div class="step-label">Lesson Plan</div>
            </div>
          </div>

          <div id="myAccessMini" style="display:none;margin:0 0 12px;"></div>

          <div class="form-content">
            <form id="lessonPlanForm" novalidate>
              <div class="step active" data-step="1">
                <h2 class="step-title">Teacher Information</h2>
                <p class="step-description">Please provide your basic information to get started.</p>
                <div class="form-group"><label for="school">School Name *</label><input type="text" id="school" name="school" autocomplete="organization" required><div class="error-message">Please enter school name</div></div>
                <div class="form-group"><label for="teacherName">Teacher's Name *</label><input type="text" id="teacherName" name="teacherName" autocomplete="name" required><div class="error-message">Please enter teacher's name</div></div>
                <div class="form-group"><label for="dateOption">Date Option *</label><select id="dateOption" name="dateOption" required><option value="">Select Option</option><option value="set" selected>Set Date</option><option value="notset">Leave Blank</option></select><div class="error-message">Please select date option</div></div>
                <div class="form-group" id="dateField"><label for="date">Date</label><input type="date" id="date" name="date"><div class="error-message">Please select a date</div></div>
              </div>
              <div class="step" data-step="2">
                <h2 class="step-title">Schedule Information</h2>
                <p class="step-description">Set up your lesson schedule and timing.</p>
                <div class="auth-nudge" id="authNudgeStep2"><i class="bi bi-shield-lock-fill"></i> <strong>This step requires an account.</strong> Sign in with Google to continue.<br><button class="auth-nudge-btn" id="authNudgeBtn2"><i class="bi bi-google"></i> Sign in with Google</button></div>
                <div class="form-group"><label for="classes">Class *</label><select id="classes" name="classes" required><option value="">Loading...</option></select><div class="error-message">Please select a class</div></div>
<div class="form-row">
  <div class="form-group">
  <label for="subjectDisplayBtn">Subject *</label>
  <div class="axp-combo-wrap" id="subjectComboWrap">
    <button type="button" class="axp-combo-trigger" id="subjectDisplayBtn">
      <span id="subjectDisplayText" class="axp-combo-trigger-text">Select Subject</span>
      <i class="bi bi-chevron-down axp-combo-arrow"></i>
    </button>
    <div class="axp-combo-panel" id="subjectComboPanel">
      <div class="axp-combo-search-wrap">
        <i class="bi bi-search axp-combo-search-icon"></i>
        <input type="text" id="subjectComboSearch" class="axp-combo-search-input" placeholder="Search subject&#x2026;" autocomplete="off">
        <button type="button" class="axp-combo-search-clear" id="subjectComboClear" title="Clear"><i class="bi bi-x-lg"></i></button>
      </div>
      <div class="axp-combo-list" id="subjectComboList"></div>
    </div>
  </div>
  <select id="subject" name="subject" required class="axp-native-select-offscreen"><option value="">Loading...</option></select>
  <div class="error-message">Please select a subject</div>
</div>
  <div class="form-group"><label for="streams">Stream *</label><input type="text" id="streams" name="streams" list="streamsList" placeholder="Type or select stream" required><datalist id="streamsList"></datalist><div class="error-message">Please enter or select a stream</div></div>
</div>
                <div class="form-group"><label for="period">Number of Periods *</label><select id="period" name="period" required><option value="">Loading...</option></select><div class="error-message">Please select number of periods</div></div>
                <div id="customDurationFields">
                  <div class="form-row">
                    <div class="form-group"><label for="customMinutes">Total Minutes *</label><input type="number" id="customMinutes" name="customMinutes" min="1" max="200" placeholder="Enter total minutes"><div class="error-message">Please enter total minutes</div></div>
                    <div class="form-group"><label for="periodType">Period Type *</label><select id="periodType" name="periodType"><option value="">Select Type</option><option value="single">Single Period</option><option value="double">Double Period</option></select><div class="error-message">Please select period type</div></div>
                  </div>
                </div>
                <div id="customDistributionFields">
                  <div class="notice" style="background:var(--surface2);border-color:var(--border);border-left-color:var(--accent);"><i class="bi bi-info-circle-fill notice-icon" style="color:var(--accent);"></i><span><strong>Note:</strong> The sum of all stages must equal the total duration.</span></div>
                  <div class="form-group"><label for="distributionType">Session Type *</label><select id="distributionType" name="distributionType"><option value="">Select Type</option><option value="single">Single Period (40 Minutes)</option><option value="double">Double Period (80 Minutes)</option><option value="custom">Custom Minutes</option></select><div class="error-message">Please select session type</div></div>
                  <div class="form-group" id="customTotalMinutesField" style="display:none;"><label for="customTotalMinutes">Total Minutes *</label><input type="number" id="customTotalMinutes" name="customTotalMinutes" min="1" max="200" placeholder="Enter total minutes (e.g., 60)"><div class="error-message">Please enter total minutes</div></div>
                  <div class="form-row">
                    <div class="form-group"><label for="introMinutes">Introduction (Minutes) *</label><input type="number" id="introMinutes" name="introMinutes" min="1" max="80" placeholder="e.g., 10"><div class="error-message">Please enter introduction minutes</div></div>
                    <div class="form-group"><label for="developmentMinutes">Development (Minutes) *</label><input type="number" id="developmentMinutes" name="developmentMinutes" min="1" max="80" placeholder="e.g., 40"><div class="error-message">Please enter development minutes</div></div>
                  </div>
                  <div class="form-row">
                    <div class="form-group"><label for="designMinutes">Design (Minutes) *</label><input type="number" id="designMinutes" name="designMinutes" min="1" max="80" placeholder="e.g., 15"><div class="error-message">Please enter design minutes</div></div>
                    <div class="form-group"><label for="realizationMinutes">Realization (Minutes) *</label><input type="number" id="realizationMinutes" name="realizationMinutes" min="1" max="80" placeholder="e.g., 15"><div class="error-message">Please enter realization minutes</div></div>
                  </div>
                  <div class="form-group"><div id="distributionTotal" style="padding:9px;background:var(--surface2);font-weight:600;text-align:center;font-size:.8rem;border:1px solid var(--border);">Total: <span id="totalMinutesCalc">0</span> minutes<span id="distributionWarning" style="color:var(--red);display:none;margin-left:10px;"><i class="bi bi-exclamation-triangle-fill"></i> Total must be <span id="requiredTotal">0</span> minutes</span></div></div>
                </div>
                <div class="form-row">
                  <div class="form-group"><label for="hourCodes">Starting Hour *</label><select id="hourCodes" name="hourCodes" required><option value="">Loading...</option></select><div class="error-message">Please select starting hour</div></div>
                  <div class="form-group"><label for="minCodes">Starting Minutes *</label><select id="minCodes" name="minCodes" required><option value="">Loading...</option></select><div class="error-message">Please select starting minutes</div></div>
                </div>
              </div>
              <div class="step" data-step="3">
                <h2 class="step-title">Syllabus Information</h2>
                <p class="step-description">Configure your lesson content based on the syllabus.</p>
                <div class="notice"><i class="bi bi-exclamation-triangle-fill notice-icon"></i><span><strong>Note:</strong> In specific activity, avoid action verbs like "explain" &#x2014; select them in step 5.</span></div>
                <div class="form-group"><label for="topicLesson">Main Competence *</label><select id="topicLesson" name="topicLesson" required><option value="">Select Topic</option></select><div class="error-message">Please select a topic</div></div>
                <div class="form-group"><label for="compLesson">Specific Competence *</label><select id="compLesson" name="compLesson" required><option value="">Select Competence</option></select><div class="error-message">Please select competence</div></div>
                <div class="form-group"><label for="mainlesson">Main Activity *</label><select id="mainlesson" name="mainlesson" required><option value="">Select Main Lesson</option></select><div class="error-message">Please select main lesson</div></div>
                <div class="form-group"><label for="specificLesson">Specific Learning Activity *</label><input type="text" id="specificLesson" name="specificLesson" placeholder="Enter specific activity" required><div class="error-message">Please enter specific activity</div></div>
                <div class="form-group"><label for="tlmaterials">Teaching &amp; Learning Materials *</label>
<div class="tlm-dual" id="tlmDual">
<div><div class="tlm-dd-cap" id="tlmCap1">Resource for Introduction and Stage 2</div><div id="tlmDD1Host"></div></div>
<div><div class="tlm-dd-cap" id="tlmCap2">Resource for the last stage <span class="tlm-dd-hint">&#x2014; if you choose none, each student picks a card</span></div><div id="tlmDD2Host"></div></div>
</div>
<div class="tlm-widget" id="tlmWidget" style="display:none" aria-hidden="true">
  <div class="tlm-search-wrap">
    <i class="bi bi-search tlm-search-icon"></i>
    <input type="text" class="tlm-search-input" id="tlmSearch" placeholder="Search materials&#x2026;" autocomplete="off">
    <button class="tlm-search-clear" id="tlmSearchClear" title="Clear search" type="button"><i class="bi bi-x-lg"></i></button>
  </div>
  <div class="tlm-checkbox-grid" id="tlmGrid"></div>
  <div class="tlm-chips-wrap" id="tlmChips">
    <span class="tlm-chips-placeholder" id="tlmPlaceholder">No materials selected yet</span>
  </div>
  <div class="tlm-manual-row">
    <span class="tlm-manual-label"><i class="bi bi-pencil-fill"></i> Custom</span>
    <input type="text" class="tlm-manual-input" id="tlmManualInput" placeholder="Type any other material and press Add&#x2026;" autocomplete="off">
    <button class="tlm-manual-add" id="tlmManualAdd" type="button"><i class="bi bi-plus-lg"></i> Add</button>
  </div>
</div>
<input type="text" id="tlmaterials" name="tlmaterials" required style="display:none">
<input type="hidden" id="tlmaterials2" name="tlmaterials2" value="">
<div class="error-message">Please select a teaching and learning resource for the introduction and Stage 2</div></div>
                <div class="form-group"><label for="refLesson">Reference *</label><select id="refLesson" name="refLesson" required><option value="">Select Reference</option></select><div class="error-message">Please select reference</div></div>
              </div>
              <div class="step" data-step="4">
                <h2 class="step-title">Students Information</h2>
                <p class="step-description">Enter information about your students.</p>
                <div class="form-group"><label for="studentsOption">Students Information Option *</label><select id="studentsOption" name="studentsOption" required><option value="">Select Option</option><option value="set" selected>Enter Student Numbers</option><option value="notset">Leave Blank</option></select><div class="error-message">Please select students option</div></div>
                <div id="studentsFields">
                  <div class="form-row">
                    <div class="form-group"><label for="femaleReg">Registered Girls</label><input type="number" id="femaleReg" name="femaleReg" min="0" max="10000"><div class="error-message">Please enter number of registered girls</div></div>
                    <div class="form-group"><label for="maleReg">Registered Boys</label><input type="number" id="maleReg" name="maleReg" min="0" max="10000"><div class="error-message">Please enter number of registered boys</div></div>
                  </div>
                  <div class="form-row">
                    <div class="form-group"><label for="femalePres">Girls Present</label><input type="number" id="femalePres" name="femalePres" min="0" max="10000"><div class="error-message">Please enter number of girls present</div></div>
                    <div class="form-group"><label for="malePres">Boys Present</label><input type="number" id="malePres" name="malePres" min="0" max="10000"><div class="error-message">Please enter number of boys present</div></div>
                  </div>
                </div>
              </div>
              <div class="step" data-step="5">
                <h2 class="step-title">Lesson Plan Details</h2>
                <p class="step-description">Final details for your lesson plan.</p>
                <div class="form-group"><label for="wrdImp1">Introduction Type *</label><select id="wrdImp1" name="wrdImp1" required><option value="">Loading...</option></select><div class="error-message">Please select introduction type</div></div>
                <div class="form-group" id="previousLessonField" style="display:none;">
  <label for="previousLesson">Previous Lesson Topic (optional)</label>
  <input type="text" id="previousLesson" name="previousLesson" placeholder="What was covered in the previous lesson (optional)">
</div>
                <div class="form-group"><label for="wrdImp2">Action Word *</label><select id="wrdImp2" name="wrdImp2" required><option value="">Loading...</option></select><div class="error-message">Please select action word</div></div>
                <div class="form-group"><label for="remarkOption">Remarks Option *</label><select id="remarkOption" name="remarkOption" required><option value="">Select Option</option><option value="auto" selected>Auto-Generate Remarks</option><option value="custom">Write My Own Remarks</option><option value="blank">Leave Blank</option></select><div class="error-message">Please select remarks option</div></div>
                <div class="form-group" id="customRemarkField" style="display:none;"><label for="customRemark">Your Remarks</label><textarea id="customRemark" name="customRemark" rows="4" style="width:100%;padding:10px;border:1px solid var(--border);font-size:.85rem;font-family:var(--font);background:var(--surface2);color:var(--text);outline:none;resize:vertical;"></textarea></div>
              </div>
              <div class="buttons">
                <button type="button" class="btn btn-secondary" id="prevBtn" style="display:none;">Previous</button>
                <button type="button" class="btn btn-primary" id="nextBtn">Next</button>
                <button type="submit" class="btn btn-primary" id="submit-lesson-plan" style="display:none;">Create Lesson Plan</button>
              </div>
            </form>
          </div>
        </div>

        <div class="main-panel" id="panel-profile">
          <div class="panel-header">
            <button class="panel-back" onclick="showPanel('lessonplan')"><i class="bi bi-arrow-left"></i> Back</button>
            <h2><i class="bi bi-person-circle"></i> Edit My Profile</h2>
            <p>Update your personal information. Email address cannot be changed.</p>
          </div>
          <div class="panel-body">
            <div class="panel-section-title">Personal Information</div>
            <div class="form-group"><label>Full Name *</label><input type="text" id="editFullName" placeholder="e.g. Juma Hassan Mwanga" autocomplete="name"><div id="editNameNote" style="font-size:.72rem;color:var(--text3);margin-top:4px;line-height:1.4;"></div></div>
            <div class="form-group"><label>Phone Number *</label><input type="tel" id="editPhone" placeholder="e.g. 0712345678" autocomplete="tel"></div>
            <div class="form-group"><label>School Name *</label><input type="text" id="editSchool" placeholder="e.g. Msalato Secondary School" autocomplete="organization"><div id="editSchoolNote" style="font-size:.72rem;color:var(--text3);margin-top:4px;line-height:1.4;"></div></div>
            <div class="form-group"><label>District *</label><input type="text" id="editDistrict" placeholder="e.g. Dodoma, Arusha, Mwanza..."></div>
            <div class="form-group"><label>Google Email &#x2014; Read Only</label><input type="email" id="editEmail" readonly style="background:var(--surface3);color:var(--text3);cursor:not-allowed;"></div>
            <div class="panel-section-title">Subjects You Teach (Up to 3)</div>
            <div class="profile-subjects-wrap" id="editSubjectsWrap">
              <div class="profile-subject-row"><select class="edit-subject-select"><option value="">Select Subject</option><option>Academic Communication</option><option>Accountancy</option><option>Advanced Mathematics</option><option>Agriculture</option><option>Basic Applied Mathematics</option><option>Mathematics</option><option>Biology</option><option>Book-Keeping</option><option>Business Studies</option><option>Chemistry</option><option>Computer Science</option><option>Divinity</option><option>Economics</option><option>Elimu ya Dini ya Kiislam</option><option>English Language</option><option>Fasihi ya Kiswahili</option><option>Geography</option><option>Historia Ya Tanzania na Maadili</option><option>History</option><option>Kiswahili</option><option>Literature In English</option><option>Physics</option><option>Sport Studies</option><option>Food and Human Nutrition</option><option>Textiles Garment Construction</option><option>Design,Sewing and Cloth Technology</option></select></div>
            </div>
            <button class="profile-add-subject-btn" id="editAddSubjectBtn" type="button" style="margin-top:6px;"><i class="bi bi-plus-lg"></i> Add Subject</button>
            <button class="panel-save-btn" id="editProfileSaveBtn"><i class="bi bi-check-circle-fill"></i> Save Changes</button>
            <div class="panel-success" id="editProfileSuccess">Profile updated successfully!</div>
          </div>
        </div>

        <div class="main-panel" id="panel-settings">
          <div class="panel-header">
            <button class="panel-back" onclick="showPanel('lessonplan')"><i class="bi bi-arrow-left"></i> Back</button>
            <h2><i class="bi bi-gear-fill"></i> Settings</h2>
            <p>Customise how the system works for you.</p>
          </div>
          <div class="panel-body">
            <div class="panel-section-title">Display</div>
            <div class="setting-row"><div><div class="setting-label">Show Video Tutorial on Load</div><div class="setting-sub">Video will appear above the form when you open the system</div></div><label class="toggle-switch"><input type="checkbox" id="settingAutoVideo"><span class="toggle-slider"></span></label></div>
            <div class="setting-row"><div><div class="setting-label">Text Size</div><div class="setting-sub">Make text smaller or larger across the system</div></div><select class="setting-select" id="settingFontSize"><option value="13">Small</option><option value="14" selected>Normal</option><option value="16">Large</option><option value="18">Extra Large</option></select></div>
            <div class="setting-row"><div><div class="setting-label">Show Scrolling Banner</div><div class="setting-sub">The moving text strip at the top of the page</div></div><label class="toggle-switch"><input type="checkbox" id="settingShowTicker" checked><span class="toggle-slider"></span></label></div>
            <div class="setting-row"><div><div class="setting-label">Show "Use AI" Button</div><div class="setting-sub">The floating AI assistant button at the bottom of the page</div></div><label class="toggle-switch"><input type="checkbox" id="settingShowAI"><span class="toggle-slider"></span></label></div>
            <div class="setting-row"><div><div class="setting-label">Reduce Animations</div><div class="setting-sub">Turn off motion and transitions (helps on slow phones)</div></div><label class="toggle-switch"><input type="checkbox" id="settingReduceMotion"><span class="toggle-slider"></span></label></div>
            <div class="panel-section-title">Lesson Plan Form</div>
            <div class="setting-row"><div><div class="setting-label">Auto-fill School &amp; Teacher Name</div><div class="setting-sub">Fill these fields from your profile when you open the form</div></div><label class="toggle-switch"><input type="checkbox" id="settingAutoFill" checked><span class="toggle-slider"></span></label></div>
            <div class="panel-section-title">Account</div>
            <div class="setting-row"><div><div class="setting-label">Account Status</div><div class="setting-sub" id="settingAccStatus">Checking...</div></div><span id="settingAccBadge" class="nav-pill guest" style="font-size:10px;">Guest</span></div>
            <div class="setting-row"><div><div class="setting-label">Clear Reference Year Cache</div><div class="setting-sub">You will be asked again to confirm the year for each subject</div></div><button onclick="if(window.clearReferenceYearCache){clearReferenceYearCache();axpAlert('Cache cleared!');}" style="background:var(--red);color:white;border:none;padding:4px 10px;font-size:.68rem;font-weight:700;cursor:pointer;font-family:var(--font);">Clear</button></div>
            <div class="panel-section-title">System Account</div>
            <div class="setting-row"><div><div class="setting-label">System Access</div><div class="setting-sub">Call to complete your account activation</div></div><a data-axp-pay-tel style="display:inline-flex;align-items:center;gap:4px;background:var(--green);color:white;padding:4px 10px;text-decoration:none;font-size:.68rem;font-weight:700;font-family:var(--font);"><i class="bi bi-telephone-fill"></i> Call</a></div>
            <div class="setting-row"><div><div class="setting-label">Reset Settings</div><div class="setting-sub">Return all settings above to their defaults</div></div><button type="button" id="settingsResetBtn" style="background:var(--surface2);color:var(--accent);border:1px solid var(--border);padding:4px 10px;font-size:.68rem;font-weight:700;cursor:pointer;font-family:var(--font);">Reset</button></div>
            <button class="panel-save-btn" id="settingsSaveBtn"><i class="bi bi-check-circle-fill"></i> Save Settings</button>
            <div class="panel-success" id="settingsSuccess">Settings saved!</div>
          </div>
        </div>

        <div class="main-panel" id="panel-howto">
          <div class="panel-header"><button class="panel-back" onclick="showPanel('lessonplan')"><i class="bi bi-arrow-left"></i> Back</button><h2><i class="bi bi-info-circle-fill"></i> How the System Works</h2><p>Learn how to use the AcademixPoint Lesson Plan system.</p></div>
          <div class="panel-body">
            <div class="panel-section-title">Overview</div>
            <p style="font-size:.85rem;color:var(--text2);line-height:1.7;margin-bottom:12px;">This system helps you create a <strong>Lesson Plan</strong> for Tanzania's New Syllabus in 5 easy steps.</p>
            <p style="font-size:.85rem;color:var(--text2);line-height:1.7;margin-bottom:12px;">The system securely stores your information and you can create as many lesson plans as you need.</p>
            <div class="panel-section-title">Supported Curricula</div>
            <p style="font-size:.85rem;color:var(--text2);line-height:1.7;margin-bottom:8px;">This tool supports <strong>New Syllabus</strong> &#x2014; Form I, II, III, V &amp; VI.</p>
            <div class="panel-section-title">Key Features</div>
            <p style="font-size:.85rem;color:var(--text2);line-height:1.7;margin-bottom:4px;"><i class="bi bi-check-circle-fill" style="color:var(--green);margin-right:6px;"></i>Auto-fills teacher info from your profile</p>
            <p style="font-size:.85rem;color:var(--text2);line-height:1.7;margin-bottom:4px;"><i class="bi bi-check-circle-fill" style="color:var(--green);margin-right:6px;"></i>Supports Kiswahili &amp; English action verbs</p>
            <p style="font-size:.85rem;color:var(--text2);line-height:1.7;margin-bottom:4px;"><i class="bi bi-check-circle-fill" style="color:var(--green);margin-right:6px;"></i>Download as PDF instantly</p>
            <p style="font-size:.85rem;color:var(--text2);line-height:1.7;margin-bottom:4px;"><i class="bi bi-check-circle-fill" style="color:var(--green);margin-right:6px;"></i>Saved plans stored in your personal folder</p>
          </div>
        </div>

        <div class="main-panel" id="panel-steps">
          <div class="panel-header"><button class="panel-back" onclick="showPanel('lessonplan')"><i class="bi bi-arrow-left"></i> Back</button><h2><i class="bi bi-list-ol"></i> Steps to Create a Lesson Plan</h2><p>Follow these 5 steps to generate your lesson plan.</p></div>
          <div class="panel-body">
            <div style="display:flex;flex-direction:column;gap:14px;">
              <div style="display:flex;gap:12px;align-items:flex-start;padding:12px;background:var(--surface2);border-left:3px solid var(--accent);"><div style="width:32px;height:32px;background:var(--accent);color:white;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.9rem;flex-shrink:0;">1</div><div><div style="font-weight:700;font-size:.85rem;margin-bottom:4px;">Teacher Information</div><div style="font-size:.78rem;color:var(--text2);line-height:1.6;">Enter your school name, your name as teacher, and select the date option.</div></div></div>
              <div style="display:flex;gap:12px;align-items:flex-start;padding:12px;background:var(--surface2);border-left:3px solid var(--accent);"><div style="width:32px;height:32px;background:var(--accent);color:white;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.9rem;flex-shrink:0;">2</div><div><div style="font-weight:700;font-size:.85rem;margin-bottom:4px;">Lesson Schedule</div><div style="font-size:.78rem;color:var(--text2);line-height:1.6;">Select subject, class, stream, number of periods, and starting time.</div></div></div>
              <div style="display:flex;gap:12px;align-items:flex-start;padding:12px;background:var(--surface2);border-left:3px solid var(--accent);"><div style="width:32px;height:32px;background:var(--accent);color:white;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.9rem;flex-shrink:0;">3</div><div><div style="font-weight:700;font-size:.85rem;margin-bottom:4px;">Syllabus Information</div><div style="font-size:.78rem;color:var(--text2);line-height:1.6;">Choose topic, competence, main lesson, specific activity, and materials.</div></div></div>
              <div style="display:flex;gap:12px;align-items:flex-start;padding:12px;background:var(--surface2);border-left:3px solid var(--accent);"><div style="width:32px;height:32px;background:var(--accent);color:white;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.9rem;flex-shrink:0;">4</div><div><div style="font-weight:700;font-size:.85rem;margin-bottom:4px;">Student Numbers</div><div style="font-size:.78rem;color:var(--text2);line-height:1.6;">Enter registered and present student counts by gender, or leave blank.</div></div></div>
              <div style="display:flex;gap:12px;align-items:flex-start;padding:12px;background:var(--surface2);border-left:3px solid var(--accent);"><div style="width:32px;height:32px;background:var(--accent);color:white;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.9rem;flex-shrink:0;">5</div><div><div style="font-weight:700;font-size:.85rem;margin-bottom:4px;">Lesson Details &amp; Download</div><div style="font-size:.78rem;color:var(--text2);line-height:1.6;">Choose introduction type, action word, remarks option <i class="bi bi-arrow-right" style="margin:0 2px;"></i> click Create Lesson Plan <i class="bi bi-arrow-right" style="margin:0 2px;"></i> Download PDF.</div></div></div>
            </div>
          </div>
        </div>

        <div class="main-panel" id="panel-contact">
          <div class="panel-header"><button class="panel-back" onclick="showPanel('lessonplan')"><i class="bi bi-arrow-left"></i> Back</button><h2><i class="bi bi-telephone-fill"></i> Contact Us</h2><p>Get in touch for support, questions, or account activation.</p></div>
          <div class="panel-body">
            <div class="panel-section-title">Phone Support</div>
            <div style="padding:16px;background:var(--surface2);border:1px solid var(--border);margin-bottom:14px;text-align:center;"><div style="font-size:1.3rem;font-weight:800;color:var(--accent);font-family:var(--mono);margin-bottom:8px;"><span data-axp-pay="phone">&#x2026;</span></div><p style="font-size:.78rem;color:var(--text2);line-height:1.6;margin-bottom:12px;">For all questions, technical support, or account activation information.</p><a data-axp-pay-tel style="display:inline-flex;align-items:center;gap:6px;background:var(--accent);color:white;padding:10px 24px;text-decoration:none;font-size:.8rem;font-weight:700;font-family:var(--font);"><i class="bi bi-telephone-fill"></i> Call Now</a></div>
            <div class="panel-section-title">Account Activation</div>
            <p style="font-size:.82rem;color:var(--text2);line-height:1.6;">To activate your account for full access, contact us via phone. Activation costs <strong>Tshs <span data-axp-pay="lessonplanPrice">&#x2026;</span></strong> for <span data-axp-pay="lessonplanPeriod">&#x2026;</span>.</p>
          </div>
        </div>

        <div class="main-panel" id="panel-savedplans">
          <div class="panel-header"><button class="panel-back" onclick="showPanel('lessonplan')"><i class="bi bi-arrow-left"></i> Back</button><h2><i class="bi bi-folder-fill"></i> My Saved Lesson Plans</h2><p>All your previously created lesson plans, ready to download anytime.</p></div>
          <div class="panel-body">
            <div id="savedPlansContainer">
              <div id="savedPlansLoading" style="text-align:center;padding:30px;color:var(--text3);"><i class="bi bi-hourglass-split" style="font-size:2rem;display:block;margin-bottom:10px;"></i><div style="font-size:.8rem;">Loading your saved plans...</div></div>
              <div id="savedPlansList" style="display:none;"></div>
              <div id="savedPlansEmpty" style="display:none;text-align:center;padding:30px;color:var(--text3);"><i class="bi bi-folder2-open" style="font-size:2.5rem;display:block;margin-bottom:10px;color:var(--border2);"></i><div style="font-size:.85rem;font-weight:600;margin-bottom:6px;">No saved plans yet</div><div style="font-size:.75rem;">Create your first lesson plan and it will appear here.</div><button onclick="showPanel('lessonplan')" style="margin-top:14px;background:var(--accent);color:white;border:none;padding:8px 20px;font-size:.78rem;font-weight:700;cursor:pointer;font-family:var(--font);">Create Lesson Plan</button></div>
              <div id="savedPlansError" style="display:none;text-align:center;padding:20px;color:var(--red);font-size:.8rem;"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<div class="container1">
  <div id="lessonTemp">
    <br><br>
    <h2 id="andalio">lesson plan</h2>
    <table class="details-tb">
      <tr><td id="ShuleJina">School :</td><td id="schoolNm"></td><td id="jinaMwalimu">teacher's name :</td><td id="lessonTch"></td></tr>
      <tr><td id="darasa">class :</td><td><small id="lessonClss"></small> <small id="lessonStrm"></small></td><td id="somo">subject :</td><td id="lessonSbjt"></td></tr>
      <tr><td id="muda">time :</td><td id="lessonTm"></td><td id="tarehe">date :</td><td id="lessonDt"></td></tr>
    </table>
    <br>
    <table border="1" class="student-tb">
      <tr><th colspan="6"><h3 id="idadi">Number of Students</h3></th></tr>
      <tr><th colspan="3" id="sajiliwa">registered</th><th colspan="3" id="fika">present</th></tr>
      <tr><td id="wasichana">girls</td><td id="wavulana">boys</td><td id="jumla">total</td><td id="wasichana1">girls</td><td id="wavulana1">boys</td><td id="jumla1">total</td></tr>
      <tr><td id="flReg"></td><td id="mlReg"></td><td id="stRegt"></td><td id="flPr"></td><td id="mlPr"></td><td id="stPrt"></td></tr>
    </table>
    <br>
    <table class="sylabus-tb" style="margin-top:-11px;">
      <tr><td id="ujuzi">Main competence :</td><td id="sylbsMnObj"></td></tr>
      <tr><td id="lengoKuu">Specific Competence :</td><td id="sylbsCmp"></td></tr>
      <tr><td id="madaNdogo">Main Activity :</td><td id="sylbsSbtp"></td></tr>
      <tr><td id="lengoMahususi">specific Activities :</td><td id="sylbsSpobj"></td></tr>
      <tr><td id="nukuu">t &amp; l Resources :</td><td id="sylbsMts" style="text-transform:none;"></td></tr>
      <tr><td id="rejea">references :</td><td id="sylbsRfrs"></td></tr>
    </table>
    <br>
    <h3 id="kichwa-habari">Teaching and Learning Process</h3><br>
    <table border="1" class="lesson-tb" style="margin-top:-11px;">
      <tr><th id="hatua">stages</th><th id="muda-dakika">Time<br>(Min)</th><th id="mwalimu">teaching activities</th><th id="mwanafunzi">learning activities</th><th id="angalia">assessment</th></tr>
      <tr><td><small id="mwanzo">introduction</small></td><td><small id="introCont"></small></td><td id="intro1"></td><td id="intro2"></td><td id="intro3"></td></tr>
      <tr><td><small id="mpya">Competence Development</small></td><td><small id="newKnow"></small></td><td id="new1"></td><td id="new2"></td><td id="new3"></td></tr>
      <tr><td><small id="kuimarisha">Design</small></td><td><small id="reinCont"></small></td><td id="rein1"></td><td id="rein2"></td><td id="rein3"></td></tr>
      <tr><td><small id="tafakari">Realization</small></td><td><small id="refleCont"></small></td><td id="reflect1"></td><td id="reflect2"></td><td id="reflect3"></td></tr>
    </table>
    <div class="table-footer"><p class="tb-footer"><small id="maoni"><b>REMARKS :</b></small><small style="font-size:95%;" id="remarkComm"></small></p></div>
  </div>
</div>

<div id="endContentAds">
  <div id="buttonPopId">
    <a id="gotoEdit" href="#">&times;</a>
    <div id="wordToshow">Thank you for creating your lesson plan on AcademixPoint. You can now download your lesson plan!</div>
    <div class="btnImp">
      <button id="refreshBtn">Create Another</button>
      <button id="downloadPdfBtn">Download Lesson Plan</button>
    </div>
    <div id="saveToServerStatus" style="margin-top:10px;font-size:.72rem;text-align:center;color:var(--text3);"></div>
  </div>
</div>

  
<button id="axp-chat-trigger" title="Fungua Msaidizi / Open Assistant">
  <i class="bi bi-magic" style="margin-right: 5px;"></i> Use AI
</button>

<div id="axp-chat-widget" style="position: fixed; bottom: 20px; right: 20px; width: 360px; height: 520px; background: var(--surface, #ffffff); border: 2px solid var(--accent, #4a3aff); display: none; flex-direction: column; z-index: 9995; font-family: var(--font, sans-serif); ">
  <div style="background: var(--navy, #0a192f); color: white; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid var(--accent, #4a3aff);">
    <div style="display: flex; align-items: center; gap: 8px;">
      <i class="bi bi-magic" style="color: var(--gold, #f5a623); font-size: 1.1rem;"></i>
      <span style="font-weight: 800; font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase;">Msaidizi wa Academix</span>
    </div>
    <div style="display: flex; align-items: center; gap: 12px;">
      <button id="reset-chat-btn" title="Anza upya / Restart" style="background: transparent; border: none; color: rgba(255,255,255,0.6); cursor: pointer; font-size: 0.9rem;"><i class="bi bi-arrow-counterclockwise"></i></button>
      <button id="close-chat-btn" title="Funga / Close" style="background: transparent; border: none; color: rgba(255,255,255,0.6); cursor: pointer; font-size: 1.1rem; line-height: 1;"><i class="bi bi-x-lg"></i></button>
    </div>
  </div>

  <div id="chat-widget-log" style="flex: 1; padding: 14px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; background: var(--bg, #f8f9fa);"></div>

  <div id="chat-widget-controls-wrapper" style="padding: 12px; background: var(--surface, #ffffff); border-top: 1px solid var(--border, #e2e8f0); display: flex; flex-direction: column; gap: 8px;">
    <div id="chat-navigation-bar" style="display: none; align-items: center; padding-bottom: 4px;">
      <button id="chat-back-btn" class="btn btn-sm btn-outline-secondary" style="font-size: 0.7rem; padding: 2px 8px; border-radius: 0; display: flex; align-items: center; gap: 4px;">
        <i class="bi bi-arrow-left"></i> Rudi Nyuma / Back
      </button>
    </div>
    <div id="chat-widget-controls" style="display: flex; flex-direction: column; gap: 8px;"></div>
  </div>
</div>

<style>
#axp-chat-trigger {
  position: fixed; 
  bottom: 20px; 
  right: 20px; 
  padding: 0 20px;
  height: 48px; 
  border-radius: 0px !important; 
  background: var(--navy, #0a192f); 
  color: var(--gold, #f5a623); 
  border: 2px solid var(--accent, #4a3aff); 
  font-size: 0.95rem; 
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer; 
  z-index: 9996; 
   
  display: flex; 
  align-items: center; 
  justify-content: center; 
  transition: transform 0.2s ease, background 0.2s ease;
}

@media (max-width: 480px) {
  #axp-chat-trigger {
    background: transparent !important;
    border: none !important;
    
    padding: 0 !important;
    width: auto !important;
    height: auto !important;
    font-size: 1.1rem !important;
    bottom: 15px !important;
    right: 15px !important;
    color: var(--accent, #4a3aff) !important;
  }

  #axp-chat-widget {
    width: calc(100% - 24px) !important;
    height: 75vh !important;
    bottom: 12px !important;
    right: 12px !important;
  }
}

#classes,
#classes option,
#subject,
#subject option,
#subjectDisplayText,
#subjectComboList .axp-combo-item { text-transform: uppercase; }
</style>

<script>
function axpAgentOverride(subject, classVal){
  var c=window.AXP_AGENT_CTX; if(!c) return null;
  var st=function(s){return String(s||'').replace(/\s+[A-Za-z]$/,'').trim();};
  return (c.subject===subject && st(c.classVal)===st(classVal)) ? c : null;
}
function showPanel(name){
  if(name!=='sow' && name!=='logbook') window.AXP_AGENT_CTX=null;
  document.querySelectorAll('.main-panel').forEach(function(p){p.classList.remove('active');});
  var p=document.getElementById('panel-'+name);
  if(p) p.classList.add('active');
  document.querySelectorAll('.axp-nav-btn').forEach(function(b){b.classList.remove('active');});
  var sb=document.getElementById('sb-'+name);
  if(sb) sb.classList.add('active');
  else{ var lp=document.getElementById('sb-lessonplan'); if(lp) lp.classList.add('active'); }
  var c=document.getElementById('axp-content');
  if(c) c.scrollTop=0;
}
function axpCountdownHTML(iso){
  var t=new Date(iso).getTime();if(isNaN(t))return '';
  var u=function(l){return '<div class="axp-cd-u"><b data-u="'+l[0]+'">00</b><small>'+l[1]+'</small></div>';};
  return '<div class="axp-cd" data-cd="'+t+'" role="timer" aria-label="Time until you can change again">'+u(['d','Days'])+'<span class="axp-cd-sep">:</span>'+u(['h','Hrs'])+'<span class="axp-cd-sep">:</span>'+u(['m','Min'])+'<span class="axp-cd-sep">:</span>'+u(['s','Sec'])+'</div>';
}
function axpTickCountdowns(){
  var els=document.querySelectorAll('.axp-cd[data-cd]');
  els.forEach(function(el){
    var ms=Math.max(0,parseInt(el.getAttribute('data-cd'),10)-Date.now());
    var sec=Math.floor(ms/1000);
    var v={d:Math.floor(sec/86400),h:Math.floor(sec%86400/3600),m:Math.floor(sec%3600/60),s:sec%60};
    for(var k in v){var b=el.querySelector('[data-u="'+k+'"]');if(b){var x=String(v[k]);b.textContent=x.length<2?'0'+x:x;}}
  });
}
setInterval(axpTickCountdowns,1000);
function axpDialog(opts){
  opts=opts||{};
  var ov=document.getElementById('axpDlgOverlay');
  if(!ov){if(opts.cancelText){if(opts.onOk&&window.confirm((opts.title||'')+'\n'+(opts.message||'')))opts.onOk();}else{document.addEventListener('DOMContentLoaded',function(){axpDialog(opts);},{once:true});}return;}
  var type=opts.type||'success';
  var box=document.getElementById('axpDlg');box.className='axp-dlg'+(type==='error'?' error':type==='warn'?' warn':'');
  var icons={success:'bi-check-circle-fill',error:'bi-x-circle-fill',warn:'bi-exclamation-triangle-fill'};
  document.getElementById('axpDlgIcon').innerHTML='<i class="bi '+(icons[type]||icons.success)+'"></i>';
  document.getElementById('axpDlgTitle').textContent=opts.title||'';
  document.getElementById('axpDlgMsg').textContent=opts.message||'';
  document.getElementById('axpDlgExtra').innerHTML=opts.extraHtml||'';
  axpTickCountdowns();
  var ok=document.getElementById('axpDlgOk'),cn=document.getElementById('axpDlgCancel');
  ok.textContent=opts.okText||'OK';
  cn.style.display=opts.cancelText?'block':'none';cn.textContent=opts.cancelText||'Cancel';
  var close=function(cb){ov.classList.remove('show');ok.onclick=null;cn.onclick=null;if(cb)cb();};
  ok.onclick=function(){close(opts.onOk);};
  cn.onclick=function(){close(opts.onCancel);};
  ov.classList.add('show');
  setTimeout(function(){try{ok.focus();}catch(e){}},50);
}

var _axpAlertQ=[],_axpAlertBusy=false;
function _axpAlertKind(m){
  if(/cache cleared|saved|sent successfully|done/i.test(m)&&!/not |could not|cannot|fail/i.test(m))return{type:'success',title:'Done'};
  if(/could not|cannot|can't|failed|error|problem|not configured|not available|not ready|invalid|does not exist|incomplete|no data|not found/i.test(m))return{type:'error',title:'Something went wrong'};
  return{type:'warn',title:'Please note'};
}
function _axpAlertNext(){
  if(_axpAlertBusy||!_axpAlertQ.length)return;
  var ov=document.getElementById('axpDlgOverlay');
  if(!ov){document.addEventListener('DOMContentLoaded',_axpAlertNext,{once:true});return;}
  if(ov.classList.contains('show')){setTimeout(_axpAlertNext,300);return;}
  var m=_axpAlertQ.shift(),k=_axpAlertKind(m);
  _axpAlertBusy=true;
  axpDialog({type:k.type,title:k.title,message:m,onOk:function(){_axpAlertBusy=false;_axpAlertNext();}});
}
function axpAlert(message){
  var m=String(message==null?'':message);
  if(_axpAlertQ.indexOf(m)===-1)_axpAlertQ.push(m);
  _axpAlertNext();
}
window.axpAlert=axpAlert;
window.alert=axpAlert;
function axpApplyNameLock(p){
  var fn=document.getElementById('editFullName');var note=document.getElementById('editNameNote');
  if(!fn)return;
  var nc=p&&p.nameChange;var locked=!!(nc&&nc.canChange===false);
  fn.readOnly=locked;
  fn.style.background=locked?'var(--surface3)':'';fn.style.color=locked?'var(--text3)':'';fn.style.cursor=locked?'not-allowed':'';
  if(!note)return;
  if(locked){
    note.innerHTML='Your name was changed recently. You can change it again in:'+axpCountdownHTML(nc.nextAllowedAt);axpTickCountdowns();
  }else{
    note.textContent='You can change your name once every 30 days. Only your current name appears on lesson plans, schemes of work and logbooks; previous names are kept on record.';
  }
}
function axpApplySchoolLock(p){
  var el=document.getElementById('editSchool');var note=document.getElementById('editSchoolNote');
  if(!el)return;
  var sc=p&&p.schoolChange;var locked=!!(sc&&sc.canChange===false);
  el.readOnly=locked;
  el.style.background=locked?'var(--surface3)':'';el.style.color=locked?'var(--text3)':'';el.style.cursor=locked?'not-allowed':'';
  if(!note)return;
  if(locked){
    note.innerHTML='Your school was changed recently. You can change it again in:'+axpCountdownHTML(sc.nextAllowedAt);axpTickCountdowns();
  }else{
    note.textContent='You can change your school once every 30 days. Only your current school appears on lesson plans, schemes of work and logbooks; previous schools are kept on record.';
  }
}
function openProfilePanel(){
  var p=(typeof AUTH!=='undefined')&&AUTH.getProfile?AUTH.getProfile():null;
  if(p){
    var fn=document.getElementById('editFullName');var ph=document.getElementById('editPhone');
    var sc=document.getElementById('editSchool');var di=document.getElementById('editDistrict');
    var em=document.getElementById('editEmail');
    if(fn) fn.value=p.fullName||'';if(ph) ph.value=p.phone||'';
    if(sc) sc.value=p.school||'';if(di) di.value=p.district||'';
    axpApplyNameLock(p);axpApplySchoolLock(p);
    if(em&&(typeof AUTH!=='undefined')&&AUTH.getUser&&AUTH.getUser()) em.value=AUTH.getUser().email||'';
    var wrap=document.getElementById('editSubjectsWrap');
    if(wrap&&p.subjects&&p.subjects.length){
      var rows=wrap.querySelectorAll('.profile-subject-row');
      p.subjects.forEach(function(subj,i){if(i<rows.length){var sel=rows[i].querySelector('.edit-subject-select');if(sel)sel.value=subj;}});
    }
  }
  showPanel('profile');
}
function axpApplyDisplaySettings(){
  var g=function(k,d){try{var v=localStorage.getItem(k);return v===null?d:v;}catch(e){return d;}};
  var px=parseInt(g('axp_setting_fontsize','14'),10);if(!(px>=12&&px<=20))px=14;
  document.documentElement.style.fontSize=px+'px';
  document.body.classList.toggle('axp-hide-ticker',g('axp_setting_ticker','1')==='0');
  document.body.classList.toggle('axp-hide-ai',g('axp_setting_showai','0')!=='1');
  document.body.classList.toggle('axp-reduce-motion',g('axp_setting_reducemotion','0')==='1');
}
function openSettingsPanel(){
  if(typeof AUTH!=='undefined'){
    var p=AUTH.getProfile?AUTH.getProfile():null;
    var badge=document.getElementById('settingAccBadge');var sub=document.getElementById('settingAccStatus');
    if(p&&p.status==='active'){if(badge){badge.className='nav-pill active-pill';badge.textContent='Active';}if(sub)sub.textContent='Your account is fully activated.';}
    else if(p){if(badge){badge.className='nav-pill pending-pill';badge.textContent='Pending';}if(sub)sub.textContent='Contact us to activate your account.';}
    else{if(badge){badge.className='nav-pill guest';badge.textContent='Guest';}if(sub)sub.textContent='Sign in to see account status.';}
  }
  var autoVideo=localStorage.getItem('axp_setting_autovideo')==='1';
  var sv=document.getElementById('settingAutoVideo');
  if(sv) sv.checked=autoVideo;
  var _g=function(k,d){try{var v=localStorage.getItem(k);return v===null?d:v;}catch(e){return d;}};
  var fsEl=document.getElementById('settingFontSize');if(fsEl)fsEl.value=_g('axp_setting_fontsize','14');
  var tkEl=document.getElementById('settingShowTicker');if(tkEl)tkEl.checked=_g('axp_setting_ticker','1')!=='0';
  var aiEl=document.getElementById('settingShowAI');if(aiEl)aiEl.checked=_g('axp_setting_showai','0')==='1';
  var rmEl=document.getElementById('settingReduceMotion');if(rmEl)rmEl.checked=_g('axp_setting_reducemotion','0')==='1';
  var afEl=document.getElementById('settingAutoFill');if(afEl)afEl.checked=_g('axp_setting_autofill','1')!=='0';
  showPanel('settings');
}

(function(){
  var sidebar=document.getElementById('axp-sidebar');
  var overlay=document.getElementById('sidebar-overlay');
  var toggleBtn=document.getElementById('axp-toggle-btn');
  function isMobile(){return window.innerWidth<=768;}
  function openSidebar(){sidebar.classList.add('open');if(isMobile())overlay.classList.add('show');}
  function closeSidebar(){sidebar.classList.remove('open');overlay.classList.remove('show');}
  if(toggleBtn) toggleBtn.addEventListener('click',function(e){e.stopPropagation();if(sidebar.classList.contains('open'))closeSidebar();else openSidebar();});
  if(overlay) overlay.addEventListener('click',closeSidebar);
  var sbLP=document.getElementById('sb-lessonplan');if(sbLP) sbLP.addEventListener('click',function(){showPanel('lessonplan');if(isMobile())closeSidebar();});
  var sbProfile=document.getElementById('sb-profile');if(sbProfile) sbProfile.addEventListener('click',function(){openProfilePanel();if(isMobile())closeSidebar();});
  var sbSettings=document.getElementById('sb-settings');if(sbSettings) sbSettings.addEventListener('click',function(){openSettingsPanel();if(isMobile())closeSidebar();});
var sbVideo=document.getElementById('sb-video');if(sbVideo) sbVideo.addEventListener('click',function(){showPanel('lessonplan');if(isMobile())closeSidebar();setTimeout(function(){if(typeof window.axpShowVideo==='function')window.axpShowVideo();else{var wrap=document.getElementById('videoSectionWrap');if(wrap)wrap.style.display='block';var btn=document.getElementById('videoToggleBtn');if(btn)btn.click();}},isMobile()?350:100);});
  var sbHowto=document.getElementById('sb-howto');if(sbHowto) sbHowto.addEventListener('click',function(){showPanel('howto');if(isMobile())closeSidebar();});
  var sbSteps=document.getElementById('sb-steps');if(sbSteps) sbSteps.addEventListener('click',function(){showPanel('steps');if(isMobile())closeSidebar();});
  var sbContact=document.getElementById('sb-contact');if(sbContact) sbContact.addEventListener('click',function(){showPanel('contact');if(isMobile())closeSidebar();});
  var sbSavedPlans=document.getElementById('sb-savedplans');if(sbSavedPlans) sbSavedPlans.addEventListener('click',function(){if(typeof loadSavedPlans==='function')loadSavedPlans();showPanel('savedplans');if(isMobile())closeSidebar();});


var sbRefYear=document.getElementById('sb-refyear');if(sbRefYear) sbRefYear.addEventListener('click',function(){
  var subj=(document.getElementById('subject')||{}).value||'';
  var cls=(document.getElementById('classes')||{}).value||'';
  if(!subj||!cls){
    axpAlert('Please go to Step 2 first and select a Subject and Class before managing the reference year.');
    if(isMobile())closeSidebar();
    return;
  }
  var saved=localStorage.getItem('axp_refyr_'+subj+'_'+cls);
  var yr='2022';
  if(saved){try{yr=JSON.parse(saved).year||'2022';}catch(e){}}
  window._axp_force_refyr=true;
  window.showReferenceYearPopup(yr,function(newYear){
    window._axp_force_refyr=false;
    if(newYear)console.log('Year updated to:',newYear);
  });
  if(isMobile())closeSidebar();
});
  var sidePayBtn=document.getElementById('sidebarPayBtn');if(sidePayBtn) sidePayBtn.addEventListener('click',function(){showPaymentPopup('pending');});
})();

function closeSidebarInfo(id){var p=document.getElementById(id);if(p)p.classList.remove('show');}

document.addEventListener('DOMContentLoaded',function(){
  var saveBtn=document.getElementById('settingsSaveBtn');
  if(saveBtn) saveBtn.addEventListener('click',function(){
    var av=document.getElementById('settingAutoVideo');
    if(av) localStorage.setItem('axp_setting_autovideo',av.checked?'1':'0');
    var _s=function(k,v){try{localStorage.setItem(k,v);}catch(e){}};
    var fs=document.getElementById('settingFontSize');if(fs)_s('axp_setting_fontsize',fs.value);
    var tk=document.getElementById('settingShowTicker');if(tk)_s('axp_setting_ticker',tk.checked?'1':'0');
    var ai=document.getElementById('settingShowAI');if(ai)_s('axp_setting_showai',ai.checked?'1':'0');
    var rm=document.getElementById('settingReduceMotion');if(rm)_s('axp_setting_reducemotion',rm.checked?'1':'0');
    var af=document.getElementById('settingAutoFill');if(af)_s('axp_setting_autofill',af.checked?'1':'0');
    axpApplyDisplaySettings();
    var suc=document.getElementById('settingsSuccess');if(suc){suc.classList.add('show');setTimeout(function(){suc.classList.remove('show');},2500);}
  });
  var resetBtn2=document.getElementById('settingsResetBtn');
  if(resetBtn2) resetBtn2.addEventListener('click',function(){
    ['axp_setting_autovideo','axp_setting_fontsize','axp_setting_ticker','axp_setting_reducemotion','axp_setting_autofill','axp_setting_showai'].forEach(function(k){try{localStorage.removeItem(k);}catch(e){}});
    axpApplyDisplaySettings();openSettingsPanel();
  });
  axpApplyDisplaySettings();
  var SUBJECTS_OPTIONS='<option value="">Select Subject</option><option>Academic Communication</option><option>Accountancy</option><option>Advanced Mathematics</option><option>Agriculture</option><option>Basic Applied Mathematics</option><option>Mathematics</option><option>Biology</option><option>Book-Keeping</option><option>Business Studies</option><option>Chemistry</option><option>Computer Science</option><option>Divinity</option><option>Economics</option><option>Elimu ya Dini ya Kiislam</option><option>English Language</option><option>Fasihi ya Kiswahili</option><option>Geography</option><option>Historia Ya Tanzania na Maadili</option><option>History</option><option>Kiswahili</option><option>Literature In English</option><option>Physics</option><option>Sport Studies</option><option>Food and Human Nutrition</option><option>Textiles Garment Construction</option><option>Design,Sewing and Cloth Technology</option>';
  var editAddBtn=document.getElementById('editAddSubjectBtn');
  if(editAddBtn) editAddBtn.addEventListener('click',function(){
    var wrap=document.getElementById('editSubjectsWrap');if(!wrap)return;
    if(wrap.querySelectorAll('.profile-subject-row').length>=3){editAddBtn.disabled=true;return;}
    var row=document.createElement('div');row.className='profile-subject-row';
    row.innerHTML='<select class="edit-subject-select">'+SUBJECTS_OPTIONS+'</select><button class="profile-subject-remove" type="button"><i class="bi bi-x"></i></button>';
    row.querySelector('.profile-subject-remove').onclick=function(){row.remove();editAddBtn.disabled=false;};
    wrap.appendChild(row);if(wrap.querySelectorAll('.profile-subject-row').length>=3)editAddBtn.disabled=true;
  });
  var editSaveBtn=document.getElementById('editProfileSaveBtn');
  if(editSaveBtn) editSaveBtn.addEventListener('click',function(){
    var fn=document.getElementById('editFullName').value.trim();var ph=document.getElementById('editPhone').value.trim();
    var sc=document.getElementById('editSchool').value.trim();var di=document.getElementById('editDistrict').value.trim();
    if(!fn||!ph||!sc||!di){axpDialog({type:'warn',title:'Missing details',message:'Please fill in all required fields.'});return;}
    var _curP=(typeof AUTH!=='undefined'&&AUTH.getProfile)?AUTH.getProfile():null;
    var _curName=(_curP&&_curP.fullName)?_curP.fullName.trim():'';
    var _curSchool=(_curP&&_curP.school)?_curP.school.trim():'';
    var _askName=!!(_curName&&fn!==_curName&&!(_curP.nameChange&&_curP.nameChange.canChange===false));
    var _askSchool=!!(_curSchool&&sc!==_curSchool&&!(_curP.schoolChange&&_curP.schoolChange.canChange===false));
    var _proceed=function(){
    var subjects=[];document.querySelectorAll('.edit-subject-select').forEach(function(s){if(s.value)subjects.push(s.value);});
    editSaveBtn.disabled=true;editSaveBtn.innerHTML='<i class="bi bi-hourglass-split"></i> Saving...';
    var profileData={fullName:fn,phone:ph,school:sc,district:di,subjects:subjects};
    var api=window.AXP_API_URL||'';var token=(typeof AUTH!=='undefined'&&AUTH.getSessionToken)?AUTH.getSessionToken():'';
    var done=function(resp){
      editSaveBtn.disabled=false;editSaveBtn.innerHTML='<i class="bi bi-check-circle-fill"></i> Save Changes';
      var serverOk=!!(resp&&resp.success&&resp.profile);
      if(!serverOk){
        var _why=(resp&&resp.error&&typeof resp.error==='string')?resp.error:'Could not reach the server. Check your connection and sign-in, then try again.';
        axpDialog({type:'error',title:'Not saved',message:'Your changes were NOT saved to your account.\n\n'+_why});
        return;
      }
      var pd=Object.assign({},profileData);
      if(serverOk){delete pd.fullName;delete pd.school;}
      try{var stored=JSON.parse(localStorage.getItem('axp_profile')||'{}');Object.assign(stored,pd);localStorage.setItem('axp_profile',JSON.stringify(stored));}catch(e){}
      if(serverOk&&typeof AUTH!=='undefined'&&AUTH.setProfile){AUTH.setProfile(resp.profile);var fnEl=document.getElementById('editFullName');if(fnEl)fnEl.value=resp.profile.fullName||fnEl.value;var scEl=document.getElementById('editSchool');if(scEl)scEl.value=resp.profile.school||scEl.value;axpApplyNameLock(resp.profile);axpApplySchoolLock(resp.profile);}
      if(typeof AUTH!=='undefined'&&AUTH.autoFill)AUTH.autoFill();
      var _blk=[],_cd='';
      if(resp&&resp.schoolResult&&resp.schoolResult.status==='blocked'){_blk.push('Your school was not changed. You can change it again in:');_cd+=axpCountdownHTML(resp.schoolResult.nextAllowedAt);}
      if(resp&&resp.nameResult&&resp.nameResult.status==='blocked'){_blk.push('Your name was not changed. You can change it again in:');_cd+=axpCountdownHTML(resp.nameResult.nextAllowedAt);}
      if(_blk.length)axpDialog({type:'warn',title:'Saved with a note',message:'Your other details were saved.\n\n'+_blk.join('\n'),extraHtml:_cd});
      else axpDialog({type:'success',title:'Profile saved',message:'Your details have been updated successfully.'});
    };
    if(api&&token){fetch(api,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action:'saveProfile',token:token,data:profileData,fullName:fn,phone:ph,school:sc,district:di,subjects:subjects})}).then(function(r){return r.json();}).then(done).catch(done);}else{done();}
    };
    var _step2=function(){
      if(_askSchool)axpDialog({type:'warn',title:'Change school?',message:'You can only change your school once every 30 days.\n\nChange from "'+_curSchool+'" to "'+sc+'"?',okText:'Yes, change',cancelText:'Cancel',onOk:_proceed});
      else _proceed();
    };
    if(_askName)axpDialog({type:'warn',title:'Change name?',message:'You can only change your name once every 30 days.\n\nChange from "'+_curName+'" to "'+fn+'"?',okText:'Yes, change',cancelText:'Cancel',onOk:_step2});
    else _step2();
  });
});
</script><script>
const AUTH = (function () {
  'use strict';
  const GOOGLE_CLIENT_ID = '776899207228-klu47cm1khgkblksjr7lj1m22aso77sb.apps.googleusercontent.com';
  const API_URL = 'https://script.google.com/macros/s/AKfycbxx_MQqFyMj6ZNaT21lR5Xo_Lmc4TkAWun9FQqcYsWMczl1r_8zYcsfpecKmC5HgLT4/exec';
  const SUBJECTS_HTML = '<option value="">Select Subject</option><option>Academic Communication</option><option>Accountancy</option><option>Advanced Mathematics</option><option>Agriculture</option><option>Basic Applied Mathematics</option><option>Mathematics</option><option>Biology</option><option>Book-Keeping</option><option>Business Studies</option><option>Chemistry</option><option>Computer Science</option><option>Divinity</option><option>Economics</option><option>Elimu ya Dini ya Kiislam</option><option>English Language</option><option>Fasihi ya Kiswahili</option><option>Geography</option><option>Historia Ya Tanzania na Maadili</option><option>History</option><option>Kiswahili</option><option>Literature In English</option><option>Physics</option><option>Sport Studies</option><option>Food and Human Nutrition</option><option>Textiles Garment Construction</option><option>Design,Sewing and Cloth Technology</option>';
  let _user=null,_profile=null,_sessionToken=null,_gsiReady=false;

  function saveSession(u,tok){try{localStorage.setItem('axp_session',JSON.stringify(u));}catch(e){}try{if(tok)localStorage.setItem('axp_session_token',tok);}catch(e){}}
  function loadSession(){try{return JSON.parse(localStorage.getItem('axp_session')||'null');}catch(e){return null;}}
  function loadSessionToken(){try{return localStorage.getItem('axp_session_token')||null;}catch(e){return null;}}
  function clearSession(){try{localStorage.removeItem('axp_session');}catch(e){}try{localStorage.removeItem('axp_session_token');}catch(e){}}
  function saveProfile(p){try{localStorage.setItem('axp_profile',JSON.stringify(p));}catch(e){}}
  function loadProfile(){try{return JSON.parse(localStorage.getItem('axp_profile')||'null');}catch(e){return null;}}
  function clearProfile(){try{localStorage.removeItem('axp_profile');}catch(e){}}

  function isTokenFresh(token){
    if(!token)return false;
    try{
      var parts=token.split('.');
      if(parts.length<2)return false;
      var payload=JSON.parse(atob(parts[1].replace(/-/g,'+').replace(/_/g,'/')));
      var nowSec=Math.floor(Date.now()/1000);
      return payload.exp&&(payload.exp-nowSec)>300;
    }catch(e){return false;}
  }

  function isFullyActive(profile){
    if(!profile)return false;
    if(profile.status!=='active')return false;
    var paidUntil=profile.paidUntil||'';
    if(!paidUntil)return false;
    return new Date(paidUntil)>new Date();
  }

  function _checkAccessAndPopup(profile,delay){
    if(!profile)return;
    if(isFullyActive(profile))return;
    var paidUntil=profile.paidUntil||'';
    var expired=paidUntil&&new Date(paidUntil)<new Date();
    var reason=expired?'expired':'pending';
    if(sessionStorage.getItem('axp_payment_shown'))return;
    sessionStorage.setItem('axp_payment_shown','1');
    setTimeout(function(){
      if(isFullyActive(_profile))return;
      if(typeof showPaymentPopup==='function')showPaymentPopup(reason);
    },delay||800);
  }

  function syncActivationButtons(){
    try{
      var fb=document.getElementById('axp-float');
      var rw=document.getElementById('axp-recheck-wrap');
      if(_user&&isFullyActive(_profile)){
        if(fb){fb.classList.remove('axp-float-show');fb.style.display='none';}
        if(rw)rw.classList.remove('axp-rc-wrap-show');
      }else if(window.AXP_RECHECK&&window.AXP_RECHECK.refreshVisibility){
        if(fb)fb.style.removeProperty('display');
        window.AXP_RECHECK.refreshVisibility();
      }
    }catch(e){}
  }

  function updateUI(){
    syncTeacherNameField();syncSchoolField();syncActivationButtons();
    var badge=document.getElementById('statusBadge');
    var nameEl=document.getElementById('statusName');
    var actions=document.getElementById('statusActions');
    var payBar=document.getElementById('paymentNoticeBar');
    var sidebarPayBox=document.getElementById('sidebarPayBox');
    if(!_user){
      if(badge){badge.className='nav-pill guest';badge.innerHTML='<i class="bi bi-person-circle"></i> Guest';}
      if(nameEl)nameEl.style.display='none';
      if(actions)actions.innerHTML='<button class="nav-action-btn signin" id="statusSignInBtn"><i class="bi bi-google"></i> Sign In</button>';
      var ssb=document.getElementById('statusSignInBtn');if(ssb)ssb.onclick=showAuthPopup;
      if(payBar)payBar.classList.remove('show');
      if(sidebarPayBox)sidebarPayBox.style.display='none';
    }else{
      var fullDisplayName=(_profile&&_profile.fullName)?_profile.fullName:_user.name;
      var nameParts=(fullDisplayName||'').trim().split(/\s+/);
      var fullyActiveNow=isFullyActive(_profile);
      if(badge){
        badge.className='nav-pill '+(fullyActiveNow?'active-pill':'pending-pill');
        badge.innerHTML=fullyActiveNow
          ?'<i class="bi bi-check-circle-fill"></i><span class="badge-label"> Active</span>'
          :'<i class="bi bi-clock-fill"></i><span class="badge-label"> Pending</span>';
      }
      if(nameEl){
        nameEl.style.display='';
        nameEl.textContent=fullDisplayName;
        nameEl.setAttribute('data-short',nameParts[0]||fullDisplayName);
      }
      var html='';
      if(_user.picture)html+='<img class="status-user-mini-avatar" src="'+_user.picture+'" alt="">';
      html+='<button class="nav-action-btn profile" id="navProfileBtn" title="My account" aria-label="My account"><i class="bi bi-person-fill"></i><span class="nb-lbl"> Account</span></button>';
      html+='<button class="nav-action-btn signout" id="navSignOutBtn" title="Sign out" aria-label="Sign out"><i class="bi bi-box-arrow-right"></i><span class="nb-lbl">Sign out</span></button>';
      if(actions)actions.innerHTML=html;
      var npb=document.getElementById('navProfileBtn');if(npb)npb.onclick=function(){showProfilePopup(false);};
      var nsb=document.getElementById('navSignOutBtn');if(nsb)nsb.onclick=signOut;
      if(!fullyActiveNow){
        if(payBar)payBar.classList.add('show');
        if(sidebarPayBox)sidebarPayBox.style.display='block';
      }else{
        if(payBar)payBar.classList.remove('show');
        if(sidebarPayBox)sidebarPayBox.style.display='none';
      }
    }
    var settingsBadge=document.getElementById('settingAccBadge');
    var settingsSub=document.getElementById('settingAccStatus');
    var fullyActiveSettings=isFullyActive(_profile);
    if(fullyActiveSettings){
      if(settingsBadge){settingsBadge.className='nav-pill active-pill';settingsBadge.textContent='Active';}
      if(settingsSub)settingsSub.textContent='Your account is fully activated.';
    }else if(_user){
      if(settingsBadge){settingsBadge.className='nav-pill pending-pill';settingsBadge.textContent='Pending';}
      if(settingsSub)settingsSub.textContent='Contact us to activate your account.';
    }else{
      if(settingsBadge){settingsBadge.className='nav-pill guest';settingsBadge.textContent='Guest';}
      if(settingsSub)settingsSub.textContent='Sign in to see account status.';
    }
  }

  function showAuthPopup(){
    var overlay=document.getElementById('authOverlay');if(overlay)overlay.classList.add('show');
    var gsiContainer=document.getElementById('gsi-button-container');
    var fallBtn=document.getElementById('googleSignInBtn');
    if(gsiContainer&&fallBtn){
      var hasContent=gsiContainer.querySelector('iframe')||gsiContainer.children.length>0;
      fallBtn.style.display=hasContent?'none':'block';
    }
    if(_gsiReady&&window.google&&google.accounts&&google.accounts.id){try{google.accounts.id.prompt();}catch(e){}}
  }
  function hideAuthPopup(){var overlay=document.getElementById('authOverlay');if(overlay)overlay.classList.remove('show');}

  function showProfilePopup(required){
    var overlay=document.getElementById('profileOverlay');if(!overlay)return;
    var img=document.getElementById('profileAvatarImg');
    var ph=document.getElementById('profileAvatarPlaceholder');
    if(img&&_user&&_user.picture){img.src=_user.picture;img.style.display='block';if(ph)ph.style.display='none';}
    else{if(img)img.style.display='none';if(ph){ph.style.display='flex';ph.textContent=_user?(_user.name||'?')[0].toUpperCase():'?';}}
    var ne=document.getElementById('profileUserName');
    var ee=document.getElementById('profileUserEmail');
    if(ne)ne.textContent=_user?_user.name:'\u2014';
    if(ee)ee.textContent=_user?_user.email:'\u2014';
    var ei=document.getElementById('profileEmail');if(ei&&_user)ei.value=_user.email;
    if(!_profile){var _fn0=document.getElementById('profileFullName');if(_fn0&&!_fn0.value&&_user&&_user.name){_fn0.value=_user.name;}if(_fn0){_fn0.readOnly=false;_fn0.style.background='';_fn0.style.cursor='';}}
    if(_profile){
      var fn=document.getElementById('profileFullName');
      var pn=document.getElementById('profilePhone');
      var sc=document.getElementById('profileSchool');
      var di=document.getElementById('profileDistrict');
      if(fn){
        var _gn=(_profile.fullName&&_profile.fullName.trim())?_profile.fullName:'';
        fn.value=_gn;
        var _nc=_profile.nameChange;var _nLocked=!!(_nc&&_nc.canChange===false);
        fn.readOnly=_nLocked;fn.style.background=_nLocked?'var(--surface3)':'';fn.style.cursor=_nLocked?'not-allowed':'';
        var _nn=document.getElementById('profileNameNote');
        if(_nn){
          _nn.style.flexWrap='wrap';
          _nn.innerHTML='<i class="bi bi-'+(_nLocked?'lock-fill':'info-circle-fill')+'"></i> <span>'+(_nLocked?'Your name was changed recently. You can change it again in:':'Use your real name as it should appear on lesson plans. You can change it once every 30 days.')+'</span>'+(_nLocked?axpCountdownHTML(_nc.nextAllowedAt):'');axpTickCountdowns();
        }
      }
      if(pn)pn.value=_profile.phone||'';
      if(sc){sc.value=_profile.school||'';var _hasS=!!(_profile.school&&_profile.school.trim());sc.readOnly=_hasS;sc.style.background=_hasS?'var(--surface3)':'';sc.style.cursor=_hasS?'not-allowed':'';}
      if(di)di.value=_profile.district||'';
      if(_profile.subjects&&_profile.subjects.length){
        var wrap=document.getElementById('profileSubjectsWrap');
        if(wrap){
          wrap.innerHTML='';
          _profile.subjects.slice(0,3).forEach(function(subj,i){
            var row=document.createElement('div');
            row.className='profile-subject-row';
            row.innerHTML='<select class="profile-subject-select">'+SUBJECTS_HTML+'</select>'+(i>0?'<button class="profile-subject-remove" type="button"><i class="bi bi-x"></i></button>':'');
            wrap.appendChild(row);
            row.querySelector('.profile-subject-select').value=subj;
            if(i>0)row.querySelector('.profile-subject-remove').onclick=function(){row.remove();var addBtn=document.getElementById('profileAddSubjectBtn');if(addBtn)addBtn.disabled=false;};
          });
        }
      }
    }
    var sb=document.getElementById('profileSaveBtn');
    if(sb){sb.disabled=false;sb.innerHTML='<i class="bi bi-check-circle-fill"></i> Save &amp; Continue';}
    var actSec=document.getElementById('profileActivationSection');
    if(actSec)actSec.style.display='none';
    overlay.classList.add('show');
  }
  function hideProfilePopup(){var overlay=document.getElementById('profileOverlay');if(overlay)overlay.classList.remove('show');}

  window.handleGoogleCredential=function(response){
    if(!response||!response.credential)return;
    var loading=document.getElementById('loadingIndicator');if(loading)loading.classList.add('show');
    var parts=response.credential.split('.');var payload;
    try{payload=JSON.parse(atob(parts[1].replace(/-/g,'+').replace(/_/g,'/')));}catch(e){if(loading)loading.classList.remove('show');return;}
    _user={email:payload.email,name:payload.name,picture:payload.picture,token:response.credential};
    saveSession(_user,null);
    hideAuthPopup();
    fetch(API_URL+'?action=googleAuth&token='+encodeURIComponent(response.credential))
      .then(function(r){return r.json();})
      .then(function(data){
        if(loading)loading.classList.remove('show');
        if(data&&data.token){_sessionToken=data.token;saveSession(_user,_sessionToken);}
        if(data&&data.profile){_profile=data.profile;saveProfile(_profile);}
        updateUI();
        var profileSeenKey='axp_profile_completed_'+(_user?_user.email:'');
        var isFirstLogin=!localStorage.getItem(profileSeenKey);
        var needsProfile=!_profile||
          !(_profile.fullName&&_profile.fullName.trim())||
          !(_profile.phone&&_profile.phone.trim())||
          !(_profile.school&&_profile.school.trim())||
          !(_profile.district&&_profile.district.trim());
        if(isFirstLogin&&needsProfile){
          showProfilePopup(true);
        }else{
          if(!isFullyActive(_profile)){_checkAccessAndPopup(_profile,600);}
        }
      })
      .catch(function(){
        if(loading)loading.classList.remove('show');
        updateUI();
        var profileSeenKey='axp_profile_completed_'+(_user?_user.email:'');
        var isFirstLogin=!localStorage.getItem(profileSeenKey);
        var needsProfile=!_profile||
          !(_profile.fullName&&_profile.fullName.trim())||
          !(_profile.phone&&_profile.phone.trim())||
          !(_profile.school&&_profile.school.trim())||
          !(_profile.district&&_profile.district.trim());
        if(isFirstLogin&&needsProfile){showProfilePopup(true);}
        else if(!isFullyActive(_profile)){_checkAccessAndPopup(_profile,600);}
      });
  };

  function saveProfileData(){
    var fn=(document.getElementById('profileFullName')||{}).value.trim();
    var phn=(document.getElementById('profilePhone')||{}).value.trim();
    var sc=(document.getElementById('profileSchool')||{}).value.trim();
    var di=(document.getElementById('profileDistrict')||{}).value.trim();
    var err=document.getElementById('profileErr');
    if(!fn||!phn||!sc||!di){
      if(err){err.textContent='Please fill in all required fields.';err.classList.add('show');}
      return;
    }
    if(err)err.classList.remove('show');
    var subjects=[];
    document.querySelectorAll('.profile-subject-select').forEach(function(s){if(s.value)subjects.push(s.value);});
    var saveBtn=document.getElementById('profileSaveBtn');
    var loading=document.getElementById('loadingIndicator');
    if(saveBtn){saveBtn.disabled=true;saveBtn.innerHTML='<i class="bi bi-hourglass-split"></i> Saving...';}
    if(loading)loading.classList.add('show');
    var profileData={fullName:fn,phone:phn,school:sc,district:di,subjects:subjects,email:_user?_user.email:''};
    var resetBtn=function(){
      if(saveBtn){saveBtn.disabled=false;saveBtn.innerHTML='<i class="bi bi-check-circle-fill"></i> Save &amp; Continue';}
      if(loading)loading.classList.remove('show');
    };
    var onSuccess=function(serverProfile,fullResp){
      resetBtn();
      _profile=Object.assign({},_profile||{},profileData);
      if(serverProfile&&serverProfile.fullName)_profile.fullName=serverProfile.fullName;
      if(serverProfile&&serverProfile.nameChange)_profile.nameChange=serverProfile.nameChange;
      if(serverProfile&&serverProfile.school)_profile.school=serverProfile.school;
      if(serverProfile&&serverProfile.schoolChange)_profile.schoolChange=serverProfile.schoolChange;
      if(serverProfile&&serverProfile.status)_profile.status=serverProfile.status;
      if(serverProfile&&serverProfile.paidUntil)_profile.paidUntil=serverProfile.paidUntil;
      saveProfile(_profile);
      autoFillFormFromProfile();
      hideProfilePopup();
      updateUI();
      var profileSeenKey='axp_profile_completed_'+(_user?_user.email:'');
      localStorage.setItem(profileSeenKey,'1');
      var actSec=document.getElementById('profileActivationSection');
      if(actSec)actSec.style.display=(!isFullyActive(_profile))?'block':'none';
      var _nb=(fullResp&&fullResp.nameResult&&fullResp.nameResult.status==='blocked');
      var _sb=(fullResp&&fullResp.schoolResult&&fullResp.schoolResult.status==='blocked');
      var _after=function(){if(!isFullyActive(_profile)){_checkAccessAndPopup(_profile,400);}};
      var _note=[],_cd2='';
      if(_nb){_note.push('Your name was not changed. You can change it again in:');_cd2+=axpCountdownHTML(fullResp.nameResult.nextAllowedAt);}
      if(_sb){_note.push('Your school was not changed. You can change it again in:');_cd2+=axpCountdownHTML(fullResp.schoolResult.nextAllowedAt);}
      axpDialog({type:_note.length?'warn':'success',title:_note.length?'Saved with a note':'Profile saved',message:_note.length?('Your other details were saved.\n\n'+_note.join('\n')):'Your details have been saved successfully.',extraHtml:_cd2,onOk:_after});
    };
    var failSave=function(msg){resetBtn();if(err){err.textContent='Not saved: '+msg;err.classList.add('show');}};
    var token=_sessionToken||'';
    if(API_URL&&token){
      fetch(API_URL,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(Object.assign({action:'saveProfile',token:token},profileData))})
        .then(function(r){return r.json();})
        .then(function(data){
          if(data&&data.success){onSuccess(data.profile?data.profile:(data.status?{status:data.status}:null),data);}
          else{failSave((data&&data.error)||'The server did not save your profile.');}
        })
        .catch(function(){failSave('Could not reach the server. Check your connection and try again.');});
    }else{failSave('You are not signed in. Please sign in again.');}
  }

  function syncTeacherNameField(){
    var teacherEl=document.getElementById('teacherName');
    if(!teacherEl||!_profile||!_profile.fullName)return;
    teacherEl.value=_profile.fullName;
    teacherEl.readOnly=true;
    teacherEl.setAttribute('aria-readonly','true');
    teacherEl.title='Loaded from your profile. You can change it from Edit Profile (once every 30 days).';
    teacherEl.style.background='var(--surface3)';teacherEl.style.cursor='not-allowed';
  }
  function syncSchoolField(){
    var schoolEl=document.getElementById('school');
    if(!schoolEl||!_profile||!_profile.school)return;
    schoolEl.value=_profile.school;
    schoolEl.readOnly=true;
    schoolEl.setAttribute('aria-readonly','true');
    schoolEl.title='Loaded from your profile. You can change it from Edit Profile (once every 30 days).';
    schoolEl.style.background='var(--surface3)';schoolEl.style.cursor='not-allowed';
  }
  document.addEventListener('reset',function(){setTimeout(function(){syncTeacherNameField();syncSchoolField();},0);},true);

  function refreshProfileFromServer(cb){
    if(!API_URL||!_sessionToken){if(cb)cb(false);return;}
    fetch(API_URL+'?action=checkSession&token='+encodeURIComponent(_sessionToken)+'&_t='+Date.now())
      .then(function(r){return r.json();})
      .then(function(data){
        if(data&&data.profile){_profile=Object.assign({},_profile||{},data.profile);saveProfile(_profile);updateUI();}
        if(cb)cb(!!(data&&data.profile));
      })
      .catch(function(){if(cb)cb(false);});
  }

  function autoFillFormFromProfile(){
    if(!_profile)return;
    syncTeacherNameField();syncSchoolField();
    try{if(localStorage.getItem('axp_setting_autofill')==='0')return;}catch(e){}
    var schoolEl=document.getElementById('school');
    var teacherEl=document.getElementById('teacherName');
    if(schoolEl&&!schoolEl.value&&_profile.school)schoolEl.value=_profile.school;
    if(teacherEl&&!teacherEl.value&&_profile.fullName)teacherEl.value=_profile.fullName;
  }

  function signOut(){
    if(API_URL&&_sessionToken){fetch(API_URL+'?action=logout&token='+encodeURIComponent(_sessionToken)).catch(function(){});}
    _user=null;_profile=null;_sessionToken=null;
    clearSession();clearProfile();
    sessionStorage.removeItem('axp_payment_shown');
    if(window.google&&google.accounts&&google.accounts.id){try{google.accounts.id.disableAutoSelect();}catch(e){}}
    updateUI();
    ['school','teacherName'].forEach(function(id){var el=document.getElementById(id);if(el)el.value='';});
  }

  function initGSI(){
    if(!window.google||!google.accounts||!google.accounts.id)return;
    try{
      google.accounts.id.initialize({client_id:GOOGLE_CLIENT_ID,callback:window.handleGoogleCredential,auto_select:false,cancel_on_tap_outside:true,context:'signin'});
      var btnContainer=document.getElementById('gsi-button-container');
      if(btnContainer){
        google.accounts.id.renderButton(btnContainer,{type:'standard',size:'large',theme:'outline',text:'continue_with',shape:'rectangular',logo_alignment:'left',width:320});
        var fallBtn=document.getElementById('googleSignInBtn');
        if(fallBtn)fallBtn.style.display='none';
      }
      _gsiReady=true;
    }catch(e){console.warn('GSI init error:',e);}
  }

  function setupFallbackBtn(){
    var btn=document.getElementById('googleSignInBtn');if(!btn)return;
    btn.onclick=function(){
      if(_gsiReady&&window.google&&google.accounts&&google.accounts.id){google.accounts.id.prompt();}
      else{axpAlert('Google Sign-In is loading. Please wait a moment and try again.');}
    };
  }

  function init(){
    _user=loadSession();_profile=loadProfile();_sessionToken=loadSessionToken();
    if(_user&&!isTokenFresh(_user.token)&&!_sessionToken){_user=null;clearSession();}
    updateUI();
    var acb=document.getElementById('authCloseBtn');if(acb)acb.onclick=hideAuthPopup;
    var ao=document.getElementById('authOverlay');
    if(ao)ao.addEventListener('click',function(e){if(e.target===this)hideAuthPopup();});
    var po=document.getElementById('profileOverlay');
    if(po)po.addEventListener('click',function(e){if(e.target===this)hideProfilePopup();});
    var psb=document.getElementById('profileSaveBtn');if(psb)psb.onclick=saveProfileData;
    var anb=document.getElementById('authNudgeBtn2');if(anb)anb.onclick=showAuthPopup;
    var ssb=document.getElementById('statusSignInBtn');if(ssb)ssb.onclick=showAuthPopup;
    var asb=document.getElementById('profileAddSubjectBtn');
    if(asb)asb.onclick=function(){
      var wrap=document.getElementById('profileSubjectsWrap');if(!wrap)return;
      if(wrap.querySelectorAll('.profile-subject-row').length>=3){asb.disabled=true;return;}
      var row=document.createElement('div');row.className='profile-subject-row';
      row.innerHTML='<select class="profile-subject-select">'+SUBJECTS_HTML+'</select><button class="profile-subject-remove" type="button"><i class="bi bi-x"></i></button>';
      row.querySelector('.profile-subject-remove').onclick=function(){row.remove();asb.disabled=false;};
      wrap.appendChild(row);
      if(wrap.querySelectorAll('.profile-subject-row').length>=3)asb.disabled=true;
    };
    setupFallbackBtn();
    if(_user&&_profile&&_profile.fullName)autoFillFormFromProfile();
    if(_user&&_sessionToken){
      fetch(API_URL+'?action=checkSession&token='+encodeURIComponent(_sessionToken))
        .then(function(r){return r.json();})
        .then(function(data){
          if(data&&data.profile){
            _profile=data.profile;
            saveProfile(_profile);
            updateUI();
            if(isFullyActive(_profile)){
              sessionStorage.removeItem('axp_payment_shown');
            }else{
              _checkAccessAndPopup(_profile,1200);
            }
          }
        })
        .catch(function(){
          if(_user&&_profile&&!isFullyActive(_profile)){
            _checkAccessAndPopup(_profile,1200);
          }
        });
    }
    if(window.google&&google.accounts&&google.accounts.id){initGSI();}
    else{
      var gsiPoll=setInterval(function(){
        if(window.google&&google.accounts&&google.accounts.id){clearInterval(gsiPoll);initGSI();}
      },200);
      setTimeout(function(){clearInterval(gsiPoll);},15000);
    }
  }

  window.AXP_API_URL=API_URL;
  document.addEventListener('DOMContentLoaded',init);
  return{
    isAuthenticated:function(){return!!_user;},
    getUser:function(){return _user;},
    getProfile:function(){return _profile;},
    getSessionToken:function(){return _sessionToken;},
    isActive:function(){return isFullyActive(_profile);},
    requireAuth:function(cb){
      if(!_user){showAuthPopup();return false;}
      if(!_profile||!_profile.fullName){showProfilePopup(true);return false;}
      if(cb)cb();return true;
    },
    showAuthPopup:showAuthPopup,
    showProfilePopup:showProfilePopup,
    signOut:signOut,
    autoFill:autoFillFormFromProfile,
    refreshProfile:refreshProfileFromServer,
    setProfile:function(p){if(!p)return;_profile=Object.assign({},_profile||{},p);saveProfile(_profile);syncTeacherNameField();syncSchoolField();updateUI();}
  };
})();
</script>
<script>
(function(){
'use strict';
const PREFIX='axp_refyr_';
let overlay=null,cb=null,curSubj='',curCls='';
function getSaved(s,c){try{var d=JSON.parse(localStorage.getItem(PREFIX+s+'_'+c)||'null');if(d&&d.year)return d.year;}catch(e){}return null;}
function isConfirmed(s,c){try{var d=JSON.parse(localStorage.getItem(PREFIX+s+'_'+c)||'null');if(d&&d.confirmed)return true;}catch(e){}return false;}
function saveConf(s,c,y,n){try{localStorage.setItem(PREFIX+s+'_'+c,JSON.stringify({year:y,confirmed:n}));}catch(e){}}
function createHTML(yr,s,c){
  var h='<div class="reference-year-overlay" id="referenceYearOverlay"><div class="reference-year-popup"><div class="reference-year-header"><h3><i class="bi bi-calendar3"></i> Confirm Reference Year</h3><p>Confirm or change the reference year for '+s+' - '+c+'</p></div><div class="reference-year-body"><div class="current-year-display"><p>Year found in reference:</p><div class="year-value">'+yr+'</div></div><div class="year-input-group"><label>Change year if needed:</label><input type="number" id="newYearInput" value="'+yr+'" min="2000" max="2099" placeholder="Enter year"></div><div class="reference-year-buttons"><button class="ref-year-btn ref-year-btn-change" id="changeYearBtn"><i class="bi bi-check-lg"></i> Use This Year</button><button class="ref-year-btn ref-year-btn-leave" id="leaveYearBtn"><i class="bi bi-x-lg"></i> Keep As Is</button></div><button class="ref-year-never-btn" id="neverShowBtn">Save this year \u2014 don\'t ask again for this subject</button><div class="year-note"><i class="bi bi-info-circle-fill"></i> This year will be used in the reference section of your lesson plan.</div></div></div></div>';
  var tmp=document.createElement('div');tmp.innerHTML=h;document.body.appendChild(tmp.firstElementChild);
  overlay=document.getElementById('referenceYearOverlay');
}
function show(yr,callback){
  if(!yr||yr===''){if(callback)callback(null);return;}
  var se=document.getElementById('subject'),ce=document.getElementById('classes');
  if(!se||!ce){if(callback)callback(null);return;}
  curSubj=se.value;curCls=ce.value;
  if(!curSubj||!curCls){if(callback)callback(null);return;}
  if(!window._axp_force_refyr && isConfirmed(curSubj,curCls)){var sy=getSaved(curSubj,curCls);if(sy){if(callback)callback(sy);return;}}
  cb=callback;createHTML(yr,curSubj,curCls);
  setTimeout(function(){if(overlay)overlay.classList.add('show');},100);
  var chgBtn=document.getElementById('changeYearBtn');var nvrBtn=document.getElementById('neverShowBtn');var lvBtn=document.getElementById('leaveYearBtn');
  if(chgBtn)chgBtn.addEventListener('click',function(){var ny=document.getElementById('newYearInput').value.trim();if(ny&&ny.length===4&&!isNaN(ny))close(ny,false);else axpAlert('Weka mwaka sahihi (mfano: 2024)');});
  if(nvrBtn)nvrBtn.addEventListener('click',function(){var ny=document.getElementById('newYearInput').value.trim();if(ny&&ny.length===4&&!isNaN(ny))close(ny,true);else axpAlert('Weka mwaka sahihi (mfano: 2024)');});
  if(lvBtn)lvBtn.addEventListener('click',function(){saveConf(curSubj,curCls,yr,true);close(null,false);});
  if(overlay)overlay.addEventListener('click',function(e){if(e.target===overlay){saveConf(curSubj,curCls,yr,true);close(null,false);}});
  document.addEventListener('keydown',function esc(e){if(e.key==='Escape'&&overlay&&overlay.classList.contains('show')){saveConf(curSubj,curCls,yr,true);close(null,false);document.removeEventListener('keydown',esc);}});
}
function close(yr,never){
  if(overlay){overlay.classList.remove('show');if(yr&&curSubj&&curCls)saveConf(curSubj,curCls,yr,never);setTimeout(function(){if(overlay&&overlay.parentNode)overlay.parentNode.removeChild(overlay);overlay=null;if(cb){cb(yr);cb=null;}},300);}
}
window.showReferenceYearPopup=show;
window.clearReferenceYearCache=function(){Object.keys(localStorage).forEach(function(k){if(k.startsWith(PREFIX))localStorage.removeItem(k);});};
})();
</script>
  
  <script>
const SUBJECTS = Object.freeze([
    { value: "", text: "Select Subject" },
    { value: "Academic Communication", text: "Academic Communication" },
    { value: "Baseline", text: "Baseline" },
    { value: "Welding and Metal Fabrication", text: "Welding and Metal Fabrication" },
    { value: "Masonry and Bricklaying", text: "Masonry and Bricklaying" },
    { value: "Electrical Installation", text: "Electrical Installation" },
    { value: "Plumbing and Pipe Fitting", text: "Plumbing and Pipe Fitting" },
    { value: "Solar Power Installation", text: "Solar Power Installation" },
    { value: "Computer Application", text: "Computer Application" },
    { value: "Technical Drawing", text: "Technical Drawing" },
    { value: "Accountancy", text: "Accountancy" },
    { value: "Advanced Mathematics", text: "Advanced Mathematics" },
    { value: "Agriculture", text: "Agriculture" },
    { value: "Basic Applied Mathematics", text: "Basic Applied Mathematics" },
    { value: "Mathematics", text: "Mathematics" },
    { value: "Biology", text: "Biology" },
    { value: "Book-Keeping", text: "Book-keeping" },
    { value: "Business Studies", text: "Business Studies" },
    { value: "Chemistry", text: "Chemistry" },
    { value: "Computer Science", text: "Computer Science" },
    { value: "Divinity", text: "Divinity" },
    { value: "Economics", text: "Economics" },
    { value: "Elimu ya Dini ya Kiislam", text: "Elimu ya Dini ya Kiislam" },
    { value: "English Language", text: "English Language" },
    { value: "French", text: "French" },
    { value: "Chinese Language", text: "Chinese Language" },
    { value: "Fasihi ya Kiswahili", text: "Fasihi ya Kiswahili" },
    { value: "Geography", text: "Geography" },
    { value: "Historia Ya Tanzania na Maadili", text: "Historia Ya Tanzania na Maadili" },
    { value: "History", text: "History" },
    { value: "Kiswahili", text: "Kiswahili" },
    { value: "Literature In English", text: "Literature In English" },
    { value: "Physics", text: "Physics" },
    { value: "Sport Studies", text: "Sport Studies" },
    { value: "Food and Human Nutrition", text: "Food and Human Nutrition" },
    { value: "Textiles Garment Construction", text: "Textiles Garment Construction" },
    { value: "Design,Sewing and Cloth Technology", text: "Design,Sewing and Cloth Technology" }
]);
    
    function axpNormSubj(s) {
  return String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
}
const SWAHILI_SUBJECTS_NORM = [
  'kiswahili',
  'fasihi ya kiswahili',
  'historia ya tanzania na maadili',
  'elimu ya dini ya kiislam'
];
function isSwahiliSubjectSafe(subject) {
  return SWAHILI_SUBJECTS_NORM.indexOf(axpNormSubj(subject)) !== -1;
}

const CLASSES_DATA = [
    { value: "", text: "Select Class" }
];

const AXP_HIDDEN_CLASSES = ["Form Four"];

function axpSyncClassesFromMap() {
    var map = window.AXP_CLASS_SUBJECT_MAP;
    if (!map) return false;
    var names = Object.keys(map).filter(function (n) {
        return AXP_HIDDEN_CLASSES.indexOf(n) === -1;
    });
    if (!names.length) return false;

    CLASSES_DATA.length = 0;
    CLASSES_DATA.push({ value: "", text: "Select Class" });
    names.forEach(function (name) {
        CLASSES_DATA.push({ value: name, text: name });
    });

    var sel = document.getElementById('classes');
    var prev = sel ? sel.value : '';
    populateSelect('classes', CLASSES_DATA);
    if (sel && prev && names.indexOf(prev) !== -1) sel.value = prev;
    return true;
}

const STREAMS_DATA = Object.freeze([
    "None","A","B","C","D","E","F"
]);

const PERIODS_DATA = Object.freeze([
    { value: "", text: "Select Periods" },
    { value: "1", text: "1 Period (40 Minutes)" },
    { value: "2", text: "2 Periods (80 Minutes)" },
    { value: "custom_duration", text: "Custom Duration" },
    { value: "custom_distribution", text: "Custom Time Distribution" }
]);

const HOURS_DATA = Object.freeze([
    { value: "", text: "Select Hour" },
    { value: "6",  text: "06 A.M" },
    { value: "7",  text: "07 A.M" },
    { value: "8",  text: "08 A.M" },
    { value: "9",  text: "09 A.M" },
    { value: "10", text: "10 A.M" },
    { value: "11", text: "11 A.M" },
    { value: "12", text: "12 P.M" },
    { value: "13", text: "13 P.M" },
    { value: "14", text: "14 P.M" },
    { value: "15", text: "15 P.M" },
    { value: "16", text: "16 P.M" }
]);

const MINUTES_DATA = Object.freeze([
    { value: "", text: "Select Minutes" },
    ...Array.from({ length: 60 }, (_, i) => ({
        value: String(i),
        text: String(i).padStart(2, '0')
    }))
]);

/* Step 5 word lists (introduction type + action words) are NOT hard-coded here.
   They live in Lessonplannew00043.js (window.AXP_WORDS) and follow the selected subject, its language and the class level. */

const BASELINE_REFERENCES = Object.freeze([
    { value: "", text: "Select Reference" },
    { value: "Tanzania Institute of Education (2022). Baseline Orientation Course for Form One Student's Book. Tanzania Institute of Education", text: "Tanzania Institute of Education (2022). Baseline Orientation Course for Form One Student's Book. Tanzania Institute of Education" },
    { value: "Tanzania Institute of Education (2022). Baseline Orientation Course for Teachers Guide Book. Tanzania Institute of Education", text: "Tanzania Institute of Education (2022). Baseline Orientation Course for Teachers Guide Book. Tanzania Institute of Education" }
]);

const SWAHILI_SUBJECTS = Object.freeze([
    "Kiswahili",
    "Fasihi ya Kiswahili",
    "Historia Ya Tanzania na Maadili",
    "Elimu ya Dini ya Kiislam"
]);

function populateSelect(selectId, options) {
    var el = document.getElementById(selectId);
    if (!el) return;
    var frag = document.createDocumentFragment();
    options.forEach(function(opt) {
        var o = document.createElement('option');
        o.value = opt.value;
        o.textContent = opt.text;
        frag.appendChild(o);
    });
    el.innerHTML = '';
    el.appendChild(frag);
}

function populateDatalist(datalistId, items) {
    var dl = document.getElementById(datalistId);
    if (!dl) return;
    dl.innerHTML = '';
    items.forEach(function(val) {
        var o = document.createElement('option');
        o.value = val;
        dl.appendChild(o);
    });
}

function isSwahiliSubject(subject) {
    return isSwahiliSubjectSafe(subject);        
}

/* ── French / Chinese subjects (language added in Lessonplannew00043.js) ── */
var AXP_FR_NORM = ['french', 'français', 'francais'];
var AXP_ZH_NORM = ['chinese language', 'chinese', '中文', '汉语'];
function axpSubjectLang(subject) {
    var n = axpNormSubj(subject);
    if (AXP_FR_NORM.indexOf(n) !== -1) return 'french';
    if (AXP_ZH_NORM.indexOf(n) !== -1) return 'chinese';
    return isSwahiliSubject(subject) ? 'swahili' : 'english';
}
window.axpIsFrZhSubject = function (subject) {
    var l = axpSubjectLang(subject);
    return l === 'french' || l === 'chinese';
};

/* Chinese has no syllabus lists loaded yet: if the topic list is empty, let the teacher type each field. */
var _axpZhManual = false;
function axpHasOptions(id) {
    var el = document.getElementById(id);
    return !!(el && el.tagName === 'SELECT' && el.options.length > 1);
}
function axpSetChineseManual(on) {
    var fields = [
        { id: 'topicLesson', placeholder: 'Enter topic' },
        { id: 'compLesson',  placeholder: 'Enter competence' },
        { id: 'mainlesson',  placeholder: 'Enter main activity' },
        { id: 'refLesson',   placeholder: 'Enter reference book' }
    ];
    var step3 = document.querySelector('.step[data-step="3"]');
    if (on && !_axpZhManual) {
        fields.forEach(function (f) {
            var sel = document.getElementById(f.id);
            if (!sel || sel.tagName !== 'SELECT') return;
            sel.id = f.id + '_zh_select';
            sel.style.display = 'none';
            if (sel.required) { sel.required = false; sel.setAttribute('data-zh-was-required', '1'); }
            var inp = document.createElement('input');
            inp.type = 'text'; inp.id = f.id; inp.name = f.id;
            inp.placeholder = f.placeholder; inp.required = true;
            inp.className = sel.className;
            inp.setAttribute('data-zh-input', 'true');
            sel.parentNode.insertBefore(inp, sel.nextSibling);
        });
        if (step3 && !step3.querySelector('.zh-manual-notice')) {
            var n = document.createElement('div');
            n.className = 'notice zh-manual-notice';
            n.innerHTML = '<span><strong>Chinese Language:</strong> no syllabus list is loaded for this subject yet. Type the topic, competence, main activity and reference yourself.</span>';
            var d = step3.querySelector('.step-description');
            if (d) d.after(n);
        }
        _axpZhManual = true;
    } else if (!on && _axpZhManual) {
        fields.forEach(function (f) {
            var inp = document.querySelector('input[data-zh-input="true"]#' + f.id);
            if (inp) inp.remove();
            var sel = document.getElementById(f.id + '_zh_select');
            if (sel) {
                sel.id = f.id; sel.style.display = ''; sel.value = '';
                if (sel.getAttribute('data-zh-was-required')) { sel.required = true; sel.removeAttribute('data-zh-was-required'); }
            }
        });
        var nt = document.querySelector('.zh-manual-notice'); if (nt) nt.remove();
        _axpZhManual = false;
    }
}
function axpAfterSubjectChange(subject) {
    var isZh = axpSubjectLang(subject) === 'chinese';
    setTimeout(function () {
        if (isZh) { if (!_axpZhManual && !axpHasOptions('topicLesson')) axpSetChineseManual(true); }
        else if (_axpZhManual) axpSetChineseManual(false);
    }, 0);
}

function updateLanguageBasedFields(selectedSubject) {
    /* Step 5 words come from Lessonplannew00043.js: subject language + class level. */
    if (window.AXP_WORDS) window.AXP_WORDS.apply(selectedSubject, true);
}

function toggleBaselineMode(isBaseline, wasBaseline) {
    var fields = [
        { id: 'topicLesson', placeholder: 'Enter topic' },
        { id: 'compLesson',  placeholder: 'Enter competence' },
        { id: 'mainlesson',  placeholder: 'Enter main lesson' }
    ];
    if (isBaseline) {
        fields.forEach(function(f) {
            var sel = document.getElementById(f.id);
            if (!sel || sel.tagName !== 'SELECT') return;
            sel.id = f.id + '_original_select';
            sel.style.display = 'none';
            var inp = document.createElement('input');
            inp.type = 'text';
            inp.id = f.id;
            inp.name = f.id;
            inp.placeholder = f.placeholder;
            inp.required = true;
            inp.setAttribute('data-baseline-input', 'true');
            inp.setAttribute('data-field', f.id);
            sel.parentNode.insertBefore(inp, sel.nextSibling);
        });
        populateSelect('refLesson', BASELINE_REFERENCES);
        var step3 = document.querySelector('.step[data-step="3"]');
        if (step3 && !step3.querySelector('.baseline-notice')) {
            var notice = document.createElement('div');
            notice.className = 'notice baseline-notice';
            notice.innerHTML = '<i class="bi bi-pencil-fill notice-icon" style="color:var(--accent);"></i><span><strong>Baseline Mode Active:</strong> Enter all lesson details manually in each field.</span>';
            var desc = step3.querySelector('.step-description');
            if (desc) desc.after(notice);
        }
    } else if (wasBaseline) {
        fields.forEach(function(f) {
            var inp = document.querySelector('input[data-baseline-input="true"][data-field="' + f.id + '"]');
            if (inp) inp.remove();
            var sel = document.getElementById(f.id + '_original_select');
            if (sel) {
                sel.id = f.id;
                sel.style.display = '';
                sel.value = '';
            }
        });
       var refLesson = document.getElementById('refLesson');
        if (refLesson) refLesson.innerHTML = '<option value="">Select Reference</option>';
        var notice = document.querySelector('.baseline-notice');
        if (notice) notice.remove();
    }
}

function handlePeriodChange(value) {
    var cdf = document.getElementById('customDurationFields');
    var cdistr = document.getElementById('customDistributionFields');
    cdf.style.display = 'none';
    cdistr.style.display = 'none';
    document.querySelectorAll('#customDurationFields input, #customDurationFields select').forEach(function(el) {
        el.required = false; el.value = '';
    });
    document.querySelectorAll('#customDistributionFields input, #customDistributionFields select').forEach(function(el) {
        el.required = false; el.value = '';
    });
    if (value === 'custom_duration') {
        cdf.style.display = 'block';
        document.getElementById('customMinutes').required = true;
        document.getElementById('periodType').required = true;
    } else if (value === 'custom_distribution') {
        cdistr.style.display = 'block';
        document.getElementById('distributionType').required = true;
        ['introMinutes','developmentMinutes','designMinutes','realizationMinutes'].forEach(function(id) {
            var el = document.getElementById(id); if (el) el.required = true;
        });
    }
}

function validateDistribution() {
    var intro = parseInt(document.getElementById('introMinutes').value) || 0;
    var dev   = parseInt(document.getElementById('developmentMinutes').value) || 0;
    var des   = parseInt(document.getElementById('designMinutes').value) || 0;
    var real  = parseInt(document.getElementById('realizationMinutes').value) || 0;
    var total = intro + dev + des + real;
    var dtype = document.getElementById('distributionType').value;
    var req = dtype === 'single' ? 40 : dtype === 'double' ? 80 : (parseInt(document.getElementById('customTotalMinutes').value) || 0);
    document.getElementById('totalMinutesCalc').textContent = total;
    document.getElementById('requiredTotal').textContent = req;
    var warn = document.getElementById('distributionWarning');
    if (req > 0 && total !== req) { warn.style.display = 'inline'; return false; }
    warn.style.display = 'none'; return true;
}

function isFieldHidden(el) {
    while (el && el !== document.body) {
        var s = window.getComputedStyle(el);
        if (s.display === 'none' || s.visibility === 'hidden') return true;
        el = el.parentElement;
    }
    return false;
}

function validateFieldEl(field) {
    var errMsg = field.parentElement.querySelector('.error-message');
    if (isFieldHidden(field)) return true;
    if (field.id === 'date' && field.closest('#dateField') && field.closest('#dateField').style.display === 'none') return true;
    var bad = (field.value === null || field.value.trim() === '');
    if (field.type === 'number') {
        var v = parseInt(field.value);
        bad = isNaN(v) || v < 0;
    }
    if (bad) {
        field.classList.add('error');
        if (errMsg) errMsg.classList.add('show');
        return false;
    }
    field.classList.remove('error');
    if (errMsg) errMsg.classList.remove('show');
    return true;
}

function validateStep(stepNumber) {
    var step = document.querySelector('.step[data-step="' + stepNumber + '"]');
    if (!step) return true;
    var isBaseline = (document.getElementById('subject') || {}).value === 'Baseline';
    var isValid = true;

    if (stepNumber === 4) {
        var so = document.getElementById('studentsOption');
        if (!so || so.value === '') {
            if (so) { so.classList.add('error'); var e = so.parentElement.querySelector('.error-message'); if (e) e.classList.add('show'); }
            return false;
        }
        if (so.value === 'notset') {
            so.classList.remove('error');
            var e2 = so.parentElement.querySelector('.error-message'); if (e2) e2.classList.remove('show');
            return true;
        }
    }

    step.querySelectorAll('.form-group').forEach(function(fg) {
        if (isFieldHidden(fg)) return;
        var toValidate = null;
        if (isBaseline && stepNumber === 3) {
            var bInp = fg.querySelector('input[data-baseline-input="true"]');
            if (bInp && !isFieldHidden(bInp)) { toValidate = bInp; }
            else {
                var sel = fg.querySelector('select[required]');
                var inp = fg.querySelector('input[required]');
                if (sel && !isFieldHidden(sel)) toValidate = sel;
                else if (inp && !isFieldHidden(inp)) toValidate = inp;
            }
        } else {
            var sel2 = fg.querySelector('select[required]');
            var inp2 = fg.querySelector('input[required]');
            if (sel2 && !isFieldHidden(sel2)) toValidate = sel2;
            else if (inp2 && !isFieldHidden(inp2)) toValidate = inp2;
        }
        var ta = fg.querySelector('textarea');
        if (ta && !isFieldHidden(ta)) {
            var ro = document.getElementById('remarkOption');
            if (ro && ro.value === 'custom' && !toValidate) toValidate = ta;
        }
        if (toValidate && !validateFieldEl(toValidate)) isValid = false;
    });
    return isValid;
}

document.addEventListener('DOMContentLoaded', function() {
    populateSelect('subject', SUBJECTS);
    populateSelect('classes', CLASSES_DATA);
    if (!axpSyncClassesFromMap()) {
        var _clsTries = 0;
        var _clsPoll = setInterval(function () {
            _clsTries++;
            if (axpSyncClassesFromMap() || _clsTries >= 50) clearInterval(_clsPoll);
        }, 200);
    }
    populateDatalist('streamsList', STREAMS_DATA);
    populateSelect('period', PERIODS_DATA);
    populateSelect('hourCodes', HOURS_DATA);
    populateSelect('minCodes', MINUTES_DATA);
    if (window.AXP_WORDS) window.AXP_WORDS.apply((document.getElementById('subject') || {}).value || '', true);

    var subjectEl = document.getElementById('subject');
var _wasBaseline = false;

if (subjectEl) {
    subjectEl.addEventListener('change', function() {
        var isBaseline = this.value === 'Baseline';
        toggleBaselineMode(isBaseline, _wasBaseline);
        updateLanguageBasedFields(this.value);
        axpAfterSubjectChange(this.value);
        _wasBaseline = isBaseline;
    });
}

    var dateOption = document.getElementById('dateOption');
    var dateField  = document.getElementById('dateField');
    var dateInput  = document.getElementById('date');
    if (dateOption) {
        dateOption.addEventListener('change', function() {
            if (this.value === 'set') {
                dateField.style.display = 'block';
                dateInput.required = true;
            } else {
                dateField.style.display = 'none';
                dateInput.required = false;
                dateInput.value = '';
            }
        });
    }

    var periodEl = document.getElementById('period');
    if (periodEl) periodEl.addEventListener('change', function() { handlePeriodChange(this.value); });

    ['introMinutes','developmentMinutes','designMinutes','realizationMinutes'].forEach(function(id) {
        var el = document.getElementById(id);
        if (el) el.addEventListener('input', validateDistribution);
    });

    var distType = document.getElementById('distributionType');
    if (distType) {
        distType.addEventListener('change', function() {
            var ctf = document.getElementById('customTotalMinutesField');
            var cti = document.getElementById('customTotalMinutes');
            if (this.value === 'custom') { ctf.style.display = 'block'; cti.required = true; }
            else { ctf.style.display = 'none'; cti.required = false; cti.value = ''; }
            document.getElementById('requiredTotal').textContent =
                this.value === 'single' ? 40 : this.value === 'double' ? 80 : (parseInt(cti.value) || 0);
            validateDistribution();
        });
    }

    var ctm = document.getElementById('customTotalMinutes');
    if (ctm) ctm.addEventListener('input', function() {
        document.getElementById('requiredTotal').textContent = this.value || 0;
        validateDistribution();
    });

    var remarkOpt = document.getElementById('remarkOption');
    var customRemarkField = document.getElementById('customRemarkField');
    if (remarkOpt) {
        remarkOpt.addEventListener('change', function() {
            customRemarkField.style.display = (this.value === 'custom') ? 'block' : 'none';
        });
    }
  
   var wrdImp1El = document.getElementById('wrdImp1');
    var prevLessonField = document.getElementById('previousLessonField');
    if (wrdImp1El && prevLessonField) {
        wrdImp1El.addEventListener('change', function() {
            var v = this.value;
            prevLessonField.style.display = (v === 'continue' || v === 'Endelea' || v === 'Continuer' || v === '继续') ? 'block' : 'none';
        });
    }

    var studentsOpt = document.getElementById('studentsOption');
    var studentsFields = document.getElementById('studentsFields');
    if (studentsOpt) {
        studentsOpt.addEventListener('change', function() {
            if (this.value === 'set') {
                studentsFields.style.display = 'block';
            } else {
                studentsFields.style.display = 'none';
                studentsFields.querySelectorAll('input[type="number"]').forEach(function(i) {
                    i.required = false; i.value = '';
                });
            }
        });
    }

    var refLesson = document.getElementById('refLesson');
    if (refLesson) {
    var _refLessonUserChange = false;
    refLesson.addEventListener('mousedown', function(){ _refLessonUserChange = true; });
    refLesson.addEventListener('keydown',   function(){ _refLessonUserChange = true; });
    refLesson.addEventListener('change', function() {
        if (!_refLessonUserChange) return;
        _refLessonUserChange = false;
            var ref = this.value;
            if (!ref) return;
            var match = ref.match(/\((\d{4})\)/);
            if (match && match[1] && window.showReferenceYearPopup) {
                window.showReferenceYearPopup(match[1], function(newYear) {
                    if (newYear) window.userSelectedReferenceYear = newYear;
                    else window.userSelectedReferenceYear = null;
                });
            }
        });
    }

    var currentStep = 1;
    var totalSteps  = 5;
    var STEP_NAMES  = ['Teacher Info','Schedule','Syllabus','Students','Lesson Plan'];

    var doneSteps = {};
    var _lastStepSeen = 1;
    function updateStepUI() {
        var _newlyDone = [];
        if (currentStep > _lastStepSeen) {
            for (var k = _lastStepSeen; k < currentStep; k++) {
                if (!doneSteps[k]) { doneSteps[k] = true; _newlyDone.push(k); }
            }
        }
        _lastStepSeen = currentStep;
        document.querySelectorAll('.step').forEach(function(s) {
            s.classList.toggle('active', parseInt(s.getAttribute('data-step')) === currentStep);
        });
        document.querySelectorAll('.step-indicator').forEach(function(ind) {
            var n = parseInt(ind.getAttribute('data-step'));
            ind.classList.toggle('active', n === currentStep);
            ind.classList.toggle('completed', !!doneSteps[n] && n !== currentStep);
            ind.classList.toggle('done', !!doneSteps[n]);
            if (_newlyDone.indexOf(n) > -1) { ind.classList.remove('pop'); void ind.offsetWidth; ind.classList.add('pop'); }
        });
        document.querySelectorAll('.step-label').forEach(function(lbl, i) {
            lbl.classList.toggle('active', i + 1 === currentStep);
            lbl.classList.toggle('completed-label', !!doneSteps[i + 1] && i + 1 !== currentStep);
        });
        var pct = Math.round(((currentStep - 1) / (totalSteps - 1)) * 100);
        var pf = document.getElementById('progressFill');
        var ppf = document.getElementById('progressPctFill');
        var sil = document.getElementById('stepInfoLabel');
        var spl = document.getElementById('stepPctLabel');
        if (pf) pf.style.width = pct + '%';
        if (ppf) ppf.style.width = pct + '%';
        if (sil) sil.textContent = 'Step ' + currentStep + ' of ' + totalSteps + ' \u2014 ' + (STEP_NAMES[currentStep - 1] || '');
        if (spl) spl.textContent = pct + '% Complete';

        var prevBtn = document.getElementById('prevBtn');
        var nextBtn = document.getElementById('nextBtn');
        var submitBtn = document.getElementById('submit-lesson-plan');
        if (prevBtn) prevBtn.style.display = currentStep === 1 ? 'none' : 'block';
        if (nextBtn) nextBtn.style.display = currentStep === totalSteps ? 'none' : 'block';
        if (submitBtn) submitBtn.style.display = currentStep === totalSteps ? 'block' : 'none';

        var nudge = document.getElementById('authNudgeStep2');
        if (nudge) {
            var isAuth = (typeof AUTH !== 'undefined') && AUTH.isAuthenticated && AUTH.isAuthenticated();
            nudge.classList.toggle('show', currentStep === 2 && !isAuth);
        }

        var content = document.getElementById('axp-content');
        if (content) content.scrollTop = 0;
    }

    var prevBtn2 = document.getElementById('prevBtn');
var form     = document.getElementById('lessonPlanForm');

window.addEventListener('load', function() {
    var orig = document.getElementById('nextBtn');
    if (orig) {
        var fresh = orig.cloneNode(true);
        orig.parentNode.replaceChild(fresh, orig);
    }
    var nextBtn2 = document.getElementById('nextBtn');
    if (!nextBtn2) return;

    nextBtn2.addEventListener('click', function(e) {
        e.stopImmediatePropagation();
        if (!validateStep(currentStep)) return;
        if (currentStep >= totalSteps) return;

        if (currentStep === 1) {
            var isAuth = (typeof AUTH !== 'undefined') && AUTH.isAuthenticated && AUTH.isAuthenticated();
            if (!isAuth) {
                if (typeof AUTH !== 'undefined' && AUTH.showAuthPopup) AUTH.showAuthPopup();
                return;
            }
            if (AUTH.autoFill) AUTH.autoFill();
        }

        if (currentStep >= 2) {
            var profile = (typeof AUTH !== 'undefined' && AUTH.getProfile) ? AUTH.getProfile() : null;
            var isActive = !!(profile && profile.status === 'active');
            var paidUntil = (profile && profile.paidUntil) ? profile.paidUntil : '';
            var expired = !!(paidUntil && new Date(paidUntil) < new Date());
            if (!isActive || expired) {
                if (typeof AUTH !== 'undefined' && AUTH.refreshProfile) {
                    if (window._axpGateChecking) return;
                    window._axpGateChecking = true;
                    AUTH.refreshProfile(function () {
                        window._axpGateChecking = false;
                        var p2 = AUTH.getProfile();
                        var ok = !!(p2 && p2.status === 'active' && p2.paidUntil && new Date(p2.paidUntil) > new Date());
                        if (ok) { currentStep++; updateStepUI(); }
                        else if (typeof showPaymentPopup === 'function') showPaymentPopup('pending');
                    });
                    return;
                }
                if (typeof showPaymentPopup === 'function') showPaymentPopup('pending');
                return;
            }
        }

        currentStep++;
        updateStepUI();
    });
});

if (nextBtn2) {}
var nextBtn2 = null;

    if (prevBtn2) prevBtn2.addEventListener('click', function() {
        if (currentStep > 1) { currentStep--; updateStepUI(); }
    });

    if (form) {
        form.querySelectorAll('input, select').forEach(function(el) {
            el.addEventListener('blur', function() { validateFieldEl(this); });
            el.addEventListener('input', function() {
                if (this.classList.contains('error')) validateFieldEl(this);
            });
        });

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateStep(currentStep)) {
                var loading = document.getElementById('loadingIndicator');
                if (loading) loading.classList.add('show');
                setTimeout(function() {
                    if (loading) loading.classList.remove('show');
                }, 800);
            }
        });
    }

    var anb = document.getElementById('authNudgeBtn2');
    if (anb) anb.addEventListener('click', function() {
        if (typeof AUTH !== 'undefined' && AUTH.showAuthPopup) AUTH.showAuthPopup();
    });

    updateStepUI();

    setTimeout(function() {
        if (typeof AUTH !== 'undefined' && AUTH.autoFill) AUTH.autoFill();
    }, 300);
});
</script>
<script>
(function() {
  'use strict';
  const YOUTUBE_VIDEO_ID = 'PyHaU_CR0Y4';
  const videoToggleBtn  = document.getElementById('videoToggleBtn');
  const videoContainer  = document.getElementById('videoContainer');
  const videoCloseBtn   = document.getElementById('videoCloseBtn');
  const videoPauseBtn   = document.getElementById('videoPauseBtn');
  const pauseIcon       = document.getElementById('pauseIcon');
  const pauseLabel      = document.getElementById('pauseLabel');
  const youtubePlayer   = document.getElementById('youtubePlayer');
  const videoMini       = document.getElementById('videoMini');
  const miniPauseBtn    = document.getElementById('miniPauseBtn');
  const miniPauseIcon   = document.getElementById('miniPauseIcon');
  const miniCloseBtn    = document.getElementById('miniCloseBtn');
  const miniExpandBtn   = document.getElementById('miniExpandBtn');
  const youtubeMiniPlayer = document.getElementById('youtubeMiniPlayer');

  if (!videoToggleBtn || !videoContainer || !youtubePlayer) return;

  let iframeCreated = false;
  let isPaused = false;
  let isPlaying = false;
  let miniVisible = false;

  function createYouTubeIframe() {
    if (iframeCreated) return;
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + YOUTUBE_VIDEO_ID + '?autoplay=1&controls=1&modestbranding=1&rel=0&fs=1&playsinline=1&enablejsapi=1';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.setAttribute('frameborder', '0');
    iframe.id = 'youtubeIframe';
    youtubePlayer.appendChild(iframe);
    iframeCreated = true;
    isPlaying = true;
  }

  function getIframe() { return document.getElementById('youtubeIframe'); }

  function postToIframe(action) {
    var iframe = getIframe();
    if (!iframe) return;
    iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: action, args: [] }), '*');
  }

  function stopVideo() {
    var iframe = getIframe();
    if (iframe) {
      var src = iframe.src;
      iframe.src = '';
      iframe.src = src.replace('autoplay=1', 'autoplay=0');
    }
    isPlaying = false;
    isPaused = false;
    syncPauseBtn();
  }

  function syncPauseBtn() {
    if (isPaused) {
      if (pauseIcon) pauseIcon.className = 'bi bi-play-fill';
      if (pauseLabel) pauseLabel.textContent = 'Resume';
      if (miniPauseIcon) miniPauseIcon.className = 'bi bi-play-fill';
    } else {
      if (pauseIcon) pauseIcon.className = 'bi bi-pause-fill';
      if (pauseLabel) pauseLabel.textContent = 'Pause';
      if (miniPauseIcon) miniPauseIcon.className = 'bi bi-pause-fill';
    }
  }

  function showVideo() {
    var wrap = document.getElementById('videoSectionWrap');
    if (wrap) wrap.style.display = 'block';

    if (!iframeCreated) {
      createYouTubeIframe();
    } else {
      var iframe = getIframe();
      if (iframe && iframe.src.includes('autoplay=0')) {
        iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1');
      }
      isPlaying = true;
      isPaused = false;
      syncPauseBtn();
    }
    videoContainer.classList.add('show');
    setTimeout(function() {
      videoContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
    var btnLabel = videoToggleBtn.querySelector('.btn-label > span:first-child');
    if (btnLabel) btnLabel.textContent = 'Hide Tutorial';
    videoToggleBtn.querySelector('i').className = 'bi bi-pause-circle-fill';
  }

  function hideVideo() {
    videoContainer.classList.remove('show');
    hideMini();
    stopVideo();
    var btnLabel = videoToggleBtn.querySelector('.btn-label > span:first-child');
    if (btnLabel) btnLabel.textContent = 'Watch Tutorial Video';
    videoToggleBtn.querySelector('i').className = 'bi bi-play-circle-fill';
  }

  function toggleVideo() {
    videoContainer.classList.contains('show') ? hideVideo() : showVideo();
  }

  function togglePause() {
    if (!isPlaying && !isPaused) return;
    isPaused = !isPaused;
    postToIframe(isPaused ? 'pauseVideo' : 'playVideo');
    syncPauseBtn();
  }

  function showMini() {
    if (miniVisible || !isPlaying || !videoMini) return;
    var iframe = getIframe();
    if (iframe && youtubeMiniPlayer && youtubeMiniPlayer.children.length === 0) {
      var mini = document.createElement('iframe');
      mini.src = iframe.src.replace('autoplay=1', 'autoplay=0');
      mini.setAttribute('frameborder', '0');
      mini.allow = iframe.allow;
      mini.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:none;pointer-events:none;';
      youtubeMiniPlayer.appendChild(mini);
    }
    videoMini.classList.add('show');
    miniVisible = true;
  }

  function hideMini() {
    if (!videoMini) return;
    videoMini.classList.remove('show');
    miniVisible = false;
    if (youtubeMiniPlayer) youtubeMiniPlayer.innerHTML = '';
  }

  function expandMini() {
    hideMini();
    var wrap = document.getElementById('videoSectionWrap');
    if (wrap) wrap.style.display = 'block';
    videoContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  var lastScrollY = window.scrollY;
  window.addEventListener('scroll', function() {
    if (!isPlaying || !videoContainer.classList.contains('show')) return;
    var currentScrollY = window.scrollY;
    var rect = videoContainer.getBoundingClientRect();
    var fullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    if (!fullyVisible && currentScrollY !== lastScrollY) {
      showMini();
    } else if (fullyVisible) {
      hideMini();
    }
    lastScrollY = currentScrollY;
  }, { passive: true });

  videoToggleBtn.addEventListener('click', toggleVideo);
  if (videoCloseBtn) videoCloseBtn.addEventListener('click', hideVideo);
  if (videoPauseBtn) videoPauseBtn.addEventListener('click', togglePause);
  if (miniPauseBtn)  miniPauseBtn.addEventListener('click', togglePause);
  if (miniCloseBtn)  miniCloseBtn.addEventListener('click', function() { hideMini(); hideVideo(); });
  if (miniExpandBtn) miniExpandBtn.addEventListener('click', expandMini);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && videoContainer.classList.contains('show')) hideVideo();
  });

  window.axpShowVideo = showVideo;
})();
</script>
  
  <script>
(function(){
'use strict';
function patchWhenReady(){
if(typeof window.showReferenceYearPopup!=='function'){setTimeout(patchWhenReady,80);return;}
var _orig=window.showReferenceYearPopup;
window.showReferenceYearPopup=function(detectedYear,originalCallback){
var wrapped=function(chosenYear){
if(chosenYear){window.userSelectedReferenceYear=chosenYear;applyYearToDOM(chosenYear);}
if(typeof originalCallback==='function'){originalCallback(chosenYear);}
};
_orig.call(this,detectedYear,wrapped);
};
}
function applyYearToDOM(newYear){
var sel=document.getElementById('refLesson');
if(sel&&sel.value){
var updated=replaceYear(sel.value,newYear);
if(updated!==sel.value){
var opt=sel.options[sel.selectedIndex];
if(opt){opt.value=updated;opt.text=updated;}
sel.value=updated;
window._axp_selected_reference=updated;
}
}
var cell=document.getElementById('sylbsRfrs');
if(cell&&cell.innerHTML){cell.innerHTML=replaceYear(cell.innerHTML,newYear);}
}
function replaceYear(str,newYear){
if(!str||!newYear)return str;
var r1=str.replace(/\(\d{4}\)/g,'('+newYear+')');
if(r1!==str)return r1;
return str.replace(/\b\d{4}\b/,newYear);
}
window.addEventListener('load',function(){
var form=document.getElementById('lessonPlanForm');
if(!form)return;
form.addEventListener('submit',function(){
var yr=window.userSelectedReferenceYear;
if(yr)applyYearToDOM(yr);
},true);
});
window._applyReferenceYear=applyYearToDOM;
patchWhenReady();
})();
</script>
  
<script src="https://cdn.jsdelivr.net/gh/nmgtz/newsyllabuslessonplan@main/Lessonplannew00043.js"></script>
<script src="https://cdn.jsdelivr.net/gh/nmgtz/newsyllabuslessonplan@main/lessonConcept26.js"></script>
<script src="https://cdn.jsdelivr.net/gh/nmgtz/newsyllabuslessonplan@main/lessonplanSubject36.js"></script>
<script src="https://cdn.jsdelivr.net/gh/nmgtz/newsyllabuslessonplan@main/lessonSubmitv000018.js"></script>
<script>
/* Chinese Language: selectable wherever French is offered and in Form I–IV */
(function () {
  var LABEL = 'Chinese Language', ALSO_FORMS = true;
  function patch() {
    var m = window.AXP_CLASS_SUBJECT_MAP; if (!m) return false;
    Object.keys(m).forEach(function (k) {
      var list = m[k]; if (!Array.isArray(list)) return;
      var hasFr = list.some(function (x) { return /^french$/i.test(x); });
      var hasZh = list.some(function (x) { return /^chinese( language)?$/i.test(x); });
      var inForms = ALSO_FORMS && /^form (one|two|three|four)$/i.test(k);
      if ((hasFr || inForms) && !hasZh) list.push(LABEL);
    });
    return true;
  }
  if (!patch()) { var t = 0, iv = setInterval(function () { if (patch() || ++t > 50) clearInterval(iv); }, 200); }
})();
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.6.0/jszip.min.js"></script>
  
  
   <script>
(function () {
  'use strict';

  function getClassSubjectMap() {
    return window.AXP_CLASS_SUBJECT_MAP || null;
  }

  function populateSubjectsFor(classVal, map) {
    var subjectEl = document.getElementById('subject');
    if (!subjectEl) return;
    if (!map) return;

    var prevValue = subjectEl.value;
    var list = (map[classVal] || []).slice().sort(function (x, y) {
      return x.localeCompare(y, undefined, { sensitivity: 'base' });
    });

    subjectEl.innerHTML = '';

    var placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = list.length ? 'Select Subject' : 'Select Class First';
    subjectEl.appendChild(placeholder);

    list.forEach(function (name) {
      var o = document.createElement('option');
      o.value = name;
      o.textContent = name;
      subjectEl.appendChild(o);
    });

    subjectEl.disabled = list.length === 0;
    subjectEl.value = (list.indexOf(prevValue) !== -1) ? prevValue : '';

    subjectEl.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function bind() {
    var classesEl = document.getElementById('classes');
    var subjectEl = document.getElementById('subject');
    if (!classesEl || !subjectEl) { setTimeout(bind, 200); return; }

    var map = getClassSubjectMap();

    if (map) {
      populateSubjectsFor(classesEl.value, map);
    } else {
      var tries = 0;
      var maxTries = 50;
      var poll = setInterval(function () {
        map = getClassSubjectMap();
        tries++;
        if (map) {
          clearInterval(poll);
          populateSubjectsFor(classesEl.value, map);
        } else if (tries >= maxTries) {
          clearInterval(poll);
        }
      }, 200);
    }

    classesEl.addEventListener('change', function () {
      populateSubjectsFor(this.value, getClassSubjectMap());
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();
</script>
  
 <script>
(function(){
  'use strict';
  function attachSubjectCombobox(){
    var trigger = document.getElementById('subjectDisplayBtn');
    var triggerText = document.getElementById('subjectDisplayText');
    var panel = document.getElementById('subjectComboPanel');
    var searchInput = document.getElementById('subjectComboSearch');
    var searchClear = document.getElementById('subjectComboClear');
    var listEl = document.getElementById('subjectComboList');
    var subjectSelect = document.getElementById('subject');
    if(!trigger || !panel || !listEl || !subjectSelect){ setTimeout(attachSubjectCombobox, 300); return; }

    var highlightIdx = -1;
    var currentMatches = [];

    function optionsFromSelect(){
      return Array.prototype.map.call(subjectSelect.options, function(o){ return {value:o.value, text:o.text}; })
        .filter(function(o){ return o.value !== ''; });
    }

    function renderList(filter){
      var q = (filter||'').trim().toLowerCase();
      var opts = optionsFromSelect();
      currentMatches = q ? opts.filter(function(o){ return o.text.toLowerCase().indexOf(q) !== -1; }) : opts;
      highlightIdx = -1;
      listEl.innerHTML = '';
      if(!currentMatches.length){
        listEl.innerHTML = '<div class="axp-combo-empty">No matching subject</div>';
        return;
      }
      currentMatches.forEach(function(o, idx){
        var item = document.createElement('div');
        item.className = 'axp-combo-item' + (o.value === subjectSelect.value ? ' selected' : '');
        item.textContent = o.text;
        item.setAttribute('data-idx', idx);
        item.addEventListener('mousedown', function(e){
          e.preventDefault();
          selectOption(o.value, o.text);
        });
        listEl.appendChild(item);
      });
    }

    function selectOption(value, text){
      subjectSelect.value = value;
      subjectSelect.dispatchEvent(new Event('change', { bubbles: true }));
      closePanel();
    }

    function openPanel(){
      if(subjectSelect.disabled) return;
      trigger.classList.add('open');
      panel.classList.add('show');
      searchInput.value = '';
      searchClear.classList.remove('show');
      renderList('');
      
    }
    function closePanel(){
      trigger.classList.remove('open');
      panel.classList.remove('show');
    }
    function togglePanel(){
      panel.classList.contains('show') ? closePanel() : openPanel();
    }

    trigger.addEventListener('click', function(e){ e.stopPropagation(); togglePanel(); });

    searchInput.addEventListener('input', function(){
      searchClear.classList.toggle('show', !!this.value);
      renderList(this.value);
    });
    searchClear.addEventListener('click', function(){
      searchInput.value = '';
      searchClear.classList.remove('show');
      renderList('');
      searchInput.focus();
    });
    searchInput.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){ closePanel(); trigger.focus(); }
      else if(e.key === 'ArrowDown'){
        e.preventDefault();
        if(!currentMatches.length) return;
        highlightIdx = Math.min(highlightIdx + 1, currentMatches.length - 1);
        updateHighlight();
      } else if(e.key === 'ArrowUp'){
        e.preventDefault();
        if(!currentMatches.length) return;
        highlightIdx = Math.max(highlightIdx - 1, 0);
        updateHighlight();
      } else if(e.key === 'Enter'){
        e.preventDefault();
        if(highlightIdx >= 0 && currentMatches[highlightIdx]){
          selectOption(currentMatches[highlightIdx].value, currentMatches[highlightIdx].text);
        } else if(currentMatches.length === 1){
          selectOption(currentMatches[0].value, currentMatches[0].text);
        }
      }
    });

    function updateHighlight(){
      var items = listEl.querySelectorAll('.axp-combo-item');
      items.forEach(function(it, i){ it.classList.toggle('hl', i === highlightIdx); });
      if(items[highlightIdx]) items[highlightIdx].scrollIntoView({ block: 'nearest' });
    }

    document.addEventListener('click', function(e){
      if(!panel.contains(e.target) && e.target !== trigger && !trigger.contains(e.target)){
        closePanel();
      }
    });

    subjectSelect.addEventListener('change', function(){
      var opt = subjectSelect.options[subjectSelect.selectedIndex];
      if(opt && opt.value){
        triggerText.textContent = opt.text;
        triggerText.classList.remove('placeholder');
      } else {
        triggerText.textContent = subjectSelect.disabled ? 'Select Class First' : 'Select Subject';
        triggerText.classList.add('placeholder');
      }
      trigger.disabled = subjectSelect.disabled;
    });

    var classesEl = document.getElementById('classes');
    if(classesEl){ classesEl.addEventListener('change', function(){ closePanel(); }); }

    subjectSelect.dispatchEvent(new Event('change'));
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',attachSubjectCombobox);}
  else{attachSubjectCombobox();}
})();
</script>

<script>
(function(){
'use strict';
var SAVE_API=window.AXP_API_URL||'';
function collectPlanData(){function val(id){var el=document.getElementById(id);return el?el.value||el.textContent||'':'';}function txt(id){var el=document.getElementById(id);return el?(el.textContent||el.innerText||'').trim():'';}return{subject:val('subject'),classes:val('classes'),streams:val('streams'),school:val('school'),teacherName:val('teacherName'),date:val('date'),topic:val('topicLesson'),competence:val('compLesson'),mainLesson:val('mainlesson'),specificActivity:val('specificLesson'),materials:val('tlmaterials'),reference:val('refLesson'),period:val('period'),intro:txt('introCont'),createdAt:new Date().toISOString()};}
function saveToServer(planData,htmlContent){var api=window.AXP_API_URL||SAVE_API;if(!api){updateSaveStatus('<i class="bi bi-exclamation-triangle-fill"></i> Server URL not configured.','warn');return;}var token=(typeof AUTH!=='undefined'&&AUTH.getSessionToken)?AUTH.getSessionToken():'';var user=(typeof AUTH!=='undefined')?AUTH.getUser():null;if(!user||!token){updateSaveStatus('<i class="bi bi-exclamation-triangle-fill"></i> Sign in to save plans to your account.','warn');return;}updateSaveStatus('<i class="bi bi-cloud-upload"></i> Saving to your folder...','loading');var payload={action:'saveLessonPlan',token:token,email:user.email||'',lessonData:planData,htmlContent:htmlContent||''};fetch(api,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}).then(function(r){return r.json();}).then(function(resp){if(resp&&resp.success){updateSaveStatus('<i class="bi bi-check-circle-fill" style="color:var(--green)"></i> Saved to your account!','ok');cacheLocalPlan(planData,resp.id||Date.now());}else{updateSaveStatus('<i class="bi bi-exclamation-triangle-fill"></i> Could not save online. Saved locally.','warn');cacheLocalPlan(planData,Date.now());}}).catch(function(){updateSaveStatus('<i class="bi bi-exclamation-triangle-fill"></i> Network error. Saved locally.','warn');cacheLocalPlan(planData,Date.now());});}
function updateSaveStatus(msg,type){var el=document.getElementById('saveToServerStatus');if(!el)return;el.innerHTML=msg;el.style.color=type==='ok'?'var(--green)':type==='warn'?'#b45309':'var(--accent)';}
var LOCAL_KEY='axp_saved_plans';
function cacheLocalPlan(planData,id){try{var plans=JSON.parse(localStorage.getItem(LOCAL_KEY)||'[]');planData._id=id;plans=plans.filter(function(p){return p._id!==id;});plans.unshift(planData);if(plans.length>50)plans=plans.slice(0,50);localStorage.setItem(LOCAL_KEY,JSON.stringify(plans));}catch(e){}}
function getLocalPlans(){try{return JSON.parse(localStorage.getItem(LOCAL_KEY)||'[]');}catch(e){return[];}}
function observeResultPopup(){var ads=document.getElementById('endContentAds');if(!ads)return;new MutationObserver(function(mutations){mutations.forEach(function(m){if(m.type==='attributes'&&m.attributeName==='style'){if(ads.style.display&&ads.style.display!=='none'){var planData=collectPlanData();var tempEl=document.getElementById('lessonTemp');var htmlContent=tempEl?tempEl.innerHTML:'';setTimeout(function(){saveToServer(planData,htmlContent);},600);}}});}).observe(ads,{attributes:true});}
document.addEventListener('DOMContentLoaded',observeResultPopup);
window.loadSavedPlans=function(){
  var loading=document.getElementById('savedPlansLoading'),list=document.getElementById('savedPlansList'),empty=document.getElementById('savedPlansEmpty'),errEl=document.getElementById('savedPlansError');
  if(!list)return;if(loading)loading.style.display='block';if(list)list.style.display='none';if(empty)empty.style.display='none';if(errEl)errEl.style.display='none';
  var user=(typeof AUTH!=='undefined')?AUTH.getUser():null;var token=(typeof AUTH!=='undefined'&&AUTH.getSessionToken)?AUTH.getSessionToken():'';var api=window.AXP_API_URL||SAVE_API;
  function renderPlans(plans){if(loading)loading.style.display='none';if(!plans||plans.length===0){if(empty)empty.style.display='block';return;}list.style.display='block';list.innerHTML='';plans.forEach(function(p){var dt=p.createdAt?new Date(p.createdAt).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}):'\u2014';var card=document.createElement('div');card.className='saved-plan-card';card.innerHTML='<div class="saved-plan-card-header"><div><div class="saved-plan-card-title">'+(p.topic||p.mainLesson||'Lesson Plan')+'</div><span class="saved-plan-card-subject">'+(p.subject||'\u2014')+'</span></div></div><div class="saved-plan-card-meta"><span class="saved-plan-meta-item"><i class="bi bi-building"></i>'+(p.school||'\u2014')+'</span><span class="saved-plan-meta-item"><i class="bi bi-people-fill"></i>'+(p.classes||'')+' '+(p.streams||'')+'</span><span class="saved-plan-meta-item"><i class="bi bi-calendar3"></i>'+dt+'</span><span class="saved-plan-meta-item"><i class="bi bi-person-fill"></i>'+(p.teacherName||'\u2014')+'</span></div><div class="saved-plan-card-actions"><button class="saved-plan-dl-btn"><i class="bi bi-download"></i> Download PDF</button></div>';var dlBtn=card.querySelector('.saved-plan-dl-btn');dlBtn.addEventListener('click',function(){if(p.htmlContent){var tempEl=document.getElementById('lessonTemp');if(tempEl)tempEl.innerHTML=p.htmlContent;}var dlB=document.getElementById('downloadPdfBtn');if(dlB)dlB.click();});list.appendChild(card);});}
  if(user&&token&&api){fetch(api+'?action=getLessonPlans&token='+encodeURIComponent(token)+'&email='+encodeURIComponent(user.email||'')).then(function(r){return r.json();}).then(function(data){var serverPlans=(data&&data.plans)?data.plans:[];var local=getLocalPlans();var combined=serverPlans.slice();local.forEach(function(lp){if(!combined.some(function(sp){return sp._id==lp._id;}))combined.push(lp);});combined.sort(function(a,b){return new Date(b.createdAt||0)-new Date(a.createdAt||0);});renderPlans(combined);}).catch(function(){renderPlans(getLocalPlans());});}else{renderPlans(getLocalPlans());}
};
})();
</script>
  
  <script>
(function(){
  'use strict';
  var _cfg = null, _pending = null;
  function fmt(n){ return Number(n).toLocaleString('en-US'); }
  function valid(r){
    return !!(r && r.success && r.price && isFinite(r.price.lessonplan) && r.whatsappNumber && r.payTo && r.payTo.number && r.payTo.name && r.period &&
              r.period.lessonplan && r.period.feature);
  }
  function values(c){
    return { lessonplanPrice: fmt(c.price.lessonplan), lessonplanPeriod: c.period.lessonplan,
             featurePeriod: c.period.feature, phone: '+' + c.whatsappNumber };
  }
  function apply(root){
    if(!_cfg) return;
    var v = values(_cfg), scope = root || document;
    scope.querySelectorAll('[data-axp-pay]').forEach(function(el){
      var k = el.getAttribute('data-axp-pay');
      if(v[k] != null) el.textContent = v[k];
    });
    scope.querySelectorAll('[data-axp-pay-tel]').forEach(function(el){ el.setAttribute('href', 'tel:' + v.phone); });
  }
  function load(force){
    if(_cfg && !force) return Promise.resolve(_cfg);
    if(_pending) return _pending;
    var url = window.AXP_API_URL || '';
    if(!url) return Promise.reject(new Error('Server URL not configured'));
    _pending = fetch(url + '?action=getPaymentConfig')
      .then(function(r){ return r.json(); })
      .then(function(r){
        if(!valid(r)) throw new Error((r && r.error) || 'Invalid payment settings from server');
        _cfg = r; apply(); _pending = null; return _cfg;
      })
      .catch(function(e){ _pending = null; throw e; });
    return _pending;
  }
  window.AXP_PAYCFG = {
    load: load, get: function(){ return _cfg; }, apply: apply, fmt: fmt,
    errorText: 'Could not load payment details from the server. Please check your connection and try again.'
  };
  document.addEventListener('DOMContentLoaded', function(){ load().catch(function(){}); });
})();
</script>

  <script>
(function(){
  'use strict';
  var API_URL = window.AXP_API_URL || '';
  var _cart = [];
  var _onUnlock = null;
  var _waUrl = null;
  var _pollTimer = null;

  function getToken(){return (typeof AUTH!=='undefined'&&AUTH.getSessionToken)?AUTH.getSessionToken():'';}
  function getUser(){return (typeof AUTH!=='undefined'&&AUTH.getUser)?AUTH.getUser():null;}
  function getProfile(){return (typeof AUTH!=='undefined'&&AUTH.getProfile)?AUTH.getProfile():null;}
  function genRef(){return String(Math.floor(Math.random()*900)+100);}

  function checkAccess(subject, classVal, callback){
    var token=getToken();
    if(!API_URL||!token){callback(null);return;}
    fetch(API_URL+'?action=getFeatureAccessStatus&token='+encodeURIComponent(token)
      +'&subject='+encodeURIComponent(subject)+'&classVal='+encodeURIComponent(classVal))
      .then(function(r){return r.json();})
      .then(function(resp){callback(resp&&resp.success?resp:null);})
      .catch(function(){callback(null);});
  }
  function isActive(entry){return !!(entry && entry.status==='active');}

  function postFeatureRequest(payload, attempt){
    attempt = attempt || 0;
    var url = API_URL || window.AXP_API_URL || '';
    if(!url){ axpAlert('Server URL not configured \u2014 request not sent.'); return Promise.resolve(null); }
    return fetch(url,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(payload)})
      .then(function(r){return r.json();})
      .then(function(resp){
        if(resp && resp.success) return resp;
        var msg=(resp&&resp.error)||'The server did not record the request.';
        console.warn('[Features] requestFeaturePayment failed:',msg,resp);
        axpAlert('Your Scheme of Work / Logbook request could not be saved:\n'+msg+'\n\nPlease try again or contact support.');
        return resp;
      })
      .catch(function(err){
        if(attempt<2){
          return new Promise(function(res){setTimeout(res,1500);}).then(function(){return postFeatureRequest(payload,attempt+1);});
        }
        console.warn('[Features] network error',err);
        axpAlert('Network problem: your request may not have been saved. Please check your connection and try again.');
        return null;
      });
  }

function openPaywall(defaultItems, onUnlockCb){
    if(window.AXP_PAYCFG) window.AXP_PAYCFG.load().then(function(){ window.AXP_PAYCFG.apply(document.getElementById('featurePayOverlay')); }).catch(function(){});
    _cart = defaultItems || [];
    _onUnlock = onUnlockCb || null;
    renderItems();
    var ov=document.getElementById('featurePayOverlay');
    var s1=document.getElementById('featurePayStep1'), s2=document.getElementById('featurePayStep2');
    if(s1)s1.style.display='block';
    if(s2)s2.style.display='none';
    if(ov)ov.classList.add('show');
  }

  function renderItems(){
    var wrap=document.getElementById('featurePayItemsWrap');
    if(!wrap)return;
    wrap.innerHTML='';
    _cart.forEach(function(item,idx){
      var row=document.createElement('label');
      row.className='pay-row'+(item.checked?' is-on':'');
      row.innerHTML='<input type="checkbox" data-idx="'+idx+'" '+(item.checked?'checked':'')+'>'
        +'<span class="pay-check"><i class="bi bi-check-lg"></i></span>'
        +'<span class="pay-info"><span class="pay-name">'+item.label+'</span></span>'
        +'<span class="pay-price"><small>Tshs</small>'+Number(item.amount).toLocaleString()+'</span>';
      row.querySelector('input').addEventListener('change',function(e){_cart[idx].checked=e.target.checked;row.classList.toggle('is-on',e.target.checked);updateTotal();});
      wrap.appendChild(row);
    });
    updateTotal();
  }
  function updateTotal(){
    var total=_cart.reduce(function(s,i){return s+(i.checked?i.amount:0);},0);
    var el=document.getElementById('featurePayTotal'); if(el)el.textContent=Number(total).toLocaleString();
  }

  function buildWaMessage(items,ref,total){
    var user=getUser(), profile=getProfile();
    var fullName=(profile&&profile.fullName)||(user&&user.name)||'';
    var phone=(profile&&profile.phone)||'', school=(profile&&profile.school)||'';
    var lines=items.filter(function(i){return i.checked;})
      .map(function(i){return '- '+i.label+': Tshs '+i.amount;}).join('\n');
    var msg='\uD83C\uDF93 *ACADEMIXPOINT - MALIPO YA HUDUMA*\n\n'
      +'\uD83D\uDC64 '+fullName+'\n\uD83D\uDCF1 '+phone+'\n\uD83C\uDFEB '+school+'\n'
      +'\uD83D\uDD11 Payment ID: *'+ref+'*\n\n'+lines+'\n\n\uD83D\uDCB0 *Jumla: Tshs '+total+'*\n\n'
      +'\uD83D\uDCCC Tuma kiasi hiki kwa YAS: '+window.AXP_PAYCFG.get().payTo.number+' ('+window.AXP_PAYCFG.get().payTo.name+'), kisha subiri uwezeshaji.\n\n_Asante \uD83C\uDF93_';
    return 'https://wa.me/'+window.AXP_PAYCFG.get().whatsappNumber+'?text='+encodeURIComponent(msg);
  }

 function handlePay(){
    var selected=_cart.filter(function(i){return i.checked;});
    if(!selected.length){axpAlert('Please select at least one item.');return;}
    if(!window.AXP_PAYCFG||!window.AXP_PAYCFG.get()){
      axpAlert(window.AXP_PAYCFG?window.AXP_PAYCFG.errorText:'Payment settings are not available.');
      if(window.AXP_PAYCFG) window.AXP_PAYCFG.load(true).catch(function(){});
      return;
    }
    var total=selected.reduce(function(s,i){return s+i.amount;},0);
    var ref=genRef();

    var idEl=document.getElementById('featurePayGeneratedId'); if(idEl)idEl.textContent=ref;
    var s1=document.getElementById('featurePayStep1'), s2=document.getElementById('featurePayStep2');
    if(s1)s1.style.display='none';
    if(s2)s2.style.display='block';

    var profile=getProfile(), token=getToken();
    var items=selected.map(function(i){return {featureType:i.featureType,subject:i.subject,classVal:i.classVal};});

    if(token){
      postFeatureRequest({action:'requestFeaturePayment',token:token,reference:ref,items:items,
        fullName:(profile&&profile.fullName)||'',phone:(profile&&profile.phone)||'',school:(profile&&profile.school)||''});
    }

    _waUrl=buildWaMessage(selected,ref,total);
    setTimeout(function(){window.open(_waUrl,'_blank');},600);
    startPolling(selected);
  }

  function startPolling(selected){
    stopPolling();
    _pollTimer=setInterval(function(){
      selected.forEach(function(item){
        checkAccess(item.subject,item.classVal,function(resp){
          if(resp&&isActive(resp.access[item.featureType])){
            stopPolling();
            hidePaywall();
            if(_onUnlock)_onUnlock(item.featureType,item.subject,item.classVal);
          }
        });
      });
    },15000);
  }
  function stopPolling(){if(_pollTimer){clearInterval(_pollTimer);_pollTimer=null;}}
  function hidePaywall(){var ov=document.getElementById('featurePayOverlay');if(ov)ov.classList.remove('show');}

  document.addEventListener('DOMContentLoaded',function(){
    var ov=document.getElementById('featurePayOverlay');
    var cancelBtn=document.getElementById('featurePayCancelBtn');
    var payBtn=document.getElementById('featurePayPayBtn');
    var doneBtn=document.getElementById('featurePayDoneBtn');
    var retryBtn=document.getElementById('featurePayRetryWaBtn');
    if(cancelBtn)cancelBtn.addEventListener('click',hidePaywall);
    if(payBtn)payBtn.addEventListener('click',handlePay);
    if(doneBtn)doneBtn.addEventListener('click',hidePaywall);
    if(retryBtn)retryBtn.addEventListener('click',function(){if(_waUrl)window.open(_waUrl,'_blank');});
    if(ov)ov.addEventListener('click',function(e){if(e.target===ov)hidePaywall();});
  });

  window.AXP_FEATURES={checkAccess:checkAccess,isActive:isActive,openPaywall:openPaywall,postFeatureRequest:postFeatureRequest};

  window.axpOpenFeatureGate=function(featureType, subject, classVal, proceedFn){
    var _o=axpAgentOverride(subject, classVal);
    if(_o && _o.featureType===featureType){ proceedFn(); return; }
    window.AXP_FEATURES.checkAccess(subject, classVal, function(resp){
      if(resp && window.AXP_FEATURES.isActive(resp.access[featureType])){ proceedFn(); return; }
      if(!resp || !resp.price){ axpAlert('Could not load prices from the server. Please check your connection and try again.'); return; }
      var price = resp.price;
      var other = featureType==='sow' ? 'logbook' : 'sow';
      var otherActive = resp && window.AXP_FEATURES.isActive(resp.access[other]);
      var cart=[{featureType:featureType, subject:subject, classVal:classVal,
        amount:price[featureType], label:(featureType==='sow'?'Scheme of Work':'Logbook')+' \u2013 '+subject+' '+classVal, checked:true}];
      if(!otherActive){
        cart.push({featureType:other, subject:subject, classVal:classVal,
          amount:price[other], label:(other==='sow'?'Scheme of Work':'Logbook')+' \u2013 '+subject+' '+classVal, checked:false});
      }
      window.AXP_FEATURES.openPaywall(cart, function(){ proceedFn(); });
    });
  };
})();
</script>
  

<script>
(function(){
  'use strict';
  var API_URL=window.AXP_API_URL||'';
  var _paymentId=null,_whatsappUrl=null,_pollTimer=null;
  var _cartItems=[];

  function generatePaymentId(){return String(Math.floor(Math.random()*900)+100);}

  function showCartError(msg){
    var wrap=document.getElementById('paymentCartWrap');
    if(!wrap)return;
    _cartItems=[];
    wrap.innerHTML='<div class="pay-state is-error">'
      +'<i class="bi bi-exclamation-triangle-fill"></i> '+msg+' <a href="#" id="paymentCartRetry">Retry</a></div>';
    var r=document.getElementById('paymentCartRetry');
    if(r)r.addEventListener('click',function(e){e.preventDefault();buildCartAndRender();});
    updateCartTotal();
  }

  function buildCartAndRender(){
    var wrap=document.getElementById('paymentCartWrap');
    if(!wrap)return;
    wrap.innerHTML='<div class="pay-state"><i class="bi bi-hourglass-split"></i> Loading options\u2026</div>';

    var subject=(document.getElementById('subject')||{}).value||'';
    var classVal=(document.getElementById('classes')||{}).value||'';

    window.AXP_PAYCFG.load().then(function(cfg){
      window.AXP_PAYCFG.apply(document.getElementById('paymentOverlay'));
      var base=[{
        key:'lessonplan', label:'Lesson Plan Access (Account Activation)',
        amount:cfg.price.lessonplan, checked:true, locked:true
      }];

      function finish(extraItems){
        _cartItems=base.concat(extraItems);
        renderCartRows();
      }

      if(!subject||!classVal||!window.AXP_FEATURES){
        finish([]);
        return;
      }

      window.AXP_FEATURES.checkAccess(subject,classVal,function(resp){
        if(!resp||!resp.price){ showCartError('Could not load prices from the server. Please check your connection and try again.'); return; }
        var price=resp.price;
        var extras=[];
        var logbookActive=window.AXP_FEATURES.isActive(resp.access.logbook);
        var sowActive=window.AXP_FEATURES.isActive(resp.access.sow);
        if(!logbookActive){
          extras.push({key:'logbook',label:'Logbook \u2014 '+subject+' '+classVal,amount:price.logbook,
            checked:false,featureType:'logbook',subject:subject,classVal:classVal});
        }
        if(!sowActive){
          extras.push({key:'sow',label:'Scheme of Work \u2014 '+subject+' '+classVal,amount:price.sow,
            checked:false,featureType:'sow',subject:subject,classVal:classVal});
        }
        finish(extras);
      });
    }).catch(function(){ showCartError(window.AXP_PAYCFG.errorText); });
  }

  function renderCartRows(){
    var wrap=document.getElementById('paymentCartWrap');
    if(!wrap)return;
    wrap.innerHTML='';
    _cartItems.forEach(function(item,idx){
      var row=document.createElement('label');
      row.className='pay-row'+(item.checked?' is-on':'')+(item.locked?' is-locked':'');
      row.innerHTML='<input type="checkbox" data-idx="'+idx+'" '+(item.checked?'checked':'')+' '+(item.locked?'disabled':'')+'>'
        +'<span class="pay-check"><i class="bi bi-check-lg"></i></span>'
        +'<span class="pay-info"><span class="pay-name">'+item.label+'</span>'+(item.locked?'<span class="pay-tag">Required</span>':'')+'</span>'
        +'<span class="pay-price"><small>Tshs</small>'+Number(item.amount).toLocaleString()+'</span>';
      if(!item.locked){
        row.querySelector('input').addEventListener('change',function(e){
          _cartItems[idx].checked=e.target.checked;
          row.classList.toggle('is-on',e.target.checked);
          updateCartTotal();
        });
      }
      wrap.appendChild(row);
    });
    updateCartTotal();
  }

  function updateCartTotal(){
    var total=_cartItems.reduce(function(s,i){return s+(i.checked?i.amount:0);},0);
    var el=document.getElementById('paymentCartTotal');
    if(el)el.textContent=total.toLocaleString();
  }

  function buildWhatsappUrl(fullName, phone, school, paymentId, selectedItems, total) {
    var email = (typeof AUTH !== 'undefined' && AUTH.getUser && AUTH.getUser())
      ? AUTH.getUser().email
      : '-';

    var lines = selectedItems.map(function(i){ return '- '+i.label+': Tshs '+i.amount; }).join('\n');

    var message =
`\uD83C\uDF93 *ACADEMIXPOINT - MALIPO*

\uD83D\uDCF1 ${phone}
\uD83D\uDCE7 ${email}
\uD83C\uDFEB ${school}
\uD83D\uDC64 *${fullName}*
\uD83D\uDD11 Payment ID: *${paymentId}*

${lines}

\uD83D\uDCB0 *Jumla: Tshs ${total}*
\uD83D\uDCCC *Jinsi ya Kulipa:*
 1. Tuma kiasi hiki kwenye namba (YAS): ${window.AXP_PAYCFG.get().payTo.number} (${window.AXP_PAYCFG.get().payTo.name}). 
 2. Tuma screenshot ya muamala  
 3. Subiri uwezeshaji

\uD83D\uDCE2 Jiunge na channel yetu:
https://whatsapp.com/channel/0029Vb85drGGzzKTChqyMB0W

*Usalama:*
Tumia namba hii tu ya WhatsApp (usiandike nyingine)
_Asante \uD83C\uDF93_`;

    var encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${window.AXP_PAYCFG.get().whatsappNumber}?text=${encodedMessage}`;
  }

  function showPaymentPopup(reason){
    var overlay=document.getElementById('paymentOverlay');if(!overlay)return;
    var s1=document.getElementById('paymentStep1'),s2=document.getElementById('paymentStep2');
    if(s1)s1.style.display='block';if(s2)s2.style.display='none';
    var title=document.getElementById('paymentPopupTitle'),sub=document.getElementById('paymentPopupSubtitle');
    if(reason==='expired'){if(title)title.textContent='Subscription Expired';if(sub)sub.textContent='Renew to restore full access';}
    else{if(title)title.textContent='Activate Your Account';if(sub)sub.textContent='Choose what to activate';}
    var user=(typeof AUTH!=='undefined'&&AUTH.getUser)?AUTH.getUser():null;
    var profile=(typeof AUTH!=='undefined'&&AUTH.getProfile)?AUTH.getProfile():null;
    var fullName=(profile&&profile.fullName)?profile.fullName:(user&&user.name)?user.name:'\u2014';
    var email=user?user.email:'\u2014';
    var phone=(profile&&profile.phone)?profile.phone:'\u2014';
    var school=(profile&&profile.school)?profile.school:'\u2014';
    var nameEl=document.getElementById('payUserName'),emailEl=document.getElementById('payUserEmail');
    var phoneEl=document.getElementById('payUserPhone'),schoolEl=document.getElementById('payUserSchool');
    if(nameEl)nameEl.textContent=fullName;if(emailEl)emailEl.textContent=email;
    if(phoneEl)phoneEl.textContent=phone;if(schoolEl)schoolEl.textContent=school;
    _paymentId=null;_whatsappUrl=null;
    buildCartAndRender();
    overlay.classList.add('show');
  }

  function hidePaymentPopup(){var overlay=document.getElementById('paymentOverlay');if(overlay)overlay.classList.remove('show');}

  function handlePayNow(){
    if(!_cartItems.length||!window.AXP_PAYCFG.get()){axpAlert(window.AXP_PAYCFG.errorText);return;}
    var selected=_cartItems.filter(function(i){return i.checked;});
    if(!selected.length){axpAlert('Please select at least Lesson Plan access.');return;}

    var user=(typeof AUTH!=='undefined'&&AUTH.getUser)?AUTH.getUser():null;
    var profile=(typeof AUTH!=='undefined'&&AUTH.getProfile)?AUTH.getProfile():null;
    var token=(typeof AUTH!=='undefined'&&AUTH.getSessionToken)?AUTH.getSessionToken():'';
    var fullName=(profile&&profile.fullName)?profile.fullName:(user&&user.name)?user.name:'User';
    var phone=(profile&&profile.phone)?profile.phone:'';
    var school=(profile&&profile.school)?profile.school:'';

    _paymentId=generatePaymentId();
    var total=selected.reduce(function(s,i){return s+i.amount;},0);

    var idEl=document.getElementById('generatedPaymentId');if(idEl)idEl.textContent=_paymentId;
    var s1=document.getElementById('paymentStep1'),s2=document.getElementById('paymentStep2');
    if(s1)s1.style.display='none';if(s2)s2.style.display='block';

    if(API_URL&&token){
      fetch(API_URL,{
        method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},
        body:JSON.stringify({
          action:'requestPayment', token:token,
          method:'WhatsApp / Mobile Money', reference:_paymentId,
          fullName:fullName, phone:phone, school:school,
          email:user?user.email:'',
          notes:'Payment ID '+_paymentId+' | Name: '+fullName+' | Phone: '+phone+' | School: '+school
        })
      }).catch(function(){});

      var featureItems=selected.filter(function(i){return i.featureType;})
        .map(function(i){return {featureType:i.featureType,subject:i.subject,classVal:i.classVal};});
      if(featureItems.length){
        var featPayload={
          action:'requestFeaturePayment', token:token, reference:_paymentId,
          items:featureItems, fullName:fullName, phone:phone, school:school
        };
        if(window.AXP_FEATURES&&window.AXP_FEATURES.postFeatureRequest){
          window.AXP_FEATURES.postFeatureRequest(featPayload);
        }else{
          fetch(API_URL,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(featPayload)}).catch(function(){});
        }
      }
    }

    _whatsappUrl=buildWhatsappUrl(fullName,phone,school,_paymentId,selected,total);
    setTimeout(function(){window.open(_whatsappUrl,'_blank');},800);
    startPolling();
  }

  function startPolling(){
    stopPolling();
    _pollTimer=setInterval(function(){
      var token=(typeof AUTH!=='undefined'&&AUTH.getSessionToken)?AUTH.getSessionToken():'';
      if(!API_URL||!token)return;
      fetch(API_URL+'?action=checkSession&token='+encodeURIComponent(token))
        .then(function(r){return r.json();})
        .then(function(data){
          if(data&&data.profile){
            try{localStorage.setItem('axp_profile',JSON.stringify(data.profile));}catch(e){}
            if(typeof AUTH!=='undefined'&&AUTH.getProfile){
              var cached=AUTH.getProfile();
              if(cached){Object.assign(cached,data.profile);}
            }
            var paidUntil=data.profile.paidUntil||'';
            var isNowActive=data.profile.status==='active'&&paidUntil&&new Date(paidUntil)>new Date();
            var wasActive=document.getElementById('statusBadge')&&
                          document.getElementById('statusBadge').classList.contains('active-pill');
            if(isNowActive){
              stopPolling();
              hidePaymentPopup();
              sessionStorage.removeItem('axp_payment_shown');
              var payBar=document.getElementById('paymentNoticeBar');
              var sidebarPayBox=document.getElementById('sidebarPayBox');
              if(payBar)payBar.classList.remove('show');
              if(sidebarPayBox)sidebarPayBox.style.display='none';
              var badge=document.getElementById('statusBadge');
              if(badge){
                badge.className='nav-pill active-pill';
                badge.innerHTML='<i class="bi bi-check-circle-fill"></i><span class="badge-label"> Active</span>';
              }
              var nameEl=document.getElementById('statusName');
              if(nameEl)nameEl.style.display='';
              var settingsBadge=document.getElementById('settingAccBadge');
              var settingsSub=document.getElementById('settingAccStatus');
              if(settingsBadge){settingsBadge.className='nav-pill active-pill';settingsBadge.textContent='Active';}
              if(settingsSub)settingsSub.textContent='Your account is fully activated.';
              if(!wasActive){showActivationToast();}
            }else{
              var payBar2=document.getElementById('paymentNoticeBar');
              var sidebarPayBox2=document.getElementById('sidebarPayBox');
              if(payBar2)payBar2.classList.add('show');
              if(sidebarPayBox2)sidebarPayBox2.style.display='block';
              var badge2=document.getElementById('statusBadge');
              if(badge2){
                badge2.className='nav-pill pending-pill';
                badge2.innerHTML='<i class="bi bi-clock-fill"></i><span class="badge-label"> Pending</span>';
              }
              var settingsBadge2=document.getElementById('settingAccBadge');
              var settingsSub2=document.getElementById('settingAccStatus');
              if(settingsBadge2){settingsBadge2.className='nav-pill pending-pill';settingsBadge2.textContent='Pending';}
              if(settingsSub2)settingsSub2.textContent='Contact us to activate your account.';
            }
          }
        })
        .catch(function(){});
    },15000);
  }

  function showActivationToast(){
    var toast=document.createElement('div');
    toast.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);'
      +'background:#1e9e52;color:#fff;padding:14px 24px;font-size:.82rem;font-weight:700;'
      +'z-index:99999;font-family:var(--font,Arial,sans-serif);'
      +'display:flex;align-items:center;gap:10px;min-width:280px;justify-content:center;';
    toast.innerHTML='<i class="bi bi-check-circle-fill" style="font-size:1.1rem;"></i>'
      +' Your account has been activated! Enjoy full access.';
    document.body.appendChild(toast);
    setTimeout(function(){
      toast.style.transition='opacity .5s ease';
      toast.style.opacity='0';
      setTimeout(function(){if(toast.parentNode)toast.parentNode.removeChild(toast);},500);
    },5000);
  }
  function stopPolling(){if(_pollTimer){clearInterval(_pollTimer);_pollTimer=null;}}

  document.addEventListener('DOMContentLoaded',function(){
    var payBtn=document.getElementById('paymentPayBtn'),cancelBtn=document.getElementById('paymentCancelBtn');
    var doneBtn=document.getElementById('paymentDoneBtn'),retryBtn=document.getElementById('paymentWhatsappRetryBtn');
    var overlay=document.getElementById('paymentOverlay');
    if(payBtn)payBtn.addEventListener('click',handlePayNow);
    if(cancelBtn)cancelBtn.addEventListener('click',hidePaymentPopup);
    if(doneBtn)doneBtn.addEventListener('click',function(){hidePaymentPopup();startPolling();});
    if(retryBtn)retryBtn.addEventListener('click',function(){if(_whatsappUrl)window.open(_whatsappUrl,'_blank');});
    if(overlay)overlay.addEventListener('click',function(e){if(e.target===overlay){hidePaymentPopup();startPolling();}});
    var bannerBtn=document.querySelector('.activation-banner-btn');if(bannerBtn)bannerBtn.onclick=function(){showPaymentPopup('pending');};
    setTimeout(function(){
      var profile=(typeof AUTH!=='undefined'&&AUTH.getProfile)?AUTH.getProfile():null;
      var user=(typeof AUTH!=='undefined'&&AUTH.getUser)?AUTH.getUser():null;
      if(user&&profile&&profile.status!=='active'){
        startPolling();
      }
    },3000);
  });

  window.showPaymentPopup=showPaymentPopup;
  window.hidePaymentPopup=hidePaymentPopup;
})();
</script>
  
  <script>
(function() {
  function removeFloating() {
    document.querySelectorAll('body > div, body > span').forEach(function(el) {
      var style = window.getComputedStyle(el);
      if (style.position === 'fixed' || style.position === 'absolute') {
        var knownIds = [
          'loadingIndicator','sidebar-overlay','authOverlay','profileOverlay',
          'paymentOverlay','endContentAds',
          'axp-app','referenceYearOverlay','axpStepCheer','annxOv'
        ];
        if (knownIds.indexOf(el.id) === -1) {
          el.style.display = 'none';
          el.remove();
        }
      }
    });
  }
  window.addEventListener('load', removeFloating);
  setTimeout(removeFloating, 1500);
  setTimeout(removeFloating, 3000);
})();
  </script>
  
  <script>
(function () {
  'use strict';

  var API_URL = window.AXP_API_URL || '';
  var LOCAL_KEY = 'axp_syllabus_contents';

  var SWAHILI_SUBJECTS = [
    'Kiswahili', 'Fasihi ya Kiswahili',
    'Historia Ya Tanzania na Maadili', 'Elimu ya Dini ya Kiislam'
  ];

 function isSwahili(subject) {
    return isSwahiliSubjectSafe(subject);              
}

  function collectSyllabusData() {
    function selText(id) {
      var el = document.getElementById(id);
      if (!el) return '';
      if (el.tagName === 'SELECT') {
        return el.options[el.selectedIndex] ? el.options[el.selectedIndex].text.trim() : '';
      }
      return (el.value || '').trim();
    }
    function rawVal(id) {
      var el = document.getElementById(id);
      return el ? (el.value || '').trim() : '';
    }
    return {
      subject:          rawVal('subject'),
      classVal:         rawVal('classes'),
      stream:           rawVal('streams'),
      school:           rawVal('school'),
      teacherName:      rawVal('teacherName'),
      date:             rawVal('date'),
      topic:            selText('topicLesson'),
      competence:       selText('compLesson'),
      mainLesson:       selText('mainlesson'),
      specificActivity: rawVal('specificLesson'),
      materials:        rawVal('tlmaterials'),
      reference:        rawVal('refLesson'),
      savedAt:          new Date().toISOString()
    };
  }

  function saveToServer(syllabusData) {
    var token = (typeof AUTH !== 'undefined' && AUTH.getSessionToken) ? AUTH.getSessionToken() : '';
    var user  = (typeof AUTH !== 'undefined' && AUTH.getUser) ? AUTH.getUser() : null;
    if (!user || !token || !API_URL) { cacheLocal(syllabusData); return; }
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'saveSyllabusContent',
        token: token,
        email: user.email || '',
        syllabusData: syllabusData
      })
    })
    .then(function(r) { return r.json(); })
    .then(function(resp) {
      if (resp && resp.success && !resp.duplicate) cacheLocal(syllabusData, resp.id);
      else if (!resp || !resp.success) cacheLocal(syllabusData);
    })
    .catch(function() { cacheLocal(syllabusData); });
  }

  function cacheLocal(data, id) {
    try {
      var all = JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]');
      data._id = id || ('local_' + Date.now());
      all = all.filter(function(x) { return x._id !== data._id; });
      all.unshift(data);
      if (all.length > 200) all = all.slice(0, 200);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(all));
    } catch(e) {}
  }

  function getLocalItems() {
    try { return JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]'); } catch(e) { return []; }
  }

  window.addEventListener('load', function() {
    setTimeout(function() {
      var nextBtn = document.getElementById('nextBtn');
      if (!nextBtn) return;
      nextBtn.addEventListener('click', function() {
        var activeStep = document.querySelector('.step.active');
        if (!activeStep) return;
        var stepNum = parseInt(activeStep.getAttribute('data-step'));
        if (stepNum !== 3) return;
        var topic = (document.getElementById('topicLesson') || {}).value;
        if (!topic) return;
        var syllabusData = collectSyllabusData();
        setTimeout(function() { saveToServer(syllabusData); }, 400);
      }, true);
    }, 500);
  });

  function esc(str) {
    return String(str || '')
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function todayISO() {
    var now = new Date();
    var y = now.getFullYear();
    var m = String(now.getMonth() + 1).padStart(2, '0');
    var d = String(now.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + d;
  }

  function openBackdateModal(prefillData) {
    var existingModal = document.getElementById('axp-backdate-modal');
    if (existingModal) existingModal.parentNode.removeChild(existingModal);

    var overlay = document.createElement('div');
    overlay.id = 'axp-backdate-modal';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;';

    var today = todayISO();

    var subjectOpts = [
      'Biology','Chemistry','Physics','Mathematics','English Language',
      'English Literature','Geography','History','Civics','Commerce',
      'Book Keeping','Agriculture','Computer Studies','French','Chinese Language','Arabic',
      'Kiswahili','Fasihi ya Kiswahili','Historia Ya Tanzania na Maadili',
      'Elimu ya Dini ya Kiislam','Physical Education','Fine Art','Music'
    ].map(function(s) {
      var sel = (prefillData && prefillData.subject === s) ? ' selected' : '';
      return '<option value="' + esc(s) + '"' + sel + '>' + esc(s) + '</option>';
    }).join('');

    overlay.innerHTML = [
      '<div style="background:var(--surface,#fff);border-radius:0;width:100%;max-width:520px;max-height:90vh;overflow-y:auto;font-family:var(--font,Arial,sans-serif);">',
      '  <div style="padding:14px 16px;border-bottom:1px solid var(--border,#e0e0e0);display:flex;align-items:center;justify-content:space-between;">',
      '    <div style="display:flex;align-items:center;gap:8px;">',
      '      <i class="bi bi-clock-history" style="color:var(--accent,#1a73e8);font-size:1.1rem;"></i>',
      '      <span style="font-weight:700;font-size:.88rem;color:var(--text,#222);">Add Previous Syllabus Entry</span>',
      '    </div>',
      '    <button id="axp-bd-close" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--text3,#999);line-height:1;">&times;</button>',
      '  </div>',
      '  <div style="padding:14px 16px;">',
      '    <div style="background:var(--surface2,#f5f5f5);border-left:3px solid var(--accent,#1a73e8);padding:8px 10px;font-size:.74rem;color:var(--text2,#555);margin-bottom:14px;line-height:1.5;">',
      '      <i class="bi bi-info-circle"></i> Fill in details for content taught before you started using this system. Future dates are not allowed.',
      '    </div>',
      '    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">',
      '      <div style="grid-column:1/-1;">',
      '        <label style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--text2,#666);display:block;margin-bottom:3px;">Date Taught <span style="color:var(--red,#d32f2f);">*</span></label>',
      '        <input id="axp-bd-date" type="date" max="' + today + '" value="' + today + '" style="width:100%;padding:7px 9px;border:1px solid var(--border2,#ccc);font-size:.8rem;font-family:var(--font,Arial,sans-serif);background:var(--surface,#fff);color:var(--text,#222);outline:none;">',
      '        <div id="axp-bd-date-err" style="color:var(--red,#d32f2f);font-size:.68rem;margin-top:2px;display:none;">Date cannot be today or in the future.</div>',
      '      </div>',
      '      <div style="grid-column:1/-1;">',
      '        <label style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--text2,#666);display:block;margin-bottom:3px;">Subject <span style="color:var(--red,#d32f2f);">*</span></label>',
      '        <select id="axp-bd-subject" style="width:100%;padding:7px 9px;border:1px solid var(--border2,#ccc);font-size:.8rem;font-family:var(--font,Arial,sans-serif);background:var(--surface,#fff);color:var(--text,#222);outline:none;">',
      '          <option value="">-- Select Subject --</option>',
      subjectOpts,
      '        </select>',
      '      </div>',
      '      <div>',
      '        <label style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--text2,#666);display:block;margin-bottom:3px;">Class <span style="color:var(--red,#d32f2f);">*</span></label>',
      '        <input id="axp-bd-class" type="text" placeholder="e.g. Form One" value="' + esc((prefillData && prefillData.classVal) || '') + '" style="width:100%;padding:7px 9px;border:1px solid var(--border2,#ccc);font-size:.8rem;font-family:var(--font,Arial,sans-serif);background:var(--surface,#fff);color:var(--text,#222);outline:none;">',
      '      </div>',
      '      <div>',
      '        <label style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--text2,#666);display:block;margin-bottom:3px;">Stream</label>',
      '        <input id="axp-bd-stream" type="text" placeholder="e.g. A" value="' + esc((prefillData && prefillData.stream) || '') + '" style="width:100%;padding:7px 9px;border:1px solid var(--border2,#ccc);font-size:.8rem;font-family:var(--font,Arial,sans-serif);background:var(--surface,#fff);color:var(--text,#222);outline:none;">',
      '      </div>',
      '      <div style="grid-column:1/-1;">',
      '        <label style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--text2,#666);display:block;margin-bottom:3px;">Topic / Main Competence <span style="color:var(--red,#d32f2f);">*</span></label>',
      '        <input id="axp-bd-topic" type="text" placeholder="e.g. Introduction to Cells" value="' + esc((prefillData && prefillData.topic) || '') + '" style="width:100%;padding:7px 9px;border:1px solid var(--border2,#ccc);font-size:.8rem;font-family:var(--font,Arial,sans-serif);background:var(--surface,#fff);color:var(--text,#222);outline:none;">',
      '      </div>',
      '      <div style="grid-column:1/-1;">',
      '        <label style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--text2,#666);display:block;margin-bottom:3px;">Specific Competence</label>',
      '        <input id="axp-bd-competence" type="text" placeholder="e.g. Describe the structure of a cell" value="' + esc((prefillData && prefillData.competence) || '') + '" style="width:100%;padding:7px 9px;border:1px solid var(--border2,#ccc);font-size:.8rem;font-family:var(--font,Arial,sans-serif);background:var(--surface,#fff);color:var(--text,#222);outline:none;">',
      '      </div>',
      '      <div style="grid-column:1/-1;">',
      '        <label style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--text2,#666);display:block;margin-bottom:3px;">Main Activity</label>',
      '        <input id="axp-bd-mainlesson" type="text" placeholder="e.g. Drawing and labelling a cell" value="' + esc((prefillData && prefillData.mainLesson) || '') + '" style="width:100%;padding:7px 9px;border:1px solid var(--border2,#ccc);font-size:.8rem;font-family:var(--font,Arial,sans-serif);background:var(--surface,#fff);color:var(--text,#222);outline:none;">',
      '      </div>',
      '      <div style="grid-column:1/-1;">',
      '        <label style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--text2,#666);display:block;margin-bottom:3px;">Specific Activity</label>',
      '        <input id="axp-bd-specific" type="text" placeholder="e.g. Students draw animal and plant cells" value="' + esc((prefillData && prefillData.specificActivity) || '') + '" style="width:100%;padding:7px 9px;border:1px solid var(--border2,#ccc);font-size:.8rem;font-family:var(--font,Arial,sans-serif);background:var(--surface,#fff);color:var(--text,#222);outline:none;">',
      '      </div>',
      '      <div style="grid-column:1/-1;">',
      '        <label style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--text2,#666);display:block;margin-bottom:3px;">T&amp;L Materials</label>',
      '        <input id="axp-bd-materials" type="text" placeholder="e.g. Textbook, charts" value="' + esc((prefillData && prefillData.materials) || '') + '" style="width:100%;padding:7px 9px;border:1px solid var(--border2,#ccc);font-size:.8rem;font-family:var(--font,Arial,sans-serif);background:var(--surface,#fff);color:var(--text,#222);outline:none;">',
      '      </div>',
      '      <div style="grid-column:1/-1;">',
      '        <label style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--text2,#666);display:block;margin-bottom:3px;">Reference</label>',
      '        <input id="axp-bd-reference" type="text" placeholder="e.g. Biology Form One pg. 12" value="' + esc((prefillData && prefillData.reference) || '') + '" style="width:100%;padding:7px 9px;border:1px solid var(--border2,#ccc);font-size:.8rem;font-family:var(--font,Arial,sans-serif);background:var(--surface,#fff);color:var(--text,#222);outline:none;">',
      '      </div>',
      '      <div>',
      '        <label style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--text2,#666);display:block;margin-bottom:3px;">Teacher Name</label>',
      '        <input id="axp-bd-teacher" type="text" placeholder="Teacher\'s full name" readonly title="Loaded from your profile" value="' + esc((prefillData && prefillData.teacherName) || '') + '" style="cursor:not-allowed;opacity:.85;width:100%;padding:7px 9px;border:1px solid var(--border2,#ccc);font-size:.8rem;font-family:var(--font,Arial,sans-serif);background:var(--surface,#fff);color:var(--text,#222);outline:none;">',
      '      </div>',
      '      <div>',
      '        <label style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--text2,#666);display:block;margin-bottom:3px;">School</label>',
      '        <input id="axp-bd-school" type="text" placeholder="School name" readonly title="Loaded from your profile" value="' + esc((prefillData && prefillData.school) || '') + '" style="cursor:not-allowed;opacity:.85;width:100%;padding:7px 9px;border:1px solid var(--border2,#ccc);font-size:.8rem;font-family:var(--font,Arial,sans-serif);background:var(--surface,#fff);color:var(--text,#222);outline:none;">',
      '      </div>',
      '    </div>',
      '    <div id="axp-bd-err" style="color:var(--red,#d32f2f);font-size:.73rem;margin-top:10px;display:none;padding:6px 10px;background:#fff3f3;border-left:3px solid var(--red,#d32f2f);"></div>',
      '  </div>',
      '  <div style="padding:10px 16px 14px;display:flex;gap:8px;justify-content:flex-end;border-top:1px solid var(--border,#e0e0e0);">',
      '    <button id="axp-bd-cancel" style="padding:8px 18px;background:none;border:1px solid var(--border2,#ccc);color:var(--text,#222);font-size:.78rem;font-weight:700;cursor:pointer;font-family:var(--font,Arial,sans-serif);">Cancel</button>',
      '    <button id="axp-bd-save" style="padding:8px 22px;background:var(--accent,#1a73e8);color:#fff;border:none;font-size:.78rem;font-weight:700;cursor:pointer;font-family:var(--font,Arial,sans-serif);display:flex;align-items:center;gap:6px;"><i class="bi bi-floppy"></i> Save Entry</button>',
      '  </div>',
      '</div>'
    ].join('');

    document.body.appendChild(overlay);

    function closeModal() {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }

    document.getElementById('axp-bd-close').addEventListener('click', closeModal);
    document.getElementById('axp-bd-cancel').addEventListener('click', closeModal);
    overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });

    var dateInput = document.getElementById('axp-bd-date');
    var dateErr   = document.getElementById('axp-bd-date-err');

    dateInput.addEventListener('change', function() {
      var chosen = dateInput.value;
      if (chosen >= today) {
        dateErr.style.display = 'block';
        dateInput.style.borderColor = 'var(--red,#d32f2f)';
      } else {
        dateErr.style.display = 'none';
        dateInput.style.borderColor = 'var(--border2,#ccc)';
      }
    });

    document.getElementById('axp-bd-save').addEventListener('click', function() {
      var errEl = document.getElementById('axp-bd-err');
      errEl.style.display = 'none';

      var chosenDate = dateInput.value;
      var subject    = document.getElementById('axp-bd-subject').value.trim();
      var classVal   = document.getElementById('axp-bd-class').value.trim();
      var topic      = document.getElementById('axp-bd-topic').value.trim();

      if (!chosenDate) { errEl.textContent = 'Please select a date.'; errEl.style.display = 'block'; return; }
      if (chosenDate >= today) {
        dateErr.style.display = 'block';
        dateInput.style.borderColor = 'var(--red,#d32f2f)';
        errEl.textContent = 'Date cannot be today or in the future.';
        errEl.style.display = 'block';
        return;
      }
      if (!subject) { errEl.textContent = 'Please select a subject.'; errEl.style.display = 'block'; return; }
      if (!classVal) { errEl.textContent = 'Please enter a class.'; errEl.style.display = 'block'; return; }
      if (!topic) { errEl.textContent = 'Please enter a topic / main competence.'; errEl.style.display = 'block'; return; }

      var backdatedISO = new Date(chosenDate + 'T12:00:00').toISOString();

      var entry = {
        subject:          subject,
        classVal:         classVal,
        stream:           document.getElementById('axp-bd-stream').value.trim(),
        school:           ((typeof AUTH !== 'undefined' && AUTH.getProfile && AUTH.getProfile() && AUTH.getProfile().school) || document.getElementById('axp-bd-school').value).trim(),
        teacherName:      ((typeof AUTH !== 'undefined' && AUTH.getProfile && AUTH.getProfile() && AUTH.getProfile().fullName) || document.getElementById('axp-bd-teacher').value).trim(),
        date:             chosenDate,
        topic:            topic,
        competence:       document.getElementById('axp-bd-competence').value.trim(),
        mainLesson:       document.getElementById('axp-bd-mainlesson').value.trim(),
        specificActivity: document.getElementById('axp-bd-specific').value.trim(),
        materials:        document.getElementById('axp-bd-materials').value.trim(),
        reference:        document.getElementById('axp-bd-reference').value.trim(),
        savedAt:          backdatedISO,
        _backfilled:      true
      };

      var saveBtn = document.getElementById('axp-bd-save');
      saveBtn.disabled = true;
      saveBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> Saving...';

      saveToServer(entry);

      setTimeout(function() {
        closeModal();
        loadSyllabusContent();
        var toast = document.createElement('div');
        toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:var(--green,#2e7d32);color:#fff;padding:10px 20px;font-size:.8rem;font-weight:700;z-index:99999;border-radius:0;font-family:var(--font,Arial,sans-serif);display:flex;align-items:center;gap:8px;';
        toast.innerHTML = '<i class="bi bi-check-circle"></i> Previous entry saved and sorted by date.';
        document.body.appendChild(toast);
        setTimeout(function() { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 3000);
      }, 600);
    });
  }

  function injectPanel() {
    var panel = document.createElement('div');
    panel.className = 'main-panel';
    panel.id = 'panel-syllabus';
    panel.innerHTML = [
      '<div class="panel-header">',
      '  <button class="panel-back" onclick="showPanel(\'lessonplan\')">',
      '    <i class="bi bi-arrow-left"></i> Back',
      '  </button>',
      '  <h2><i class="bi bi-journal-richtext"></i> My Syllabus Content</h2>',
      '  <p>Syllabus details saved automatically when you advance past Step 3. Click a card to expand.</p>',
      '</div>',
      '<div style="padding:10px 14px 0;display:flex;justify-content:flex-end;">',
      '  <button id="axp-add-previous-btn" style="display:inline-flex;align-items:center;gap:6px;background:var(--surface2,#f0f0f0);border:1px solid var(--border2,#ccc);color:var(--text,#222);padding:6px 14px;font-size:.74rem;font-weight:700;cursor:pointer;font-family:var(--font,Arial,sans-serif);">',
      '    <i class="bi bi-clock-history" style="color:var(--accent,#1a73e8);"></i> Add Previous Entry',
      '  </button>',
      '</div>',
      '<div class="panel-body" id="syllabusContentBody">',
      '  <div id="syllabusLoading" style="text-align:center;padding:30px;color:var(--text3);">',
      '    <i class="bi bi-hourglass-split" style="font-size:2rem;display:block;margin-bottom:10px;"></i>',
      '    <div style="font-size:.8rem;">Loading your saved content...</div>',
      '  </div>',
      '  <div id="syllabusList" style="display:none;"></div>',
      '  <div id="syllabusEmpty" style="display:none;text-align:center;padding:30px;color:var(--text3);">',
      '    <i class="bi bi-journal-x" style="font-size:2.5rem;display:block;margin-bottom:10px;color:var(--border2);"></i>',
      '    <div style="font-size:.85rem;font-weight:600;margin-bottom:6px;">No syllabus content yet</div>',
      '    <div style="font-size:.75rem;">Fill in Step 3 and click Next \u2014 details appear here automatically.</div>',
      '    <button onclick="showPanel(\'lessonplan\')" style="margin-top:14px;background:var(--accent);color:white;border:none;padding:8px 20px;font-size:.78rem;font-weight:700;cursor:pointer;font-family:var(--font);">Create Lesson Plan</button>',
      '  </div>',
      '  <div id="syllabusError" style="display:none;text-align:center;padding:20px;color:var(--red);font-size:.8rem;"></div>',
      '</div>',
      '<style>',
      '.syl-card-body{max-height:0;overflow:hidden;transition:max-height .3s ease;}',
      '.syl-card-body.open{max-height:800px;}',
      '.syl-card-toggle{transition:transform .25s;}',
      '.syl-card-toggle.open{transform:rotate(180deg);}',
      '.axp-backfill-badge{display:inline-flex;align-items:center;gap:3px;background:var(--accent,#1a73e8);color:#fff;font-size:.58rem;font-weight:700;padding:1px 6px;letter-spacing:.3px;vertical-align:middle;margin-left:5px;border-radius:0;}',
      '</style>'
    ].join('');

    var contentInner = document.querySelector('.content-inner');
    if (contentInner) contentInner.appendChild(panel);

    document.getElementById('axp-add-previous-btn').addEventListener('click', function() {
      var prefill = null;
      var profile = (typeof AUTH !== 'undefined' && AUTH.getProfile) ? AUTH.getProfile() : null;
      if (profile) {
        prefill = {
          teacherName: profile.fullName || '',
          school:      profile.school   || ''
        };
      }
      openBackdateModal(prefill);
    });

    var savedPlansBtn = document.getElementById('sb-savedplans');
    if (savedPlansBtn) {
      var btn = document.createElement('button');
      btn.className = 'axp-nav-btn';
      btn.id = 'sb-syllabus';
      btn.innerHTML = '<i class="bi bi-journal-richtext"></i> Syllabus Content';
      savedPlansBtn.parentNode.insertBefore(btn, savedPlansBtn.nextSibling);
      btn.addEventListener('click', function() {
        loadSyllabusContent();
        showPanel('syllabus');
        closeSidebarIfMobile();
      });
    }
  }

  function closeSidebarIfMobile() {
    if (window.innerWidth > 768) return;
    var sidebar = document.getElementById('axp-sidebar');
    var overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
  }

  function loadSyllabusContent() {
    var loadingEl = document.getElementById('syllabusLoading');
    var listEl    = document.getElementById('syllabusList');
    var emptyEl   = document.getElementById('syllabusEmpty');
    var errorEl   = document.getElementById('syllabusError');
    if (!listEl) return;
    if (loadingEl) loadingEl.style.display = 'block';
    if (listEl)   listEl.style.display = 'none';
    if (emptyEl)  emptyEl.style.display = 'none';
    if (errorEl)  errorEl.style.display = 'none';

    var token = (typeof AUTH !== 'undefined' && AUTH.getSessionToken) ? AUTH.getSessionToken() : '';
    var user  = (typeof AUTH !== 'undefined' && AUTH.getUser) ? AUTH.getUser() : null;

    function render(items) {
      if (loadingEl) loadingEl.style.display = 'none';
      if (!items || items.length === 0) { if (emptyEl) emptyEl.style.display = 'block'; return; }
      items.sort(function(a, b) { return new Date(a.savedAt || 0) - new Date(b.savedAt || 0); });
      listEl.style.display = 'block';
      listEl.innerHTML = '';

      var currentMonth = '';
      items.forEach(function(item) {
        var savedDate = item.savedAt ? new Date(item.savedAt) : null;
        var monthLabel = savedDate
          ? savedDate.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
          : '';

        if (monthLabel && monthLabel !== currentMonth) {
          currentMonth = monthLabel;
          var sep = document.createElement('div');
          sep.style.cssText = 'font-size:.74rem;font-weight:800;text-transform:uppercase;letter-spacing:.6px;color:var(--text2,#555);padding:10px 2px 4px;border-bottom:1px solid var(--border,#e0e0e0);margin-bottom:6px;';
          sep.textContent = monthLabel;
          listEl.appendChild(sep);
        }

        var dt = savedDate
          ? savedDate.toLocaleDateString('en-GB', {day:'2-digit',month:'short',year:'numeric'})
          : '\u2014';
        var card = document.createElement('div');
        card.className = 'saved-plan-card';
        card.style.cssText = 'border-left-color:' + (item._backfilled ? 'var(--accent,#1a73e8)' : 'var(--green)') + ';margin-bottom:8px;cursor:pointer;';
        var summaryText = [
          item.topic      ? '<b>' + esc(item.topic) + '</b>' : '',
          item.competence ? ' \u203a ' + esc(item.competence) : '',
          item.mainLesson ? ' \u203a ' + esc(item.mainLesson) : ''
        ].filter(Boolean).join('');
        var backfillBadge = item._backfilled
          ? '<span class="axp-backfill-badge"><i class="bi bi-clock-history"></i> Backdated</span>'
          : '';
        card.innerHTML = [
          '<div class="saved-plan-card-header syl-card-header" style="cursor:pointer;user-select:none;">',
          '  <div style="flex:1;min-width:0;">',
          '    <div class="saved-plan-card-title" style="font-size:.78rem;line-height:1.4;">' + summaryText + backfillBadge + '</div>',
          '    <span class="saved-plan-card-subject" style="background:var(--green);margin-top:3px;">' + esc(item.subject || '\u2014') + '</span>',
          '    <span style="margin-left:6px;font-size:.62rem;color:var(--text3);vertical-align:middle;"><i class="bi bi-calendar3"></i> ' + dt + '</span>',
          '  </div>',
          '  <i class="bi bi-chevron-down syl-card-toggle" style="font-size:.85rem;color:var(--text3);flex-shrink:0;margin-left:8px;"></i>',
          '</div>',
          '<div class="syl-card-body">',
          '  <div style="padding:10px 12px;">',
          renderFields(item),
          '    <div style="display:flex;gap:8px;padding-top:8px;border-top:1px solid var(--border);margin-top:6px;">',
          '      <button class="syl-del-btn" style="display:flex;align-items:center;gap:4px;background:none;border:1px solid var(--border2);color:var(--red);padding:4px 11px;font-size:.68rem;font-weight:700;cursor:pointer;font-family:var(--font);"><i class="bi bi-trash3"></i> Delete</button>',
          '    </div>',
          '  </div>',
          '</div>'
        ].join('');
        var header = card.querySelector('.syl-card-header');
        var body   = card.querySelector('.syl-card-body');
        var icon   = card.querySelector('.syl-card-toggle');
        header.addEventListener('click', function(e) {
          if (e.target.closest('.syl-del-btn')) return;
          var open = body.classList.toggle('open');
          icon.classList.toggle('open', open);
        });
        card.querySelector('.syl-del-btn').addEventListener('click', function(e) {
          e.stopPropagation();
          deleteItem(item._id || item.id, card);
        });
        listEl.appendChild(card);
      });
    }

    if (user && token && API_URL) {
      fetch(API_URL + '?action=getSyllabusContents&token=' + encodeURIComponent(token)
            + '&email=' + encodeURIComponent(user.email || ''))
        .then(function(r) { return r.json(); })
        .then(function(resp) {
          var serverItems = (resp && resp.items) ? resp.items : [];
          var local = getLocalItems();
          var ids = {};
          serverItems.forEach(function(s) { ids[s._id] = true; });
          local.forEach(function(lp) { if (!ids[lp._id]) serverItems.push(lp); });
          render(serverItems);
        })
        .catch(function() { render(getLocalItems()); });
    } else {
      setTimeout(function() { render(getLocalItems()); }, 300);
    }
  }

  function renderFields(item) {
    var fields = [
      { label: 'Topic (Main Competence)',     value: item.topic },
      { label: 'Competence (Specific Comp.)', value: item.competence },
      { label: 'Main Lesson (Main Activity)', value: item.mainLesson },
      { label: 'Specific Activity',           value: item.specificActivity },
      { label: 'Class / Stream',              value: [item.classVal, item.stream].filter(Boolean).join(' \u2014 ') },
      { label: 'School',                      value: item.school },
      { label: 'Teacher',                     value: item.teacherName },
      { label: 'T&L Materials',               value: item.materials },
      { label: 'Reference',                   value: item.reference }
    ];
    return fields.filter(function(f) { return !!f.value; }).map(function(f) {
      return '<div style="display:flex;gap:8px;align-items:flex-start;padding:4px 0;border-bottom:1px solid var(--border);font-size:.74rem;">' +
        '<span style="min-width:130px;flex-shrink:0;font-weight:700;color:var(--text2);text-transform:uppercase;font-size:.58rem;letter-spacing:.5px;padding-top:2px;">' + esc(f.label) + '</span>' +
        '<span style="color:var(--text);flex:1;line-height:1.5;">' + esc(f.value) + '</span></div>';
    }).join('');
  }

  function deleteItem(id, cardEl) {
    if (!confirm('Delete this syllabus entry?')) return;
    try {
      var all = JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]');
      localStorage.setItem(LOCAL_KEY, JSON.stringify(all.filter(function(x) { return x._id !== id; })));
    } catch(e) {}
    if (cardEl && cardEl.parentNode) cardEl.parentNode.removeChild(cardEl);
    var listEl = document.getElementById('syllabusList');
    if (listEl && listEl.children.length === 0) {
      listEl.style.display = 'none';
      var emptyEl = document.getElementById('syllabusEmpty');
      if (emptyEl) emptyEl.style.display = 'block';
    }
    var token = (typeof AUTH !== 'undefined' && AUTH.getSessionToken) ? AUTH.getSessionToken() : '';
    if (token && API_URL && id && !String(id).startsWith('local_')) {
      fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'deleteSyllabusContent', token: token, id: id })
      }).catch(function() {});
    }
  }


  function injectLogbookPanel() {
    if (document.getElementById('panel-logbook')) return;
    var panel = document.createElement('div');
    panel.className = 'main-panel';
    panel.id = 'panel-logbook';
    panel.innerHTML = [
      '<div class="panel-header">',
      '  <button class="panel-back" onclick="showPanel(\'syllabus\')">',
      '    <i class="bi bi-arrow-left"></i> Back',
      '  </button>',
      '  <h2><i class="bi bi-book-half"></i> Subject Logbook</h2>',
      '  <p id="logbookPanelSubtitle">Select a subject and class in Step 2, then preview or download your logbook.</p>',
      '</div>',
      '<div class="panel-body" style="padding:0;">',
      '  <div id="logbookFieldBar" style="display:none;padding:10px 16px;background:var(--surface);border-bottom:1px solid var(--border);"></div>',
      '  <div id="logbookPreviewWrap" style="background:var(--surface2);padding:10px 6px;min-height:200px;">',
      '    <div id="logbookPreviewPlaceholder" style="text-align:center;padding:40px 20px;color:var(--text3);">',
      '      <i class="bi bi-eye-slash" style="font-size:2.5rem;display:block;margin-bottom:12px;color:var(--border2);"></i>',
      '      <div style="font-size:.85rem;font-weight:600;margin-bottom:6px;">Preview not loaded</div>',
      '      <div style="font-size:.75rem;margin-bottom:14px;">Click the button below to generate and preview your logbook.</div>',
      '      <button id="logbookPreviewBtn" style="background:var(--accent);color:white;border:none;padding:9px 22px;font-size:.78rem;font-weight:700;cursor:pointer;font-family:var(--font);display:inline-flex;align-items:center;gap:6px;"><i class="bi bi-eye"></i> Preview Logbook</button>',
      '    </div>',
      '    <div id="logbookPreview" style="display:none;background:#f0f0f0;max-width:100%;margin:0 auto;overflow-x:auto;"></div>',
      '  </div>',
      '  <div style="padding:12px 16px;background:var(--surface);border-top:1px solid var(--border);display:flex;gap:10px;flex-wrap:wrap;">',
      '    <button id="logbookDownloadBtn" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;background:var(--navy);color:white;border:none;padding:10px;font-size:.82rem;font-weight:700;cursor:pointer;font-family:var(--font);text-transform:uppercase;letter-spacing:.4px;"><i class="bi bi-download"></i> Download Logbook PDF</button>',
      '  </div>',
      '</div>'
    ].join('');

    var contentInner = document.querySelector('.content-inner');
    if (contentInner) contentInner.appendChild(panel);

    document.getElementById('logbookPreviewBtn').addEventListener('click', function() {
      renderLogbookPreview();
    });
    document.getElementById('logbookDownloadBtn').addEventListener('click', function() {
      downloadLogbookPdf();
    });
  }

var _logbookCurrentSubject   = '';
  var _logbookCurrentBaseClass = '';
  var _logbookFieldKey         = '';
  var _logbookFieldMonths      = 3;
  var _logbookFieldOpen        = false;
  var _logbookCurrentItems     = [];
  var _logbookDebounceTimer    = null;

  var _LB_MONTHS = { en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
                     sw: ['Januari','Februari','Machi','Aprili','Mei','Juni','Julai','Agosti','Septemba','Oktoba','Novemba','Desemba'] };

  function _logbookViewItems(items) {
    items = items || _logbookCurrentItems;
    if (!_logbookFieldKey || !items.length || typeof window.axpCropRowsToFieldWindow !== 'function') return items;
    try { return window.axpCropRowsToFieldWindow(_logbookCurrentSubject, _logbookCurrentBaseClass, items, _logbookFieldKey, _logbookFieldMonths) || items; }
    catch (e) { return items; }
  }

  function renderLogbookFieldBar() {
    var bar = document.getElementById('logbookFieldBar');
    if (!bar) return;
    if (typeof window.axpFieldMonthOptions !== 'function' || !_logbookCurrentSubject || !_logbookCurrentItems.length) {
      bar.style.display = 'none'; bar.innerHTML = ''; return;
    }
    var lang = getSubjectLang(_logbookCurrentSubject), M = _LB_MONTHS[lang];
    var opts = [], keys = [];
    try {
      opts = window.axpFieldMonthOptions(_logbookCurrentBaseClass, _logbookCurrentSubject);
      if (_logbookFieldKey) keys = window.axpFieldWindowKeys(_logbookCurrentBaseClass, _logbookCurrentSubject, _logbookFieldKey, _logbookFieldMonths);
    } catch (e) { opts = []; }
    if (!opts.length) { bar.style.display = 'none'; bar.innerHTML = ''; return; }
    var active = keys.length > 0;
    if (!active) _logbookFieldKey = '';
    var sel = _logbookFieldKey || opts[0].key;
    var optHtml = opts.map(function (o) { return '<option value="' + o.key + '"' + (o.key === sel ? ' selected' : '') + '>' + M[o.m - 1] + ' ' + o.y + '</option>'; }).join('');
    var summary = '';
    if (active) {
      var shown = _logbookViewItems().length;
      var m1 = M[parseInt(keys[0].slice(5, 7), 10) - 1], m2 = M[parseInt(keys[keys.length - 1].slice(5, 7), 10) - 1];
      summary = (lang === 'sw' ? 'Inaonyesha ' : 'Showing ') + m1 + (keys.length > 1 ? ' \u2013 ' + m2 : '') + ' ' + keys[0].slice(0, 4) + ' \u00b7 ' +
        (lang === 'sw' ? ('shughuli ' + shown + ' kati ya ' + _logbookCurrentItems.length) : (shown + ' of ' + _logbookCurrentItems.length + ' entries')) +
        (keys.length < _logbookFieldMonths ? (lang === 'sw' ? ' \u00b7 miezi ' + keys.length + ' tu imebaki' : ' \u00b7 only ' + keys.length + ' month(s) left in the calendar') : '') +
        (lang === 'sw' ? ' \u00b7 PDF itakuwa na sehemu hii tu' : ' \u00b7 the PDF will contain only this part');
    }
    var fcss = 'padding:6px 7px;font-size:.74rem;border:1px solid var(--border2);background:var(--surface2);color:var(--text);font-family:var(--font);';
    bar.style.display = 'block';
    bar.innerHTML =
      '<button type="button" class="sow-tool-btn ' + (active ? 'success' : 'primary') + '" id="lbFieldBtn" style="justify-content:center;"><i class="bi bi-mortarboard-fill"></i> ' + (lang === 'sw' ? 'Kwa walimu wa mazoezi tu' : 'For field teachers only') + '</button>' +
      '<div id="lbFieldPanel" style="' + ((active || _logbookFieldOpen) ? 'display:flex;' : 'display:none;') + 'flex-wrap:wrap;align-items:center;gap:8px;margin-top:8px;padding:9px 12px;background:var(--surface2);border-left:3px solid var(--accent);font-size:.72rem;color:var(--text2);">' +
        '<label style="display:inline-flex;align-items:center;gap:5px;font-weight:700;">' + (lang === 'sw' ? 'Muda' : 'Duration') + '<select id="lbFieldDuration" style="' + fcss + '">' + window.axpFieldDurationOptionsHtml(_logbookFieldMonths, lang) + '</select></label>' +
        '<label style="display:inline-flex;align-items:center;gap:5px;font-weight:700;">' + (lang === 'sw' ? 'Mwezi wa kuanza' : 'Starting month') + '<select id="lbFieldMonth" style="' + fcss + '">' + optHtml + '</select></label>' +
        '<button type="button" class="sow-tool-btn accent" id="lbFieldApply"><i class="bi bi-scissors"></i> ' + (lang === 'sw' ? 'Onyesha' : 'Show logbook') + '</button>' +
        (active ? '<button type="button" class="sow-tool-btn neutral" id="lbFieldClear"><i class="bi bi-arrow-counterclockwise"></i> ' + (lang === 'sw' ? 'Onyesha mwaka mzima' : 'Show full logbook') + '</button>' : '') +
        (active ? '<span style="flex-basis:100%;font-weight:600;color:var(--accent);">' + esc(summary) + '</span>' : '') +
      '</div>';
    var refresh = function () {
      renderLogbookFieldBar();
      var pv = document.getElementById('logbookPreview');
      if (pv && pv.style.display === 'block') renderLogbookPreview();
    };
    document.getElementById('lbFieldBtn').addEventListener('click', function () {
      if (_logbookFieldKey) return;
      var pnl = document.getElementById('lbFieldPanel');
      var open = pnl.style.display === 'none';
      pnl.style.display = open ? 'flex' : 'none';
      _logbookFieldOpen = open;
    });
    document.getElementById('lbFieldApply').addEventListener('click', function () {
      _logbookFieldKey = document.getElementById('lbFieldMonth').value;
      _logbookFieldMonths = window.axpFieldMonthsValid(document.getElementById('lbFieldDuration').value);
      _logbookFieldOpen = true;
      refresh();
    });
    document.getElementById('lbFieldDuration').addEventListener('change', function () {
      _logbookFieldMonths = window.axpFieldMonthsValid(this.value);
      if (_logbookFieldKey) { _logbookFieldOpen = true; refresh(); }
    });
    var clr = document.getElementById('lbFieldClear');
    if (clr) clr.addEventListener('click', function () { _logbookFieldKey = ''; _logbookFieldOpen = false; refresh(); });
  }

  function fetchLogbookDataForSubjectClass(subject, baseClass, callback) {
    if (typeof window.axpEnsureSOWRows === 'function') {
      window.axpEnsureSOWRows(subject, baseClass, function (rows, err) { callback(rows || [], err || ''); });
      return;
    }
    if (typeof window.getSOWRowsReadOnly !== 'function') { callback([], ''); return; }
    window.getSOWRowsReadOnly(subject, baseClass, function (rows) { callback(rows || [], ''); });
  }

  function refreshLogbookSidebarButton(subject, baseClass) {
    var oldBtn = document.getElementById('sb-logbook-current');
    if (oldBtn) oldBtn.parentNode.removeChild(oldBtn);
    var oldSection = document.getElementById('sb-logbook-section');
    if (oldSection) oldSection.parentNode.removeChild(oldSection);

    if (!subject || !baseClass) return;

    var anchor = document.getElementById('sb-syllabus');
    if (!anchor) return;

    var section = document.createElement('div');
    section.className = 'axp-nav-section';
    section.id = 'sb-logbook-section';
    section.textContent = 'Logbook';
    anchor.parentNode.insertBefore(section, anchor.nextSibling);

    var btn = document.createElement('button');
    btn.className = 'axp-nav-btn';
    btn.id = 'sb-logbook-current';
    var label = subject + (baseClass ? ' - ' + baseClass : '');
    btn.innerHTML = '<i class="bi bi-book-half"></i> ' + esc(label);
    btn.addEventListener('click', function() {
      openLogbookForSubject(subject, baseClass);
      closeSidebarIfMobile();
    });
    section.parentNode.insertBefore(btn, section.nextSibling);
  }

  function refreshLogbookFromCurrentSelection() {
    var subject  = (document.getElementById('subject')  || {}).value || '';
    var classVal = (document.getElementById('classes')  || {}).value || '';
    var baseClass = _stripStream(classVal);

    _logbookCurrentSubject   = subject;
    _logbookCurrentBaseClass = baseClass;

    refreshLogbookSidebarButton(subject, baseClass);
  }

  function bindLogbookDropdownWatchers() {
    var subEl = document.getElementById('subject');
    var clsEl = document.getElementById('classes');
    function onChange() {
      clearTimeout(_logbookDebounceTimer);
      _logbookDebounceTimer = setTimeout(refreshLogbookFromCurrentSelection, 400);
    }
    if (subEl) subEl.addEventListener('change', onChange);
    if (clsEl) clsEl.addEventListener('change', onChange);
  }

  function openLogbookForSubject(subject, baseClass){
    var go = function () {
      if (!window.axpOpenFeatureGate) { _openLogbookForSubjectImpl(subject, baseClass); return; }
      window.axpOpenFeatureGate('logbook', subject, baseClass, function(){
        _openLogbookForSubjectImpl(subject, baseClass);
      });
    };
    if (typeof window.axpWithCalendar !== 'function') { go(); return; }
    /* the logbook opens only when the calendar is fully loaded */
    window.axpWithCalendar(go, function () {
      showPanel('logbook');
      var pe = document.getElementById('logbookPreview'), ph = document.getElementById('logbookPreviewPlaceholder');
      if (pe) { pe.style.display = 'none'; pe.innerHTML = ''; }
      if (!ph) return;
      ph.style.display = 'block';
      ph.innerHTML = [
        '<i class="bi bi-calendar-x" style="font-size:2.5rem;display:block;margin-bottom:12px;color:var(--border2);"></i>',
        '<div style="font-size:.85rem;font-weight:600;margin-bottom:6px;">Calendar not loaded</div>',
        '<div style="font-size:.75rem;margin-bottom:12px;">The school calendar could not be loaded, so the logbook was not opened. Please check your connection and try again.</div>',
        '<button id="logbookCalRetryBtn" style="background:var(--accent);color:white;border:none;padding:9px 22px;font-size:.78rem;font-weight:700;cursor:pointer;font-family:var(--font);"><i class="bi bi-arrow-repeat"></i> Try again</button>'
      ].join('');
      var rb = document.getElementById('logbookCalRetryBtn');
      if (rb) rb.addEventListener('click', function () { openLogbookForSubject(subject, baseClass); });
    });
  }

  function _openLogbookForSubjectImpl(subject, baseClass) {
    if (window.axpEnsurePeriodsPerWeek) window.axpEnsurePeriodsPerWeek(subject, baseClass).catch(function () {});
    _logbookCurrentSubject   = subject;
    _logbookCurrentBaseClass = baseClass;
    _logbookCurrentItems     = [];
    _logbookFieldKey         = '';
    _logbookFieldMonths      = 3;
    _logbookFieldOpen        = false;
    renderLogbookFieldBar();

    var subtitle = document.getElementById('logbookPanelSubtitle');
    if (subtitle) subtitle.textContent = subject + (baseClass ? ' - ' + baseClass : '') + ' Logbook';

    var previewEl     = document.getElementById('logbookPreview');
    var placeholderEl = document.getElementById('logbookPreviewPlaceholder');
    if (previewEl) { previewEl.style.display = 'none'; previewEl.innerHTML = ''; }
    if (placeholderEl) {
      placeholderEl.style.display = 'block';
      placeholderEl.innerHTML = [
        '<i class="bi bi-hourglass-split" style="font-size:2.5rem;display:block;margin-bottom:12px;color:var(--border2);"></i>',
        '<div style="font-size:.85rem;font-weight:600;margin-bottom:6px;">Loading logbook data\u2026</div>',
        '<div style="font-size:.75rem;">Preparing your logbook for this subject and class. First time can take up to a minute \u2014 you do not need to complete any lesson-plan step.</div>',
      ].join('');
    }

    showPanel('logbook');

    fetchLogbookDataForSubjectClass(subject, baseClass, function(items, buildErr) {
      _logbookCurrentItems = items;
      renderLogbookFieldBar();
      if (!placeholderEl) return;
      if (items.length) {
        placeholderEl.innerHTML = [
          '<i class="bi bi-eye-slash" style="font-size:2.5rem;display:block;margin-bottom:12px;color:var(--border2);"></i>',
          '<div style="font-size:.85rem;font-weight:600;margin-bottom:6px;">Preview not loaded</div>',
          '<div style="font-size:.75rem;margin-bottom:14px;">Click the button below to generate and preview your logbook.</div>',
          '<button id="logbookPreviewBtn" style="background:var(--accent);color:white;border:none;padding:9px 22px;font-size:.78rem;font-weight:700;cursor:pointer;font-family:var(--font);display:inline-flex;align-items:center;gap:6px;"><i class="bi bi-eye"></i> Preview Logbook</button>',
        ].join('');
        var btn = document.getElementById('logbookPreviewBtn');
        if (btn) btn.addEventListener('click', renderLogbookPreview);
      } else {
        placeholderEl.innerHTML = [
          '<i class="bi bi-journal-x" style="font-size:2.5rem;display:block;margin-bottom:12px;color:var(--border2);"></i>',
          '<div style="font-size:.85rem;font-weight:600;margin-bottom:6px;">Logbook could not be prepared</div>',
          '<div style="font-size:.75rem;margin-bottom:12px;">' + esc(buildErr || 'No data was returned for this subject and class.') + '</div>',
          '<button id="logbookRetryBtn" style="background:var(--accent);color:white;border:none;padding:9px 22px;font-size:.78rem;font-weight:700;cursor:pointer;font-family:var(--font);"><i class="bi bi-arrow-repeat"></i> Try again</button>',
        ].join('');
        var rb = document.getElementById('logbookRetryBtn');
        if (rb) rb.addEventListener('click', function () { _openLogbookForSubjectImpl(subject, baseClass); });
      }
    });
  }

  var LOGBOOK_LABELS = {
    en: {
      title:         function(subj, year) { return subj + ' \u2014 Subject Logbook ' + year; },
      teacherName:   'Teacher\'s Name',
      subject:       'Subject',
      classLabel:    'Class',
      school:        'School',
      term:          'Term',
      year:          'Year',
      termValue:     '1st & 2nd',
      mainComp:      'Main Competence',
      specComp:      'Specific Competence',
      mainActivity:  'Main Activity',
      specActivity:  'Specific Activity',
      dateStarted:   'Date Started',
      dateEnded:     'Date Ended',
      teacherRemark: 'Subj. Teacher Remarks & Sign.',
      hodRemark:     'H.O.D. Remarks & Sign.',
      hosRemark:     'H.O.S. Remarks & Sign.',
      page:          'Page'
    },
    sw: {
      title:         function(subj, year) { return subj + ' \u2014 Daftari la Somo ' + year; },
      teacherName:   'Jina la Mwalimu',
      subject:       'Somo',
      classLabel:    'Darasa',
      school:        'Shule',
      term:          'Muhula',
      year:          'Mwaka',
      termValue:     'I na II',
      mainComp:      'Ujuzi Mkuu',
      specComp:      'Ujuzi Mahususi',
      mainActivity:  'Shughuli Kuu',
      specActivity:  'Shughuli Mahususi',
      dateStarted:   'Tarehe Ilianza',
      dateEnded:     'Tarehe Ilimalizika',
      teacherRemark: 'Maoni ya Mwalimu & Saini',
      hodRemark:     'Maoni ya M.I. & Saini',
      hosRemark:     'Maoni ya M.S. & Saini',
      page:          'Ukurasa'
    }
  };

  function getSubjectLang(subject) {
    return isSwahili(subject) ? 'sw' : 'en';
  }

  function detectYear(items, classVal) {
    classVal = classVal || (items && items[0] && items[0].classVal) || _logbookCurrentBaseClass || '';
    /* year of study comes from the loaded school calendar only (Form 5-6: two-year range) — never guessed */
    if (typeof window.axpStudyYear === 'function' && classVal) {
      try { return window.axpStudyYear(classVal, classVal) || ''; } catch (e) {}
    }
    return '';
  }

var _lbSample = false;
function getTeacherInfo() {
  if (_lbSample) return { name: 'Sample Teacher', school: 'Sample Secondary School', classVal: 'Form Two', stream: '' };
  var profile = (typeof AUTH !== 'undefined' && AUTH.getProfile) ? AUTH.getProfile() : null;

  
  var schoolField  = document.getElementById('school');
  var teacherField = document.getElementById('teacherName');

  var liveSchool  = schoolField  ? schoolField.value.trim()  : '';
  var ag = axpAgentOverride(_logbookCurrentSubject, _logbookCurrentBaseClass);
 

  return {
    name: (ag && ag.teacherName) || (profile && profile.fullName) || '',
    school:   (ag && ag.school) || liveSchool  || (profile && profile.school)   || '',
    classVal: _logbookCurrentBaseClass || '',
    stream:   ''
  };
}

  function buildLogbookRows(sowRows) {
  if (!sowRows || sowRows.length === 0) return [];

  var topicMap   = {};
  var topicOrder = [];
  sowRows.forEach(function (row) {
    var t  = (row.mainComp     || '').trim();
    var c  = (row.specComp     || '').trim();
    var ml = (row.mainActivity || '').trim();
    var sa = (row.specActivity || '').trim();
    if (!topicMap[t]) { topicMap[t] = { competences: {}, order: [] }; topicOrder.push(t); }
    var tm = topicMap[t];
    if (!tm.competences[c]) { tm.competences[c] = { mainLessons: {}, order: [] }; tm.order.push(c); }
    var cm = tm.competences[c];
    if (!cm.mainLessons[ml]) { cm.mainLessons[ml] = { activities: [] }; cm.order.push(ml); }
    cm.mainLessons[ml].activities.push(sa);
  });

  var rows = [];
  topicOrder.forEach(function (topicKey) {
    var tm = topicMap[topicKey];
    tm.order.forEach(function (compKey) {
      var cm = tm.competences[compKey];
      cm.order.forEach(function (mlKey) {
        var mm       = cm.mainLessons[mlKey];
        var actCount = Math.max(1, mm.activities.length);
        for (var i = 0; i < actCount; i++) {
          rows.push({
            mainComp:     topicKey,
            specComp:     compKey,
            mainActivity: mlKey,
            specActivity: mm.activities[i] || '',
            dateStarted:  '',
            dateEnded:    ''
          });
        }
      });
    });
  });
  return rows;
}
  
  function computeLogbookMerges(rows) {
  for (var i = 0; i < rows.length; i++) {
    rows[i].mainCompSpan = 0;
    rows[i].specCompSpan = 0;
    rows[i].mainActSpan  = 0;
  }
  function runLength(key, spanKey) {
    var i = 0;
    while (i < rows.length) {
      var v = rows[i][key];
      var j = i;
      while (j < rows.length && rows[j][key] === v) j++;
      rows[i][spanKey] = j - i;
      i = j;
    }
  }
  runLength('mainComp',     'mainCompSpan');
  runLength('specComp',     'specCompSpan');
  runLength('mainActivity', 'mainActSpan');
  return rows;
}

  function fmtDate(d) {
    if (!d) return '';
    try { return new Date(d).toLocaleDateString('en-GB', {day:'2-digit',month:'short',year:'numeric'}); } catch(e) { return d; }
  }

  function buildLogbookHTML(items, subject) {
    return _buildAndSavePdf(subject, items, 'preview');
  }

  function renderLogbookPreview() {
    var previewEl     = document.getElementById('logbookPreview');
    var placeholderEl = document.getElementById('logbookPreviewPlaceholder');
    if (!previewEl) return;
    if (!_logbookCurrentSubject || _logbookCurrentItems.length === 0) {
      previewEl.innerHTML = '<div style="padding:30px;text-align:center;color:#888;font-size:13px;">No content available for this subject/class yet.<br>Create lesson plans and return here.</div>';
      previewEl.style.display = 'block';
      if (placeholderEl) placeholderEl.style.display = 'none';
      return;
    }
    previewEl.style.display = 'block';
    if (placeholderEl) placeholderEl.style.display = 'none';
    previewEl.innerHTML = '<div style="padding:30px;text-align:center;color:#888;font-size:13px;">Preparing preview\u2026</div>';
    var subj = _logbookCurrentSubject, its = _logbookCurrentItems;
    window.axpWithJsPdf(function (J) {
      if (!J) {
        previewEl.innerHTML = '<div style="padding:30px;text-align:center;color:#b00;font-size:13px;">Could not load the preview engine. Please check your internet connection and try again.</div>';
        return;
      }
      try {
        previewEl.innerHTML = buildLogbookHTML(its, subj);
      } catch (e) {
        if (window.console) console.error('Logbook preview failed', e);
        previewEl.innerHTML = '<div style="padding:30px;text-align:center;color:#b00;font-size:13px;">Could not build the preview. Please try again.</div>';
      }
    });
  }

  function downloadLogbookPdf() {
    var subject = _logbookCurrentSubject;
    var items   = _logbookCurrentItems;
    if (!subject) { axpAlert('No logbook loaded. Please select a subject and class from Step 2.'); return; }
    if (!items || items.length === 0) { axpAlert('No data found for this subject/class.'); return; }
    if (typeof window.jspdf === 'undefined' && typeof window.jsPDF === 'undefined') {
      var script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      script.onload = function() {
        var s2 = document.createElement('script');
        s2.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js';
        s2.onload = function() { _buildAndSavePdf(subject, items); };
        document.head.appendChild(s2);
      };
      document.head.appendChild(script);
      return;
    }
    if (typeof window.jsPDF !== 'undefined' && typeof window.jsPDF.prototype.autoTable === 'undefined'
        && typeof window.jspdf === 'undefined') {
      var s2 = document.createElement('script');
      s2.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js';
      s2.onload = function() { _buildAndSavePdf(subject, items); };
      document.head.appendChild(s2);
      return;
    }
    _buildAndSavePdf(subject, items);
  }

  function _stripStream(classVal) {
    if (!classVal) return '';
    return (typeof stripStream === 'function') ? stripStream(classVal) : classVal.replace(/\s+[A-Za-z]$/, '').trim();
  }

  function _baseClass(classVal) {
    return _stripStream(classVal).toLowerCase();
  }

function _buildAndSavePdf(subject, items, mode) {
  var JsPDF = (window.jspdf && window.jspdf.jsPDF) ? window.jspdf.jsPDF : window.jsPDF;
  var lang  = getSubjectLang(subject);
  var isSw  = lang === 'sw';
  var L     = LOGBOOK_LABELS[lang];
  var info  = getTeacherInfo();
  var year  = detectYear(items, info.classVal);
  if (!year) {
    if (mode === 'preview' || mode === 'sample') throw new Error('calendar');
    axpAlert('The school calendar is not loaded yet. Please try again in a moment.');
    return;
  }

  var baseClass    = _stripStream(info.classVal);
  var baseClassKey = baseClass.toLowerCase();
  var filteredItems = items.filter(function(item) {
    return _baseClass(item.classVal || '') === baseClassKey;
  });
  if (filteredItems.length === 0) filteredItems = items;

  var cls      = (typeof window.axpTranslateClassLabel === 'function') ? window.axpTranslateClassLabel(baseClass, subject) : baseClass;
  var rawRows  = buildLogbookRows(_logbookViewItems(filteredItems));
  var _lbKeys  = (_logbookFieldKey && typeof window.axpFieldWindowKeys === 'function') ? window.axpFieldWindowKeys(_logbookCurrentBaseClass, subject, _logbookFieldKey, _logbookFieldMonths) : [];
  var _lbTag   = _lbKeys.length ? ('_FieldTeachers_' + _LB_MONTHS.en[parseInt(_lbKeys[0].slice(5, 7), 10) - 1].slice(0, 3) + '-' + _LB_MONTHS.en[parseInt(_lbKeys[_lbKeys.length - 1].slice(5, 7), 10) - 1].slice(0, 3)) : '';
  var filename = (subject + '_Logbook' + _lbTag + '_' + year + '.pdf').replace(/[^a-zA-Z0-9_\-.]/g, '_');

  var doc = (mode === 'preview' || mode === 'sample')
    ? new window.AxpSvgDoc(JsPDF)
    : new JsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  if (mode === 'sample') doc.setWatermark('SAMPLE');

  var PW = 297, PH = 210, ML = 10, MR = 10, MT = 10, MB = 12;
  var CW = PW - ML - MR;

  var colWidths = isSw ? {
    mc: CW * 0.14, sc: CW * 0.13, ma: CW * 0.12, sa: CW * 0.14,
    ds: CW * 0.07, de: CW * 0.07, tr: CW * 0.11, hd: CW * 0.12, hs: CW * 0.10
  } : {
    mc: CW * 0.15, sc: CW * 0.14, ma: CW * 0.13, sa: CW * 0.15,
    ds: CW * 0.07, de: CW * 0.07, tr: CW * 0.10, hd: CW * 0.10, hs: CW * 0.09
  };

  var colDefs = [
    { key: 'mc', w: colWidths.mc, label: L.mainComp      },
    { key: 'sc', w: colWidths.sc, label: L.specComp      },
    { key: 'ma', w: colWidths.ma, label: L.mainActivity  },
    { key: 'sa', w: colWidths.sa, label: L.specActivity  },
    { key: 'ds', w: colWidths.ds, label: L.dateStarted   },
    { key: 'de', w: colWidths.de, label: L.dateEnded     },
    { key: 'tr', w: colWidths.tr, label: L.teacherRemark },
    { key: 'hd', w: colWidths.hd, label: L.hodRemark     },
    { key: 'hs', w: colWidths.hs, label: L.hosRemark     }
  ];

  var ROW_H = 9, HDR_H = 16, TITLE_H = 10, GAP1 = 4;
  var INFO_ROW = 5, INFO_ROWS_COUNT = 3, GAP2 = 5, FOOTER_H = 8;
  var TITLE_BAND_H = TITLE_H + 4;
  var HEADER_BLOCK = TITLE_BAND_H + GAP1 + (INFO_ROW * INFO_ROWS_COUNT) + GAP2 + HDR_H;
  var USABLE_H = PH - MT - MB - HEADER_BLOCK - FOOTER_H;

  var HDR_FILL   = [214, 232, 248];
  var HDR_BORDER = [140, 178, 212];
  var HDR_TEXT   = [13, 27, 46];

  doc.setLineWidth(0.4);

  function fitTitleFontSize(text, maxWidth, startSize) {
    var size = startSize;
    doc.setFont('helvetica', 'bold');
    while (size > 8) {
      doc.setFontSize(size);
      if (doc.getTextWidth(text) <= maxWidth) break;
      size -= 0.5;
    }
    return size;
  }

  function calcOwnRowHeight(row) {
    var h = ROW_H;
    var content = row.specActivity || '';
    if (content) {
      doc.setFontSize(9);
      var lines = doc.splitTextToSize(String(content), colWidths.sa - 3);
      h = Math.max(h, lines.length * 4.5 + 3);
    }
    return h;
  }

  var pages = [];
  var cur = [];
  var curH = 0;
  rawRows.forEach(function (row) {
    var h = calcOwnRowHeight(row);
    if (curH + h > USABLE_H && cur.length) { pages.push(cur); cur = []; curH = 0; }
    cur.push(row);
    curH += h;
  });
  if (cur.length || !pages.length) pages.push(cur);
  var totalPages = pages.length;

  pages.forEach(function (pageRows) { computeLogbookMerges(pageRows); });

  function calcRowHeightsForPage(pageRows) {
    var heights = pageRows.map(calcOwnRowHeight);
    var mergedKeys = [
      { key: 'mainComp',     spanKey: 'mainCompSpan', w: colWidths.mc },
      { key: 'specComp',     spanKey: 'specCompSpan', w: colWidths.sc },
      { key: 'mainActivity', spanKey: 'mainActSpan',  w: colWidths.ma }
    ];
    for (var i = 0; i < pageRows.length; i++) {
      var row = pageRows[i];
      mergedKeys.forEach(function (mk) {
        var span = row[mk.spanKey];
        if (!(span > 0)) return;
        var val = row[mk.key] || '';
        if (!val) return;
        var lines = doc.splitTextToSize(String(val), mk.w - 3);
        var perRow = (lines.length * 4.5 + 3) / span;
        for (var k = i; k < i + span && k < pageRows.length; k++) {
          heights[k] = Math.max(heights[k], perRow);
        }
      });
    }
    return heights;
  }

function drawPageHeader() {
  var y = MT;
  var titleText = L.title(subject, year).toUpperCase();
  var titleSize = fitTitleFontSize(titleText, CW - 20, 13);

  doc.setFontSize(titleSize);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(13, 27, 46);
  doc.text(titleText, PW / 2, y + TITLE_BAND_H / 2 + 3, { align: 'center' });
  y += TITLE_BAND_H + GAP1;

  var col1W = CW * (isSw ? 0.20 : 0.17);
  var col2W = CW * (isSw ? 0.29 : 0.33);
  var col3W = CW * (isSw ? 0.16 : 0.17);
  var col4W = CW * (isSw ? 0.35 : 0.33);
  var x = ML;
  var infoData = [
    [ L.teacherName, info.name,    L.subject, subject       ],
    [ L.classLabel,  cls,          L.term,    L.termValue   ],
    [ L.year,        String(year), L.school,  info.school || '' ]
  ];
  infoData.forEach(function(r) {
    var rowY = y + INFO_ROW - 1.5;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');   doc.setTextColor(60, 60, 90);
    doc.text(r[0] + ':', x, rowY);
    doc.setFont('helvetica', 'normal'); doc.setTextColor(20, 20, 40);
    doc.text(r[1], x + col1W, rowY);
    doc.setDrawColor(190, 190, 200); doc.setLineWidth(0.2);
    doc.line(x + col1W, y + INFO_ROW, x + col1W + col2W - 2, y + INFO_ROW);
    if (r[2]) {
      doc.setFont('helvetica', 'bold');   doc.setTextColor(60, 60, 90);
      doc.text(r[2] + ':', x + col1W + col2W, rowY);
      doc.setFont('helvetica', 'normal'); doc.setTextColor(20, 20, 40);
      window.axpTextSup(doc, r[3], x + col1W + col2W + col3W, rowY, 9);
      doc.line(x + col1W + col2W + col3W, y + INFO_ROW, x + col1W + col2W + col3W + col4W - 2, y + INFO_ROW);
    }
    y += INFO_ROW;
  });
  y += GAP2;
  doc.setTextColor(0, 0, 0);
  return y;
}

  function drawTableHeader(y) {
  var x = ML;
  colDefs.forEach(function(col) {
    doc.setFillColor(HDR_FILL[0], HDR_FILL[1], HDR_FILL[2]);
    doc.setDrawColor(HDR_BORDER[0], HDR_BORDER[1], HDR_BORDER[2]);
    doc.setLineWidth(0.3);
    doc.rect(x, y, col.w, HDR_H, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(HDR_TEXT[0], HDR_TEXT[1], HDR_TEXT[2]);
    var lines = doc.splitTextToSize(col.label.toUpperCase(), col.w - 2.5);
    var lh = 3.4;
    var th = lines.length * lh;
    var sy = y + (HDR_H - th) / 2 + lh - 0.5;
    lines.forEach(function(ln, li) {
      doc.text(ln, x + col.w / 2, sy + li * lh, { align: 'center' });
    });
    x += col.w;
  });
  doc.setTextColor(0, 0, 0);
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.4);
  return y + HDR_H;
}

  function drawFooter(pageNum, totalPages) {
    var fy = PH - MB + 2;
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.setDrawColor(190, 190, 200);
    doc.setLineWidth(0.2);
    doc.line(ML, fy - 1, PW - MR, fy - 1);
    doc.text(subject + (cls ? '   ' + cls : ''), ML, fy + 3);
    doc.text(L.page + ' ' + pageNum + ' / ' + totalPages, PW - MR, fy + 3, { align: 'right' });
    doc.setTextColor(0, 0, 0);
  }

  function drawCell(x, y, w, h, content, align, valign) {
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.35);
    doc.rect(x, y, w, h);
    if (!content) return;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    var lines = doc.splitTextToSize(String(content), w - 3);
    var lh = 4.2;
    var th = lines.length * lh;
    var ty = (valign === 'top') ? (y + 2.5 + lh - 0.8) : (y + (h - th) / 2 + lh - 0.8);
    if (align === 'center') {
      lines.forEach(function(ln, li) { doc.text(ln, x + w / 2, ty + li * lh, { align: 'center' }); });
    } else {
      lines.forEach(function(ln, li) { doc.text(ln, x + 1.8, ty + li * lh); });
    }
  }

  pages.forEach(function(pageRows, pageIdx) {
    if (pageIdx > 0) doc.addPage('a4', 'landscape');
    var y = drawPageHeader();
    y = drawTableHeader(y);

    if (pageRows.length === 0) {
      for (var er = 0; er < 8; er++) {
        var ex = ML;
        colDefs.forEach(function(col) { drawCell(ex, y, col.w, ROW_H, '', 'left'); ex += col.w; });
        y += ROW_H;
      }
    } else {
      var heights = calcRowHeightsForPage(pageRows);
      pageRows.forEach(function(row, ri) {
        var rh = heights[ri];
        var x = ML;
        colDefs.forEach(function(col) {
          var k = col.key;

          if (k === 'mc') {
            if (row.mainCompSpan > 0) {
              var sh = 0;
              for (var si = ri; si < Math.min(ri + row.mainCompSpan, pageRows.length); si++) sh += heights[si];
              drawCell(x, y, col.w, sh, row.mainComp, 'left', 'top');
            }
          } else if (k === 'sc') {
            if (row.specCompSpan > 0) {
              var sh2 = 0;
              for (var si2 = ri; si2 < Math.min(ri + row.specCompSpan, pageRows.length); si2++) sh2 += heights[si2];
              drawCell(x, y, col.w, sh2, row.specComp, 'left', 'top');
            }
          } else if (k === 'ma') {
            if (row.mainActSpan > 0) {
              var sh3 = 0;
              for (var si3 = ri; si3 < Math.min(ri + row.mainActSpan, pageRows.length); si3++) sh3 += heights[si3];
              drawCell(x, y, col.w, sh3, row.mainActivity, 'left', 'top');
            }
          } else if (k === 'sa') {
            drawCell(x, y, col.w, rh, row.specActivity, 'left', 'top');
          } else {
            drawCell(x, y, col.w, rh, '', 'center');
          }
          x += col.w;
        });
        y += rh;
      });
    }
    drawFooter(pageIdx + 1, totalPages);
  });

  if (mode === 'preview' || mode === 'sample') return doc.toHTML();
  doc.save(filename);
}

  function axpRenderSampleLogbook(target) {
    if (!target) return;
    if (typeof window.axpWithCalendar === 'function' && !window.__axpSampleGate) {
      window.axpWithCalendar(function () {
        window.__axpSampleGate = true;
        try { axpRenderSampleLogbook(target); } finally { window.__axpSampleGate = false; }
      }, function () {
        target.innerHTML = '<div style="padding:30px;text-align:center;color:#b00;font-size:13px;">Calendar not loaded. Please check your connection and try again.</div>';
      });
      return;
    }
    target.innerHTML = '<div style="padding:30px;text-align:center;color:#888;font-size:13px;">Preparing sample\u2026</div>';
    window.axpWithJsPdf(function (J) {
      if (!J) { target.innerHTML = '<div style="padding:30px;text-align:center;color:#b00;font-size:13px;">Could not load the preview engine. Please check your internet connection and try again.</div>'; return; }
      var sv = { s: _logbookCurrentSubject, b: _logbookCurrentBaseClass, i: _logbookCurrentItems, k: _logbookFieldKey };
      try {
        _lbSample = true; _logbookCurrentSubject = 'Biology'; _logbookCurrentBaseClass = 'Form Two'; _logbookFieldKey = '';
        target.innerHTML = _buildAndSavePdf('Biology', (window.AXP_SAMPLE_SOW_ROWS || []).slice(0, 16), 'sample');
      } catch (e) {
        if (window.console) console.error('Sample logbook failed', e);
        target.innerHTML = '<div style="padding:30px;text-align:center;color:#b00;font-size:13px;">Could not build the sample. Please try again.</div>';
      } finally {
        _lbSample = false; _logbookCurrentSubject = sv.s; _logbookCurrentBaseClass = sv.b; _logbookCurrentItems = sv.i; _logbookFieldKey = sv.k;
      }
    });
  }

  function init() {
    injectPanel();
    injectLogbookPanel();
    window.axpRenderSampleLogbook = axpRenderSampleLogbook;

    window.loadSyllabusContent   = loadSyllabusContent;
    window.openLogbookForSubject = openLogbookForSubject;
    window.downloadLogbookPdf    = downloadLogbookPdf;
    window.renderLogbookPreview  = renderLogbookPreview;

    bindLogbookDropdownWatchers();
    setTimeout(refreshLogbookFromCurrentSelection, 1200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>
  
 <script>
   (function () {
'use strict';

var API_URL = window.AXP_API_URL || '';
var _serverSOWCache = {};
var _buildInFlight = {};
var _currentSOW = null;
var _saveTimer = null;
var _subjectGroups = [];

var MONTHS = ['January','February','March','April','May','June',
              'July','August','September','October','November','December'];
     
var MONTHS_SW = ['Januari','Februari','Machi','Aprili','Mei','Juni',
                  'Julai','Agosti','Septemba','Oktoba','Novemba','Desemba'];

var SOW_COLS = [
  {key:'mainComp',       abbr:'Main\nCompetence',    editable:false, width:90},
  {key:'specComp',       abbr:'Specific\nCompetence', editable:false, width:85},
  {key:'mainActivity',   abbr:'Main\nActivity',       editable:false, width:80},
  {key:'specActivity',   abbr:'Specific\nActivity',   editable:true,  width:78},
  {key:'dates',          abbr:'Month',                editable:false, width:70},
  {key:'week',           abbr:'Wk',                   editable:false, width:30},
  {key:'periods',        abbr:'Periods',              editable:true,  width:44},
  {key:'tlMethods',      abbr:'T&L\nMethods',         editable:true,  width:85},
  {key:'tlResources',    abbr:'T&L\nResources',       editable:true,  width:85},
  {key:'assessmentTool', abbr:'Assessment\nTool',     editable:true,  width:75},
  {key:'reference',      abbr:'Reference',            editable:false, width:110},
  {key:'remarks',        abbr:'Remarks',              editable:true,  width:65},
];

var _injected = false;
var _sowCache = {};

var AXP_ACADEMIC_CALENDAR = null;
var AXP_TERM2_CLASS_OVERRIDES = null;
var AXP_FORM_ONE_ORIENTATION = null;

var _AXP_CAL_CACHE_KEY = 'axp_academic_calendar_cache_v4';
var _AXP_CAL_CACHE_TTL = 6 * 3600 * 1000;
var _axpCalendarLoadPromise = null;

function _axpApplyCalendarConfig(cfg) {
  AXP_ACADEMIC_CALENDAR      = cfg.calendar;
  AXP_TERM2_CLASS_OVERRIDES  = cfg.termOverrides || {};
  AXP_FORM_ONE_ORIENTATION   = cfg.formOneOrientation || null;
}

function axpEnsureCalendarLoaded() {
  if (_axpCalendarLoadPromise) return _axpCalendarLoadPromise;

  _axpCalendarLoadPromise = new Promise(function (resolve) {
    try {
      var cached = JSON.parse(localStorage.getItem(_AXP_CAL_CACHE_KEY) || 'null');
      var _flipped = false;
      if (cached && cached.cfg && cached.cfg.flipsOn) {
        Object.keys(cached.cfg.flipsOn).forEach(function (k) {
          var t = new Date(cached.cfg.flipsOn[k] + 'T00:00:00+03:00').getTime();
          if (t && Date.now() >= t) _flipped = true;
        });
      }
      var _hasTotals = false;
      try { _hasTotals = typeof cached.cfg.calendar.olevel.terms[0].nonTeachingDays === 'number' && typeof cached.cfg.calendar.alevel.terms[0].nonTeachingDays === 'number'; } catch (e) {}
      if (cached && cached.ts && !_flipped && _hasTotals && (Date.now() - cached.ts) < _AXP_CAL_CACHE_TTL) {
        _axpApplyCalendarConfig(cached.cfg);
        resolve(true);
        return;
      }
    } catch (e) {}

    var api = window.AXP_API_URL || '';
    var token = (typeof AUTH !== 'undefined' && AUTH.getSessionToken) ? AUTH.getSessionToken() : '';
    if (!api || !token) { _axpCalendarLoadPromise = null; resolve(false); return; }

    fetch(api + '?action=getAcademicCalendar&token=' + encodeURIComponent(token))
      .then(function (r) { return r.json(); })
      .then(function (resp) {
        if (resp && resp.success && resp.calendar) {
          var cfg = { calendar: resp.calendar, termOverrides: resp.termOverrides, formOneOrientation: resp.formOneOrientation, flipsOn: resp.flipsOn || null, academicYears: resp.academicYears || null };
          _axpApplyCalendarConfig(cfg);
          try { localStorage.setItem(_AXP_CAL_CACHE_KEY, JSON.stringify({ ts: Date.now(), cfg: cfg })); } catch (e) {}
          resolve(true);
        } else {
          _axpCalendarLoadPromise = null; resolve(false);
        }
      })
      .catch(function () { _axpCalendarLoadPromise = null; resolve(false); });
  });

  return _axpCalendarLoadPromise;
}

(function () {
  function tryLoad() {
    if (typeof AUTH !== 'undefined' && AUTH.getSessionToken && AUTH.getSessionToken()) {
      axpEnsureCalendarLoaded();
    } else {
      setTimeout(tryLoad, 500);
    }
  }
  tryLoad();
})();
     

   function axpGetCalendarForClass(classVal) {
  var c = String(classVal || '').toLowerCase();
  var track = /(form|kidato)\s*(cha\s*)?(five|six|tano|sita|[56])\b/i.test(c) ? 'alevel' : 'olevel';
  var cal = AXP_ACADEMIC_CALENDAR[track];

  var baseClass = stripStream(c);
  var override = AXP_TERM2_CLASS_OVERRIDES[baseClass];
  if (override && override.closing) {
    cal = JSON.parse(JSON.stringify(cal));
    cal.terms[cal.terms.length - 1].closing = override.closing;
    if (override.examLabel) cal.examLabel = override.examLabel;
  }
  return cal;
}



function axpIsFormOneClass(classVal) {
  return stripStream(classVal || '').toLowerCase() === 'form one';
}

function orientationLabel(lang) {
  return lang === 'sw' ? 'Kozi ya Utangulizi' : 'Orientation Course';
}
 
function axpGetCalendarForClass(classVal, ignoreUserEnd, subject) {
  var c = String(classVal || '').toLowerCase();
  var track = /(form|kidato)\s*(cha\s*)?(five|six|tano|sita|[56])\b/i.test(c) ? 'alevel' : 'olevel';
  var cal = AXP_ACADEMIC_CALENDAR[track];

  var baseClass = stripStream(c);
  var override = AXP_TERM2_CLASS_OVERRIDES[baseClass];
  if (override && override.closing) {
    cal = JSON.parse(JSON.stringify(cal));
    cal.terms[cal.terms.length - 1].closing = override.closing;
    if (override.examLabel) cal.examLabel = override.examLabel;
  }
  if (!ignoreUserEnd) cal = axpApplyUserEndDate(cal, classVal, subject);
  return cal;
}

var AXP_END_STORE_KEY = 'axp_enddate_v1';
function axpEndStoreRead() { try { return JSON.parse(localStorage.getItem(AXP_END_STORE_KEY) || '{}') || {}; } catch (e) { return {}; } }
function axpEndStoreWrite(key, md) {
  try { var o = axpEndStoreRead(); if (md) o[key] = md; else delete o[key]; localStorage.setItem(AXP_END_STORE_KEY, JSON.stringify(o)); } catch (e) {}
}
function axpValidMD(v) { return /^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(String(v || '')) ? String(v) : ''; }
function axpUserEndMD(classVal, subject) {
  if (subject) {
    var cur = (typeof _currentSOW !== 'undefined' && _currentSOW) ? _currentSOW : null;
    var mine = (cur && stripStream(cur.classVal || '').toLowerCase() === stripStream(classVal || '').toLowerCase() &&
      String(cur.subject || '').trim().toLowerCase() === String(subject).trim().toLowerCase()) ? axpValidMD(cur.endMD) : '';
    return mine || axpValidMD(axpEndStoreRead()[serverCacheKey(subject, classVal)]) || '';
  }
  if (typeof _currentSOW === 'undefined' || !_currentSOW) return '';
  if (stripStream(_currentSOW.classVal || '').toLowerCase() !== stripStream(classVal || '').toLowerCase()) return '';
  return axpValidMD(_currentSOW.endMD) || axpValidMD(axpEndStoreRead()[serverCacheKey(_currentSOW.subject, _currentSOW.classVal)]) || '';
}
function axpApplyUserEndDate(cal, classVal, subject) {
  var md = axpUserEndMD(classVal, subject);
  if (!md || !cal || !cal.terms || !cal.terms.length) return cal;
  var last = cal.terms[cal.terms.length - 1];
  var iso = String(last.closing).slice(0, 4) + '-' + md;
  var dt = axpParseISO(iso);
  if (isNaN(dt) || axpFmtISO(dt) !== iso) return cal;
  if (iso >= last.closing || iso < last.reopened) return cal;
  cal = JSON.parse(JSON.stringify(cal));
  cal.terms[cal.terms.length - 1].closing = iso;
  return cal;
}
function axpWeekdaysISO(aIso, bIso) {
  var c = axpParseISO(aIso), e = axpParseISO(bIso), n = 0;
  while (c <= e) { var g = c.getDay(); if (g !== 0 && g !== 6) n++; c.setDate(c.getDate() + 1); }
  return n;
}
function axpDaysForBlocks(blocks, classVal) {
  var cal = axpGetCalendarForClass(classVal, true);
  var perTerm = {};
  blocks.forEach(function (b) {
    if (b.type !== 'teaching') return;
    var tn = b.termNum;
    if (!tn) { cal.terms.forEach(function (t) { if (b.start >= t.opened && b.start <= t.closing) tn = t.term; }); }
    perTerm[tn] = (perTerm[tn] || 0) + axpWeekdaysISO(b.start, b.end);
  });
  var days = 0, missing = false;
  cal.terms.forEach(function (t) {
    var eff = perTerm[t.term] || 0;
    if (!eff) return;
    var raw = t.weekdayCount, off = t.nonTeachingDays;
    if (typeof raw !== 'number' || typeof off !== 'number' || raw <= 0) { missing = true; return; }
    days += Math.max(0, eff - Math.round(off * Math.min(eff, raw) / raw));
  });
  return missing ? -1 : days;
}
function axpTeachingTotals(classVal, subject) {
  var days = axpDaysForBlocks(axpBuildScheduleBlocks(classVal, subject), classVal);
  return { days: days, weeks: days < 0 ? 0 : Math.ceil(days / 5) };
}
function axpApplyEndDate(m, d) {
  if (!_currentSOW) return;
  var cl = _currentSOW.classVal;
  var srvLast = axpGetCalendarForClass(cl, true).terms.slice(-1)[0];
  var y = String(srvLast.closing).slice(0, 4);
  var md = String(m).padStart(2, '0') + '-' + String(d).padStart(2, '0');
  var iso = y + '-' + md, dt = axpParseISO(iso);
  var rerender = function () { renderSOWPanel(_currentSOW.subject, _currentSOW.classVal); };
  if (isNaN(dt) || axpFmtISO(dt) !== iso) { axpAlert('That date does not exist in ' + y + '. Please pick a valid day and month.'); rerender(); return; }
  if (iso > srvLast.closing || iso < srvLast.reopened) {
    axpAlert('The last teaching day must be between ' + axpFmtDisplay(srvLast.reopened) + ' and ' + axpFmtDisplay(srvLast.closing) + ' ' + y + '.');
    rerender(); return;
  }
  var key = serverCacheKey(_currentSOW.subject, cl);
  var same = (iso === srvLast.closing);
  _currentSOW.endMD = same ? '' : md;
  axpEndStoreWrite(key, same ? '' : md);
  _currentSOW.dirty = true;
  rerender();
  triggerAutoSave();
}
 
var _serverPPW = {};
function axpPPWValid(v) { var n = parseInt(v, 10); return (!isNaN(n) && n >= 1 && n <= 10) ? n : 0; }
function axpPPWStoreRead() { try { return JSON.parse(localStorage.getItem('axp_ppw_v1') || '{}') || {}; } catch (e) { return {}; } }
function axpPPWStoreWrite(key, n) {
  try { var o = axpPPWStoreRead(); if (n) o[key] = n; else delete o[key]; localStorage.setItem('axp_ppw_v1', JSON.stringify(o)); } catch (e) {}
}
function axpServerPeriodsPerWeek(subject, classVal) {
  return axpPPWValid(_serverPPW[serverCacheKey(subject, classVal)]);
}
var _ppwFetch = {};
function axpEnsurePeriodsPerWeek(subject, classVal) {
  var key = serverCacheKey(subject, classVal);
  var have = axpPPWValid(_serverPPW[key]);
  if (have) return Promise.resolve(have);
  if (_ppwFetch[key]) return _ppwFetch[key];
  var url = window.AXP_API_URL || '';
  if (!url) return Promise.reject(new Error('Server URL not configured'));
  _ppwFetch[key] = fetch(url + '?action=getPeriodsPerWeek&subject=' + encodeURIComponent(subject) + '&classVal=' + encodeURIComponent(classVal || ''))
    .then(function (r) { return r.json(); })
    .then(function (r) {
      var n = axpPPWValid(r && r.periodsPerWeek);
      if (!(r && r.success) || !n) throw new Error((r && r.error) || 'Invalid periods-per-week from server');
      _serverPPW[key] = n; delete _ppwFetch[key]; return n;
    })
    .catch(function (e) { delete _ppwFetch[key]; throw e; });
  return _ppwFetch[key];
}
window.axpEnsurePeriodsPerWeek = axpEnsurePeriodsPerWeek;
function axpGetPeriodsPerWeek(subject) {
  var cur = (typeof _currentSOW !== 'undefined' && _currentSOW &&
    String(_currentSOW.subject || '').trim().toLowerCase() === String(subject || '').trim().toLowerCase()) ? _currentSOW : null;
  if (cur) {
    var ov = axpPPWValid(cur.periodsPerWeek) || axpPPWValid(axpPPWStoreRead()[serverCacheKey(cur.subject, cur.classVal)]);
    return ov || axpServerPeriodsPerWeek(cur.subject, cur.classVal);
  }
  var pre = String(subject || '').trim().toLowerCase() + '||';
  for (var k in _serverPPW) { if (k.indexOf(pre) === 0 && axpPPWValid(_serverPPW[k])) return axpPPWValid(_serverPPW[k]); }
  return 0;
}
 
function axpIsSwahiliSubjectSOW(subject) {
  return isSwahiliSubjectSafe(subject);   
}
     var AXP_CLASS_PAIRS = [
  ['Pre-Primary','Darasa la Awali'],['Standard I','Darasa la Kwanza'],['Standard II','Darasa la Pili'],
  ['Standard III','Darasa la Tatu'],['Standard IV','Darasa la Nne'],['Standard V','Darasa la Tano'],
  ['Standard VI','Darasa la Sita'],['Standard VII','Darasa la Saba'],
  ['Form One','Kidato cha Kwanza'],['Form Two','Kidato cha Pili'],['Form Three','Kidato cha Tatu'],
  ['Form Four','Kidato cha Nne'],['Form Five','Kidato cha Tano'],['Form Six','Kidato cha Sita']
];
var AXP_CLASS_SW_MAP = {}, AXP_CLASS_EN_MAP = {};
AXP_CLASS_PAIRS.forEach(function (p) {
  AXP_CLASS_SW_MAP[p[0].toLowerCase()] = p[1];      /* english name  -> kiswahili name */
  AXP_CLASS_EN_MAP[p[1].toLowerCase()] = p[0];      /* kiswahili name -> english name  */
});
/* "Form Two A" -> { base: "Form Two", stream: "A" } (a class name is never mistaken for a stream: "Standard V" stays whole) */
function axpClassSplit(label) {
  var t = String(label || '').replace(/\s+/g, ' ').trim(), k = t.toLowerCase();
  if (AXP_CLASS_SW_MAP[k] || AXP_CLASS_EN_MAP[k]) return { base: t, stream: '' };
  var m = /^(.*\S)\s+([A-Za-z])$/.exec(t);
  if (m && (AXP_CLASS_SW_MAP[m[1].toLowerCase()] || AXP_CLASS_EN_MAP[m[1].toLowerCase()])) return { base: m[1], stream: m[2] };
  return { base: t, stream: '' };
}
/* The class is written in the language of the subject, whichever language it was stored in:
   Kiswahili subject -> "Kidato cha Pili" / "Darasa la Tatu";  any other subject -> "Form Two" / "Standard III". */
function axpTranslateClassLabel(classLabel, subject) {
  var sp = axpClassSplit(classLabel), k = sp.base.toLowerCase(), out;
  if (axpIsSwahiliSubjectSOW(subject)) out = AXP_CLASS_SW_MAP[k] || (AXP_CLASS_EN_MAP[k] ? sp.base : null);
  else out = AXP_CLASS_EN_MAP[k] || (AXP_CLASS_SW_MAP[k] ? AXP_CLASS_PAIRS.filter(function (p) { return p[0].toLowerCase() === k; })[0][0] : null);
  if (!out) return classLabel;
  return out + (sp.stream ? ' ' + sp.stream : '');
}
window.axpTranslateClassLabel = axpTranslateClassLabel;
     
function axpCalendarYear(classVal) {
  try {
    var c = window.axpGetCalendarForClass(classVal, true);
    var y = parseInt(String(c.terms[0].opened).slice(0, 4), 10);
    if (y) return y;
  } catch (e) {}
  return 0;
}
function axpStudyYear(cls, classVal) {
  var y = axpCalendarYear(classVal || cls);
  if (!y) return '';
  return /\b(form|kidato)\b.*\b(five|six|tano|sita|5|6)\b/i.test(String(cls || '') + ' ' + String(classVal || '')) ? (y + '-' + (y + 1)) : String(y);
}
     var SOW_LABELS = {
  en: {
    mainComp: 'Main\nCompetence', specComp: 'Specific\nCompetence',
    mainActivity: 'Main\nActivity', specActivity: 'Specific\nActivity',
    month: 'Month', week: 'Wk', periods: 'Periods',
    tlMethods: 'T&L\nMethods', tlResources: 'T&L\nResources',
    assessmentTool: 'Assessment\nTool', reference: 'Reference', remarks: 'Remarks',
    actions: 'Actions',
    subject: 'Subject', teacher: 'Teacher', classLabel: 'Class', school: 'School',
    periodsPerWeek: 'Year', terms: 'Terms', termsValue: '1st & 2nd Terms',
    addRow: 'Add Row', save: 'Save', downloadPdf: 'Download PDF', regenerate: 'Regenerate',
    infoBar: function(calLabel, ppw) {
      return 'Schedule follows the Wizara ya Elimu calendar for ' + calLabel +
        ' \u2014 Term 1 & Term 2, ' + ppw + ' periods/week. Weeks and dates are calculated ' +
        'automatically; mid-term and end-of-term breaks are shown as highlighted rows ' +
        'with exact dates. White cells are editable; grey/highlighted cells are automatic.';
    },
    midTermBreak: function(term) { return 'Mid Term Break'; },
endOfTermHoliday: function(term) { return 'Terminal Break'; },
    annualHoliday: 'Annual Break',
    prepExam: 'Preparation and Exams',
    projected: ' (Projected Date)',
    pdfTitle: function(subj) { return (subj + ' SCHEME OF WORK').toUpperCase(); },
    pdfFooter: function(subj, cls, classVal) { return subj + (cls ? ' - ' + cls : '') + ' | Scheme of work ' + axpStudyYear(cls, classVal); },
    page: 'Page'
  },
  sw: {
    mainComp: 'Ujuzi\nMkuu', specComp: 'Ujuzi\nMahususi',
    mainActivity: 'Shughuli\nKuu', specActivity: 'Shughuli\nMahususi',
    month: 'Mwezi', week: 'Wiki', periods: 'Vipindi',
    tlMethods: 'Mbinu za\nKufundishia', tlResources: 'Vifaa vya\nKufundishia',
    assessmentTool: 'Kifaa cha\nTathmini', reference: 'Marejeo', remarks: 'Maoni',
    actions: 'Vitendo',
    subject: 'Somo', teacher: 'Mwalimu', classLabel: 'Darasa', school: 'Shule',
    periodsPerWeek: 'Mwaka', terms: 'Muhula', termsValue: 'Muhula wa I & II',
    addRow: 'Ongeza Mstari', save: 'Hifadhi', downloadPdf: 'Pakua PDF', regenerate: 'Tengeneza Upya',
    infoBar: function(calLabel, ppw) {
      return 'Ratiba inafuata kalenda ya Wizara ya Elimu kwa ' + calLabel +
        ' \u2014 Muhula wa I na II, vipindi ' + ppw + '/wiki. Wiki na tarehe zinahesabiwa ' +
        'kiotomatiki; mapumziko ya katikati na mwisho wa muhula yanaonyeshwa kwa mistari ' +
        'iliyoangaziwa na tarehe kamili. Seli nyeupe zinahaririwa; seli za kijivu/zilizoangaziwa ni za kiotomatiki.';
    },
   midTermBreak: function(term) { return 'Mapumziko ya robo Muhula'; },
endOfTermHoliday: function(term) { return 'Mapumziko ya Mwisho wa Muhula'; },
    annualHoliday: 'Likizo ya Mwaka',
    prepExam: 'Maandalizi na Mitihani',
    projected: ' (Tarehe ya Makadirio)',
    pdfTitle: function(subj) { return (' AZIMIO LA KAZI').toUpperCase(); },
    pdfFooter: function(subj, cls, classVal) { return subj + (cls ? ' | ' + cls : '') + ' | Azimio la kazi ' + axpStudyYear(cls, classVal); },
    page: 'Ukurasa'
  }
};

function sowLang(subject) {
  return axpIsSwahiliSubjectSOW(subject) ? 'sw' : 'en';
}
     
function holidayLabel(item, lang) {
  var L = SOW_LABELS[lang];
  var base;
  if (item.holidayKind === 'midterm')  base = L.midTermBreak(item.termNum);
  else if (item.holidayKind === 'endofterm') base = L.endOfTermHoliday(item.termNum);
  else if (item.holidayKind === 'annual')    base = L.annualHoliday;
  else if (item.holidayKind === 'prepexam')  base = L.prepExam;
  else base = item.label || '';
  return base + (item.isProjected ? L.projected : '');
}

function axpIsMidterm(item) { return !!item && item.kind === 'holiday' && (item.holidayKind === 'midterm' || item.holidayKind === 'endofterm' || item.holidayKind === 'annual'); }
function axpLongDate(iso, lang) {
  var d = axpParseISO(iso);
  var mn = (lang === 'sw' ? MONTHS_SW : MONTHS)[d.getMonth()];
  return lang === 'sw'
    ? d.getDate() + ' ' + mn + ' ' + d.getFullYear()
    : mn + ' ' + d.getDate() + ', ' + d.getFullYear();
}
function axpMidtermLines(item, lang) {
  var closes = axpAddDays(item.start, -1);
  var opens = axpAddDays(item.end, 1);
  var main = (item.holidayKind === 'midterm')
    ? (lang === 'sw' ? 'MAPUMZIKO YA KATIKATI YA MUHULA' : 'MID TERM BREAK')
    : holidayLabel(item, lang).toUpperCase();
  return {
    top: (lang === 'sw' ? 'Shule inafungwa ' : 'School closes ') + axpLongDate(closes, lang),
    main: main,
    bottom: (lang === 'sw' ? 'Shule inafunguliwa ' : 'School opens ') + axpLongDate(opens, lang)
  };
}

function axpOrientationLines(item, lang) {
  var sw = lang === 'sw';
  return {
    top: (sw ? 'Inaanza ' : 'Starts ') + axpLongDate(item.start, lang),
    main: orientationLabel(lang).toUpperCase(),
    bottom: (sw ? 'Inaisha ' : 'Ends ') + axpLongDate(item.end, lang) + (sw ? ' (Makadirio)' : ' (Projected)')
  };
}

function getSOWCols(lang) {
  var L = SOW_LABELS[lang];
  return [
    {key:'mainComp',       abbr:L.mainComp,       editable:false, width:90},
    {key:'specComp',       abbr:L.specComp,       editable:false, width:85},
    {key:'mainActivity',   abbr:L.mainActivity,   editable:false, width:80},
    {key:'specActivity',   abbr:L.specActivity,   editable:true,  width:78},
    {key:'dates',          abbr:L.month,          editable:false, width:70},
    {key:'week',           abbr:L.week,           editable:false, width:30},
    {key:'periods',        abbr:L.periods,        editable:true,  width:44},
    {key:'tlMethods',      abbr:L.tlMethods,      editable:true,  width:85},
    {key:'tlResources',    abbr:L.tlResources,    editable:true,  width:85},
    {key:'assessmentTool', abbr:L.assessmentTool, editable:true,  width:75},
    {key:'reference',      abbr:L.reference,      editable:false, width:110},
    {key:'remarks',        abbr:L.remarks,        editable:true,  width:65},
  ];
}
 
function axpFillerLabel() {
  var subject = (typeof _currentSOW !== 'undefined' && _currentSOW) ? _currentSOW.subject : '';
  return axpIsSwahiliSubjectSOW(subject)
    ? 'Mapitio / Kuendelea na mada iliyotangulia'
    : 'Revision / Continuation of previous topic';
}
 
function axpFmtISO(d) {
  var y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, '0'), day = String(d.getDate()).padStart(2, '0');
  return y + '-' + m + '-' + day;
}
function axpParseISO(s) { return new Date(s + 'T00:00:00'); }
function axpAddDays(s, n) { var d = axpParseISO(s); d.setDate(d.getDate() + n); return axpFmtISO(d); }
function axpFmtDisplay(s) {
  if (!s) return '';
  var d = axpParseISO(s);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return d.getDate() + ' ' + months[d.getMonth()];
}
 
function axpOrdinal(n) {
  var s = ["th", "st", "nd", "rd"], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
function axpMonthOccurrenceLabel(startStr, occurrence, subject) {
  var d = axpParseISO(startStr);
  var arr = axpIsSwahiliSubjectSOW(subject) ? MONTHS_SW : MONTHS;
  return arr[d.getMonth()].toUpperCase();
}
function axpSplitWeeks(startStr, endStr, termNum) {
  var weeks = [];
  var cur = axpParseISO(startStr);
  var end = axpParseISO(endStr);
  while (cur <= end) {
    var weekEnd = new Date(cur); weekEnd.setDate(weekEnd.getDate() + 6);
    if (weekEnd > end) weekEnd = new Date(end);

    var monthEnd = new Date(cur.getFullYear(), cur.getMonth() + 1, 0);
    if (weekEnd > monthEnd) weekEnd = monthEnd;

    weeks.push({ type: 'teaching', termNum: termNum, start: axpFmtISO(cur), end: axpFmtISO(weekEnd) });

    cur = new Date(weekEnd);
    cur.setDate(cur.getDate() + 1);
  }
  return weeks;
}
 
function axpBuildScheduleBlocks(classVal, subject) {
  var cal = axpGetCalendarForClass(classVal, false, subject);
  var calFull = axpGetCalendarForClass(classVal, true, subject);
  var pubClosing = calFull.terms[calFull.terms.length - 1].closing;
  var blocks = [];
  var isFormOne = axpIsFormOneClass(classVal);
  cal.terms.forEach(function(term, idx) {
    var _ori = (isFormOne && term.term === 1) ? AXP_FORM_ONE_ORIENTATION : null;
    if (_ori && _ori.start && _ori.end) {
      blocks.push({
        type: 'orientation',
        start: _ori.start,
        end: _ori.end
      });
      var afterOrientation = axpAddDays(_ori.end, 1);
      blocks = blocks.concat(axpSplitWeeks(afterOrientation, term.midTermBreakClosing, term.term));
    } else {
      blocks = blocks.concat(axpSplitWeeks(term.opened, term.midTermBreakClosing, term.term));
    }
    blocks.push({
      type: 'holiday',
      holidayKind: 'midterm',
      termNum: term.term,
      start: axpAddDays(term.midTermBreakClosing, 1),
      end: axpAddDays(term.reopened, -1)
    });
    blocks = blocks.concat(axpSplitWeeks(term.reopened, term.closing, term.term));
    if (idx === cal.terms.length - 1 && pubClosing > term.closing) {
      blocks.push({
        type: 'holiday',
        holidayKind: 'prepexam',
        termNum: term.term,
        start: axpAddDays(term.closing, 1),
        end: pubClosing
      });
    }
    var nextTerm = cal.terms[idx + 1];
    if (nextTerm) {
      blocks.push({
        type: 'holiday',
        holidayKind: 'endofterm',
        termNum: term.term,
        start: axpAddDays(term.closing, 1),
        end: axpAddDays(nextTerm.opened, -1)
      });
    }
  });
  
  var lastTerm = cal.terms[cal.terms.length - 1];
  if (cal.nextYearOpens) {
    var lang = axpIsSwahiliSubjectSOW(subject) ? 'sw' : 'en';
    var isExamPeriod = !!cal.examLabel;
    blocks.push({
      type: 'holiday',
      holidayKind: isExamPeriod ? 'examperiod' : 'annual',
      label: isExamPeriod ? cal.examLabel[lang] : undefined,
      isProjected: !!cal.nextYearOpensIsProjected,
      start: axpAddDays(pubClosing, 1),
      end: axpAddDays(cal.nextYearOpens, -1)
    });
  }
var wn = 0;
  var monthCounters = {};
  blocks.forEach(function(b) {
    if (b.type === 'teaching') {
      wn++;
      b.weekBlockId = wn;

      var startDate = axpParseISO(b.start);
      var dayOfMonth = startDate.getDate();

      var firstOfMonth = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
      var firstDayMonIdx = (firstOfMonth.getDay() + 6) % 7;

      var weekOfMonth = Math.ceil((dayOfMonth + firstDayMonIdx) / 7);
      if (weekOfMonth > 4) weekOfMonth = 4;
      b.weekNum = weekOfMonth;

      var monKey = b.start.slice(0, 7);
      monthCounters[monKey] = (monthCounters[monKey] || 0) + 1;
      b.monthOccurrence = monthCounters[monKey];
     b.monthLabel = axpMonthOccurrenceLabel(b.start, b.monthOccurrence, subject);
    }
  });
  return blocks;
}

function axpRowPeriods(row, fallback) {
  var p = (row && row.periods !== undefined && row.periods !== null && row.periods !== '')
    ? parseInt(row.periods, 10) : NaN;
  return (!isNaN(p) && p > 0) ? p : fallback;
}

function axpDistributeRowsToSchedule(blocks, rows, periodsPerWeek) {
  var teachingBlocks = blocks.filter(function(b) { return b.type === 'teaching'; });
  var W = teachingBlocks.length;
  var N = (rows || []).length;

  teachingBlocks.forEach(function(b) { b.entries = []; });
  if (!W) return blocks;

  if (!N) {
    teachingBlocks.forEach(function(b) { b.entries.push({ row: null, periods: periodsPerWeek, isFiller: true }); });
    return blocks;
  }

  rows.forEach(function(row, i) {
    var wIdx = Math.min(W - 1, Math.floor(i * W / N));
    teachingBlocks[wIdx].entries.push({
      row: row,
      rowIdx: i,
      isFiller: false
    });
  });

  teachingBlocks.forEach(function(b) {
    if (!b.entries.length) {
      b.entries.push({ row: null, periods: periodsPerWeek, isFiller: true });
    } else {
      var count = b.entries.length;
      var base = Math.floor(periodsPerWeek / count);
      var remainder = periodsPerWeek % count;
      b.entries.forEach(function(e, idx) {
        e.periods = Math.max(1, base + (idx < remainder ? 1 : 0));
      });
    }
  });

  return blocks;
}
 

 function flattenSchedule(blocks) {
  var items = [];
  blocks.forEach(function(b) {
    if (b.type === 'holiday') {
      items.push({
        kind: 'holiday',
        holidayKind: b.holidayKind,
        termNum: b.termNum,
        isProjected: b.isProjected,
        label: b.label,
        start: b.start,
        end: b.end
      });
    } else if (b.type === 'orientation') {
      items.push({ kind: 'orientation', start: b.start, end: b.end });
    } else {
      var entries = b.entries || [];
      entries.forEach(function(e, idx) {
        items.push({
          kind: 'teaching', weekNum: b.weekNum, weekBlockId: b.weekBlockId, start: b.start, end: b.end,
          monthLabel: b.monthLabel,
          isFirstInWeek: idx === 0, weekSpan: entries.length,
          row: e.row, rowIdx: e.rowIdx, periods: e.periods, isFiller: e.isFiller
        });
      });
    }
  });
  return items;
}
 
var AXP_FIELD_DURATIONS = [1, 2, 3, 6];
function axpFieldMonthsValid(n) { n = parseInt(n, 10); return AXP_FIELD_DURATIONS.indexOf(n) >= 0 ? n : 3; }
function axpFieldDurationOptionsHtml(sel, lang) {
  return AXP_FIELD_DURATIONS.map(function (n) {
    var t = (lang === 'sw') ? (n === 1 ? 'Mwezi 1' : 'Miezi ' + n) : (n + (n === 1 ? ' month' : ' months'));
    return '<option value="' + n + '"' + (n === sel ? ' selected' : '') + '>' + t + '</option>';
  }).join('');
}
function axpFieldMonthOptions(classVal, subject) {
  var seen = {}, out = [];
  axpBuildScheduleBlocks(classVal, subject).forEach(function (b) {
    if (b.type !== 'teaching') return;
    var k = b.start.slice(0, 7);
    if (!seen[k]) { seen[k] = 1; out.push({ key: k, m: parseInt(k.slice(5, 7), 10), y: k.slice(0, 4) }); }
  });
  return out;
}
function axpFieldWindowKeys(classVal, subject, startKey, nMonths) {
  var n = axpFieldMonthsValid(nMonths);
  var opts = axpFieldMonthOptions(classVal, subject);
  if (!opts.some(function (o) { return o.key === startKey; })) return [];
  var maxEnd = '';
  axpBuildScheduleBlocks(classVal, subject).forEach(function (b) { if (b.end > maxEnd) maxEnd = b.end; });
  var y = parseInt(startKey.slice(0, 4), 10), m = parseInt(startKey.slice(5, 7), 10), keys = [];
  for (var i = 0; i < n; i++) {
    var yy = y + Math.floor((m - 1 + i) / 12), mm = ((m - 1 + i) % 12) + 1;
    var k = yy + '-' + String(mm).padStart(2, '0');
    if (k > maxEnd.slice(0, 7)) break;
    keys.push(k);
  }
  return keys;
}
function axpCropToFieldWindow(blocks) {
  if (typeof _currentSOW === 'undefined' || !_currentSOW || !_currentSOW.fieldStartKey) return blocks;
  return axpCropBlocksToWindow(blocks, _currentSOW.classVal, _currentSOW.subject, _currentSOW.fieldStartKey, _currentSOW.fieldMonths);
}
function axpCropBlocksToWindow(blocks, classVal, subject, startKey, nMonths) {
  var keys = axpFieldWindowKeys(classVal, subject, startKey, nMonths);
  if (!keys.length) return blocks;
  var lastKey = keys[keys.length - 1];
  var lo = keys[0] + '-01';
  var hi = axpFmtISO(new Date(parseInt(lastKey.slice(0, 4), 10), parseInt(lastKey.slice(5, 7), 10), 0));
  var out = [];
  blocks.forEach(function (b) {
    if (b.type === 'teaching') {
      if (b.start >= lo && b.end <= hi) out.push(b);
    } else if (b.start <= hi && b.end >= lo) {
      var c = {};
      for (var p in b) c[p] = b[p];
      if (c.start < lo) c.start = lo;
      if (c.end > hi) c.end = hi;
      out.push(c);
    }
  });
  while (out.length > 1 && out[0].type === 'holiday') out.shift();
  return out;
}
function axpCropRowsToFieldWindow(subject, classVal, rows, startKey, nMonths) {
  if (!startKey || !rows || !rows.length) return rows;
  var blocks = axpBuildScheduleBlocks(classVal, subject);
  var ppw = axpServerPeriodsPerWeek(subject, classVal);
  if (!ppw) { axpEnsurePeriodsPerWeek(subject, classVal).catch(function () {}); return rows; }
  var dist = axpDistributeRowsToSchedule(blocks, rows, ppw);
  var kept = [];
  axpCropBlocksToWindow(dist, classVal, subject, startKey, nMonths).forEach(function (b) {
    if (b.type !== 'teaching') return;
    (b.entries || []).forEach(function (e) { if (!e.isFiller && e.row) kept.push(e.row); });
  });
  return kept.length ? kept : rows;
}
function axpScheduleTotals(blocks, classVal) {
  var wk = 0;
  blocks.forEach(function (b) { if (b.type === 'teaching') wk++; });
  var days = axpDaysForBlocks(blocks, classVal);
  return { days: days, weeks: days < 0 ? 0 : Math.ceil(days / 5), blocks: wk };
}

function computeCurrentSchedule() {
  if (typeof _currentSOW === 'undefined' || !_currentSOW) return [];
  var periodsPerWeek = axpGetPeriodsPerWeek(_currentSOW.subject);
  var blocks = axpBuildScheduleBlocks(_currentSOW.classVal, _currentSOW.subject);
  return axpCropToFieldWindow(axpDistributeRowsToSchedule(blocks, _currentSOW.rows, periodsPerWeek));
}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function getEmail(){return(typeof AUTH!=='undefined'&&AUTH.getUser&&AUTH.getUser())?AUTH.getUser().email.toLowerCase().trim():'';}
function getToken(){return(typeof AUTH!=='undefined'&&AUTH.getSessionToken)?AUTH.getSessionToken():'';}
function stripStream(s){s=(s||'').trim();if(/^(standard|std)\s+[ivx]+$/i.test(s))return s;return s.replace(/\s+[A-Za-z]$/,'').trim();}
function serverCacheKey(subject,classVal){
  return(subject||'').trim().toLowerCase()+'||'+stripStream(classVal||'').toLowerCase();
}
function closeSidebarIfMobile(){
  if(window.innerWidth>768)return;
  var sb=document.getElementById('axp-sidebar'),ov=document.getElementById('sidebar-overlay');
  if(sb)sb.classList.remove('open');if(ov)ov.classList.remove('show');
}

var _style=document.createElement('style');
_style.textContent=[
  '.sow-panel-body{padding:0;}',
  '.sow-toolbar{display:flex;align-items:center;gap:8px;padding:10px 14px;background:var(--surface);border-bottom:1px solid var(--border);flex-wrap:wrap;}',
  '.sow-toolbar-title{font-size:.72rem;font-weight:700;color:var(--text2);text-transform:uppercase;letter-spacing:.8px;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',
  '.sow-tool-btn{display:inline-flex;align-items:center;gap:5px;border:none;padding:6px 12px;font-size:.72rem;font-weight:700;cursor:pointer;font-family:var(--font);letter-spacing:.3px;text-transform:uppercase;transition:opacity .15s;}',
  '',
  '.sow-tool-btn.primary{background:var(--navy);color:#fff;}',
  '.sow-tool-btn.success{background:var(--green);color:#fff;}',
  '.sow-tool-btn.accent{background:var(--accent);color:#fff;}',
  '.sow-tool-btn.neutral{background:var(--surface3);color:var(--text2);border:1px solid var(--border2);}',
  '.sow-tool-btn.danger{background:var(--red);color:#fff;}',
  '.sow-table-wrap{overflow-x:auto;overflow-y:auto;max-height:calc(100vh - 200px);background:var(--bg);}',
  '.sow-table{border-collapse:collapse;width:100%;font-size:.72rem;font-family:var(--font);min-width:1100px;}',
  '.sow-table thead th{background:#b6dde8;color:#000;padding:6px 7px;text-align:center;border:1px solid #000;font-size:.62rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;position:sticky;top:0;z-index:5;}',
  '.sow-table tbody tr:nth-child(even){background:#fff;}',
  '',
  '.sow-table tbody td{border:1px solid #000;padding:2px 6px;vertical-align:middle;min-width:60px;color:#000;}',
  '.sow-table tbody td[contenteditable="true"]{outline:none;cursor:text;background:rgba(74,58,255,.03);}',
  '.sow-table tbody td[contenteditable="true"]:focus{background:#fff;}',
  '.sow-table tbody td.sow-no-edit{background:#fff!important;cursor:default;color:#000;font-weight:400;}',
  '.sow-row-actions{display:flex;gap:4px;align-items:center;justify-content:center;}',
  '.sow-row-btn{background:none;border:none;cursor:pointer;padding:2px 5px;font-size:.7rem;color:var(--text3);transition:color .15s;}',
  '.sow-row-btn.del{color:var(--red);}',
  '.sow-row-btn.up,.sow-row-btn.dn{color:var(--accent);}',
  '.sow-state{text-align:center;padding:40px 20px;color:var(--text3);}',
  '.sow-state i{font-size:2.2rem;display:block;margin-bottom:10px;color:var(--border2);}',
  '.sow-state-title{font-size:.85rem;font-weight:700;margin-bottom:6px;}',
  '.sow-state-sub{font-size:.74rem;line-height:1.5;max-width:380px;margin:0 auto;}',
  '.sow-info-bar{display:flex;align-items:center;gap:8px;padding:8px 14px;background:rgba(74,58,255,.07);border-bottom:1px solid var(--border);font-size:.7rem;color:var(--text2);line-height:1.5;}',
  '.sow-info-bar i{color:var(--accent);flex-shrink:0;}',
  '.sow-ai-badge{display:inline-flex;align-items:center;gap:4px;background:var(--green);color:#fff;font-size:.58rem;font-weight:700;padding:2px 7px;letter-spacing:.3px;border-radius:0;margin-left:6px;}',
  '.sow-add-row-wrap{padding:10px 14px;background:var(--surface);border-top:1px solid var(--border);display:flex;gap:6px;align-items:center;flex-wrap:wrap;}',
  '.sow-save-indicator{font-size:.68rem;color:var(--text3);display:flex;align-items:center;gap:5px;padding:0 14px 8px;background:var(--surface);}',
  '.sow-save-indicator.saving{color:var(--accent);}',
  '.sow-save-indicator.saved{color:var(--green);}',
  '.sow-save-indicator.err{color:var(--red);}',
  '.sow-doc-header{background:var(--surface);padding:10px 14px 6px;border-bottom:1px solid var(--border);}',
  '.sow-doc-header table{width:100%;border-collapse:collapse;font-size:.92rem;}',
'.sow-doc-header td{padding:3px 6px;}',
'.sow-doc-header td:first-child{font-weight:700;color:var(--text2);width:120px;text-transform:uppercase;font-size:.74rem;letter-spacing:.4px;}',
  '.sow-doc-header td:nth-child(2){color:var(--text);border-bottom:1.5px solid var(--border2);}',
  '.sow-modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:10800;align-items:center;justify-content:center;padding:16px;}',
  '.sow-modal-overlay.show{display:flex;}',
  '.sow-modal{background:#fff;width:100%;max-width:460px;border-top:3px solid var(--accent);overflow:hidden;animation:slideUp .3s cubic-bezier(.22,.61,.36,1);}',
  '.sow-modal-header{background:var(--navy);padding:14px 16px;display:flex;align-items:center;justify-content:space-between;}',
  '.sow-modal-header h3{color:#fff;font-size:.88rem;font-weight:800;margin:0;text-transform:uppercase;letter-spacing:.5px;display:flex;align-items:center;gap:7px;}',
  '.sow-modal-close{background:rgba(255,255,255,.15);border:none;color:#fff;width:24px;height:24px;cursor:pointer;font-size:.85rem;display:flex;align-items:center;justify-content:center;}',
  '.sow-modal-body{padding:16px;}',
  '.sow-modal-fg{margin-bottom:10px;}',
  '.sow-modal-fg label{display:block;font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:var(--text2);margin-bottom:3px;}',
  '.sow-modal-fg input,.sow-modal-fg select,.sow-modal-fg textarea{width:100%;padding:7px 9px;border:1px solid var(--border2);font-size:.8rem;font-family:var(--font);background:var(--surface2);color:var(--text);outline:none;}',
  '.sow-modal-fg input:focus,.sow-modal-fg select:focus,.sow-modal-fg textarea:focus{border-color:var(--accent);background:#fff;}',
  '.sow-modal-footer{display:flex;gap:8px;justify-content:flex-end;padding:10px 16px 14px;border-top:1px solid var(--border);}',
  '.sow-building-banner{display:flex;align-items:center;gap:10px;padding:10px 14px;background:linear-gradient(90deg,#0d1b2e,#1a2d4a);border-bottom:2px solid var(--gold);font-size:.72rem;color:rgba(255,255,255,.85);line-height:1.5;}',
  '.sow-building-banner i{color:var(--gold);font-size:1rem;flex-shrink:0;}',
  '.sow-building-banner-text{flex:1;}',
  '.sow-building-banner strong{color:#ffd97a;}',
  '.sow-spinner{display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.25);border-top-color:#fff;border-radius:50%;animation:sowSpin .7s linear infinite;vertical-align:middle;margin-right:4px;}',
  '@keyframes sowSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}',
  '.sb-sow-btn i{color:var(--accent);}',
  '.sow-ai-pill{margin-left:auto;font-size:.52rem;font-weight:800;letter-spacing:.6px;padding:1px 5px;border-radius:0;text-transform:uppercase;flex-shrink:0;}',
  '.sow-ai-pill.ready{background:rgba(30,158,82,.15);color:var(--green);}',
  '.sow-ai-pill.building{background:rgba(245,197,24,.18);color:#b45309;animation:sowPulse 1.2s ease-in-out infinite;}',
  '.sow-ai-pill.cached{background:rgba(74,58,255,.12);color:var(--accent);}',
  '@keyframes sowPulse{0%,100%{opacity:1}50%{opacity:.45}}',
].join('');
document.head.appendChild(_style);

function injectSOWPanel(){
  var panel=document.createElement('div');
  panel.className='main-panel';
  panel.id='panel-sow';
  panel.innerHTML=[
    '<div class="panel-header">',
    '  <button class="panel-back" id="sowPanelBack"><i class="bi bi-arrow-left"></i> Back</button>',
    '  <h2><i class="bi bi-journal-text"></i> Scheme of Work',
    '    <span class="sow-ai-badge" id="sowAiBadge" style="display:none;"><i class="bi bi-stars"></i> AcademixPoint AI</span>',
    '  </h2>',
    '  <p id="sowPanelSubtitle">Select a subject from the sidebar.</p>',
    '</div>',
    '<div class="sow-panel-body" id="sowPanelBody">',
    '  <div class="sow-state">',
    '    <i class="bi bi-journal-richtext"></i>',
    '    <div class="sow-state-title">No Scheme of Work loaded</div>',
    '    <div class="sow-state-sub">Select a subject and class from the sidebar to view or generate a Scheme of Work.</div>',
    '  </div>',
    '</div>',
  ].join('');
  var contentInner=document.querySelector('.content-inner');
  if(contentInner)contentInner.appendChild(panel);
  document.getElementById('sowPanelBack').addEventListener('click',function(){showPanel('syllabus');});
}

function setState(msg,sub){
  var body=document.getElementById('sowPanelBody');
  if(!body)return;
  body.innerHTML=[
    '<div class="sow-state">',
    '  <i class="bi bi-hourglass-split"></i>',
    '  <div class="sow-state-title">'+esc(msg||'Loading...')+'</div>',
    (sub?'  <div class="sow-state-sub">'+esc(sub)+'</div>':''),
    '</div>',
  ].join('');
}

function setButtonPill(subject,classVal,type){
  document.querySelectorAll('.sb-sow-btn').forEach(function(btn){
    var bs=(btn.getAttribute('data-subject')||'').trim();
    var bc=(btn.getAttribute('data-class')||'').trim();
    if(bs!==subject||bc!==classVal)return;
    var old=btn.querySelector('.sow-ai-pill');
    if(old)old.remove();
    if(!type)return;
    var pill=document.createElement('span');
    pill.className='sow-ai-pill '+type;
    if(type==='building')window.axpIconText(pill,'hourglass-split','Building');
    else if(type==='ready')window.axpIconText(pill,'check-lg','Ready');
    else if(type==='cached')window.axpIconText(pill,'check-lg','Cached');
    btn.appendChild(pill);
  });
}

function triggerBackendBuild(subject,classVal){
  if(!subject||!classVal)return;
  if(!API_URL||!getToken())return;
  var key=serverCacheKey(subject,classVal);
  if(_serverSOWCache[key])return;
  if(_buildInFlight[key])return;

  fetch(API_URL+'?action=checkSOWCache&token='+encodeURIComponent(getToken())
    +'&subject='+encodeURIComponent(subject)
    +'&classVal='+encodeURIComponent(classVal))
  .then(function(r){return r.json();})
  .then(function(resp){
    if(resp&&resp.success&&resp.cached&&Array.isArray(resp.rows)&&resp.rows.length){
      _serverSOWCache[key]={rows:resp.rows,cached:true,ts:Date.now()};if(axpPPWValid(resp.periodsPerWeek))_serverPPW[key]=axpPPWValid(resp.periodsPerWeek);
      setButtonPill(subject,classVal,'cached');
    }else{
      harvestAndBuild(subject,classVal,key);
    }
  })
  .catch(function(){
    harvestAndBuild(subject,classVal,key);
  });
}
     
     
     function checkSOWCacheOnly(subject,classVal){
  if(!subject||!classVal)return;
  if(!API_URL||!getToken())return;
  var key=serverCacheKey(subject,classVal);
  if(_serverSOWCache[key]){
    setButtonPill(subject,classVal,_serverSOWCache[key].cached?'cached':'ready');
    return;
  }
  if(_buildInFlight[key])return; 

  fetch(API_URL+'?action=checkSOWCache&token='+encodeURIComponent(getToken())
    +'&subject='+encodeURIComponent(subject)
    +'&classVal='+encodeURIComponent(classVal))
  .then(function(r){return r.json();})
  .then(function(resp){
    if(resp&&resp.success&&resp.cached&&Array.isArray(resp.rows)&&resp.rows.length){
      _serverSOWCache[key]={rows:resp.rows,cached:true,ts:Date.now()};if(axpPPWValid(resp.periodsPerWeek))_serverPPW[key]=axpPPWValid(resp.periodsPerWeek);
      setButtonPill(subject,classVal,'cached');
    }
    
  })
  .catch(function(){});
}

function harvestAndBuild(subject, classVal, key, _retryCount) {
  _retryCount = _retryCount || 0;

  if (!subject || !classVal) {
    delete _buildInFlight[key];
    setButtonPill(subject, classVal, '');
    showSOWFeedback(subject, classVal, {
      blocked: true,
      reason: 'Subject and Class must be selected in Step 2 before a Scheme of Work can be generated.'
    });
    return;
  }

  var subjSel = document.getElementById('subject');
  var clsSel  = document.getElementById('classes');
  var originalSubject = subjSel ? subjSel.value : '';
  var originalClass   = clsSel  ? clsSel.value  : '';
  var needsSwitch = subjSel && clsSel && (originalSubject !== subject || originalClass !== classVal);

  function restoreOriginal(cb) {
    if (!needsSwitch) { if (cb) cb(); return; }
    clsSel.value = originalClass;
    clsSel.dispatchEvent(new Event('change', { bubbles: true }));
    subjSel.value = originalSubject;
    subjSel.dispatchEvent(new Event('change', { bubbles: true }));
    if (cb) setTimeout(cb, 50);
  }

  function doHarvestAndSend() {
    var topicSel = document.getElementById('topicLesson');
    var compSel  = document.getElementById('compLesson');
    var mainSel  = document.getElementById('mainlesson');
    var refSel   = document.getElementById('refLesson');

    function getAllOptions(sel) {
      if (!sel || sel.tagName !== 'SELECT') return [];
      return Array.from(sel.options)
        .map(function(o) { return (o.text || o.value || '').trim(); })
        .filter(function(v) {
          return v
            && v.toLowerCase().indexOf('select ') === -1
            && v.toLowerCase().indexOf('chagua ') === -1
            && v !== '';
        });
    }

    var topics      = getAllOptions(topicSel);
    var competences = getAllOptions(compSel);
    var mainLessons = getAllOptions(mainSel);
    var references  = getAllOptions(refSel);

    if (!topics.length || !mainLessons.length) {
      if (_retryCount >= 5) {
        delete _buildInFlight[key];
        setButtonPill(subject, classVal, '');
        showSOWFeedback(subject, classVal, {
          blocked: true,
          reason: 'Could not load syllabus content for ' + subject + ' ' + classVal +
                  '. This subject/class combination may not be supported yet.'
        });
        restoreOriginal();
        return;
      }
      restoreOriginal(function() {
        setTimeout(function() {
          harvestAndBuild(subject, classVal, key, _retryCount + 1);
        }, 800);
      });
      return;
    }

    _buildInFlight[key] = true;
    setButtonPill(subject, classVal, 'building');

    var fullData = { topics: topics, competences: competences, mainLessons: mainLessons, references: references };
    var hasReference = references.length > 0;

    if (!hasReference) {
      delete _buildInFlight[key];
      setButtonPill(subject, classVal, '');
      showSOWFeedback(subject, classVal, {
        blocked: true,
        reason: 'No reference found in syllabus data for ' + subject + ' ' + classVal +
                '. Reference is required before building a Scheme of Work.'
      });
      restoreOriginal();
      return;
    }
    if (competences.length === 0) {
      delete _buildInFlight[key];
      setButtonPill(subject, classVal, '');
      showSOWFeedback(subject, classVal, {
        blocked: true,
        reason: 'No competences found for ' + subject + ' ' + classVal +
                '. Complete Step 3 for more lessons before building a Scheme of Work.'
      });
      restoreOriginal();
      return;
    }

    showSOWFeedback(subject, classVal, {
      blocked: false, topics: topics.length, competences: competences.length,
      activities: mainLessons.length, hasRef: hasReference
    });

    restoreOriginal(function() {
      fetch(API_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'getOrBuildSOWForSubjectClass', token: getToken(),
          subject: subject, classVal: classVal, syllabusItems: fullData
        })
      })
      .then(function(r) { return r.json(); })
      .then(function(resp) {
        delete _buildInFlight[key];
        if (resp && resp.success && Array.isArray(resp.rows) && resp.rows.length) {
          _serverSOWCache[key] = { rows: resp.rows, cached: resp.cached, ts: Date.now() };
          if (axpPPWValid(resp.periodsPerWeek)) _serverPPW[key] = axpPPWValid(resp.periodsPerWeek);
          setButtonPill(subject, classVal, resp.cached ? 'cached' : 'ready');
        } else {
          console.error('[SOW] build failed for', subject, classVal, ':',
            resp ? { errorCode: resp.errorCode || null, error: resp.error || 'unknown error' } : 'no response');
          (window.__axpBuildErr = window.__axpBuildErr || {})[key] = (resp && resp.error) || 'Build failed.';
          setButtonPill(subject, classVal, '');
        }
      })
      .catch(function(err) {
        console.error('[SOW] fetch error for', subject, classVal, ':', err && err.message ? err.message : 'network error');
        (window.__axpBuildErr = window.__axpBuildErr || {})[key] = 'Network error.';
        delete _buildInFlight[key];
        setButtonPill(subject, classVal, '');
      });
    });
  }

  if (needsSwitch) {
    clsSel.value = classVal;
    clsSel.dispatchEvent(new Event('change', { bubbles: true }));
    subjSel.value = subject;
    subjSel.dispatchEvent(new Event('change', { bubbles: true }));
    setTimeout(doHarvestAndSend, 300);
  } else {
    doHarvestAndSend();
  }
}
 
 

function openSOWForSubject(subject, classVal, items) {
  window.axpWithCalendar(function () {
    if (!window.axpOpenFeatureGate) { _openSOWForSubjectImpl(subject, classVal, items); return; }
    window.axpOpenFeatureGate('sow', subject, classVal, function () {
      _openSOWForSubjectImpl(subject, classVal, items);
    });
  }, function () {
    showPanel('sow');
    setState('Calendar not loaded','The school calendar could not be loaded, so the scheme of work was not opened. Please check your connection and open it again.');
  });
}

function _openSOWForSubjectImpl(subject, classVal, items){
  axpEnsurePeriodsPerWeek(subject, classVal).then(function(){
    _openSOWForSubjectCore(subject, classVal, items);
  }).catch(function(){
    showPanel('sow');
    setState('Could not load settings','The periods-per-week setting could not be loaded from the server. Please check your connection and try again.');
  });
}

function _openSOWForSubjectCore(subject, classVal, items){
  showPanel('sow');
  var subtitle=document.getElementById('sowPanelSubtitle');
  if(subtitle)subtitle.textContent=subject+' \u2013 '+stripStream(classVal)+' \u00b7 Scheme of Work';
  var badge=document.getElementById('sowAiBadge');
  var cacheKey=getEmail()+'|'+subject+'|'+classVal;
  var key=serverCacheKey(subject,classVal);

  if(_sowCache[cacheKey]&&!_sowCache[cacheKey].dirty){
    _currentSOW=_sowCache[cacheKey];
    if(badge)badge.style.display='none';
    renderSOWPanel(subject,classVal);
    return;
  }

  if(_serverSOWCache[key]){
    _currentSOW={subject:subject,classVal:classVal,rows:_serverSOWCache[key].rows,id:'',savedAt:'',dirty:false};
    _sowCache[cacheKey]=_currentSOW;
    if(badge){badge.style.display='inline-flex';}
    renderSOWPanel(subject,classVal);
    return;
  }

  if(_buildInFlight[key]){
    showBuildingBanner(subject,classVal,cacheKey,badge);
    return;
  }

  setState('Loading Scheme of Work...','Fetching saved data from your account.');

  var token=getToken(),email=getEmail();
  if(!token||!email||!API_URL){
    setState('Sign in required','Please sign in to view or generate a Scheme of Work.');
    return;
  }

  fetch(API_URL+'?action=getSchemeOfWork&token='+encodeURIComponent(token)+'&email='+encodeURIComponent(email)+'&subject='+encodeURIComponent(subject)+'&classVal='+encodeURIComponent(classVal))
    .then(function(r){return r.json();})
    .then(function(resp){
      if(resp&&resp.success&&resp.sow&&resp.sow.rows&&resp.sow.rows.length){
        _currentSOW={subject:subject,classVal:classVal,rows:resp.sow.rows,id:resp.sow.id||'',savedAt:resp.sow.updatedAt||'',dirty:false};
        _sowCache[cacheKey]=_currentSOW;
        if(badge)badge.style.display='none';
        renderSOWPanel(subject,classVal);
      }else{
        startBuildAndWait(subject,classVal,cacheKey,badge);
      }
    })
    .catch(function(){
      startBuildAndWait(subject,classVal,cacheKey,badge);
    });
}

function startBuildAndWait(subject,classVal,cacheKey,badge){
  triggerBackendBuild(subject,classVal);
  showBuildingBanner(subject,classVal,cacheKey,badge);
}

function showBuildingBanner(subject,classVal,cacheKey,badge){
  var body=document.getElementById('sowPanelBody');
  if(!body)return;
  body.innerHTML=[
    '<div class="sow-building-banner">',
    '  <i class="bi bi-stars"></i>',
    '  <div class="sow-building-banner-text">',
    '    <strong>AcademixPoint AI is building your Scheme of Work</strong><br>',
    '    Analysing your syllabus content and generating T&amp;L Methods, Resources, Assessment Tools and all columns.',
    '    This is done <strong>once per subject and class</strong> \u2014 future visits load instantly.',
    '  </div>',
    '</div>',
    '<div class="sow-state" style="padding:28px 20px;">',
    '  <span class="sow-spinner"></span>',
    '  <div class="sow-state-title" id="sowBuildMsg" style="margin-top:10px;">Warming up AcademixPoint AI\u2026</div>',
    '  <div class="sow-state-sub">Usually takes 10 \u2013 30 seconds</div>',
    '</div>',
  ].join('');

  var messages=[
    'Reading your syllabus with care\u2026',
    'Shaping clear teaching and learning methods\u2026',
    'Choosing the right assessment tools\u2026',
    'Crafting specific activities for every lesson\u2026',
    'Tying every column neatly together\u2026',
    'Just a moment more \u2014 almost ready\u2026',
  ];
  var tick=0;
  var msgEl=document.getElementById('sowBuildMsg');
  var ticker=setInterval(function(){
    tick++;
    if(msgEl&&messages[tick%messages.length])msgEl.textContent=messages[tick%messages.length];
  },4500);

  var key=serverCacheKey(subject,classVal);
  var poll=setInterval(function(){
    if(_serverSOWCache[key]){
      clearInterval(poll);clearInterval(ticker);
      _currentSOW={subject:subject,classVal:classVal,rows:_serverSOWCache[key].rows,id:'',savedAt:'',dirty:false};
      _sowCache[cacheKey]=_currentSOW;
      if(badge){badge.style.display='inline-flex';}
      renderSOWPanel(subject,classVal);
      return;
    }
    if(!_buildInFlight[key]&&!_serverSOWCache[key]){
      clearInterval(poll);clearInterval(ticker);
      var body2=document.getElementById('sowPanelBody');
      if(body2){
        body2.innerHTML=[
          '<div class="sow-state">',
          '  <i class="bi bi-exclamation-triangle-fill" style="color:var(--red);"></i>',
          '  <div class="sow-state-title">Could not generate Scheme of Work</div>',
          '  <div class="sow-state-sub">',
          '    Make sure you have created lesson plans for <strong>'+esc(subject)+' '+esc(stripStream(classVal))+'</strong> first, then try again.',
          '  </div>',
          '  <button class="sow-tool-btn accent" id="sowRetryBtn" style="margin-top:14px;">',
          '    <i class="bi bi-arrow-clockwise"></i> Try Again',
          '  </button>',
          '</div>',
        ].join('');
        var retryBtn=document.getElementById('sowRetryBtn');
        if(retryBtn)retryBtn.addEventListener('click',function(){openSOWForSubject(subject,classVal,[]);});
      }
    }
  },2000);

  setTimeout(function(){
    if(_currentSOW&&_currentSOW.subject===subject)return;
    clearInterval(poll);clearInterval(ticker);
    if(!_serverSOWCache[key]){
      var body3=document.getElementById('sowPanelBody');
      if(body3){
        body3.innerHTML='<div class="sow-state"><i class="bi bi-clock-history"></i><div class="sow-state-title">Taking longer than expected</div><div class="sow-state-sub">Please close this panel and reopen it in a moment.</div></div>';
      }
    }
  },70000);
}
     
function axpAnnotateMergeSpans(flatItems) {
  for (var i = 0; i < flatItems.length; i++) {
    var it = flatItems[i];
    if (it.kind !== 'teaching') continue;
    it.mainCompSpan      = 0;
    it.specCompSpan      = 0;
    it.mainActivitySpan  = 0;
    it.mergedPeriodsLabel = '';
  }

  function valKey(it, key) {
    if (it.isFiller) return null; 
    return (it.row && it.row[key]) || '';
  }

  function itemPeriodsNum(it) {
    var p = it.periods != null && it.periods !== '' ? it.periods : ((it.row && it.row.periods) || '');
    var n = parseInt(p, 10);
    return isNaN(n) ? 0 : n;
  }

  function runLength(key, spanField) {
    var i = 0;
    while (i < flatItems.length) {
      if (flatItems[i].kind !== 'teaching') { i++; continue; }
      if (flatItems[i].isFiller) {
        flatItems[i][spanField] = 1;
        i++;
        continue;
      }
      var v = valKey(flatItems[i], key);
      var j = i;
      while (j < flatItems.length && flatItems[j].kind === 'teaching' && !flatItems[j].isFiller && valKey(flatItems[j], key) === v) j++;
      flatItems[i][spanField] = j - i;
      for (var k = i + 1; k < j; k++) flatItems[k][spanField] = 0;
      i = j;
    }
  }

  runLength('mainComp', 'mainCompSpan');
  runLength('specComp', 'specCompSpan');
  runLength('mainActivity', 'mainActivitySpan');

  
  (function sumPeriodsPerMainActivity(){
    var i = 0;
    while (i < flatItems.length) {
      if (flatItems[i].kind !== 'teaching') { i++; continue; }
      if (flatItems[i].isFiller) {
        flatItems[i].mergedPeriodsLabel = String(itemPeriodsNum(flatItems[i]));
        i++;
        continue;
      }
      var span = flatItems[i].mainActivitySpan;
      if (span > 0) {
        var total = 0;
        for (var k = i; k < i + span && k < flatItems.length; k++) {
          total += itemPeriodsNum(flatItems[k]);
        }
        flatItems[i].mergedPeriodsLabel = String(total);
        i += span;
      } else {
        i++;
      }
    }
  })();

  var i2 = 0;
  while (i2 < flatItems.length) {
    if (flatItems[i2].kind !== 'teaching') { i2++; continue; }
    var month = flatItems[i2].monthLabel;
    var j = i2;
    while (j < flatItems.length && flatItems[j].kind === 'teaching' && flatItems[j].monthLabel === month) j++;
    flatItems[i2].monthSpan = j - i2;
    flatItems[i2].isFirstInMonth = true;
    for (var k = i2 + 1; k < j; k++) { flatItems[k].monthSpan = 0; flatItems[k].isFirstInMonth = false; }
    i2 = j;
  }

  return flatItems;
}
     
     function detectReferenceYear(rows) {
  for (var i = 0; i < (rows || []).length; i++) {
    var ref = rows[i] && rows[i].reference;
    if (!ref) continue;
    var m = ref.match(/\((\d{4})\)/) || ref.match(/\b(\d{4})\b/);
    if (m) return m[1];
  }
  return '';
}

function replaceYearInText(str, newYear) {
  if (!str || !newYear) return str;
  var r1 = str.replace(/\(\d{4}\)/g, '(' + newYear + ')');
  if (r1 !== str) return r1;
  return str.replace(/\b\d{4}\b/, newYear);
}

function applyYearToSOWReferences(newYear) {
  if (!_currentSOW || !_currentSOW.rows) return;
  _currentSOW.rows.forEach(function (row) {
    if (row && row.reference) row.reference = replaceYearInText(row.reference, newYear);
  });
  _currentSOW.dirty = true;
  rebuildTable();
  triggerAutoSave();
}
     
function axpApplyPeriodsPerWeek(n) {
  if (!_currentSOW) return;
  n = axpPPWValid(n); if (!n) return;
  var key = serverCacheKey(_currentSOW.subject, _currentSOW.classVal);
  var same = (n === axpServerPeriodsPerWeek(_currentSOW.subject, _currentSOW.classVal));
  _currentSOW.periodsPerWeek = same ? 0 : n;
  axpPPWStoreWrite(key, same ? 0 : n);
  _currentSOW.dirty = true;
  renderSOWPanel(_currentSOW.subject, _currentSOW.classVal);
  triggerAutoSave();
}

function renderSOWPanel(subject, classVal) {
  var body = document.getElementById('sowPanelBody');
  if (!body || !_currentSOW) return;
  var profile = (typeof AUTH !== 'undefined' && AUTH.getProfile) ? AUTH.getProfile() : null;
var teacherName = (profile && profile.fullName) || '';
var schoolField = document.getElementById('school');
var school = (schoolField && schoolField.value.trim()) || (profile && profile.school) || '';
var _ag = axpAgentOverride(subject, classVal); if (_ag) { teacherName = _ag.teacherName || teacherName; school = _ag.school || school; }
  var year = axpCalendarYear(classVal);
  var cls = axpTranslateClassLabel(stripStream(classVal || ''), subject);
  var periodsPerWeek = axpGetPeriodsPerWeek(subject);
  var cal = axpGetCalendarForClass(classVal);
  var lang = sowLang(subject);
  var L = SOW_LABELS[lang];
  var _srvLast = axpGetCalendarForClass(classVal, true).terms.slice(-1)[0];
  var _curLast = cal.terms[cal.terms.length - 1];
  var endY = String(_curLast.closing).slice(0, 4), endM = parseInt(String(_curLast.closing).slice(5, 7), 10), endD = parseInt(String(_curLast.closing).slice(8, 10), 10);
  var endCustom = (_curLast.closing !== _srvLast.closing);
  var _tot = axpTeachingTotals(classVal, subject);
  var _mArr = (lang === 'sw') ? MONTHS_SW : MONTHS;
  var endMonthOpts = _mArr.map(function (n, i) { return '<option value="' + (i + 1) + '"' + ((i + 1) === endM ? ' selected' : '') + '>' + n + '</option>'; }).join('');
  var endFieldCss = 'padding:6px 7px;font-size:.74rem;border:1px solid var(--border2);background:var(--surface2);color:var(--text);font-family:var(--font);';
  var endRange = axpFmtDisplay(_srvLast.reopened) + ' \u2013 ' + axpFmtDisplay(_srvLast.closing) + ' ' + endY;
  var endTotalsText = (_tot.days < 0) ? '' : (lang === 'sw')
    ? ('Siku ' + _tot.days + ' za kufundisha (\u2248 wiki ' + _tot.weeks + ')')
    : (_tot.days + ' teaching days (\u2248 ' + _tot.weeks + ' weeks)');
  var fieldOpts = axpFieldMonthOptions(classVal, subject);
  var fieldKey = _currentSOW.fieldStartKey || '';
  var fieldActive = !!fieldKey && fieldOpts.some(function (o) { return o.key === fieldKey; });
  if (!fieldActive) { fieldKey = ''; _currentSOW.fieldStartKey = ''; }
  var fieldMonths = axpFieldMonthsValid(_currentSOW.fieldMonths); _currentSOW.fieldMonths = fieldMonths;
  var fieldKeys = fieldActive ? axpFieldWindowKeys(classVal, subject, fieldKey, fieldMonths) : [];
  var fieldDurHtml = axpFieldDurationOptionsHtml(fieldMonths, lang);
  var fieldTot = fieldActive ? axpScheduleTotals(computeCurrentSchedule(), classVal) : null;
  var _fm = (lang === 'sw') ? MONTHS_SW : MONTHS;
  var fieldOptHtml = fieldOpts.map(function (o) { return '<option value="' + o.key + '"' + (o.key === (fieldKey || (fieldOpts[0] && fieldOpts[0].key)) ? ' selected' : '') + '>' + _fm[o.m - 1] + ' ' + o.y + '</option>'; }).join('');
  var fieldSummary = '';
  if (fieldActive) {
    var _f1 = _fm[parseInt(fieldKeys[0].slice(5, 7), 10) - 1], _f2 = _fm[parseInt(fieldKeys[fieldKeys.length - 1].slice(5, 7), 10) - 1];
    fieldSummary = (lang === 'sw' ? 'Inaonyesha ' : 'Showing ') + _f1 + (fieldKeys.length > 1 ? ' \u2013 ' + _f2 : '') + ' ' + fieldKeys[0].slice(0, 4) + ' \u00b7 ' +
      (fieldTot.days < 0 ? '' : (lang === 'sw' ? ('siku ' + fieldTot.days + ' za kufundisha (\u2248 wiki ' + fieldTot.weeks + ')') : (fieldTot.days + ' teaching days (\u2248 ' + fieldTot.weeks + ' weeks)'))) +
      (fieldKeys.length < fieldMonths ? (lang === 'sw' ? ' \u00b7 miezi ' + fieldKeys.length + ' tu imebaki kwenye kalenda' : ' \u00b7 only ' + fieldKeys.length + ' month(s) left in the calendar') : '') +
      (lang === 'sw' ? ' \u00b7 likizo na kipindi cha mtihani vimejumuishwa \u00b7 PDF itakuwa na sehemu hii tu' : ' \u00b7 breaks and exam periods included \u00b7 the PDF will contain only this part');
  }
  var flat = axpAnnotateMergeSpans(flattenSchedule(computeCurrentSchedule()));
 
  body.innerHTML = [
    '<div class="sow-doc-header" style="text-transform:uppercase;"><table>',
    '  <tr><td>' + esc(L.subject) + '</td><td>' + esc(subject) + '</td>',
    '      <td style="width:120px;font-weight:700;font-size:.62rem;letter-spacing:.4px;text-transform:uppercase;color:var(--text2);">' + esc(L.teacher) + '</td>',
    '      <td style="border-bottom:1.5px solid var(--border2);">' + esc(teacherName) + '</td></tr>',
    '  <tr><td>' + esc(L.classLabel) + '</td><td>' + esc(cls) + '</td>',
    '      <td style="font-weight:700;font-size:.62rem;letter-spacing:.4px;text-transform:uppercase;color:var(--text2);">' + esc(L.school) + '</td>',
    '      <td style="border-bottom:1.5px solid var(--border2);">' + esc(school) + '</td></tr>',
    '  <tr><td>' + esc(L.periodsPerWeek) + '</td><td>' + axpStudyYear(cls, classVal) + '</td><td>' + esc(L.terms) + '</td><td>' + window.axpSupHtml(esc(L.termsValue)) + '</td></tr>',
    '</table></div>',
    '<div class="sow-toolbar">',
'  <span class="sow-toolbar-title">' + esc(subject) + ' \u2013 ' + esc(cls) + '</span>',
'  <span style="display:inline-flex;align-items:center;gap:5px;font-size:.66rem;font-weight:700;color:var(--text2);text-transform:uppercase;letter-spacing:.4px;" title="Change how many periods this subject has per week \u2014 the schedule is recalculated">',
'    <i class="bi bi-clock-history"></i>' + (lang === 'sw' ? 'Vipindi/wiki' : 'Periods/week'),
'    <input type="number" id="sowPPWInput" min="1" max="10" value="' + periodsPerWeek + '" style="width:54px;padding:6px 7px;font-size:.74rem;border:1px solid var(--border2);background:var(--surface2);color:var(--text);font-family:var(--font);">',
'    <button class="sow-tool-btn neutral" id="sowPPWResetBtn" style="' + (periodsPerWeek === axpServerPeriodsPerWeek(subject, classVal) ? 'display:none;' : '') + '"><i class="bi bi-arrow-counterclockwise"></i> Reset (' + axpServerPeriodsPerWeek(subject, classVal) + ')</button>',
'  </span>',
'  <span style="display:inline-flex;align-items:center;gap:5px;flex-wrap:wrap;font-size:.66rem;font-weight:700;color:var(--text2);text-transform:uppercase;letter-spacing:.4px;" title="' + (lang === 'sw' ? 'Badilisha siku na mwezi wa mwisho wa kufundisha' : 'Finish earlier than the national calendar: change the day and month') + ' (' + endRange + '). ' + (lang === 'sw' ? 'Mwaka haubadiliki.' : 'The year cannot be changed.') + '">',
'    <i class="bi bi-calendar-check"></i>' + (lang === 'sw' ? 'Siku ya mwisho ya kufundisha' : 'Last teaching day'),
'    <input type="number" id="sowEndDay" min="1" max="31" value="' + endD + '" style="width:54px;' + endFieldCss + '">',
'    <select id="sowEndMonth" style="' + endFieldCss + '">' + endMonthOpts + '</select>',
'    <input type="text" id="sowEndYear" value="' + endY + '" readonly disabled style="width:58px;opacity:.7;cursor:not-allowed;' + endFieldCss + '">',
'    <button class="sow-tool-btn neutral" id="sowEndResetBtn" style="' + (endCustom ? '' : 'display:none;') + '"><i class="bi bi-arrow-counterclockwise"></i> Reset (' + axpFmtDisplay(_srvLast.closing) + ')</button>',
'    <span id="sowEndTotals" style="text-transform:none;font-weight:600;color:var(--accent);">' + esc(endTotalsText) + '</span>',
'  </span>',
'  <button class="sow-tool-btn ' + (fieldActive ? 'success' : 'primary') + '" id="sowFieldBtn" title="Short scheme of work for field teachers (university students on attachment)"><i class="bi bi-mortarboard-fill"></i> ' + (lang === 'sw' ? 'Kwa walimu wa mazoezi tu' : 'For field teachers only') + '</button>',
'  <button class="sow-tool-btn accent" id="sowAddRowBtn"><i class="bi bi-plus-lg"></i> ' + esc(L.addRow) + '</button>',
'  <button class="sow-tool-btn success" id="sowSaveBtn"><i class="bi bi-floppy"></i> ' + esc(L.save) + '</button>',
'  <button class="sow-tool-btn neutral" id="sowViewToggleBtn"><i class="bi bi-file-earmark-pdf"></i> PDF Preview</button>',
'  <button class="sow-tool-btn primary" id="sowDownloadBtn"><i class="bi bi-download"></i> ' + esc(L.downloadPdf) + '</button>',
'  <button class="sow-tool-btn danger" id="sowRegenBtn"><i class="bi bi-arrow-clockwise"></i> ' + esc(L.regenerate) + '</button>',
'  <span style="display:inline-flex;align-items:center;gap:5px;">',
'    <input type="number" id="sowRefYearInput" placeholder="Year" min="2000" max="2099" ',
'      style="width:72px;padding:6px 7px;font-size:.74rem;border:1px solid var(--border2);background:var(--surface2);color:var(--text);font-family:var(--font);">',
'    <button class="sow-tool-btn neutral" id="sowApplyYearBtn"><i class="bi bi-calendar3"></i> Set Reference Year</button>',
'  </span>',
'</div>',
    '<div id="sowFieldPanel" style="' + ((fieldActive || _currentSOW.fieldPanelOpen) ? 'display:flex;' : 'display:none;') + 'flex-wrap:wrap;align-items:center;gap:8px;margin:6px 0;padding:9px 12px;background:var(--surface2);border-left:3px solid var(--accent);font-size:.72rem;color:var(--text2);">',
    '  <span style="font-weight:800;text-transform:uppercase;letter-spacing:.4px;"><i class="bi bi-mortarboard-fill"></i> ' + (lang === 'sw' ? 'Walimu wa mazoezi' : 'Field teachers') + '</span>',
    '  <label style="display:inline-flex;align-items:center;gap:5px;font-weight:700;">' + (lang === 'sw' ? 'Muda' : 'Duration') + '<select id="sowFieldDuration" style="' + endFieldCss + '">' + fieldDurHtml + '</select></label>',
    '  <label style="display:inline-flex;align-items:center;gap:5px;font-weight:700;">' + (lang === 'sw' ? 'Mwezi wa kuanza' : 'Starting month') + '<select id="sowFieldMonth" style="' + endFieldCss + '">' + fieldOptHtml + '</select></label>',
    '  <button class="sow-tool-btn accent" id="sowFieldApplyBtn"><i class="bi bi-scissors"></i> ' + (lang === 'sw' ? 'Onyesha' : 'Show scheme') + '</button>',
    (fieldActive ? '  <button class="sow-tool-btn neutral" id="sowFieldClearBtn"><i class="bi bi-arrow-counterclockwise"></i> ' + (lang === 'sw' ? 'Onyesha mwaka mzima' : 'Show full scheme') + '</button>' : ''),
    (fieldActive ? '  <span style="flex-basis:100%;font-weight:600;color:var(--accent);">' + esc(fieldSummary) + '</span>' : ''),
    '</div>',
    '<div class="sow-info-bar"><i class="bi bi-calendar3"></i>',
    '  <span>' + esc(L.infoBar(cal.label, periodsPerWeek)) + '</span>',
    '</div>',
    '<div class="sow-save-indicator" id="sowSaveIndicator"><i class="bi bi-cloud-check"></i><span id="sowSaveText">All changes saved.</span></div>',
    '<div id="sowPagePreview" style="display:none;"></div>',
    '<div class="sow-table-wrap">' + buildTableHTML(flat, lang) + '</div>',
    '<div class="sow-add-row-wrap" id="sowAddRowWrap"><span style="font-size:.68rem;font-weight:700;color:var(--text2);text-transform:uppercase;letter-spacing:.5px;"><i class="bi bi-info-circle"></i> Click any white cell to edit \u00b7 Use Add Row for new entries</span></div>',
  ].join('');
 
  bindTableEvents();
  document.getElementById('sowAddRowBtn').addEventListener('click', openAddRowModal);
  var ppwInput = document.getElementById('sowPPWInput'), ppwReset = document.getElementById('sowPPWResetBtn');
  if (ppwInput) ppwInput.addEventListener('change', function () {
    var n = axpPPWValid(ppwInput.value);
    if (!n) { axpAlert('Enter a number of periods per week between 1 and 10.'); ppwInput.value = periodsPerWeek; return; }
    axpApplyPeriodsPerWeek(n);
  });
  if (ppwReset) ppwReset.addEventListener('click', function () {
    axpApplyPeriodsPerWeek(axpServerPeriodsPerWeek(subject, classVal));
  });
  var endDayEl = document.getElementById('sowEndDay'), endMonEl = document.getElementById('sowEndMonth'), endResetEl = document.getElementById('sowEndResetBtn');
  var onEndChange = function () {
    var d = parseInt(endDayEl.value, 10), m = parseInt(endMonEl.value, 10);
    if (isNaN(d) || d < 1 || d > 31) { axpAlert('Enter a valid day (1\u201331).'); renderSOWPanel(subject, classVal); return; }
    axpApplyEndDate(m, d);
  };
  if (endDayEl) endDayEl.addEventListener('change', onEndChange);
  if (endMonEl) endMonEl.addEventListener('change', onEndChange);
  var fieldBtn = document.getElementById('sowFieldBtn'), fieldPanel = document.getElementById('sowFieldPanel');
  if (fieldBtn && fieldPanel) fieldBtn.addEventListener('click', function () {
    if (_currentSOW.fieldStartKey) { fieldPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); return; }
    var open = fieldPanel.style.display === 'none';
    fieldPanel.style.display = open ? 'flex' : 'none';
    _currentSOW.fieldPanelOpen = open;
  });
  var fieldApply = document.getElementById('sowFieldApplyBtn'), fieldSel = document.getElementById('sowFieldMonth'), fieldClear = document.getElementById('sowFieldClearBtn');
  if (fieldApply && fieldSel) fieldApply.addEventListener('click', function () {
    _currentSOW.fieldStartKey = fieldSel.value;
    _currentSOW.fieldMonths = axpFieldMonthsValid((document.getElementById('sowFieldDuration') || {}).value);
    _currentSOW.fieldPanelOpen = true;
    renderSOWPanel(subject, classVal);
  });
  var fieldDur = document.getElementById('sowFieldDuration');
  if (fieldDur) fieldDur.addEventListener('change', function () {
    _currentSOW.fieldMonths = axpFieldMonthsValid(fieldDur.value);
    if (_currentSOW.fieldStartKey) { _currentSOW.fieldPanelOpen = true; renderSOWPanel(subject, classVal); }
  });
  if (fieldClear) fieldClear.addEventListener('click', function () {
    _currentSOW.fieldStartKey = '';
    _currentSOW.fieldPanelOpen = false;
    renderSOWPanel(subject, classVal);
  });
  if (endResetEl) endResetEl.addEventListener('click', function () {
    var sc = axpGetCalendarForClass(classVal, true).terms.slice(-1)[0].closing;
    axpApplyEndDate(parseInt(sc.slice(5, 7), 10), parseInt(sc.slice(8, 10), 10));
  });
  document.getElementById('sowSaveBtn').addEventListener('click', function() {
    if (_currentSOW) _currentSOW.dirty = true;
    triggerAutoSave();
  });
  var yearInput = document.getElementById('sowRefYearInput');
var applyYearBtn = document.getElementById('sowApplyYearBtn');
if (yearInput) {
  var detected = detectReferenceYear(_currentSOW.rows);
  if (detected) yearInput.value = detected;
}
if (applyYearBtn) {
  applyYearBtn.addEventListener('click', function () {
    var y = (yearInput.value || '').trim();
    if (!/^\d{4}$/.test(y)) { axpAlert('Please enter a valid 4-digit year.'); return; }
    applyYearToSOWReferences(y);
  });
}
  document.getElementById('sowDownloadBtn').addEventListener('click', downloadSOWPdf);
  if (_currentSOW.pagePreview === undefined) _currentSOW.pagePreview = true;
  var viewToggle = document.getElementById('sowViewToggleBtn');
  if (viewToggle) viewToggle.addEventListener('click', function () {
    _currentSOW.pagePreview = !_currentSOW.pagePreview;
    axpApplySowView();
  });
  axpApplySowView();
  document.getElementById('sowRegenBtn').addEventListener('click', function() {
    if (!confirm('Regenerate will rebuild this Scheme of Work using AcademixPoint AI. Any manual edits will be lost. Continue?')) return;
    var cKey = getEmail() + '|' + _currentSOW.subject + '|' + _currentSOW.classVal;
    var sKey = serverCacheKey(_currentSOW.subject, _currentSOW.classVal);
    delete _sowCache[cKey];
    delete _serverSOWCache[sKey];
    _currentSOW = null;
    if (API_URL && getToken()) {
      fetch(API_URL, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'deleteSowGenCache', token: getToken(), subject: subject, classVal: classVal })
      }).catch(function() {});
    }
    startBuildAndWait(subject, classVal, cKey, document.getElementById('sowAiBadge'));
  });
}
function buildTableHTML(flatItems, lang) {
  lang = lang || 'en';
  var cols = getSOWCols(lang);
  var L = SOW_LABELS[lang];
  var totalCols = cols.length + 1;
  var thead = '<thead><tr>' + cols.map(function(c) {
    return '<th style="width:' + c.width + 'px;">' + c.abbr.replace(/\n/g, '<br>') + '</th>';
  }).join('') + '<th style="width:64px;">' + esc(L.actions) + '</th></tr></thead>';
 
  var tbody = '<tbody id="sowTbody">';
  if (!flatItems.length) {
    tbody += '<tr><td colspan="' + totalCols + '" style="text-align:center;padding:24px;color:var(--text3);">No rows available. Use Add Row to start.</td></tr>';
  } else {
    flatItems.forEach(function(item) { tbody += buildRowHTML(item, totalCols, lang); });
  }
  tbody += '</tbody>';
  return '<table class="sow-table">' + thead + tbody + '</table>';
}
 
function buildRowHTML(item, totalCols, lang) {
  if (item.kind === 'orientation') {
    var ol = axpOrientationLines(item, lang || 'en');
    return '<tr class="sow-holiday-row"><td colspan="' + totalCols + '" style="text-align:center;background:#d6e8f8;border:1px solid #4A3AFF;color:#0d1b2e;padding:10px 8px;">' +
      '<div style="font-size:.78rem;font-weight:600;line-height:1.4;">' + esc(ol.top) + '</div>' +
      '<div style="font-size:1.1rem;font-weight:800;letter-spacing:.8px;line-height:1.5;"><i class="bi bi-mortarboard-fill"></i> ' + esc(ol.main) + '</div>' +
      '<div style="font-size:.78rem;font-weight:600;line-height:1.4;">' + esc(ol.bottom) + '</div></td></tr>';
  }
  if (axpIsMidterm(item)) {
    var ml = axpMidtermLines(item, lang || 'en');
    return '<tr class="sow-holiday-row"><td colspan="' + totalCols + '" style="text-align:center;background:#fff1c2;border:1px solid #000;color:#000;padding:10px 8px;">' +
      '<div style="font-size:.78rem;font-weight:600;line-height:1.4;">' + esc(ml.top) + '</div>' +
      '<div style="font-size:1.1rem;font-weight:800;letter-spacing:.8px;line-height:1.5;"><i class="bi bi-calendar-x-fill"></i> ' + esc(ml.main) + '</div>' +
      '<div style="font-size:.78rem;font-weight:600;line-height:1.4;">' + esc(ml.bottom) + '</div></td></tr>';
  }
  if (item.kind === 'holiday') {
    var showDates = item.holidayKind !== 'examperiod';
    var label = esc(holidayLabel(item, lang || 'en')).toUpperCase()
      + (showDates ? '&nbsp;&nbsp;(' + axpFmtDisplay(item.start) + ' - ' + axpFmtDisplay(item.end) + ')' : '');
    return '<tr class="sow-holiday-row"><td colspan="' + totalCols + '" style="text-align:center;background:' + (item.holidayKind === 'prepexam' ? '#e3f4e1' : '#fff1c2') + ';border:1px solid #000;font-weight:800;color:#000;padding:12px 8px;font-size:.85rem;letter-spacing:.5px;">' +
      '<i class="bi bi-calendar-x-fill"></i> ' + label + '</td></tr>';
  }
 
  var row = item.row || {};
  var isFiller = !!item.isFiller;
  var ri = item.rowIdx;
  var mSpan = item.mergeSpan || 0;

  var cols = getSOWCols(lang || 'en');
var cells = cols.map(function(c) {
    if (c.key === 'week') {
  if (!item.isFirstInWeek) return '';
  return '<td class="sow-no-edit" rowspan="' + item.weekSpan + '" style="text-align:center;font-weight:700;">' + item.weekNum + '</td>';
}
    if (c.key === 'dates') {
      if (!item.isFirstInMonth) return '';
      var txt = item.monthLabel || '';
      var stacked = esc(txt).split('').join('<br>');
      return '<td class="sow-no-edit" rowspan="' + item.monthSpan + '" style="text-align:center;font-size:.86rem;font-weight:900;color:#000;line-height:1.3;padding:6px 2px;">' + stacked + '</td>';
    }
   if (c.key === 'mainComp') {
    if ((item.mainCompSpan || 0) > 0) {
      var mval = isFiller ? '&nbsp;' : esc(row.mainComp || '');
      return '<td class="sow-no-edit" rowspan="' + item.mainCompSpan + '">' + mval + '</td>';
    }
    return '';
  }
  if (c.key === 'specComp') {
    if ((item.specCompSpan || 0) > 0) {
      var mval2 = isFiller ? '&nbsp;' : esc(row.specComp || '');
      return '<td class="sow-no-edit" rowspan="' + item.specCompSpan + '">' + mval2 + '</td>';
    }
    return '';
  }
  if (c.key === 'mainActivity') {
    if ((item.mainActivitySpan || 0) > 0) {
      var mval3 = isFiller ? '&nbsp;' : esc(row.mainActivity || '');
      return '<td class="sow-no-edit" rowspan="' + item.mainActivitySpan + '">' + mval3 + '</td>';
    }
    return '';
  }
  if (c.key === 'periods') {
    if ((item.mainActivitySpan || 0) > 0) {
      var pval = esc(item.mergedPeriodsLabel || String(item.periods || row.periods || ''));
      return '<td class="sow-no-edit" rowspan="' + item.mainActivitySpan + '" style="text-align:center;font-weight:700;">' + pval + '</td>';
    }
    return '';
  }
    if (isFiller) {
      return c.key === 'specActivity'
        ? '<td class="sow-no-edit" style="font-style:italic;color:#000;background:#d9d9d9!important;">' + esc(axpFillerLabel()) + '</td>'
        : '<td class="sow-no-edit" style="background:#d9d9d9!important;">&nbsp;</td>';
    }
    var val = esc(row[c.key] || '');
    return c.editable
      ? '<td contenteditable="true" data-col="' + c.key + '" data-row="' + ri + '">' + val + '</td>'
      : '<td class="sow-no-edit">' + val + '</td>';
  }).join('');
 
  var actions = isFiller ? '<td></td>' :
    '<td><div class="sow-row-actions">' +
    '<button class="sow-row-btn up" data-row="' + ri + '" title="Move up"><i class="bi bi-chevron-up"></i></button>' +
    '<button class="sow-row-btn dn" data-row="' + ri + '" title="Move down"><i class="bi bi-chevron-down"></i></button>' +
    '<button class="sow-row-btn del" data-row="' + ri + '" title="Delete"><i class="bi bi-trash3"></i></button>' +
    '</div></td>';
 
  return '<tr data-row="' + ri + '">' + cells + actions + '</tr>';
}
 
function rebuildTable() {
  if (!_currentSOW) return;
  var wrap = document.querySelector('.sow-table-wrap');
  if (!wrap) return;
  var lang = sowLang(_currentSOW.subject);
  var flat = axpAnnotateMergeSpans(flattenSchedule(computeCurrentSchedule()));
  wrap.innerHTML = buildTableHTML(flat, lang);
  bindTableEvents();
  if (_currentSOW.pagePreview) axpRenderSowPagePreview();
}

function bindTableEvents(){
  var tbody=document.getElementById('sowTbody');
  if(!tbody)return;
  tbody.addEventListener('input',function(e){
    var td=e.target.closest('td[contenteditable]');
    if(!td)return;
    var ri=parseInt(td.getAttribute('data-row')),col=td.getAttribute('data-col');
    if(!_currentSOW||isNaN(ri)||!col||!_currentSOW.rows[ri])return;
    _currentSOW.rows[ri][col]=td.innerText.trim();
    _currentSOW.dirty=true;
    triggerAutoSave();
  });
  tbody.addEventListener('click',function(e){
    var btn=e.target.closest('.sow-row-btn');
    if(!btn||!_currentSOW)return;
    var ri=parseInt(btn.getAttribute('data-row')),rows=_currentSOW.rows;
    if(isNaN(ri))return;
    if(btn.classList.contains('del')){if(!confirm('Delete this row?'))return;rows.splice(ri,1);}
    else if(btn.classList.contains('up')&&ri>0){var t=rows[ri-1];rows[ri-1]=rows[ri];rows[ri]=t;}
    else if(btn.classList.contains('dn')&&ri<rows.length-1){var t2=rows[ri];rows[ri]=rows[ri+1];rows[ri+1]=t2;}
    _currentSOW.dirty=true;
    rebuildTable();
    triggerAutoSave();
  });
}



function setSaveIndicator(type,msg){
  var el=document.getElementById('sowSaveIndicator'),tx=document.getElementById('sowSaveText');
  if(!el||!tx)return;
  el.className='sow-save-indicator '+type;
  var icons={saving:'bi-cloud-upload',saved:'bi-cloud-check',err:'bi-exclamation-triangle'};
  var i=el.querySelector('i');
  if(i)i.className='bi '+(icons[type]||'bi-cloud-check');
  tx.textContent=msg;
}

function triggerAutoSave(){
  setSaveIndicator('saving','Saving changes...');
  clearTimeout(_saveTimer);
  _saveTimer=setTimeout(function(){
    if(_currentSOW&&_currentSOW.dirty){
      var cKey=getEmail()+'|'+_currentSOW.subject+'|'+_currentSOW.classVal;
      saveSOWToServer(_currentSOW,cKey);
    }
  },2000);
}

function saveSOWToServer(sow,cacheKey){
  var token=getToken(),email=getEmail();
  if(!token||!email||!API_URL){setSaveIndicator('saved','Saved locally.');if(sow)sow.dirty=false;return;}
  var profile=(typeof AUTH!=='undefined'&&AUTH.getProfile)?AUTH.getProfile():null;
  fetch(API_URL,{
    method:'POST',
    headers:{'Content-Type':'text/plain;charset=utf-8'},
    body:JSON.stringify({
      action:'saveSchemeOfWork',
      token:token,
      email:email,
      subject:sow.subject,
      classVal:sow.classVal,
      rows:sow.rows,
      periodsPerWeek:sow.periodsPerWeek||0,
      endMD:sow.endMD||'',
      id:sow.id||'',
      teacherName:((axpAgentOverride(sow.subject,sow.classVal)||{}).teacherName)||(profile&&profile.fullName)||'',
      school:((axpAgentOverride(sow.subject,sow.classVal)||{}).school)||(profile&&profile.school)||''
    })
  })
  .then(function(r){return r.json();})
  .then(function(resp){
    if(resp&&resp.success){
      if(sow){sow.dirty=false;if(resp.id)sow.id=resp.id;}
      if(_sowCache[cacheKey]){_sowCache[cacheKey].dirty=false;if(resp.id)_sowCache[cacheKey].id=resp.id;}
      setSaveIndicator('saved','All changes saved \u00b7 '+new Date().toLocaleTimeString());
    }else{
      setSaveIndicator('err','Save failed \u2014 will retry on next change.');
    }
  })
  .catch(function(){setSaveIndicator('err','Network error \u2014 changes stored locally.');});
}

function openAddRowModal() {
  var existing = document.getElementById('sowAddRowModal');
  if (existing) existing.parentNode.removeChild(existing);
  var overlay = document.createElement('div');
  overlay.className = 'sow-modal-overlay';
  overlay.id = 'sowAddRowModal';
  overlay.innerHTML = [
    '<div class="sow-modal">',
    '  <div class="sow-modal-header"><h3><i class="bi bi-plus-circle"></i> Add New Row</h3>',
    '    <button class="sow-modal-close" id="sowModalClose"><i class="bi bi-x-lg"></i></button></div>',
    '  <div class="sow-modal-body">',
    '    <div class="sow-modal-fg"><label>Main Competence (Topic)</label><input type="text" id="sowRowMainComp" placeholder="e.g. Introduction to Cells"></div>',
    '    <div class="sow-modal-fg"><label>Specific Competence</label><input type="text" id="sowRowSpecComp" placeholder="e.g. Describe structure of cell"></div>',
    '    <div class="sow-modal-fg"><label>Main Activity</label><input type="text" id="sowRowMainAct" placeholder="e.g. Drawing cell diagram"></div>',
    '    <div class="sow-modal-fg"><label>Specific Activity</label><input type="text" id="sowRowSpecAct" placeholder="e.g. Students draw and label animal cell"></div>',
    '    <div class="sow-modal-fg"><label>Periods (initial estimate)</label><input type="number" id="sowRowPeriods" value="2" min="1" max="10"></div>',
    '    <div class="sow-modal-fg"><label>T&amp;L Methods</label><input type="text" id="sowRowMethods" placeholder="e.g. Discussion, Demonstration"></div>',
    '    <div class="sow-modal-fg"><label>T&amp;L Resources</label><input type="text" id="sowRowResources" placeholder="e.g. Textbook, Charts"></div>',
    '    <div class="sow-modal-fg"><label>Assessment Tool</label><input type="text" id="sowRowAssess" placeholder="e.g. Quiz, Observation"></div>',
    '    <div class="sow-modal-fg"><label>Reference</label><input type="text" id="sowRowRef" placeholder="e.g. Biology Form One pg. 12"></div>',
    '    <div class="sow-modal-fg"><label>Remarks</label><textarea id="sowRowRemarks" rows="2" placeholder="Optional remarks..."></textarea></div>',
    '    <div style="font-size:.68rem;color:var(--text3);padding:2px;"><i class="bi bi-info-circle"></i> Week and dates are assigned automatically from the academic calendar once this row is added.</div>',
    '  </div>',
    '  <div class="sow-modal-footer">',
    '    <button class="sow-tool-btn neutral" id="sowModalCancel">Cancel</button>',
    '    <button class="sow-tool-btn success" id="sowModalSave"><i class="bi bi-check-lg"></i> Add Row</button>',
    '  </div>',
    '</div>',
  ].join('');
  document.body.appendChild(overlay);
  setTimeout(function() { overlay.classList.add('show'); }, 10);
  function closeModal() { overlay.classList.remove('show'); setTimeout(function() { overlay.parentNode && overlay.parentNode.removeChild(overlay); }, 300); }
  document.getElementById('sowModalClose').addEventListener('click', closeModal);
  document.getElementById('sowModalCancel').addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });
  document.getElementById('sowModalSave').addEventListener('click', function() {
    var newRow = {
      _srcId: '',
      mainComp: document.getElementById('sowRowMainComp').value.trim(),
      specComp: document.getElementById('sowRowSpecComp').value.trim(),
      mainActivity: document.getElementById('sowRowMainAct').value.trim(),
      specActivity: document.getElementById('sowRowSpecAct').value.trim(),
      periods: document.getElementById('sowRowPeriods').value,
      tlMethods: document.getElementById('sowRowMethods').value.trim(),
      tlResources: document.getElementById('sowRowResources').value.trim(),
      assessmentTool: document.getElementById('sowRowAssess').value.trim(),
      reference: document.getElementById('sowRowRef').value.trim(),
      remarks: document.getElementById('sowRowRemarks').value.trim()
    };
    if (!newRow.mainComp && !newRow.specComp && !newRow.mainActivity) {
      axpAlert('Please fill in at least one of: Main Competence, Specific Competence, or Main Activity.');
      return;
    }
    if (_currentSOW) { _currentSOW.rows.push(newRow); _currentSOW.dirty = true; rebuildTable(); triggerAutoSave(); }
    closeModal();
  });
}

function axpRenderSowPagePreview() {
  var pv = document.getElementById('sowPagePreview');
  if (!pv || !_currentSOW) return;
  if (!_currentSOW.rows || !_currentSOW.rows.length) {
    pv.innerHTML = '<div class="sow-state"><i class="bi bi-file-earmark-pdf"></i><div class="sow-state-title">Nothing to preview yet</div><div class="sow-state-sub">Choose <strong>Edit Table</strong> and use <strong>Add Row</strong> to start.</div></div>';
    return;
  }
  pv.innerHTML = '<div class="sow-state"><div class="sow-state-title">Preparing preview\u2026</div></div>';
  window.axpWithJsPdf(function (J) {
    if (!J) {
      pv.innerHTML = '<div class="sow-state"><div class="sow-state-title" style="color:var(--red);">Could not load the preview engine</div><div class="sow-state-sub">Please check your internet connection and try again.</div></div>';
      return;
    }
    try {
      pv.innerHTML = _buildSOWPdf('preview');
    } catch (e) {
      if (window.console) console.error('SOW preview failed', e);
      pv.innerHTML = '<div class="sow-state"><div class="sow-state-title" style="color:var(--red);">Could not build the preview</div><div class="sow-state-sub">Switch to Edit Table, or try again.</div></div>';
    }
  });
}

function axpApplySowView() {
  var wrap = document.querySelector('.sow-table-wrap');
  var pv = document.getElementById('sowPagePreview');
  var addWrap = document.getElementById('sowAddRowWrap');
  var btn = document.getElementById('sowViewToggleBtn');
  if (!_currentSOW || !wrap || !pv) return;
  var on = !!_currentSOW.pagePreview;
  wrap.style.display = on ? 'none' : '';
  if (addWrap) addWrap.style.display = on ? 'none' : '';
  pv.style.display = on ? 'block' : 'none';
  if (btn) btn.innerHTML = on
    ? '<i class="bi bi-pencil-square"></i> Edit Table'
    : '<i class="bi bi-file-earmark-pdf"></i> PDF Preview';
  if (on) axpRenderSowPagePreview();
}

function downloadSOWPdf(){
  if(!_currentSOW||!_currentSOW.rows||!_currentSOW.rows.length){
    axpAlert('No data to download. Please add rows first.');return;
  }
  var JsPDF=(window.jspdf&&window.jspdf.jsPDF)?window.jspdf.jsPDF:window.jsPDF;
  if(!JsPDF){
    var s=document.createElement('script');
    s.src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    s.onload=function(){_buildSOWPdf();};
    document.head.appendChild(s);return;
  }
  _buildSOWPdf();
}


function _buildSOWPdf(mode) {
  var JsPDF = (window.jspdf && window.jspdf.jsPDF) ? window.jspdf.jsPDF : window.jsPDF;
  var sow = _currentSOW; if (!sow) return '';
  var profile = (typeof AUTH !== 'undefined' && AUTH.getProfile) ? AUTH.getProfile() : null;
var teacherName = (profile && profile.fullName) || '';
var schoolField = document.getElementById('school');
var school = (schoolField && schoolField.value.trim()) || (profile && profile.school) || '';
var _ag = axpAgentOverride(sow.subject, sow.classVal); if (_ag) { teacherName = _ag.teacherName || teacherName; school = _ag.school || school; }
  var year = axpCalendarYear(sow.classVal);
  var subject = sow.subject || '';
  if (mode === 'sample') { teacherName = 'Sample Teacher'; school = 'Sample Secondary School'; }
  var cls = axpTranslateClassLabel(stripStream(sow.classVal || ''), subject);
  var lang = sowLang(subject);
  var L = SOW_LABELS[lang];
  var cols = getSOWCols(lang);
  var _fwKeys = sow.fieldStartKey ? axpFieldWindowKeys(sow.classVal, sow.subject, sow.fieldStartKey, sow.fieldMonths) : [];
  var _fwTag = _fwKeys.length ? ('_FieldTeachers_' + MONTHS[parseInt(_fwKeys[0].slice(5, 7), 10) - 1].slice(0, 3) + '-' + MONTHS[parseInt(_fwKeys[_fwKeys.length - 1].slice(5, 7), 10) - 1].slice(0, 3)) : '';
  var filename = (subject + '_SOW_' + cls + _fwTag + '_' + axpStudyYear(cls, sow.classVal) + '.pdf').replace(/[^a-zA-Z0-9_\-.]/g, '_');

  var periodsPerWeek = axpGetPeriodsPerWeek(subject);
  var cal = axpGetCalendarForClass(sow.classVal);
 var schedule = axpCropToFieldWindow(axpDistributeRowsToSchedule(axpBuildScheduleBlocks(sow.classVal, sow.subject), sow.rows, periodsPerWeek));
  var flatItems = axpAnnotateMergeSpans(flattenSchedule(schedule));

  var doc = (mode === 'preview' || mode === 'sample')
    ? new window.AxpSvgDoc(JsPDF)
    : new JsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  if (mode === 'sample') doc.setWatermark('SAMPLE');

  var PW = 297, PH = 210, ML = 8, MR = 8, MT = 8, MB = 9, CW = PW - ML - MR;

  var cw = {
    mainComp: CW * 0.11, specComp: CW * 0.12, mainActivity: CW * 0.11, specActivity: CW * 0.12,
    week: CW * 0.04, dates: CW * 0.05, periods: CW * 0.05,
    tlMethods: CW * 0.09, tlResources: CW * 0.09, assessmentTool: CW * 0.07,
    reference: CW * 0.09, remarks: CW * 0.05
  };

  var TABLE_W = Object.keys(cw).reduce(function(sum, k){ return sum + cw[k]; }, 0);

  var ROW_H = 9, HDR_H = 12, TITLE_H = 10, GAP1 = 4;
  var INFO_ROW = 5, INFO_ROWS_COUNT = 3, GAP2 = 5, FOOTER_H = 8;
  var HOLIDAY_H = 12;
  var MIDTERM_H = 19;
  function barH(it) { return (axpIsMidterm(it) || it.kind === 'orientation') ? MIDTERM_H : HOLIDAY_H; }
  var FONT_CELL = 9, FONT_HDR = 9, CELL_PAD = 1.1, LINE_H = 3.8;
var BODY_TOP = MT + 12 + 3.5 + INFO_ROWS_COUNT * 6.5 + 3 + HDR_H;
var BODY_BOTTOM = PH - MB - FOOTER_H + 1 - 3;
var AVAIL_H = BODY_BOTTOM - BODY_TOP;
var VERT_HDR = {
  en: { dates: 'Month', week: 'Week', periods: 'Periods' },
  sw: { dates: 'Mwezi', week: 'Wiki', periods: 'Vipindi' }
};

  doc.setLineWidth(0.4);

  function calcOwnRowHeight(item) {
    doc.setFont('helvetica', 'normal'); doc.setFontSize(FONT_CELL);
    var h = ROW_H;
    var alwaysOwn = ['specActivity','tlMethods','tlResources','assessmentTool','remarks'];
    alwaysOwn.forEach(function(key){
      var val = item.isFiller ? (key==='specActivity'?axpFillerLabel():'') : ((item.row&&item.row[key])||'');
      if (!val) return;
      var lines = doc.splitTextToSize(String(val), cw[key]-2*CELL_PAD);
      h = Math.max(h, lines.length*LINE_H + CELL_PAD*2);
    });
    return h;
  }

  function calcRowHeights(items) {
    doc.setFont('helvetica', 'normal'); doc.setFontSize(FONT_CELL);
    var heights = items.map(calcOwnRowHeight);
    var mergedKeys = [
      { key:'mainComp',     spanKey:'_pdfMainCompSpan' },
      { key:'specComp',     spanKey:'_pdfSpecCompSpan' },
      { key:'mainActivity', spanKey:'_pdfMainActSpan' },
      { key:'reference',    spanKey:'_pdfReferenceSpan' }
    ];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      mergedKeys.forEach(function(mk) {
        var span = item[mk.spanKey];
        if (!(span > 0)) return;
        var val = item.isFiller ? '' : ((item.row && item.row[mk.key]) || '');
        if (!val) return;
        var lines = doc.splitTextToSize(String(val), cw[mk.key]-2*CELL_PAD);
        var perRow = (lines.length*LINE_H + CELL_PAD*2) / span;
        for (var k = i; k < i + span && k < items.length; k++) {
          heights[k] = Math.max(heights[k], perRow);
        }
      });
    }
    for (var mi2 = 0; mi2 < items.length; mi2++) {
      var mit = items[mi2];
      if (!(mit.monthSpan > 0) || !mit.isFirstInMonth) continue;
      var mEnd = Math.min(items.length, mi2 + mit.monthSpan);
      var need = String(mit.monthLabel || '').length * 2.2 + 2, have = 0;
      for (var mk2 = mi2; mk2 < mEnd; mk2++) have += heights[mk2];
      if (have < need) {
        var extra = (need - have) / (mEnd - mi2);
        for (var mk3 = mi2; mk3 < mEnd; mk3++) heights[mk3] += extra;
      }
    }
    return heights;
  }
  
  

 function drawPageHeader() {
    var y = MT;
    doc.setFontSize(15); doc.setFont('helvetica', 'bold'); doc.setTextColor(13, 27, 46);
    doc.text(L.pdfTitle(subject), PW / 2, y + 7, { align: 'center' }); y += 12;
    doc.setLineWidth(0.4); doc.setDrawColor(13, 27, 46); doc.line(ML, y, PW - MR, y); y += 3.5;

    var iW = CW * 0.92, iX = ML + (CW - iW) / 2, c1 = iW * 0.12, c2 = iW * 0.34, gap = iW * 0.04;
    var infoRows = [
      { l1: L.teacher + ':', v1: teacherName, l2: L.subject + ':', v2: subject },
      { l1: L.classLabel + ':', v1: cls, l2: L.school + ':', v2: school },
      { l1: L.periodsPerWeek + ':', v1: axpStudyYear(cls, sow.classVal), l2: L.terms + ':', v2: L.termsValue }
    ];
    function infoValue(txt, x, ry, maxW) {
      txt = String(txt || '').toUpperCase().replace(/(\d)(ST|ND|RD|TH)\b/g, function (m, d, x) { return d + x.toLowerCase(); });
      var fs = 10;
      doc.setFont('helvetica', 'normal'); doc.setTextColor(20, 20, 40);
      doc.setFontSize(fs);
      while (fs > 7 && doc.getTextWidth(txt) > maxW) { fs -= 0.5; doc.setFontSize(fs); }
      window.axpTextSup(doc, txt, x, ry, fs);
    }
    infoRows.forEach(function(row) {
      var ry = y + 4.6;
      doc.setFontSize(10); doc.setFont('helvetica', 'bold'); doc.setTextColor(13, 27, 46);
      doc.text(String(row.l1).toUpperCase(), iX, ry);
      infoValue(row.v1, iX + c1, ry, c2 - 3);
      doc.setLineWidth(0.2); doc.setDrawColor(150, 150, 160); doc.line(iX + c1, y + 5.4, iX + c1 + c2 - 2, y + 5.4);
      var rx2 = iX + c1 + c2 + gap;
      doc.setFontSize(10); doc.setFont('helvetica', 'bold'); doc.setTextColor(13, 27, 46);
      doc.text(String(row.l2).toUpperCase(), rx2, ry);
      infoValue(row.v2, rx2 + c1, ry, c2 - 3);
      doc.line(rx2 + c1, y + 5.4, rx2 + c1 + c2 - 2, y + 5.4);
      y += 6.5;
    });
    doc.setTextColor(0, 0, 0);
    doc.setLineWidth(0.25); doc.setDrawColor(180, 180, 180); doc.line(ML, y + 1, PW - MR, y + 1); y += 3;
    return y;
  }

 function drawTableHeader(y) {
    var x = ML;
    cols.forEach(function(c) {
      var w = cw[c.key];
      doc.setFillColor(182, 221, 232); doc.setDrawColor(0, 0, 0); doc.setLineWidth(0.35); doc.rect(x, y, w, HDR_H, 'FD');
      doc.setFont('helvetica', 'bold'); doc.setFontSize(FONT_HDR); doc.setTextColor(0, 0, 0);
      var vWord = (VERT_HDR[lang] || VERT_HDR.en)[c.key];
      if (vWord) {
        var hf = 8; doc.setFontSize(hf);
        while (hf > 5.5 && doc.getTextWidth(vWord.toUpperCase()) > w - 1.5) { hf -= 0.25; doc.setFontSize(hf); }
        doc.text(vWord.toUpperCase(), x + w / 2, y + HDR_H / 2 + 1, { align: 'center' });
      } else {
        var hf2 = 8.5, txtU = c.abbr.replace(/\n/g, ' ').toUpperCase();
        doc.setFontSize(hf2);
        while (hf2 > 5.5 && txtU.split(' ').some(function(wd){ return doc.getTextWidth(wd) > w - 1.5; })) { hf2 -= 0.25; doc.setFontSize(hf2); }
        var lines = doc.splitTextToSize(txtU, w - 1.5);
        var lh = 4.6, th = lines.length * lh, sy = y + (HDR_H - th) / 2 + lh - 0.6;
        lines.forEach(function(ln, li) { doc.text(ln, x + w / 2, sy + li * lh, { align: 'center' }); });
      }
      x += w;
    });
    doc.setTextColor(0, 0, 0); doc.setFillColor(255, 255, 255); doc.setDrawColor(0, 0, 0); doc.setLineWidth(0.3);
    return y + HDR_H;
  }

 function drawFooter(pn, tp) {
    var fy = PH - MB - FOOTER_H + 2;
    doc.setFontSize(7.2); doc.setFont('helvetica', 'normal'); doc.setTextColor(100, 100, 100);
    doc.setDrawColor(0, 0, 0); doc.setLineWidth(0.25); doc.line(ML, fy - 1, PW - MR, fy - 1);
    doc.text(L.pdfFooter(subject, cls, sow.classVal), ML, fy + 2.6);
    doc.text(L.page + ' ' + pn + ' / ' + tp, PW - MR, fy + 2.6, { align: 'right' });
    doc.setTextColor(0, 0, 0); doc.setLineWidth(0.35);
  }

  function drawCell(x, y, w, h, content, align, valign) {
    doc.setDrawColor(0, 0, 0); doc.setLineWidth(0.5); doc.rect(x, y, w, h);
    if (!content) return;
    doc.setFontSize(FONT_CELL); doc.setFont('helvetica', 'normal'); doc.setTextColor(0, 0, 0);
    var lines = doc.splitTextToSize(String(content), w - 2 * CELL_PAD);
    var lh = LINE_H;
    var ty = (valign === 'top') ? (y + CELL_PAD + lh - 0.6) : (y + (h - lines.length*lh)/2 + lh - 0.6);
    if (align === 'center') { lines.forEach(function(ln, li){ doc.text(ln, x+w/2, ty+li*lh, {align:'center'}); }); }
    else { lines.forEach(function(ln, li){ doc.text(ln, x+CELL_PAD, ty+li*lh); }); }
  }

  function drawMonthCell(x, y, w, h, content) {
    doc.setDrawColor(0, 0, 0); doc.setLineWidth(0.5); doc.rect(x, y, w, h);
    if (!content) return;
    var letters = String(content).split('');
    var usableH = h - 2;
    var lh = Math.max(2.0, Math.min(4.4, usableH / letters.length));
    var fontSize = Math.max(5.5, Math.min(9.5, lh * 2.15));
    doc.setFont('helvetica', 'bold'); doc.setFontSize(fontSize); doc.setTextColor(0, 0, 0);
    var totalH = letters.length * lh;
    var startY = y + (h - totalH) / 2 + lh - 0.9;
    letters.forEach(function(ch, li) {
      doc.text(ch, x + w / 2, startY + li * lh, { align: 'center' });
    });
    doc.setFont('helvetica', 'normal');
  }

  function drawHolidayBar(x, y, w, h, item) {
    if (item.holidayKind === 'prepexam') doc.setFillColor(227, 244, 225); else doc.setFillColor(255, 241, 194);
    doc.setDrawColor(0, 0, 0); doc.setLineWidth(0.5);
    doc.rect(x, y, w, h, 'FD');
    if (axpIsMidterm(item)) {
      var ml = axpMidtermLines(item, lang);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5);
      doc.text(ml.top, x + w / 2, y + h * 0.26, { align: 'center' });
      doc.setFont('helvetica', 'bold'); doc.setFontSize(14);
      doc.text(ml.main, x + w / 2, y + h * 0.56, { align: 'center' });
      doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5);
      doc.text(ml.bottom, x + w / 2, y + h * 0.86, { align: 'center' });
      doc.setFont('helvetica', 'bold');
      return;
    }
    var showDates = item.holidayKind !== 'examperiod';
    var label = (holidayLabel(item, lang) + (showDates ? '   (' + axpFmtDisplay(item.start) + ' - ' + axpFmtDisplay(item.end) + ')' : '')).toUpperCase();
    var fontSize = Math.max(8, Math.min(16, h * 0.85));
    doc.setFont('helvetica', 'bold'); doc.setFontSize(fontSize); doc.setTextColor(0, 0, 0);
    doc.text(label, x + w / 2, y + h / 2 + fontSize * 0.12, { align: 'center' });
  }
  
  function drawOrientationBar(x, y, w, h, item) {
    doc.setFillColor(214, 232, 248); doc.setDrawColor(74, 58, 255); doc.setLineWidth(0.5);
    doc.rect(x, y, w, h, 'FD');
    var ol = axpOrientationLines(item, lang);
    doc.setTextColor(13, 27, 46);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5);
    doc.text(ol.top, x + w / 2, y + h * 0.26, { align: 'center' });
    doc.setFont('helvetica', 'bold'); doc.setFontSize(14);
    doc.text(ol.main, x + w / 2, y + h * 0.56, { align: 'center' });
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5);
    doc.text(ol.bottom, x + w / 2, y + h * 0.86, { align: 'center' });
    doc.setFont('helvetica', 'bold');
  }

  function computeLocalMerges(items) {
    for (var i = 0; i < items.length; i++) {
      items[i]._pdfMainCompSpan = 0;
      items[i]._pdfSpecCompSpan = 0;
      items[i]._pdfMainActSpan  = 0;
      items[i]._pdfMergeSpan    = 0;
      items[i]._pdfReferenceSpan = 0;
      items[i]._pdfPeriodsLabel = '';
    }

    function val(it, key) {
      return it.isFiller ? '' : ((it.row && it.row[key]) || '');
    }

    function itemPeriodsNum(it) {
      var p = it.periods != null && it.periods !== '' ? it.periods : ((it.row && it.row.periods) || '');
      var n = parseInt(p, 10);
      return isNaN(n) ? 0 : n;
    }

    var i = 0;
    while (i < items.length) {
      var v = val(items[i], 'mainComp');
      var j = i;
      while (j < items.length && val(items[j], 'mainComp') === v) j++;
      items[i]._pdfMainCompSpan = j - i;
      i = j;
    }

    i = 0;
    while (i < items.length) {
      var v2 = val(items[i], 'specComp');
      var j2 = i;
      while (j2 < items.length && val(items[j2], 'specComp') === v2) j2++;
      items[i]._pdfSpecCompSpan = j2 - i;
      i = j2;
    }

    i = 0;
    while (i < items.length) {
      var v3 = val(items[i], 'mainActivity');
      var j3 = i;
      while (j3 < items.length && val(items[j3], 'mainActivity') === v3) j3++;
      items[i]._pdfMainActSpan = j3 - i;
      items[i]._pdfMergeSpan   = j3 - i;

      
      var totalPeriods = 0;
      for (var p = i; p < j3; p++) totalPeriods += itemPeriodsNum(items[p]);
      items[i]._pdfPeriodsLabel = String(totalPeriods);

      i = j3;
    }

    var i4 = 0;
    while (i4 < items.length) {
      var vRef = val(items[i4], 'reference');
      var j4 = i4;
      while (j4 < items.length && val(items[j4], 'reference') === vRef) j4++;
      items[i4]._pdfReferenceSpan = j4 - i4;
      i4 = j4;
    }
  }

  

  function layoutRun(runItems) {
      computeLocalMerges(runItems);

      (function recomputeLocalWeekSpans() {
        var wi = 0;
        while (wi < runItems.length) {
          var wnum   = runItems[wi].weekNum;
          var mlabel = runItems[wi].monthLabel;
          var wj = wi;
          while (wj < runItems.length &&
                 runItems[wj].weekNum === wnum &&
                 runItems[wj].monthLabel === mlabel) wj++;
          runItems[wi].weekSpan = wj - wi;
          runItems[wi].isFirstInWeek = true;
          for (var k = wi + 1; k < wj; k++) {
            runItems[k].weekSpan = 0;
            runItems[k].isFirstInWeek = false;
          }
          wi = wj;
        }
      })();

      (function recomputeLocalMonthSpans() {
        var mi = 0;
        while (mi < runItems.length) {
          var month = runItems[mi].monthLabel;
          var mj = mi;
          while (mj < runItems.length && runItems[mj].monthLabel === month) mj++;
          runItems[mi].monthSpan = mj - mi;
          runItems[mi].isFirstInMonth = true;
          for (var mk = mi + 1; mk < mj; mk++) {
            runItems[mk].monthSpan = 0;
            runItems[mk].isFirstInMonth = false;
          }
          mi = mj;
        }
      })();

      return calcRowHeights(runItems);
  }

  function pageHeight(pageItems) {
    var total = 0, i = 0;
    while (i < pageItems.length) {
      if (pageItems[i].kind !== 'teaching') { total += barH(pageItems[i]); i++; continue; }
      var run = [];
      while (i < pageItems.length && pageItems[i].kind === 'teaching') { run.push(pageItems[i]); i++; }
      layoutRun(run).forEach(function (rh) { total += rh; });
    }
    return total;
  }

  function buildPagesExact(items) {
    var pages = [], page = [];
    items.forEach(function (it) {
      var cand = page.concat([it]);
      if (page.length && pageHeight(cand) > AVAIL_H) { pages.push(page); page = [it]; }
      else page = cand;
    });
    if (page.length) pages.push(page);
    return pages;
  }

  var pages = buildPagesExact(flatItems);
  var totalPages = pages.length;

  pages.forEach(function (page, pi) {
    if (pi > 0) doc.addPage('a4', 'landscape');
    var y = drawPageHeader();
    y = drawTableHeader(y);

    var _extraPerRow = 0;
    if (pi < totalPages - 1) {
      var _teachCount = page.filter(function (p) { return p.kind === 'teaching'; }).length;
      var _free = AVAIL_H - pageHeight(page) - 0.05;
      if (_teachCount > 0 && _free > 0) _extraPerRow = Math.min(_free / _teachCount, 15);
    }

   var idx = 0;
    while (idx < page.length) {
      if (page[idx].kind === 'holiday') {
        drawHolidayBar(ML, y, TABLE_W, barH(page[idx]), page[idx]);
        y += barH(page[idx]);
        idx++;
        continue;
      }
      if (page[idx].kind === 'orientation') {
        drawOrientationBar(ML, y, TABLE_W, MIDTERM_H, page[idx]);
        y += MIDTERM_H;
        idx++;
        continue;
      }

      var runItems = [];
      while (idx < page.length && page[idx].kind === 'teaching') {
        runItems.push(page[idx]);
        idx++;
      }

      var heights = layoutRun(runItems);
      if (_extraPerRow > 0) heights = heights.map(function (h) { return h + _extraPerRow; });

      (function paintFillers() {
        var fy2 = y;
        for (var fi = 0; fi < runItems.length; fi++) {
          if (runItems[fi].isFiller) {
            doc.setFillColor(217, 217, 217);
            doc.rect(ML, fy2, TABLE_W, heights[fi], 'F');
          }
          fy2 += heights[fi];
        }
        doc.setFillColor(255, 255, 255);
      })();

      var yy = y;
      for (var ri = 0; ri < runItems.length; ri++) {
        var it = runItems[ri];
        var rh = heights[ri];
        var x = ML;

        cols.forEach(function(c) {
      if (c.key === 'week') {
    if (it.isFirstInWeek) {
      var shW = 0;
      for (var sW = ri; sW < ri + it.weekSpan; sW++) shW += heights[sW];
      drawCell(x, yy, cw.week, shW, String(it.weekNum), 'center');
    }
    x += cw.week; return;
  }
          if (c.key === 'dates') {
            if (it.isFirstInMonth) {
              var shD = 0;
              for (var sD = ri; sD < ri + it.monthSpan; sD++) shD += heights[sD];
              drawMonthCell(x, yy, cw.dates, shD, it.monthLabel || '');
            }
            x += cw.dates; return;
          }
          if (c.key === 'mainComp' || c.key === 'specComp' || c.key === 'mainActivity') {
            var spanKey = c.key === 'mainComp' ? '_pdfMainCompSpan'
                        : c.key === 'specComp' ? '_pdfSpecCompSpan'
                        : '_pdfMainActSpan';
            if (it[spanKey] > 0) {
              var shM = 0;
              for (var sM = ri; sM < ri + it[spanKey]; sM++) shM += heights[sM];
              var mval = it.isFiller ? '' : ((it.row && it.row[c.key]) || '');
              drawCell(x, yy, cw[c.key], shM, mval, 'left', 'top');
            }
            x += cw[c.key]; return;
          }
          if (c.key === 'reference') {
            if (it._pdfReferenceSpan > 0) {
              var shR = 0;
              for (var sR = ri; sR < ri + it._pdfReferenceSpan; sR++) shR += heights[sR];
              var rval = it.isFiller ? '' : ((it.row && it.row.reference) || '');
              drawCell(x, yy, cw.reference, shR, rval, 'left', 'top');
            }
            x += cw.reference; return;
          }
          if (c.key === 'periods') {
            if (it._pdfMergeSpan > 0) {
              var shP = 0;
              for (var sP = ri; sP < ri + it._pdfMergeSpan; sP++) shP += heights[sP];
              var pval = it._pdfPeriodsLabel || String(it.periods || (it.row && it.row.periods) || '');
              drawCell(x, yy, cw.periods, shP, pval, 'center');
            }
            x += cw.periods; return;
          }

          var val;
          if (it.isFiller) val = (c.key === 'specActivity') ? axpFillerLabel() : '';
          else val = (it.row && it.row[c.key]) || '';
          drawCell(x, yy, cw[c.key], rh, val, 'left');
          x += cw[c.key];
        });

        yy += rh;
      }
      y = yy;
    }

    drawFooter(pi + 1, totalPages);
  });

  if (mode === 'preview' || mode === 'sample') return doc.toHTML();
  doc.save(filename);
}
function refreshSOWButtons(groups){
  _subjectGroups=groups||[];
  document.querySelectorAll('.sb-sow-btn').forEach(function(b){b.parentNode.removeChild(b);});
  var sec=document.getElementById('sb-sow-section');if(sec)sec.parentNode.removeChild(sec);
  if(!_subjectGroups.length)return;
  var syllabusBtn=document.getElementById('sb-syllabus');if(!syllabusBtn)return;
  var section=document.createElement('div');
  section.className='axp-nav-section';section.id='sb-sow-section';section.textContent='Scheme of Work';
  syllabusBtn.parentNode.insertBefore(section,syllabusBtn.nextSibling);
  var insertAfter=section;
  _subjectGroups.forEach(function(grp){
    var btn=document.createElement('button');
    btn.className='axp-nav-btn sb-sow-btn';
    var label=grp.subject+(grp.classLabel?' \u2013 '+grp.classLabel:'');
    btn.innerHTML='<i class="bi bi-journal-text"></i> '+esc(label.length>26?label.slice(0,24)+'\u2026':label);
    btn.setAttribute('data-subject',grp.subject);
    btn.setAttribute('data-class',grp.classLabel);
    btn.addEventListener('click',function(){openSOWForSubject(grp.subject,grp.classLabel,grp.items);closeSidebarIfMobile();});
    insertAfter.parentNode.insertBefore(btn,insertAfter.nextSibling);
    insertAfter=btn;
    var k=serverCacheKey(grp.subject,grp.classLabel);
if(_buildInFlight[k])setButtonPill(grp.subject,grp.classLabel,'building');
else if(_serverSOWCache[k])setButtonPill(grp.subject,grp.classLabel,_serverSOWCache[k].cached?'cached':'ready');
else checkSOWCacheOnly(grp.subject,grp.classLabel); 
  });
}

function refreshSOWGroupsFromLocal() {
  var subject  = (document.getElementById('subject')  || {}).value || '';
  var classVal = (document.getElementById('classes')  || {}).value || '';

  if (!subject || !classVal) {
    refreshSOWButtons([]);
    refreshSyllabusPreviewButtons([]);   
    return;
  }

  var group = {
    subject:    subject,
    classLabel: stripStream(classVal),
    items:      []
  };

  try {
    var all = JSON.parse(localStorage.getItem('axp_syllabus_contents') || '[]');
    group.items = all.filter(function(item) {
      return (item.subject || '').trim() === subject &&
             stripStream(item.classVal || '').toLowerCase() === stripStream(classVal).toLowerCase();
    });
  } catch(e) {}

  refreshSOWButtons([group]);
  refreshSyllabusPreviewButtons([group]);   
}
     
function buildGroupsFromItems(allItems){
  var groups={},order=[];
  allItems.forEach(function(item){
    var s=(item.subject||'').trim(),bc=stripStream(item.classVal||'');
    if(!s)return;
    var key=s+'||'+bc;
    if(!groups[key]){groups[key]={subject:s,classLabel:bc,items:[]};order.push(key);}
    groups[key].items.push(item);
  });
  refreshSOWButtons(order.map(function(k){return groups[k];}));
  window._sowSubjectGroups=order.map(function(k){return groups[k];});
}

function axpAutoPrepareSOW(subject, classVal, attempt) {
  if (!subject || !classVal) return;
  var key = serverCacheKey(subject, classVal);
  if (_serverSOWCache[key] || _buildInFlight[key]) return;
  if (!getToken() || !window.AXP_FEATURES || !window.AXP_FEATURES.checkAccess) {
    if ((attempt || 0) < 10) setTimeout(function () { axpAutoPrepareSOW(subject, classVal, (attempt || 0) + 1); }, 1500);
    return;
  }
  window.AXP_FEATURES.checkAccess(subject, classVal, function (resp) {
    var curS = (document.getElementById('subject') || {}).value || '';
    var curC = (document.getElementById('classes') || {}).value || '';
    if (curS !== subject || curC !== classVal) return;
    var F = window.AXP_FEATURES;
    var unlocked = !!(resp && resp.access && (F.isActive(resp.access.logbook) || F.isActive(resp.access.sow)));
    if (unlocked) triggerBackendBuild(subject, classVal);
    else checkSOWCacheOnly(subject, classVal);
  });
}

function attachDropdownObserver() {
  function onSubjectOrClassChange() {
    var subject  = (document.getElementById('subject')  || {}).value || '';
    var classVal = (document.getElementById('classes')  || {}).value || '';
    if (subject && classVal) {
      clearTimeout(attachDropdownObserver._t);
      attachDropdownObserver._t = setTimeout(function() {
        axpAutoPrepareSOW(subject, classVal, 0);
      }, 700);
    }
  }
  var subEl = document.getElementById('subject');
  var clsEl = document.getElementById('classes');
  if (subEl) subEl.addEventListener('change', onSubjectOrClassChange);
  if (clsEl) clsEl.addEventListener('change', onSubjectOrClassChange);
 
  var stepWatcher = new MutationObserver(function() {
    var activeStep = document.querySelector('.step.active[data-step]');
    if (!activeStep) return;
    var stepNum = parseInt(activeStep.getAttribute('data-step'));
    if (stepNum !== 4) return;
 
    var subject  = (document.getElementById('subject')  || {}).value || '';
    var classVal = (document.getElementById('classes')  || {}).value || '';
    if (!subject || !classVal) return;
 
    var key = serverCacheKey(subject, classVal);
    if (_serverSOWCache[key] || _buildInFlight[key]) {
      if (_serverSOWCache[key]) {
        showSOWFeedback(subject, classVal, { fromServer: true });
      }
      return;
    }
 
    clearTimeout(attachDropdownObserver._step4Timer);
    attachDropdownObserver._step4Timer = setTimeout(function() {
      harvestAndBuild(subject, classVal, key);
    }, 600);
  });
 
  var formContent = document.getElementById('lessonPlanForm') ||
                    document.querySelector('.form-content');
  if (formContent) {
    stepWatcher.observe(formContent, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  }
}
     
     function showSOWFeedback(subject, classVal, data) {
  if (data && data.blocked) { (window.__axpBuildErr = window.__axpBuildErr || {})[serverCacheKey(subject, classVal)] = data.reason || 'Build blocked.'; }
  var old = document.getElementById('axp-sow-feedback');
  if (old) old.remove();
 
  var bar = document.createElement('div');
  bar.id = 'axp-sow-feedback';
 
  var msg, icon, bg, borderColor;
 
  if (!data) {
    icon        = 'bi-exclamation-circle-fill';
    bg          = '#fffbea';
    borderColor = '#f5a623';
    msg = '<strong>' + esc(subject) + ' \u2014 ' + esc(stripStream(classVal)) + ':</strong> ' +
          'No syllabus data found. Complete Steps 2 &amp; 3 first.';
 
  } else if (data.fromServer) {
    icon        = 'bi-cloud-check-fill';
    bg          = '#edfff4';
    borderColor = '#1e9e52';
    msg = '<strong>' + esc(subject) + ' \u2014 ' + esc(stripStream(classVal)) + ':</strong> ' +
          'Using existing Scheme of Work data from server. ' +
          'Open the SOW panel from the sidebar.';
 
  } else if (data.blocked) {
    icon        = 'bi-shield-exclamation';
    bg          = '#fff5f7';
    borderColor = '#e4405f';
    msg = '<strong>SOW not sent:</strong> ' + esc(data.reason);
 
  } else {
    icon        = 'bi-check-circle-fill';
    bg          = '#edfff4';
    borderColor = '#1e9e52';
    msg = '<strong>' + esc(subject) + ' \u2014 ' + esc(stripStream(classVal)) + ' captured:</strong> ' +
          data.topics      + ' topic' + (data.topics      !== 1 ? 's' : '') + ', ' +
          data.competences + ' competence' + (data.competences !== 1 ? 's' : '') + ', ' +
          data.activities  + ' main activit' + (data.activities !== 1 ? 'ies' : 'y') + ', ' +
          (data.hasRef ? '<i class="bi bi-check-lg"></i> reference found' : '<i class="bi bi-exclamation-triangle-fill"></i> no reference') + '. ' +
          'Sending to AI for Scheme of Work\u2026';
  }
 
  bar.style.cssText = [
    'display:flex;align-items:flex-start;gap:8px;',
    'background:' + bg + ';',
    'border:1px solid ' + borderColor + ';',
    'border-left:4px solid ' + borderColor + ';',
    'padding:9px 14px;',
    'font-size:.72rem;line-height:1.5;',
    'color:var(--text,#1a1a2e);',
    'font-family:var(--font,"Space Grotesk",Arial,sans-serif);',
    'position:relative;',
    'animation:fadeIn .25s ease;',
  ].join('');
 
  var closeBtn = '<button onclick="this.parentNode.remove()" style="' +
    'position:absolute;top:6px;right:8px;background:none;border:none;' +
    'cursor:pointer;font-size:.85rem;color:var(--text3,#7a7a9a);' +
    'line-height:1;padding:2px 4px;">&times;</button>';
 
  bar.innerHTML = '<i class="bi ' + icon + '" style="flex-shrink:0;margin-top:1px;' +
    'color:' + borderColor + ';font-size:.85rem;"></i>' +
    '<span>' + msg + '</span>' +
    closeBtn;
 
  setTimeout(function() { if (bar.parentNode) bar.remove(); }, 9000);
 
  var progressContainer = document.querySelector('.progress-container');
  if (progressContainer && progressContainer.parentNode) {
    progressContainer.parentNode.insertBefore(bar, progressContainer);
  } else {
    var content = document.getElementById('axp-content');
    if (content) content.insertBefore(bar, content.firstChild);
  }
 
  bar.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
     
function liveGetAllOptions(sel) {
  if (!sel || sel.tagName !== 'SELECT') return [];
  return Array.from(sel.options)
    .map(function(o, i) {
      return { text: (o.text || o.value || '').replace(/\u00A0/g, ' ').trim(), idx: i };
    })
    .filter(function(o) {
      return o.idx !== 0 && o.text
        && !/^select\b/i.test(o.text)
        && !/^chagua\b/i.test(o.text);
    })
    .map(function(o) { return o.text; });
}

function harvestLiveSyllabusData() {
  return {
    topics:      liveGetAllOptions(document.getElementById('topicLesson')),
    competences: liveGetAllOptions(document.getElementById('compLesson')),
    mainLessons: liveGetAllOptions(document.getElementById('mainlesson')),
    references:  liveGetAllOptions(document.getElementById('refLesson')),
  };
}

function harvestSyllabusForSubjectClass(targetSubject, targetClass, callback) {
  var subjSel = document.getElementById('subject');
  var clsSel  = document.getElementById('classes');
  if (!subjSel || !clsSel) { callback(null); return; }

  var originalSubject = subjSel.value;
  var originalClass   = clsSel.value;
  var needsSwitch = (originalSubject !== targetSubject) || (originalClass !== targetClass);

  function doHarvest() {
    var data = harvestLiveSyllabusData();
    callback(data);
    if (needsSwitch) {
      subjSel.value = originalSubject;
      subjSel.dispatchEvent(new Event('change', { bubbles: true }));
      clsSel.value = originalClass;
      clsSel.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  if (needsSwitch) {
    clsSel.value = targetClass;
    clsSel.dispatchEvent(new Event('change', { bubbles: true }));
    subjSel.value = targetSubject;
    subjSel.dispatchEvent(new Event('change', { bubbles: true }));
    setTimeout(doHarvest, 50);
  } else {
    doHarvest();
  }
}
     
function injectSyllabusPreviewPanel(){
  if(document.getElementById('panel-syllabus-preview'))return;
  var panel=document.createElement('div');
  panel.className='main-panel';
  panel.id='panel-syllabus-preview';
  panel.innerHTML=[
    '<div class="panel-header">',
    '  <button class="panel-back" id="sylPrevBack"><i class="bi bi-arrow-left"></i> Back</button>',
    '  <h2><i class="bi bi-clipboard-data"></i> Syllabus Data Preview</h2>',
    '  <p id="sylPrevSubtitle">Verify the captured syllabus content before AI builds the Scheme of Work.</p>',
    '</div>',
    '<div class="panel-body" id="sylPrevBody"></div>',
  ].join('');
  var contentInner=document.querySelector('.content-inner');
  if(contentInner)contentInner.appendChild(panel);
  document.getElementById('sylPrevBack').addEventListener('click',function(){showPanel('syllabus');});
}

function renderSyllabusPreview(subject, classVal, data) {
  var body = document.getElementById('sylPrevBody');
  var subtitle = document.getElementById('sylPrevSubtitle');
  if (!body) return;
  if (subtitle) subtitle.textContent = subject + ' \u2013 ' + stripStream(classVal) + ' \u00b7 live data that will be sent to AI';

  var topics      = data.topics || [];
  var competences = data.competences || [];
  var mains       = data.mainLessons || [];
  var refs        = data.references || [];

  var problems = [];
  if (!topics.length) problems.push('No topics found.');
  if (!competences.length) problems.push('No competences found.');
  if (!mains.length) problems.push('No main activities found.');
  if (!refs.length) problems.push('No reference found \u2014 required before AI build.');

  var statusHTML = problems.length
    ? '<div class="sow-state" style="padding:14px 16px;text-align:left;background:#fff5f7;border-left:3px solid var(--red);margin-bottom:14px;">'
      + '<div style="font-weight:700;color:var(--red);font-size:.8rem;margin-bottom:6px;"><i class="bi bi-exclamation-triangle-fill"></i> Data incomplete \u2014 AI build will be blocked</div>'
      + '<ul style="margin:0;padding-left:18px;font-size:.74rem;color:var(--text2);line-height:1.7;">'
      + problems.map(function (p) { return '<li>' + p + '</li>'; }).join('')
      + '</ul></div>'
    : '<div class="sow-state" style="padding:12px 16px;text-align:left;background:#edfff4;border-left:3px solid var(--green);margin-bottom:14px;">'
      + '<div style="font-weight:700;color:var(--green);font-size:.8rem;"><i class="bi bi-check-circle-fill"></i> Live data looks complete and ready to send to AI</div></div>';

  function block(title, arr, icon) {
    if (!arr.length) return '';
    return '<div class="panel-section-title">' + icon + ' ' + title + ' (' + arr.length + ')</div>'
      + arr.map(function (v) {
          return '<div style="padding:6px 10px;background:var(--surface2);border:1px solid var(--border);margin-bottom:4px;font-size:.76rem;color:var(--text);">'
            + v.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</div>';
        }).join('');
  }

  body.innerHTML = statusHTML
    + '<div style="display:flex;gap:8px;margin-bottom:14px;">'
    + '<button class="sow-tool-btn accent" id="sylPrevSendBtn"><i class="bi bi-stars"></i> Send to AI Now</button>'
    + '<button class="sow-tool-btn neutral" id="sylPrevRefreshBtn"><i class="bi bi-arrow-clockwise"></i> Refresh</button>'
    + '</div>'
    + block('Topics (Main Competence)', topics, '<i class="bi bi-bookmark-fill" style="color:var(--accent);"></i>')
    + block('Specific Competences', competences, '<i class="bi bi-list-check" style="color:var(--accent);"></i>')
    + block('Main Activities', mains, '<i class="bi bi-journal-text" style="color:var(--accent);"></i>')
    + block('References', refs, '<i class="bi bi-bookmarks-fill" style="color:var(--accent);"></i>');

  document.getElementById('sylPrevSendBtn').addEventListener('click', function () {
    if (problems.length) { axpAlert('Cannot send \u2014 data is incomplete:\n\n' + problems.join('\n')); return; }
    var key = serverCacheKey(subject, classVal);
    showPanel('sow');
    if (_serverSOWCache[key]) { openSOWForSubject(subject, classVal, []); }
    else { startBuildAndWait(subject, classVal, getEmail() + '|' + subject + '|' + classVal, document.getElementById('sowAiBadge')); }
  });
  document.getElementById('sylPrevRefreshBtn').addEventListener('click', function () {
    openSyllabusPreview(subject, classVal);
  });
}


function openSyllabusPreview(subject, classVal) {
  injectSyllabusPreviewPanel();
  showPanel('syllabus-preview');

  var body = document.getElementById('sylPrevBody');
  if (body) body.innerHTML = '<div class="sow-state"><i class="bi bi-hourglass-split"></i><div class="sow-state-title">Loading live data\u2026</div></div>';

  harvestSyllabusForSubjectClass(subject, classVal, function (data) {
    renderSyllabusPreview(subject, classVal, data || { topics: [], competences: [], mainLessons: [], references: [] });
  });
}

function refreshSyllabusPreviewButtons(groups){
  document.querySelectorAll('.sb-sylprev-btn').forEach(function(b){b.parentNode.removeChild(b);});
  var sec=document.getElementById('sb-sylprev-section');if(sec)sec.parentNode.removeChild(sec);
  if(!groups||!groups.length)return;
  var anchor=document.getElementById('sb-syllabus');if(!anchor)return;
  var section=document.createElement('div');
  section.className='axp-nav-section';section.id='sb-sylprev-section';section.textContent='Syllabus Data Preview';
  anchor.parentNode.insertBefore(section,anchor.nextSibling);
  var insertAfter=section;
  groups.forEach(function(grp){
    var btn=document.createElement('button');
    btn.className='axp-nav-btn sb-sylprev-btn';
    var label=grp.subject+(grp.classLabel?' \u2013 '+grp.classLabel:'');
    btn.innerHTML='<i class="bi bi-clipboard-data"></i> '+esc(label.length>26?label.slice(0,24)+'\u2026':label);
    btn.addEventListener('click',function(){openSyllabusPreview(grp.subject,grp.classLabel);closeSidebarIfMobile();});
    insertAfter.parentNode.insertBefore(btn,insertAfter.nextSibling);
    insertAfter=btn;
  });
}
     
function initSOW(){
  if(_injected)return;
  _injected=true;
  injectSOWPanel();
  attachDropdownObserver();

  function bindSubjectClassChange() {
  var subEl = document.getElementById('subject');
  var clsEl = document.getElementById('classes');
  if (subEl) subEl.addEventListener('change', function() {
    setTimeout(refreshSOWGroupsFromLocal, 300);
  });
  if (clsEl) clsEl.addEventListener('change', function() {
    setTimeout(refreshSOWGroupsFromLocal, 300);
  });
}
bindSubjectClassChange();
  
  var origLoad=window.loadSyllabusContent;
  if(typeof origLoad==='function'){
    window.loadSyllabusContent=function(){
      origLoad.apply(this,arguments);
      
    };
  }

  setTimeout(function() {
  var subject  = (document.getElementById('subject')  || {}).value || '';
  var classVal = (document.getElementById('classes')  || {}).value || '';
  if (subject && classVal) refreshSOWGroupsFromLocal();
}, 2500);

  setTimeout(function(){
    var subject=(document.getElementById('subject')||{}).value||'';
    var classVal=(document.getElementById('classes')||{}).value||'';
    if(subject&&classVal)axpAutoPrepareSOW(subject,classVal,0);
  },1500);
}

function getSOWRowsReadOnly(subject, classVal, callback) {
  var key = serverCacheKey(subject, classVal);

  if (_serverSOWCache[key]) { callback(_serverSOWCache[key].rows); return; }

  var token = getToken(), email = getEmail();
  if (!token || !email || !API_URL) { callback([]); return; }

  fetch(API_URL + '?action=getSchemeOfWork&token=' + encodeURIComponent(token)
    + '&email=' + encodeURIComponent(email)
    + '&subject=' + encodeURIComponent(subject)
    + '&classVal=' + encodeURIComponent(classVal))
    .then(function (r) { return r.json(); })
    .then(function (resp) {
      if (resp && resp.success && resp.sow && Array.isArray(resp.sow.rows) && resp.sow.rows.length) {
        _serverSOWCache[key] = { rows: resp.sow.rows, cached: true, ts: Date.now() };
        callback(resp.sow.rows);
      } else {
        callback([]);
      }
    })
    .catch(function () { callback([]); });
}

window.getSOWRowsReadOnly          = getSOWRowsReadOnly;

function axpEnsureSOWRows(subject, classVal, cb) {
  var key = serverCacheKey(subject, classVal);
  window.__axpBuildErr = window.__axpBuildErr || {};
  getSOWRowsReadOnly(subject, classVal, function (rows) {
    if (rows && rows.length) { cb(rows, ''); return; }
    if (!getToken() || !API_URL) { cb([], 'Please sign in again.'); return; }
    delete window.__axpBuildErr[key];
    triggerBackendBuild(subject, classVal);
    var tries = 0, MAX = 75;
    (function wait() {
      var c = _serverSOWCache[key];
      if (c && c.rows && c.rows.length) { cb(c.rows, ''); return; }
      if (window.__axpBuildErr[key])    { cb([], window.__axpBuildErr[key]); return; }
      if (++tries > MAX)                { cb([], 'Building took too long. Please try again.'); return; }
      setTimeout(wait, 2000);
    })();
  });
}
window.axpEnsureSOWRows = axpEnsureSOWRows;
window.axpBuildScheduleBlocks      = axpBuildScheduleBlocks;
window.axpDistributeRowsToSchedule = axpDistributeRowsToSchedule;
window.axpFlattenSOWSchedule       = flattenSchedule;
window.axpGetPeriodsPerWeek        = axpGetPeriodsPerWeek;
window.axpGetCalendarForClass      = axpGetCalendarForClass;
/* The calendar must be fully loaded before the scheme of work or the logbook opens (and before any year is shown). */
window.axpEnsureCalendarLoaded = axpEnsureCalendarLoaded;
window.axpCalendarYear         = axpCalendarYear;
window.axpStudyYear            = axpStudyYear;
window.axpCalendarReady = function () {
  try {
    if (!AXP_ACADEMIC_CALENDAR) return false;
    return ['Form Two', 'Form Five'].every(function (c) {
      var cal = axpGetCalendarForClass(c, true);
      return !!(cal && cal.terms && cal.terms.length &&
        /^\d{4}/.test(String(cal.terms[0].opened || '')) &&
        /^\d{4}/.test(String(cal.terms[cal.terms.length - 1].closing || '')));
    });
  } catch (e) { return false; }
};
/* onReady() runs only once the calendar is loaded and valid (3 attempts); otherwise onFail() runs and nothing opens. */
window.axpWithCalendar = function (onReady, onFail) {
  var tries = 0;
  (function attempt() {
    axpEnsureCalendarLoaded().then(function (ok) {
      if (ok && window.axpCalendarReady()) { onReady(); return; }
      if (++tries < 3) { setTimeout(attempt, 1500); return; }
      if (onFail) onFail();
    });
  })();
};
window.axpFieldMonthOptions        = axpFieldMonthOptions;
window.axpFieldWindowKeys          = axpFieldWindowKeys;
window.axpFieldMonthsValid         = axpFieldMonthsValid;
window.axpFieldDurationOptionsHtml = axpFieldDurationOptionsHtml;
window.axpCropRowsToFieldWindow    = axpCropRowsToFieldWindow;

window.loadSOWGroupsFromServer=refreshSOWGroupsFromLocal;
window.openSOWForSubject=openSOWForSubject;
window.axpRenderSampleSOW = function (target) {
  if (!target) return;
  target.innerHTML = '<div class="sow-state"><div class="sow-state-title">Preparing sample\u2026</div></div>';
  window.axpWithJsPdf(function (J) {
    if (!J) { target.innerHTML = '<div class="sow-state"><div class="sow-state-title" style="color:var(--red);">Could not load the preview engine</div><div class="sow-state-sub">Please check your internet connection and try again.</div></div>'; return; }
    axpEnsureCalendarLoaded().then(function (ok) {
      if (!ok || !AXP_ACADEMIC_CALENDAR) throw new Error('calendar');
      return axpEnsurePeriodsPerWeek('Biology', 'Form Two');
    }).then(function () {
    var sv = { cur: _currentSOW };
    try {
      var y = axpCalendarYear('Form Two');
      if (!y) throw new Error('calendar');
      _currentSOW = { subject: 'Biology', classVal: 'Form Two', rows: JSON.parse(JSON.stringify(window.AXP_SAMPLE_SOW_ROWS || [])), fieldStartKey: y + '-03', dirty: false };
      target.innerHTML = _buildSOWPdf('sample');
    } catch (e) {
      if (window.console) console.error('Sample SOW failed', e);
      target.innerHTML = '<div class="sow-state"><div class="sow-state-title" style="color:var(--red);">Could not build the sample</div><div class="sow-state-sub">Please try again.</div></div>';
    } finally {
      _currentSOW = sv.cur;
    }
    }).catch(function () {
      target.innerHTML = '<div class="sow-state"><div class="sow-state-title" style="color:var(--red);">Could not load the sample</div><div class="sow-state-sub">Please check your connection and try again.</div></div>';
    });
  });
};
window.downloadSOWPdf=downloadSOWPdf;

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initSOW);}
else{initSOW();}

})();
  </script>
  
  <script>
(function(){
'use strict';

var API_URL=window.AXP_API_URL||'';
var SEEN_KEY='axp_seen_anns_v2';
var FETCH_INTERVAL=5*60*1000;
var _allAnns=[];
var _injected=false;
var _idx=0;
var _autoTimer=null;
var _lastUnseen=-1;
var _memSeen={};

var TYPES={
  info:   {icon:'bi-info-circle-fill',        c:'#4A3AFF',tint:'#eef0ff',grad:'linear-gradient(135deg,#6a5bff,#4A3AFF)',label:'Info'},
  success:{icon:'bi-stars',                   c:'#1e9e52',tint:'#e9fbf1',grad:'linear-gradient(135deg,#34c97a,#1e9e52)',label:'New feature'},
  warning:{icon:'bi-exclamation-triangle-fill',c:'#b45309',tint:'#fff6d6',grad:'linear-gradient(135deg,#ffd84a,#f5a11c)',label:'Notice'},
  danger: {icon:'bi-shield-exclamation-fill', c:'#e4405f',tint:'#fff0f3',grad:'linear-gradient(135deg,#ff6b86,#e4405f)',label:'Important'},
  promo:  {icon:'bi-gift-fill',               c:'#b8860b',tint:'#fff8e1',grad:'linear-gradient(135deg,#1d3557,#0d1b2e)',label:'Special offer'}
};

function cfgOf(a){return TYPES[a&&a.type]||TYPES.info;}
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function nl2br(s){return esc(s).replace(/\n/g,'<br>');}
function safeUrl(u){u=String(u||'').trim();return /^https?:\/\//i.test(u)?u:'';}
function fmtDate(iso){if(!iso)return'';try{return new Date(iso).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});}catch(e){return'';}}
function timeAgo(iso){
  if(!iso)return'';var t=new Date(iso).getTime();if(isNaN(t))return'';
  var d=(Date.now()-t)/1000;
  if(d<60)return'Just now';
  if(d<3600)return Math.floor(d/60)+'m ago';
  if(d<86400)return Math.floor(d/3600)+'h ago';
  if(d<604800)return Math.floor(d/86400)+'d ago';
  return fmtDate(iso);
}

function getSeen(){try{var o=JSON.parse(localStorage.getItem(SEEN_KEY)||'{}');for(var k in _memSeen)o[k]=_memSeen[k];return o;}catch(e){return _memSeen;}}
function markSeen(id){
  _memSeen[id]=Date.now();
  var o={};try{o=JSON.parse(localStorage.getItem(SEEN_KEY)||'{}');}catch(e){}
  o[id]=Date.now();
  var cut=Date.now()-90*86400000;Object.keys(o).forEach(function(k){if(o[k]<cut)delete o[k];});
  try{localStorage.setItem(SEEN_KEY,JSON.stringify(o));}catch(e){}
}
function isSeen(id){return !!getSeen()[id];}
function byNewest(a,b){return (new Date(b.createdAt||0))-(new Date(a.createdAt||0));}
function unseenList(){return _allAnns.filter(function(a){return !isSeen(a.id);}).sort(byNewest);}
function seenList(){return _allAnns.filter(function(a){return isSeen(a.id);}).sort(byNewest);}

function injectStyles(){
  if(document.getElementById('axp-ann-styles'))return;
  var s=document.createElement('style');
  s.id='axp-ann-styles';
  s.textContent=[
    '@keyframes annxIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}',
    '@keyframes annxPulse{0%{transform:scale(1);opacity:.55}100%{transform:scale(2.3);opacity:0}}',
    '@keyframes annxPop{0%{transform:scale(.4)}60%{transform:scale(1.35)}100%{transform:scale(1)}}',
    '@keyframes annxRing{0%,100%{transform:rotate(0)}15%{transform:rotate(-14deg)}30%{transform:rotate(12deg)}45%{transform:rotate(-8deg)}60%{transform:rotate(6deg)}75%{transform:rotate(0)}}',
    '@keyframes annxModal{from{opacity:0;transform:translateY(22px) scale(.97)}to{opacity:1;transform:none}}',
    '@keyframes annxFade{from{opacity:0}to{opacity:1}}',
    '#axp-ann-sb-badge{margin-left:auto;min-width:20px;height:20px;padding:0 6px;display:none;align-items:center;justify-content:center;background:#e4405f;color:#fff;font-size:.62rem;font-weight:800;line-height:1;position:relative;border-radius:0;}',
    '#axp-ann-sb-badge.show{display:inline-flex;}',
    '#axp-ann-sb-badge.show:before{content:"";position:absolute;inset:0;background:#e4405f;animation:annxPulse 1.8s ease-out infinite;z-index:-1;}',
    '#axp-ann-sb-badge.pop{animation:annxPop .5s ease;}',
    '#sb-announcements.has-new .bi-megaphone-fill{color:#e4405f;animation:annxRing 2.6s ease-in-out infinite;transform-origin:50% 80%;}',
    '#axp-toggle-btn{position:relative;}',
    '.axp-ann-togdot{position:absolute;top:5px;right:5px;width:10px;height:10px;background:#e4405f;border:2px solid #0d1b2e;display:none;border-radius:50%;}',
    '.axp-ann-togdot.show{display:block;}',
    '#axp-ann-panel-body{font-family:var(--font,"Space Grotesk",Arial,sans-serif);}',
    '.annx-summary{display:flex;align-items:center;gap:14px;padding:16px 16px;margin-bottom:18px;color:#fff;background:radial-gradient(120% 140% at 100% 0%,rgba(245,197,24,.28) 0%,rgba(245,197,24,0) 45%),linear-gradient(135deg,#0d1b2e 0%,#1d1f6b 55%,#4A3AFF 100%);animation:annxIn .4s ease both;}',
    '.annx-summary-ico{flex:0 0 auto;width:46px;height:46px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;color:#0d1b2e;background:linear-gradient(135deg,#ffe27a,#F5C518);}',
    '.annx-summary.has-new .annx-summary-ico i{display:inline-block;animation:annxRing 2.6s ease-in-out infinite;transform-origin:50% 20%;}',
    '.annx-summary-t{font-size:.95rem;font-weight:800;line-height:1.25;color:#fff;}',
    '.annx-summary-s{font-size:.72rem;color:rgba(255,255,255,.78);margin-top:3px;line-height:1.45;}',
    '.annx-sec{display:flex;align-items:center;gap:10px;margin:6px 0 10px;font-size:.66rem;font-weight:800;letter-spacing:1.4px;text-transform:uppercase;color:var(--text2,#3a3a5c);}',
    '.annx-sec:after{content:"";flex:1;height:1px;background:var(--border,#d8daff);}',
    '.annx-sec-count{min-width:20px;height:20px;padding:0 6px;display:inline-flex;align-items:center;justify-content:center;font-size:.62rem;color:#fff;background:#e4405f;letter-spacing:0;}',
    '.annx-sec.seen .annx-sec-count{background:var(--text3,#7a7a9a);}',
    '.annx-card{--c:#4A3AFF;--tint:#eef0ff;position:relative;display:flex;align-items:stretch;gap:12px;padding:13px 14px 13px 16px;margin-bottom:10px;background:#fff;border:1px solid var(--border,#d8daff);cursor:pointer;text-align:left;width:100%;font-family:inherit;animation:annxIn .45s ease both;}',
    '.annx-card:before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--c);}',
    '.annx-card.is-new{background:linear-gradient(90deg,var(--tint),#fff 70%);}',
    '.annx-card:active{transform:scale(.995);}',
    '.annx-card:focus-visible{outline:2px solid var(--c);outline-offset:2px;}',
    '.annx-ico{flex:0 0 auto;width:42px;height:42px;display:flex;align-items:center;justify-content:center;font-size:1.15rem;color:#fff;background:var(--grad);}',
    '.annx-body{flex:1;min-width:0;}',
    '.annx-row1{display:flex;align-items:center;gap:8px;margin-bottom:3px;}',
    '.annx-type{font-size:.56rem;font-weight:800;letter-spacing:1.3px;text-transform:uppercase;color:var(--c);}',
    '.annx-newpill{position:relative;font-size:.54rem;font-weight:800;letter-spacing:1px;padding:2px 6px;color:#fff;background:#e4405f;}',
    '@keyframes annxPillPulse{0%{transform:scale(1);opacity:.5}100%{transform:scale(1.45,1.9);opacity:0}}',
    '.annx-newpill:before{content:"";position:absolute;inset:0;background:#e4405f;animation:annxPillPulse 1.8s ease-out infinite;z-index:-1;}',
    '.annx-seenpill{display:inline-flex;align-items:center;gap:3px;font-size:.56rem;font-weight:700;color:var(--text3,#7a7a9a);}',
    '.annx-title{font-size:.86rem;font-weight:800;line-height:1.3;color:var(--text,#1a1a2e);margin-bottom:3px;}',
    '.annx-prev{font-size:.74rem;line-height:1.5;color:var(--text2,#3a3a5c);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;word-wrap:break-word;}',
    '.annx-meta{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:7px;font-size:.6rem;color:var(--text3,#7a7a9a);}',
    '.annx-meta i{margin-right:3px;}',
    '.annx-go{flex:0 0 auto;align-self:center;color:var(--c);font-size:1rem;}',
    '.annx-card.is-seen{opacity:.82;}',
    '.annx-card.is-seen .annx-ico{background:#b9bbd6;}',
    '.annx-card.is-seen:before{background:#c9cae0;}',
    '.annx-card.is-seen .annx-type{color:var(--text3,#7a7a9a);}',
    '.annx-card.t-promo.is-new{background:linear-gradient(135deg,#0d1b2e,#1a2d4a);border-color:#F5C518;}',
    '.annx-card.t-promo.is-new .annx-title{color:#fff;}',
    '.annx-card.t-promo.is-new .annx-prev{color:rgba(255,255,255,.78);}',
    '.annx-card.t-promo.is-new .annx-meta{color:rgba(255,255,255,.6);}',
    '.annx-card.t-promo.is-new .annx-type,.annx-card.t-promo.is-new .annx-go{color:#F5C518;}',
    '.annx-card.t-promo:before{background:#F5C518;}',
    '.annx-empty{text-align:center;padding:34px 16px;color:var(--text3,#7a7a9a);animation:annxIn .4s ease both;}',
    '.annx-empty i{font-size:2.6rem;display:block;margin-bottom:10px;color:var(--border2,#b8badd);}',
    '.annx-empty b{display:block;font-size:.9rem;color:var(--text2,#3a3a5c);margin-bottom:4px;}',
    '.annx-ov{position:fixed;inset:0;z-index:10900;display:flex;align-items:center;justify-content:center;padding:14px;background:rgba(5,8,20,.72);animation:annxFade .2s ease both;}',
    '.annx-modal{--c:#4A3AFF;--grad:linear-gradient(135deg,#6a5bff,#4A3AFF);position:relative;width:100%;max-width:440px;max-height:calc(100vh - 28px);max-height:calc(100dvh - 28px);overflow-y:auto;background:#fff;animation:annxModal .3s cubic-bezier(.2,.8,.2,1) both;font-family:var(--font,"Space Grotesk",Arial,sans-serif);}',
    '.annx-m-head{position:relative;padding:22px 18px 18px;color:#fff;background:var(--grad);overflow:hidden;}',
    '.annx-m-head:after{content:"";position:absolute;right:-40px;top:-60px;width:160px;height:160px;border-radius:50%;background:rgba(255,255,255,.1);}',
    '.annx-m-ico{position:relative;z-index:1;width:46px;height:46px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;background:rgba(255,255,255,.2);margin-bottom:10px;}',
    '.annx-m-type{position:relative;z-index:1;font-size:.6rem;font-weight:800;letter-spacing:1.6px;text-transform:uppercase;opacity:.9;}',
    '.annx-modal .annx-m-title{position:relative;z-index:1;font-size:1.1rem;font-weight:800;line-height:1.3;margin:4px 0 0;color:#fff;text-align:left;text-transform:none;letter-spacing:0;padding:0;background:none;border:0;}',
    '.annx-m-x{position:absolute;z-index:2;right:10px;top:10px;width:30px;height:30px;display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;color:#fff;background:rgba(255,255,255,.18);font-size:.8rem;}',
    '.annx-m-body{padding:18px;font-size:.82rem;line-height:1.65;color:var(--text2,#3a3a5c);word-wrap:break-word;}',
    '.annx-m-meta{display:flex;flex-wrap:wrap;gap:12px;padding:0 18px 14px;font-size:.64rem;color:var(--text3,#7a7a9a);}',
    '.annx-m-meta i{margin-right:4px;}',
    '.annx-m-foot{display:flex;gap:8px;padding:0 18px 18px;}',
    '.annx-m-cta{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:7px;padding:12px;font-size:.78rem;font-weight:800;letter-spacing:.5px;text-transform:uppercase;text-decoration:none;color:#fff;background:var(--grad);}',
    '.annx-m-close{flex:0 0 auto;padding:12px 18px;font-size:.78rem;font-weight:700;cursor:pointer;font-family:inherit;color:var(--text2,#3a3a5c);background:var(--surface2,#eef0ff);border:1px solid var(--border,#d8daff);}',
    '.annx-m-foot .annx-m-close:only-child{flex:1;}',
    '#axp-ann-slider-wrap{margin:10px 16px 0;font-family:var(--font,"Space Grotesk",Arial,sans-serif);}',
    '#axp-ann-slider{position:relative;overflow:hidden;}',
    '.annx-slide{display:none;--c:#4A3AFF;--tint:#eef0ff;--grad:linear-gradient(135deg,#6a5bff,#4A3AFF);position:relative;padding:11px 12px 11px 16px;background:linear-gradient(90deg,var(--tint),#fff 75%);border:1px solid var(--border,#d8daff);cursor:pointer;animation:annxIn .35s ease both;}',
    '.annx-slide.active{display:flex;align-items:center;gap:11px;}',
    '.annx-slide:before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--c);}',
    '.annx-slide .annx-ico{width:36px;height:36px;font-size:1rem;}',
    '.annx-slide .annx-title{font-size:.8rem;margin-bottom:2px;}',
    '.annx-slide .annx-prev{font-size:.7rem;-webkit-line-clamp:2;}',
    '.annx-slide.t-promo{background:linear-gradient(135deg,#0d1b2e,#1a2d4a);border-color:#F5C518;}',
    '.annx-slide.t-promo .annx-title{color:#fff;}.annx-slide.t-promo .annx-prev{color:rgba(255,255,255,.78);}',
    '.annx-slide.t-promo .annx-type,.annx-slide.t-promo .annx-go{color:#F5C518;}.annx-slide.t-promo:before{background:#F5C518;}',
    '.annx-read{flex:0 0 auto;align-self:flex-start;border:none;background:none;cursor:pointer;color:var(--text3,#7a7a9a);font-size:.7rem;padding:2px 4px;line-height:1;}',
    '.annx-slide.t-promo .annx-read{color:rgba(255,255,255,.6);}',
    '#axp-ann-controls{display:flex;align-items:center;justify-content:space-between;padding:5px 0 0;}',
    '#axp-ann-dots{display:flex;align-items:center;gap:5px;}',
    '.axp-ann-dot{width:6px;height:6px;border-radius:50%;background:var(--border2,#b8badd);cursor:pointer;transition:background .2s,width .2s;border:none;padding:0;}',
    '.axp-ann-dot.active{background:var(--accent,#4A3AFF);width:16px;border-radius:0;}',
    '#axp-ann-nav{display:flex;align-items:center;gap:4px;}',
    '.axp-ann-nav-btn{background:var(--surface2,#eef0ff);border:1px solid var(--border,#d8daff);color:var(--accent,#4A3AFF);width:22px;height:22px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.7rem;}',
    '.axp-ann-nav-btn:disabled{opacity:.3;cursor:not-allowed;}',
    '#axp-ann-counter{font-size:.6rem;font-weight:700;color:var(--text3,#7a7a9a);font-family:var(--mono,"JetBrains Mono",monospace);padding:0 4px;}',
    '@media(prefers-reduced-motion:reduce){.annx-card,.annx-summary,.annx-modal,.annx-ov,.annx-slide,.annx-empty{animation:none}.annx-newpill:before,#axp-ann-sb-badge.show:before,#sb-announcements.has-new .bi-megaphone-fill,.annx-summary.has-new .annx-summary-ico i{animation:none}}'
  ].join('\n');
  document.head.appendChild(s);
}

function updateBadges(){
  var n=unseenList().length;
  var badge=document.getElementById('axp-ann-sb-badge');
  var btn=document.getElementById('sb-announcements');
  var dot=document.querySelector('.axp-ann-togdot');
  if(badge){
    badge.textContent=n>9?'9+':String(n);
    badge.classList.toggle('show',n>0);
    if(n>_lastUnseen&&_lastUnseen>=0&&n>0){badge.classList.remove('pop');void badge.offsetWidth;badge.classList.add('pop');}
  }
  if(btn)btn.classList.toggle('has-new',n>0);
  if(dot)dot.classList.toggle('show',n>0);
  _lastUnseen=n;
}

function openDetail(ann){
  closeDetail();
  var cfg=cfgOf(ann);
  var url=safeUrl(ann.ctaUrl);
  var ov=document.createElement('div');
  ov.className='annx-ov';ov.id='annxOv';
  ov.innerHTML=[
    '<div class="annx-modal" role="dialog" aria-modal="true" style="--c:'+cfg.c+';--grad:'+cfg.grad+';">',
    '  <div class="annx-m-head">',
    '    <button type="button" class="annx-m-x" aria-label="Close"><i class="bi bi-x-lg"></i></button>',
    '    <div class="annx-m-ico"><i class="bi '+cfg.icon+'"></i></div>',
    '    <div class="annx-m-type">'+esc(cfg.label)+'</div>',
    '    <h3 class="annx-m-title">'+esc(ann.title)+'</h3>',
    '  </div>',
    '  <div class="annx-m-body">'+nl2br(ann.message)+'</div>',
    '  <div class="annx-m-meta"><span><i class="bi bi-clock"></i>'+esc(timeAgo(ann.createdAt))+'</span>'+(ann.expiresAt?'<span><i class="bi bi-calendar-x"></i>Until '+esc(fmtDate(ann.expiresAt))+'</span>':'')+'</div>',
    '  <div class="annx-m-foot">'+(url&&ann.ctaLabel?'<a class="annx-m-cta" href="'+esc(url)+'" target="_blank" rel="noopener"><i class="bi bi-arrow-right-circle"></i>'+esc(ann.ctaLabel)+'</a>':'')+'<button type="button" class="annx-m-close">Close</button></div>',
    '</div>'
  ].join('');
  document.body.appendChild(ov);
  function close(){closeDetail();}
  ov.addEventListener('mousedown',function(e){if(e.target===ov)close();});
  ov.querySelector('.annx-m-x').addEventListener('click',close);
  ov.querySelector('.annx-m-close').addEventListener('click',close);
  document.addEventListener('keydown',escClose);
  if(!isSeen(ann.id)){
    markSeen(ann.id);
    updateBadges();
    renderSlider();
    renderPanel();
  }
}
function escClose(e){if(e.key==='Escape')closeDetail();}
function closeDetail(){
  var ov=document.getElementById('annxOv');
  if(ov&&ov.parentNode)ov.parentNode.removeChild(ov);
  document.removeEventListener('keydown',escClose);
}

function cardHTML(ann,isNew){
  var cfg=cfgOf(ann);
  var t=ann.type&&TYPES[ann.type]?ann.type:'info';
  var c=document.createElement('div');
  c.className='annx-card t-'+t+(isNew?' is-new':' is-seen');
  c.setAttribute('role','button');c.setAttribute('tabindex','0');
  c.style.setProperty('--c',cfg.c);c.style.setProperty('--tint',cfg.tint);c.style.setProperty('--grad',cfg.grad);
  c.innerHTML=[
    '<div class="annx-ico"><i class="bi '+(isNew?cfg.icon:'bi-check-circle-fill')+'"></i></div>',
    '<div class="annx-body">',
    '  <div class="annx-row1"><span class="annx-type">'+esc(cfg.label)+'</span>'+(isNew?'<span class="annx-newpill">NEW</span>':'<span class="annx-seenpill"><i class="bi bi-check-lg"></i>Seen</span>')+'</div>',
    '  <div class="annx-title">'+esc(ann.title)+'</div>',
    '  <div class="annx-prev">'+esc(ann.message)+'</div>',
    '  <div class="annx-meta"><span><i class="bi bi-clock"></i>'+esc(timeAgo(ann.createdAt))+'</span>'+(ann.expiresAt?'<span><i class="bi bi-calendar-x"></i>Until '+esc(fmtDate(ann.expiresAt))+'</span>':'')+'</div>',
    '</div>',
    '<i class="bi bi-chevron-right annx-go"></i>'
  ].join('');
  function open(){openDetail(ann);}
  c.addEventListener('click',open);
  c.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
  return c;
}

function renderPanel(){
  var loadEl=document.getElementById('axp-ann-panel-loading');
  var listEl=document.getElementById('axp-ann-panel-list');
  var emptyEl=document.getElementById('axp-ann-panel-empty');
  if(!listEl)return;
  if(loadEl)loadEl.style.display='none';
  if(!_allAnns.length){listEl.style.display='none';if(emptyEl)emptyEl.style.display='block';return;}
  if(emptyEl)emptyEl.style.display='none';
  listEl.style.display='block';
  listEl.innerHTML='';
  var nu=unseenList(),se=seenList();

  var sum=document.createElement('div');
  sum.className='annx-summary'+(nu.length?' has-new':'');
  sum.innerHTML='<div class="annx-summary-ico"><i class="bi '+(nu.length?'bi-megaphone-fill':'bi-check-circle-fill')+'"></i></div>'+
    '<div><div class="annx-summary-t">'+(nu.length?('You have '+nu.length+' new announcement'+(nu.length>1?'s':'')):'You\u2019re all caught up')+'</div>'+
    '<div class="annx-summary-s">'+(nu.length?'Tap a card to read it in full.':'Everything you\u2019ve read is saved below.')+'</div></div>';
  listEl.appendChild(sum);

  if(nu.length){
    var h=document.createElement('div');h.className='annx-sec';
    h.innerHTML='New <span class="annx-sec-count">'+nu.length+'</span>';
    listEl.appendChild(h);
    nu.forEach(function(a,i){var c=cardHTML(a,true);c.style.animationDelay=(i*70)+'ms';listEl.appendChild(c);});
  }
  if(se.length){
    var h2=document.createElement('div');h2.className='annx-sec seen';h2.style.marginTop=nu.length?'18px':'6px';
    h2.innerHTML='Seen <span class="annx-sec-count">'+se.length+'</span>';
    listEl.appendChild(h2);
    se.forEach(function(a,i){var c=cardHTML(a,false);c.style.animationDelay=(i*50)+'ms';listEl.appendChild(c);});
  }
}

function goSlide(idx){
  var vis=unseenList();
  if(!vis.length)return;
  _idx=((idx%vis.length)+vis.length)%vis.length;
  document.querySelectorAll('.annx-slide').forEach(function(sl,i){sl.classList.toggle('active',i===_idx);});
  document.querySelectorAll('.axp-ann-dot').forEach(function(d,i){d.classList.toggle('active',i===_idx);});
  var counter=document.getElementById('axp-ann-counter');
  if(counter)counter.textContent=(_idx+1)+'/'+vis.length;
}
function resetAutoTimer(){
  clearInterval(_autoTimer);
  if(unseenList().length<=1)return;
  _autoTimer=setInterval(function(){goSlide(_idx+1);},6000);
}
function renderSlider(){
  var wrap=document.getElementById('axp-ann-slider-wrap');
  var sliderEl=document.getElementById('axp-ann-slider');
  var dotsEl=document.getElementById('axp-ann-dots');
  if(!wrap||!sliderEl||!dotsEl)return;
  var vis=unseenList();
  clearInterval(_autoTimer);
  if(!vis.length){wrap.style.display='none';return;}
  wrap.style.display='block';
  sliderEl.innerHTML='';dotsEl.innerHTML='';
  vis.forEach(function(ann,idx){
    var cfg=cfgOf(ann);
    var t=ann.type&&TYPES[ann.type]?ann.type:'info';
    var sl=document.createElement('div');
    sl.className='annx-slide t-'+t+(idx===0?' active':'');
    sl.setAttribute('role','button');sl.setAttribute('tabindex','0');
    sl.style.setProperty('--c',cfg.c);sl.style.setProperty('--tint',cfg.tint);sl.style.setProperty('--grad',cfg.grad);
    sl.innerHTML=[
      '<div class="annx-ico"><i class="bi '+cfg.icon+'"></i></div>',
      '<div class="annx-body">',
      '  <div class="annx-row1"><span class="annx-type">'+esc(cfg.label)+'</span><span class="annx-newpill">NEW</span><span class="annx-meta" style="margin:0;"><span>'+esc(timeAgo(ann.createdAt))+'</span></span></div>',
      '  <div class="annx-title">'+esc(ann.title)+'</div>',
      '  <div class="annx-prev">'+esc(ann.message)+'</div>',
      '</div>',
      '<button type="button" class="annx-read" title="Mark as read"><i class="bi bi-x-lg"></i></button>'
    ].join('');
    function open(){openDetail(ann);}
    sl.addEventListener('click',open);
    sl.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
    sl.querySelector('.annx-read').addEventListener('click',function(e){
      e.stopPropagation();markSeen(ann.id);updateBadges();renderSlider();renderPanel();
    });
    sliderEl.appendChild(sl);
    var dot=document.createElement('button');
    dot.className='axp-ann-dot'+(idx===0?' active':'');
    dot.setAttribute('aria-label','Announcement '+(idx+1));
    dot.addEventListener('click',function(){goSlide(idx);resetAutoTimer();});
    dotsEl.appendChild(dot);
  });
  _idx=0;
  var counter=document.getElementById('axp-ann-counter');
  if(counter)counter.textContent='1/'+vis.length;
  var prev=document.getElementById('axp-ann-prev'),next=document.getElementById('axp-ann-next');
  if(prev)prev.disabled=vis.length<=1;
  if(next)next.disabled=vis.length<=1;
  var controls=document.getElementById('axp-ann-controls');
  if(controls)controls.style.display=vis.length<=1?'none':'flex';
  resetAutoTimer();
}

function injectSliderWrap(){
  if(document.getElementById('axp-ann-slider-wrap'))return;
  var pc=document.querySelector('.progress-container');
  if(!pc)return;
  var wrap=document.createElement('div');
  wrap.id='axp-ann-slider-wrap';
  wrap.style.display='none';
  wrap.innerHTML=[
    '<div id="axp-ann-slider"></div>',
    '<div id="axp-ann-controls">',
    '  <div id="axp-ann-dots"></div>',
    '  <div id="axp-ann-nav">',
    '    <button class="axp-ann-nav-btn" id="axp-ann-prev" title="Previous"><i class="bi bi-chevron-left"></i></button>',
    '    <span id="axp-ann-counter">1/1</span>',
    '    <button class="axp-ann-nav-btn" id="axp-ann-next" title="Next"><i class="bi bi-chevron-right"></i></button>',
    '  </div>',
    '</div>'
  ].join('');
  pc.parentNode.insertBefore(wrap,pc);
  document.getElementById('axp-ann-prev').addEventListener('click',function(){goSlide(_idx-1);resetAutoTimer();});
  document.getElementById('axp-ann-next').addEventListener('click',function(){goSlide(_idx+1);resetAutoTimer();});
}

function injectSidebarItem(){
  if(document.getElementById('sb-announcements'))return;
  var nav=document.querySelector('#axp-sidebar .axp-sb-nav')||document.getElementById('axp-sidebar');
  if(!nav)return;
  var systemSection=null;
  nav.querySelectorAll('.axp-nav-section').forEach(function(s){if(s.textContent.trim()==='System')systemSection=s;});
  var btn=document.createElement('button');
  btn.className='axp-nav-btn';
  btn.id='sb-announcements';
  btn.innerHTML='<i class="bi bi-megaphone-fill"></i> Announcements<span id="axp-ann-sb-badge"></span>';
  btn.addEventListener('click',function(){
    loadAnnouncementsPanel();
    showPanel('announcements');
    if(window.innerWidth<=768){
      var sb=document.getElementById('axp-sidebar'),ov=document.getElementById('sidebar-overlay');
      if(sb)sb.classList.remove('open');if(ov)ov.classList.remove('show');
    }
  });
  if(systemSection&&systemSection.nextSibling){nav.insertBefore(btn,systemSection.nextSibling);}
  else{var lp=document.getElementById('sb-lessonplan');if(lp&&lp.nextSibling){nav.insertBefore(btn,lp.nextSibling);}else{nav.appendChild(btn);}}
  var tog=document.getElementById('axp-toggle-btn');
  if(tog&&!tog.querySelector('.axp-ann-togdot')){var d=document.createElement('span');d.className='axp-ann-togdot';tog.appendChild(d);}
  updateBadges();
}

function injectPanel(){
  if(document.getElementById('panel-announcements'))return;
  var ci=document.querySelector('.content-inner');
  if(!ci)return;
  var panel=document.createElement('div');
  panel.className='main-panel';
  panel.id='panel-announcements';
  panel.innerHTML=[
    '<div class="panel-header">',
    '  <button class="panel-back" id="annPanelBack"><i class="bi bi-arrow-left"></i> Back</button>',
    '  <h2><i class="bi bi-megaphone-fill"></i> Announcements</h2>',
    '  <p>Fresh updates and notices from AcademixPoint.</p>',
    '</div>',
    '<div class="panel-body" id="axp-ann-panel-body">',
    '  <div id="axp-ann-panel-loading" style="text-align:center;padding:30px;color:var(--text3);">',
    '    <i class="bi bi-hourglass-split" style="font-size:2rem;display:block;margin-bottom:10px;"></i>',
    '    <div style="font-size:.8rem;">Loading announcements\u2026</div>',
    '  </div>',
    '  <div id="axp-ann-panel-list" style="display:none;"></div>',
    '  <div id="axp-ann-panel-empty" class="annx-empty" style="display:none;">',
    '    <i class="bi bi-megaphone"></i>',
    '    <b>No announcements yet</b>',
    '    <span style="font-size:.75rem;">We\u2019ll let you know here as soon as there\u2019s news.</span>',
    '  </div>',
    '</div>'
  ].join('');
  ci.appendChild(panel);
  document.getElementById('annPanelBack').addEventListener('click',function(){showPanel('lessonplan');});
}

function loadAnnouncementsPanel(){
  var loadEl=document.getElementById('axp-ann-panel-loading');
  var listEl=document.getElementById('axp-ann-panel-list');
  var emptyEl=document.getElementById('axp-ann-panel-empty');
  if(!listEl)return;
  if(_allAnns.length){renderPanel();return;}
  if(loadEl)loadEl.style.display='block';
  listEl.style.display='none';
  if(emptyEl)emptyEl.style.display='none';
  fetchAndProcess(function(){renderPanel();});
}

function fetchAndProcess(cb){
  if(!API_URL){if(cb)cb();return;}
  var token=(typeof AUTH!=='undefined'&&AUTH.getSessionToken)?AUTH.getSessionToken():'';
  var url=API_URL+'?action=getAnnouncements';
  if(token)url+='&token='+encodeURIComponent(token);
  fetch(url)
    .then(function(r){return r.json();})
    .then(function(resp){
      if(resp&&resp.success)_allAnns=resp.announcements||[];
      updateBadges();
      renderSlider();
      var p=document.getElementById('panel-announcements');
      if(p&&p.classList.contains('active'))renderPanel();
      if(cb)cb();
    })
    .catch(function(){if(cb)cb();});
}

function init(){
  if(_injected)return;
  _injected=true;
  injectStyles();
  injectSidebarItem();
  injectPanel();
  function tryInjectWrap(){
    var pc=document.querySelector('.progress-container');
    if(pc){injectSliderWrap();setTimeout(function(){fetchAndProcess(null);},1800);}
    else{setTimeout(tryInjectWrap,300);}
  }
  tryInjectWrap();
  setInterval(function(){fetchAndProcess(null);},FETCH_INTERVAL);
  var _lastToken='';
  setInterval(function(){
    var tok=(typeof AUTH!=='undefined'&&AUTH.getSessionToken)?AUTH.getSessionToken():'';
    if(tok!==_lastToken){_lastToken=tok;setTimeout(function(){fetchAndProcess(null);},800);}
  },3000);
}

window.AXP_ANNOUNCEMENTS={fetch:function(){fetchAndProcess(null);},refresh:function(){fetchAndProcess(null);}};
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}
else{init();}
})();
</script>
  
  
  <script>
    (function(){
'use strict';

var CHECK_INTERVAL = 15000;
var _timer = null;
var _injected = false;
var _checking = false;
var _overlayOpen = false;
var _payOpen = false;
var _currentPayId = null;
var _currentWaUrl = null;
var _currentSupportUrl = null;

function isFullyActive(p){
  if(!p||p.status!=='active')return false;
  var pu=p.paidUntil||'';
  return !!(pu&&new Date(pu)>new Date());
}
function getToken(){return(typeof AUTH!=='undefined'&&AUTH.getSessionToken)?AUTH.getSessionToken():'';}
function getUser(){return(typeof AUTH!=='undefined'&&AUTH.getUser)?AUTH.getUser():null;}
function getProfile(){return(typeof AUTH!=='undefined'&&AUTH.getProfile)?AUTH.getProfile():null;}
function fmtDate(iso){if(!iso)return'';try{return new Date(iso).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});}catch(e){return'';}}
function generatePayId(){return String(Math.floor(Math.random()*900)+100);}

function payCfg(){return window.AXP_PAYCFG?window.AXP_PAYCFG.get():null;}
function buildWaUrl(fullName,phone,school,payId,isSupport){
  var cfg=payCfg();
  if(!cfg)return '';
  var PAYMENT_AMOUNT=cfg.price.lessonplan;
  var WHATSAPP_NUMBER=cfg.whatsappNumber;
  var PAY_TO=cfg.payTo.number, PAYEE=cfg.payTo.name;
  var user=getUser();
  var email=user?user.email:'-';
  var msg;
  if(isSupport){
    msg='\uD83C\uDF93 *ACADEMIXPOINT - SUPPORT REQUEST*\n\n\uD83D\uDCF1 '+phone+'\n\uD83D\uDCE7 '+email+'\n\uD83C\uDFEB '+school+'\n\uD83D\uDC64 *'+fullName+'*\n\n\u2753 I need help with my account activation.\nMy account is still showing as pending.\n\nPlease assist me.\n\n_AcademixPoint Support_';
  }else{
    msg='\uD83C\uDF93 *ACADEMIXPOINT - MALIPO*\n\n\uD83D\uDCF1 '+phone+'\n\uD83D\uDCE7 '+email+'\n\uD83C\uDFEB '+school+'\n\uD83D\uDC64 *'+fullName+'*\n\uD83D\uDD11 Payment ID: *'+payId+'*\n\uD83D\uDCB0 *Tshs '+PAYMENT_AMOUNT+'*\n\uD83D\uDCCC *Jinsi ya Kulipa:*\n 1. Tuma Tshs '+PAYMENT_AMOUNT+' kwenye namba (YAS): '+PAY_TO+' ('+PAYEE+').\n 2. Tuma screenshot ya muamala\n 3. Subiri account i-activate\n\n\uD83D\uDCE2 Jiunge na channel yetu:\nhttps://whatsapp.com/channel/0029Vb85drGGzzKTChqyMB0W\n\n*Usalama:*\nTumia namba hii tu ya WhatsApp (usiandike nyingine)\n_Asante \uD83C\uDF93_';
  }
  return 'https://wa.me/'+WHATSAPP_NUMBER+'?text='+encodeURIComponent(msg);
}

function injectAll(){
  if(_injected)return;
  _injected=true;

  var _AXP_SAFE_IDS=['axp-float','axp-status-ov','axp-pay-ov','axp-status-popup','axp-pay-popup'];
  window.__axp_safe_ids=_AXP_SAFE_IDS;

  var style=document.createElement('style');
  style.textContent=[
    '.axp-ov{',
      'display:none!important;position:fixed!important;top:0!important;left:0!important;',
      'width:100%!important;height:100%!important;background:rgba(5,5,5,.84)!important;',
      'z-index:2147483000!important;align-items:center!important;justify-content:center!important;',
      'padding:12px!important;box-sizing:border-box!important;',
      'font-family:"Space Grotesk",Arial,sans-serif!important;}',
    '.axp-ov.axp-show{display:flex!important;}',

    '.axp-popup{',
      'background:#fff;width:100%;max-width:400px;',
      'border-top:4px solid #4A3AFF;border-radius:0!important;',
      '',
      'animation:axpIn .28s cubic-bezier(.22,.61,.36,1);',
      'max-height:90vh;overflow-y:auto;}',
    '@keyframes axpIn{from{transform:translateY(32px);opacity:0}to{transform:translateY(0);opacity:1}}',

    '.axp-hdr{',
      'background:#0d1b2e;padding:16px 14px 12px;text-align:center;',
      'position:relative;overflow:hidden;}',
    '.axp-hdr::before{',
      'content:"";position:absolute;inset:0;',
      'background:repeating-linear-gradient(-45deg,transparent,transparent 14px,rgba(74,58,255,.07) 14px,rgba(74,58,255,.07) 28px);}',
    '.axp-hdr-icon{',
      'position:relative;z-index:1;width:44px;height:44px;background:#4A3AFF;',
      'margin:0 auto 8px;display:flex;align-items:center;justify-content:center;',
      'border-radius:0!important;}',
    '.axp-hdr-icon i{font-size:1.2rem;color:#fff;}',
    '.axp-hdr h2{',
      'position:relative;z-index:1;color:#fff;font-size:.85rem;font-weight:800;',
      'margin:0 0 2px;text-transform:uppercase;letter-spacing:.5px;}',
    '.axp-hdr p{position:relative;z-index:1;color:rgba(255,255,255,.58);font-size:.66rem;margin:0;}',

    '.axp-body{padding:12px 14px 14px;}',

    '.axp-ucard{background:#eef0ff;border:1px solid #d8daff;padding:8px 10px;margin-bottom:10px;border-radius:0!important;}',
    '.axp-urow{display:flex;align-items:center;gap:6px;font-size:.73rem;color:#3a3a5c;padding:2px 0;}',
    '.axp-urow i{color:#4A3AFF;font-size:.75rem;flex-shrink:0;}',

    '.axp-badge-wrap{text-align:center;margin:0 0 10px;}',
    '.axp-badge{',
      'display:inline-flex;align-items:center;gap:6px;padding:6px 14px;',
      'font-size:.76rem;font-weight:800;letter-spacing:.3px;text-transform:uppercase;',
      'background:rgba(245,197,24,.12);color:#b45309;border:1.5px solid rgba(245,197,24,.45);',
      'border-radius:0!important;}',
    '.axp-badge.axp-active{background:rgba(30,158,82,.12);color:#155a30;border-color:rgba(30,158,82,.4);}',
    '.axp-badge-sub{font-size:.6rem;color:#7a7a9a;margin-top:3px;}',

    '.axp-info{',
      'display:flex;align-items:flex-start;gap:7px;',
      'background:#fffbea;border:1px solid #f0d060;border-left:3px solid #f5a623;',
      'padding:7px 9px;margin-bottom:10px;font-size:.67rem;color:#6b4f00;line-height:1.5;',
      'border-radius:0!important;}',
    '.axp-info i{color:#f5a623;flex-shrink:0;margin-top:1px;}',
    '.axp-info.axp-info-ok{background:#edfff4;border-color:#a8e6c0;border-left-color:#1e9e52;color:#155724;}',
    '.axp-info.axp-info-ok i{color:#1e9e52;}',

    '.axp-btn-row{display:flex;gap:7px;margin-bottom:7px;}',

    '.axp-btn{',
      'flex:1;display:flex;align-items:center;justify-content:center;gap:5px;',
      'border:none;border-radius:0!important;',
      'padding:10px 8px;font-size:.75rem;font-weight:800;cursor:pointer;',
      'text-transform:uppercase;letter-spacing:.4px;',
      'font-family:"Space Grotesk",Arial,sans-serif;',
      'outline:none;',
      'transition:none!important;',
      '-webkit-appearance:none;appearance:none;}',
    '.axp-btn:focus{outline:none;}',
    '.axp-btn:disabled{opacity:.45;cursor:not-allowed;}',

    '.axp-btn-primary{background:#4A3AFF;color:#fff;}',
    '.axp-btn-ghost{',
      'background:transparent;color:#7a7a9a;',
      'border:1px solid #d8daff!important;',
      'flex:0 0 auto;padding:10px 11px;}',
    '.axp-btn-green{background:#25D366;color:#fff;}',
    '.axp-btn-dark{background:#0d1b2e;color:#fff;}',
    '.axp-btn-outline{',
      'width:100%;background:transparent;color:#7a7a9a;',
      'border:1px solid #d8daff!important;',
      'flex:none;}',

    '.axp-amount-box{',
      'text-align:center;',
      'background:linear-gradient(135deg,#0d1b2e,#1a2d4a);color:#fff;',
      'padding:12px;margin-bottom:10px;border:1px solid #F5C518;',
      'border-radius:0!important;}',
    '.axp-amount-lbl{font-size:.58rem;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,.5);margin-bottom:2px;}',
    '.axp-amount-val{font-size:1.6rem;font-weight:800;color:#F5C518;font-family:monospace;}',
    '.axp-amount-per{font-size:.6rem;color:rgba(255,255,255,.45);margin-top:2px;}',

    '.axp-id-box{',
      'text-align:center;background:#0d1b2e;color:#fff;',
      'padding:12px;margin-bottom:10px;border:2px solid #F5C518;',
      'display:none;border-radius:0!important;}',
    '.axp-id-lbl{font-size:.56rem;text-transform:uppercase;letter-spacing:2px;color:rgba(255,255,255,.45);margin-bottom:4px;}',
    '.axp-id-val{font-size:2.4rem;font-weight:800;color:#F5C518;font-family:monospace;letter-spacing:8px;line-height:1;}',
    '.axp-id-note{font-size:.56rem;color:rgba(255,255,255,.4);margin-top:4px;line-height:1.4;}',

    '.axp-sent-box{',
      'display:none;align-items:flex-start;gap:7px;',
      'background:#edfff4;border:1px solid #a8e6c0;border-left:3px solid #1e9e52;',
      'padding:7px 9px;margin-bottom:10px;font-size:.67rem;color:#155724;line-height:1.5;',
      'border-radius:0!important;}',
    '.axp-sent-box i{color:#1e9e52;flex-shrink:0;margin-top:1px;}',

    '.axp-pay-footer{',
      'padding:6px 14px 10px;background:#f5f5ff;',
      'border-top:1px solid #d8daff;font-size:.6rem;color:#7a7a9a;text-align:center;}',
    '.axp-pay-footer strong{color:#1e9e52;}',

    '.axp-pending-warn{',
      'display:flex;align-items:flex-start;gap:7px;',
      'background:#fff3cd;border:1px solid #ffc107;border-left:3px solid #f5a623;',
      'padding:7px 9px;margin-bottom:10px;font-size:.67rem;color:#664d03;line-height:1.5;',
      'border-radius:0!important;}',
    '.axp-pending-warn i{color:#f5a623;flex-shrink:0;margin-top:1px;}',

    '.axp-last{text-align:center;font-size:.58rem;color:#b8badd;min-height:12px;margin-top:2px;}',

    '#axp-float{',
      'position:fixed!important;bottom:20px!important;right:16px!important;',
      'z-index:2147482999!important;display:none;',
      'align-items:center;gap:6px;',
      'background:#0d1b2e;color:#F5C518;',
      'border:1.5px solid rgba(245,197,24,.55)!important;',
      'border-radius:0!important;',
      'padding:9px 14px;font-size:.68rem;font-weight:800;cursor:pointer;',
      'letter-spacing:.4px;text-transform:uppercase;',
      'font-family:"Space Grotesk",Arial,sans-serif;',
      'outline:none;-webkit-appearance:none;appearance:none;',
      'animation:axpPulse 2.6s ease-in-out infinite;}',
    '#axp-float.axp-float-show{display:flex!important;}',
    '@keyframes axpPulse{0%,100%{opacity:1;}50%{opacity:.75;}}',

    '.axp-spin{animation:axpRotate .7s linear infinite;}',
    '@keyframes axpRotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}',

    '@media(max-width:480px){',
      '.axp-ov{padding:8px!important;}',
      '.axp-popup{max-width:100%;}',
      '.axp-hdr{padding:12px 10px 10px;}',
      '.axp-hdr h2{font-size:.78rem;}',
      '.axp-body{padding:10px 10px 12px;}',
      '.axp-btn{padding:10px 6px;font-size:.7rem;}',
      '.axp-btn-row{gap:6px;}',
      '.axp-amount-val{font-size:1.4rem;}',
      '.axp-id-val{font-size:2rem;letter-spacing:5px;}',
      '#axp-float{bottom:14px!important;right:10px!important;padding:8px 11px;font-size:.62rem;}',
    '}',
    '@media(max-width:360px){',
      '.axp-btn{font-size:.64rem;padding:9px 4px;gap:4px;}',
      '.axp-btn i{font-size:.7rem;}',
      '#axp-float{font-size:.58rem;padding:7px 9px;}',
    '}',
  ].join('');
  document.head.appendChild(style);

  
  var statusOv=document.createElement('div');
  statusOv.className='axp-ov';
  statusOv.id='axp-status-ov';
  statusOv.setAttribute('data-axp-safe','1');
  statusOv.innerHTML=[
    '<div class="axp-popup" id="axp-status-popup" data-axp-safe="1">',
      '<div class="axp-hdr">',
        '<div class="axp-hdr-icon"><i class="bi bi-shield-lock-fill" id="axp-s-hdr-icon"></i></div>',
        '<h2 id="axp-s-title">Account Status</h2>',
        '<p id="axp-s-sub">Check whether your payment has been confirmed</p>',
      '</div>',
      '<div class="axp-body">',
        '<div class="axp-ucard">',
          '<div class="axp-urow"><i class="bi bi-person-fill"></i><span id="axp-s-name">\u2014</span></div>',
          '<div class="axp-urow"><i class="bi bi-envelope-fill"></i><span id="axp-s-email">\u2014</span></div>',
        '</div>',
        '<div class="axp-badge-wrap">',
          '<div class="axp-badge" id="axp-s-badge">',
            '<i class="bi bi-clock-fill" id="axp-s-badge-icon"></i>',
            '<span id="axp-s-badge-text">Pending Activation</span>',
          '</div>',
          '<div class="axp-badge-sub" id="axp-s-paid-until" style="display:none;"></div>',
        '</div>',
        '<div class="axp-info" id="axp-s-info">',
          '<i class="bi bi-info-circle-fill"></i>',
          '<span id="axp-s-info-text">Your payment is being reviewed. Click <strong>Check Now</strong> to see if admin has activated your account.</span>',
        '</div>',
        '<div class="axp-btn-row">',
          '<button class="axp-btn axp-btn-primary" id="axp-s-check-btn">',
            '<i class="bi bi-arrow-clockwise" id="axp-s-spin"></i>',
            '<span id="axp-s-check-lbl">Check Now</span>',
          '</button>',
          '<button class="axp-btn axp-btn-ghost" id="axp-s-close-btn"><i class="bi bi-x-lg"></i></button>',
        '</div>',
        '<div class="axp-last" id="axp-s-last"></div>',
      '</div>',
    '</div>',
  ].join('');
  document.body.appendChild(statusOv);

 
  var payOv=document.createElement('div');
  payOv.className='axp-ov';
  payOv.id='axp-pay-ov';
  payOv.setAttribute('data-axp-safe','1');
  payOv.innerHTML=[
    '<div class="axp-popup" id="axp-pay-popup" data-axp-safe="1">',
      '<div class="axp-hdr">',
        '<div class="axp-hdr-icon" style="background:#b45309!important;">',
          '<i class="bi bi-exclamation-triangle-fill"></i>',
        '</div>',
        '<h2>Still Pending</h2>',
        '<p>Server confirmed your account is not yet activated</p>',
      '</div>',
      '<div class="axp-body">',
        '<div class="axp-pending-warn">',
          '<i class="bi bi-hourglass-split"></i>',
          '<span>Your account is <strong>still pending</strong>. If you already paid, use <strong>Contact Support</strong>. If you have not paid yet, use <strong>Pay Now</strong> to complete activation.</span>',
        '</div>',
        '<div class="axp-amount-box">',
          '<div class="axp-amount-lbl">Activation Fee</div>',
          '<div class="axp-amount-val">Tshs <span data-axp-pay="lessonplanPrice">\u2026</span></div>',
          '<div class="axp-amount-per"><span data-axp-pay="lessonplanPeriod">\u2026</span> full access</div>',
        '</div>',
        '<div class="axp-ucard">',
          '<div class="axp-urow"><i class="bi bi-person-fill"></i><span id="axp-pay-name">\u2014</span></div>',
          '<div class="axp-urow"><i class="bi bi-envelope-fill"></i><span id="axp-pay-email">\u2014</span></div>',
          '<div class="axp-urow"><i class="bi bi-telephone-fill"></i><span id="axp-pay-phone">\u2014</span></div>',
          '<div class="axp-urow"><i class="bi bi-building"></i><span id="axp-pay-school">\u2014</span></div>',
        '</div>',
        '<div class="axp-id-box" id="axp-pay-id-box">',
          '<div class="axp-id-lbl">Your Payment ID</div>',
          '<div class="axp-id-val" id="axp-pay-id-val">\u2014</div>',
          '<div class="axp-id-note">Share this ID with admin when sending payment</div>',
        '</div>',
        '<div class="axp-sent-box" id="axp-pay-sent">',
          '<i class="bi bi-check-circle-fill"></i>',
          '<span>Payment request sent! Admin will activate your account after confirming. Use the button below if you need to re-open WhatsApp.</span>',
        '</div>',
        '<div id="axp-pay-cfgerr" style="display:none;color:#b91c1c;font-size:.74rem;margin-bottom:8px;"><i class="bi bi-exclamation-triangle-fill"></i> Could not load payment details. Please check your connection and reopen this window.</div>',
        '<div class="axp-btn-row" id="axp-pay-main-row">',
          '<button class="axp-btn axp-btn-green" id="axp-pay-wa-btn"><i class="bi bi-whatsapp"></i> Pay Now</button>',
          '<button class="axp-btn axp-btn-dark" id="axp-pay-sup-btn"><i class="bi bi-headset"></i> Contact Support</button>',
        '</div>',
        '<button class="axp-btn axp-btn-green" id="axp-pay-retry-btn" style="display:none;width:100%;margin-bottom:7px;">',
          '<i class="bi bi-whatsapp"></i> Open WhatsApp Again',
        '</button>',
        '<button class="axp-btn axp-btn-outline" id="axp-pay-close-btn">',
          '<i class="bi bi-x-circle"></i> Close &amp; Wait',
        '</button>',
      '</div>',
      '<div class="axp-pay-footer">Contact <strong data-axp-pay="phone">\u2026</strong> for payment issues.</div>',
    '</div>',
  ].join('');
  document.body.appendChild(payOv);

  
  var floatBtn=document.createElement('button');
  floatBtn.id='axp-float';
  floatBtn.setAttribute('data-axp-safe','1');
  floatBtn.innerHTML='<i class="bi bi-shield-check"></i> Check Activation Status';
  document.body.appendChild(floatBtn);

  
  setInterval(function(){
    var fb=document.getElementById('axp-float');
    var so=document.getElementById('axp-status-ov');
    var po=document.getElementById('axp-pay-ov');
    if(!fb){document.body.appendChild(floatBtn);fb=floatBtn;}
    if(fb&&fb.classList.contains('axp-float-show')&&fb.style.display==='none'){
      fb.style.removeProperty('display');
    }
    if(!so)document.body.appendChild(statusOv);
    if(!po)document.body.appendChild(payOv);
  },500);

  
  floatBtn.addEventListener('click',function(e){e.stopPropagation();openStatusOv();});
  document.getElementById('axp-s-check-btn').addEventListener('click',doCheck);
  document.getElementById('axp-s-close-btn').addEventListener('click',closeStatusOv);
  statusOv.addEventListener('click',function(e){if(e.target===statusOv)closeStatusOv();});
  document.getElementById('axp-pay-wa-btn').addEventListener('click',handlePayNow);
  document.getElementById('axp-pay-sup-btn').addEventListener('click',handleSupport);
  document.getElementById('axp-pay-retry-btn').addEventListener('click',handleRetry);
  document.getElementById('axp-pay-close-btn').addEventListener('click',closePayOv);
  payOv.addEventListener('click',function(e){if(e.target===payOv)closePayOv();});
}


function openStatusOv(){
  if(_overlayOpen)return;
  _overlayOpen=true;
  var user=getUser();
  var profile=getProfile();
  var name=(profile&&profile.fullName)||(user&&user.name)||'\u2014';
  var email=(user&&user.email)||'\u2014';
  var nameEl=document.getElementById('axp-s-name');
  var emailEl=document.getElementById('axp-s-email');
  if(nameEl)nameEl.textContent=name;
  if(emailEl)emailEl.textContent=email;
  syncBadge(profile);
  var ov=document.getElementById('axp-status-ov');
  if(ov)ov.classList.add('axp-show');
}

function closeStatusOv(){
  _overlayOpen=false;
  var ov=document.getElementById('axp-status-ov');
  if(ov)ov.classList.remove('axp-show');
}

function openPayOv(){
  if(_payOpen)return;
  _payOpen=true;
  _currentPayId=null;
  _currentWaUrl=null;

  var user=getUser();
  var profile=getProfile();
  var fullName=(profile&&profile.fullName)||(user&&user.name)||'\u2014';
  var email=(user&&user.email)||'\u2014';
  var phone=(profile&&profile.phone)||'\u2014';
  var school=(profile&&profile.school)||'\u2014';

  setText('axp-pay-name',fullName);
  setText('axp-pay-email',email);
  setText('axp-pay-phone',phone);
  setText('axp-pay-school',school);

  var idBox=document.getElementById('axp-pay-id-box');
  var sentBox=document.getElementById('axp-pay-sent');
  var retryBtn=document.getElementById('axp-pay-retry-btn');
  var mainRow=document.getElementById('axp-pay-main-row');
  if(idBox)idBox.style.display='none';
  if(sentBox)sentBox.style.display='none';
  if(retryBtn)retryBtn.style.display='none';
  if(mainRow)mainRow.style.display='flex';

  _currentSupportUrl=null;
  var ov=document.getElementById('axp-pay-ov');
  if(ov)ov.classList.add('axp-show');
  var errEl=document.getElementById('axp-pay-cfgerr');
  if(errEl)errEl.style.display='none';
  window.AXP_PAYCFG.load().then(function(){
    window.AXP_PAYCFG.apply(ov);
    _currentSupportUrl=buildWaUrl(fullName,phone,school,'',true);
  }).catch(function(){
    if(errEl)errEl.style.display='block';
  });
}

function closePayOv(){
  _payOpen=false;
  var ov=document.getElementById('axp-pay-ov');
  if(ov)ov.classList.remove('axp-show');
}


function handlePayNow(){
  if(!payCfg()){
    axpAlert(window.AXP_PAYCFG.errorText);
    window.AXP_PAYCFG.load(true).then(function(){window.AXP_PAYCFG.apply(document.getElementById('axp-pay-ov'));}).catch(function(){});
    return;
  }
  var user=getUser();
  var profile=getProfile();
  var fullName=(profile&&profile.fullName)||(user&&user.name)||'User';
  var phone=(profile&&profile.phone)||'';
  var school=(profile&&profile.school)||'';

  _currentPayId=generatePayId();
  _currentWaUrl=buildWaUrl(fullName,phone,school,_currentPayId,false);

  var idBox=document.getElementById('axp-pay-id-box');
  var idVal=document.getElementById('axp-pay-id-val');
  var sentBox=document.getElementById('axp-pay-sent');
  var retryBtn=document.getElementById('axp-pay-retry-btn');
  var mainRow=document.getElementById('axp-pay-main-row');

  if(idVal)idVal.textContent=_currentPayId;
  if(idBox)idBox.style.display='block';
  if(sentBox)sentBox.style.display='flex';
  if(retryBtn)retryBtn.style.display='flex';
  if(mainRow)mainRow.style.display='none';

  var api=window.AXP_API_URL||'';
  var token=getToken();
  if(api&&token&&user){
    fetch(api,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},
      body:JSON.stringify({action:'requestPayment',token:token,
        method:'WhatsApp / Mobile Money',reference:_currentPayId,
        fullName:fullName,phone:phone,school:school,email:user.email||'',
        notes:'Payment ID '+_currentPayId})
    }).catch(function(){});
  }
  setTimeout(function(){window.open(_currentWaUrl,'_blank');},400);
}

function handleSupport(){
  if(_currentSupportUrl)window.open(_currentSupportUrl,'_blank');
}
function handleRetry(){
  if(_currentWaUrl)window.open(_currentWaUrl,'_blank');
}


function syncBadge(profile){
  var active=isFullyActive(profile);
  var badge=document.getElementById('axp-s-badge');
  var badgeIcon=document.getElementById('axp-s-badge-icon');
  var badgeText=document.getElementById('axp-s-badge-text');
  var info=document.getElementById('axp-s-info');
  var infoText=document.getElementById('axp-s-info-text');
  var hdrIcon=document.getElementById('axp-s-hdr-icon');
  var title=document.getElementById('axp-s-title');
  var sub=document.getElementById('axp-s-sub');
  var paidUntilEl=document.getElementById('axp-s-paid-until');

  if(active){
    if(badge)badge.classList.add('axp-active');
    if(badgeIcon)badgeIcon.className='bi bi-check-circle-fill';
    if(badgeText)badgeText.textContent='Account Active';
    if(info)info.className='axp-info axp-info-ok';
    if(infoText)infoText.innerHTML='<strong>Your account is fully activated!</strong> You now have full access.';
    if(hdrIcon)hdrIcon.className='bi bi-shield-check-fill';
    var iw=document.querySelector('#axp-status-popup .axp-hdr-icon');
    if(iw)iw.style.background='#1e9e52';
    if(title)title.textContent='Account Activated';
    if(sub)sub.textContent='Your payment has been confirmed';
    var pu=(profile&&profile.paidUntil)?fmtDate(profile.paidUntil):'';
    if(paidUntilEl&&pu){paidUntilEl.style.display='block';paidUntilEl.textContent='Access until: '+pu;}
  }else{
    if(badge)badge.classList.remove('axp-active');
    if(badgeIcon)badgeIcon.className='bi bi-clock-fill';
    if(badgeText)badgeText.textContent='Pending Activation';
    if(info)info.className='axp-info';
    if(infoText)infoText.innerHTML='Your payment is being reviewed. Click <strong>Check Now</strong> to refresh from server.';
    if(hdrIcon)hdrIcon.className='bi bi-shield-lock-fill';
    var iw2=document.querySelector('#axp-status-popup .axp-hdr-icon');
    if(iw2)iw2.style.background='#4A3AFF';
    if(title)title.textContent='Account Status';
    if(sub)sub.textContent='Check whether your payment has been confirmed';
    if(paidUntilEl)paidUntilEl.style.display='none';
  }
}

function setText(id,val){var el=document.getElementById(id);if(el)el.textContent=val;}
function setLast(msg){var el=document.getElementById('axp-s-last');if(el)el.textContent=msg;}


function doCheck(){
  if(_checking)return;
  var token=getToken();
  var api=window.AXP_API_URL||'';

  if(!api||!token){
    setLast('Session not found \u2014 please sign in again.');
    resetCheckBtn();
    setTimeout(function(){
      closeStatusOv();
      if(typeof AUTH!=='undefined'&&AUTH.showAuthPopup) AUTH.showAuthPopup();
    }, 1200);
    return;
  }

  _checking=true;
  var btn=document.getElementById('axp-s-check-btn');
  var spin=document.getElementById('axp-s-spin');
  var lbl=document.getElementById('axp-s-check-lbl');
  if(btn){btn.disabled=true;btn.style.opacity='.65';}
  if(spin)spin.classList.add('axp-spin');
  if(lbl)lbl.textContent='Checking\u2026';

  fetch(api+'?action=checkSession&token='+encodeURIComponent(token))
    .then(function(r){return r.json();})
    .then(function(data){
      _checking=false;
      resetCheckBtn();
      if(data&&data.success&&data.profile){
        var profile=data.profile;
        try{localStorage.setItem('axp_profile',JSON.stringify(profile));}catch(e){}
        if(typeof AUTH!=='undefined'&&AUTH.getProfile){
          var cached=AUTH.getProfile();
          if(cached)Object.assign(cached,profile);
        }
        var active=isFullyActive(profile);
        syncBadge(profile);
        setLast('Last checked: '+new Date().toLocaleTimeString());
        if(active){ applySiteWideActive(profile); setTimeout(closeStatusOv,1500); }
        else { closeStatusOv(); setTimeout(openPayOv,400); }
      }else{
        setLast('Your session expired \u2014 please sign in again.');
        try{ if(typeof AUTH!=='undefined'&&AUTH.signOut) AUTH.signOut(); }catch(e){}
        setTimeout(function(){
          closeStatusOv();
          if(typeof AUTH!=='undefined'&&AUTH.showAuthPopup) AUTH.showAuthPopup();
        }, 1200);
      }
    })
    .catch(function(){
      _checking=false;
      resetCheckBtn();
      setLast('Network error \u2014 check your connection and try again.');
    });
}
function resetCheckBtn(){
  var btn=document.getElementById('axp-s-check-btn');
  var spin=document.getElementById('axp-s-spin');
  var lbl=document.getElementById('axp-s-check-lbl');
  if(btn){btn.disabled=false;btn.style.opacity='';}
  if(spin)spin.classList.remove('axp-spin');
  if(lbl)lbl.textContent='Check Now';
}


function applySiteWideActive(profile){
  try{localStorage.setItem('axp_profile',JSON.stringify(profile));}catch(e){}
  if(typeof AUTH!=='undefined'&&AUTH.getProfile){
    var cached=AUTH.getProfile();
    if(cached&&profile)Object.assign(cached,profile);
  }
  var badge=document.getElementById('statusBadge');
  if(badge){badge.className='nav-pill active-pill';badge.innerHTML='<i class="bi bi-check-circle-fill"></i><span class="badge-label"> Active</span>';}
  var sb=document.getElementById('settingAccBadge');
  var ss=document.getElementById('settingAccStatus');
  if(sb){sb.className='nav-pill active-pill';sb.textContent='Active';}
  if(ss)ss.textContent='Your account is fully activated.';
  var payBar=document.getElementById('paymentNoticeBar');
  var spb=document.getElementById('sidebarPayBox');
  if(payBar)payBar.classList.remove('show');
  if(spb)spb.style.display='none';
  var mainPayOv=document.getElementById('paymentOverlay');
  if(mainPayOv)mainPayOv.classList.remove('show');

  
  var pendingOv=document.getElementById('axp-pay-ov');
  if(pendingOv&&pendingOv.classList.contains('axp-show')){
    pendingOv.classList.remove('axp-show');
    if(typeof _payOpen!=='undefined') _payOpen=false;
  }

  var floatBtn=document.getElementById('axp-float');
  if(floatBtn){floatBtn.classList.remove('axp-float-show');floatBtn.style.display='none';}
  var rcWrap=document.getElementById('axp-recheck-wrap');
  if(rcWrap)rcWrap.classList.remove('axp-rc-wrap-show');
  if(_timer){clearInterval(_timer);_timer=null;}
  sessionStorage.removeItem('axp_payment_shown');
  showToast('Your account has been activated! Enjoy full access.','success');
}


function showToast(msg,type){
  var bg=type==='success'?'#1e9e52':'#b45309';
  var icon=type==='success'?'bi-check-circle-fill':'bi-exclamation-triangle-fill';
  var t=document.createElement('div');
  t.setAttribute('data-axp-safe','1');
  t.style.cssText=[
    'position:fixed!important;bottom:24px!important;left:50%!important;',
    'transform:translateX(-50%)!important;',
    'background:'+bg+'!important;color:#fff!important;',
    'padding:10px 18px!important;font-size:.76rem!important;font-weight:700!important;',
    'z-index:2147483647!important;',
    'border-radius:0!important;',
    'font-family:"Space Grotesk",Arial,sans-serif!important;',
    'display:flex!important;align-items:center!important;gap:7px!important;',
    'min-width:220px!important;justify-content:center!important;white-space:nowrap!important;',
  ].join('');
  t.innerHTML='<i class="bi '+icon+'"></i> '+msg;
  document.body.appendChild(t);
  setTimeout(function(){
    t.style.transition='opacity .5s';
    t.style.opacity='0';
    setTimeout(function(){if(t.parentNode)t.parentNode.removeChild(t);},500);
  },4000);
}


function startBg(){
  if(_timer)return;
  _timer=setInterval(function(){
    var token=getToken();
    var api=window.AXP_API_URL||'';
    if(!token||!api)return;
    var p=getProfile();
    if(isFullyActive(p)){clearInterval(_timer);_timer=null;return;}
    fetch(api+'?action=checkSession&token='+encodeURIComponent(token))
      .then(function(r){return r.json();})
      .then(function(data){
        if(data&&data.profile){
          try{localStorage.setItem('axp_profile',JSON.stringify(data.profile));}catch(e){}
          if(typeof AUTH!=='undefined'&&AUTH.getProfile){
            var cached=AUTH.getProfile();
            if(cached)Object.assign(cached,data.profile);
          }
          if(isFullyActive(data.profile)){
            applySiteWideActive(data.profile);
            syncBadge(data.profile);
          }
        }
      })
      .catch(function(){});
  },CHECK_INTERVAL);
}


function maybeShow(){
  injectAll();
  var user=getUser();
  if(!user)return;
  if(isFullyActive(getProfile()))return;
  var fb=document.getElementById('axp-float');
  if(fb){
    fb.style.removeProperty('display');
    fb.classList.add('axp-float-show');
  }
  startBg();
}

function recheckOnReturn(){
  var user=getUser();
  if(!user||isFullyActive(getProfile()))return;
  if(typeof AUTH==='undefined'||!AUTH.refreshProfile)return;
  AUTH.refreshProfile(function(){
    var p=getProfile();
    if(isFullyActive(p)){
      try{localStorage.setItem('axp_profile',JSON.stringify(p));}catch(e){}
      applySiteWideActive(p);syncBadge(p);
    }
  });
}
document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible')recheckOnReturn();});
window.addEventListener('focus',recheckOnReturn);

function init(){
  setTimeout(maybeShow,3500);
  var _lu='';
  setInterval(function(){
    var u=getUser();
    var uid=u?u.email:'';
    if(uid!==_lu){
      _lu=uid;
      if(uid){
        setTimeout(maybeShow,1000);
      }else{
        var fb=document.getElementById('axp-float');
        if(fb)fb.classList.remove('axp-float-show');
        if(_timer){clearInterval(_timer);_timer=null;}
      }
    }
  },2000);
}

window.AXP_STATUS={open:openStatusOv,close:closeStatusOv,openPayment:openPayOv,check:doCheck};

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}
else{init();}

})();
  </script>

  <script>
(function () {
  'use strict';

  const DICT = {
    school:                   { en: 'School Name',                      sw: 'Jina la Shule' },
    schoolname:               { en: 'School Name',                      sw: 'Jina la Shule' },
    teachername:              { en: "Teacher's Name",                   sw: 'Jina la Mwalimu' },
    teacher:                  { en: "Teacher's Name",                   sw: 'Jina la Mwalimu' },
    district:                 { en: 'District',                         sw: 'Wilaya' },
    dateoption:               { en: 'Date Option',                      sw: 'Chaguo la Tarehe' },
    date:                     { en: 'Date',                             sw: 'Tarehe' },
    hourCodes:                { en: 'Starting Hour',                    sw: 'Saa ya Kuanza' },
    mincodes:                 { en: 'Starting Minutes',                 sw: 'Dakika za Kuanza' },
    subject:                  { en: 'Subject',                          sw: 'Somo' },
    classes:                  { en: 'Class',                            sw: 'Darasa' },
    streams:                  { en: 'Stream',                           sw: 'Mkondo' },
    period:                   { en: 'Number of Periods',                sw: 'Idadi ya Vipindi' },
    custominutes:             { en: 'Total Minutes',                    sw: 'Jumla ya Dakika' },
    periodtype:               { en: 'Period Type',                      sw: 'Aina ya Kipindi' },
    distributiontype:         { en: 'Session Type',                     sw: 'Aina ya Kikao' },
    customtotalminutes:       { en: 'Total Minutes',                    sw: 'Jumla ya Dakika' },
    introminutes:             { en: 'Introduction Minutes',             sw: 'Dakika za Utangulizi' },
    developmentminutes:       { en: 'Development Minutes',              sw: 'Dakika za Maendeleo' },
    designminutes:            { en: 'Design Minutes',                   sw: 'Dakika za Kubuni' },
    realizationminutes:       { en: 'Realization Minutes',              sw: 'Dakika za Utekelezaji' },
    topiclesson:              { en: 'Topic',                            sw: 'Mada Kuu' },
    complesson:               { en: 'Competence',                       sw: 'Uwezo' },
    mainlesson:               { en: 'Main Lesson / Activity',           sw: 'Somo / Shughuli Kuu' },
    specificlesson:           { en: 'Specific Activity',                sw: 'Shughuli Mahususi' },
    tlmaterials:              { en: 'Teaching & Learning Materials',    sw: 'Vifaa vya Kufundishia na Kujifunzia' },
    reflesson:                { en: 'Reference',                        sw: 'Marejeo' },
    studentsoption:           { en: 'Students Option',                  sw: 'Chaguo la Wanafunzi' },
    femalereg:                { en: 'Registered Girls',                 sw: 'Wasichana Waliojisajili' },
    malereg:                  { en: 'Registered Boys',                  sw: 'Wavulana Waliojisajili' },
    femalepres:               { en: 'Girls Present',                    sw: 'Wasichana Waliopo' },
    malepres:                 { en: 'Boys Present',                     sw: 'Wavulana Waliopo' },
    wrdimp1:                  { en: 'Introduction Type',                sw: 'Aina ya Utangulizi' },
    wrdimp2:                  { en: 'Action Word',                      sw: 'Neno la Kitendo' },
    remarkoption:             { en: 'Remarks Option',                   sw: 'Chaguo la Maoni' },
    customremark:             { en: 'Your Remarks',                     sw: 'Maoni Yako' },
    name:                     { en: 'Name',                             sw: 'Jina' },
    title:                    { en: 'Title',                            sw: 'Kichwa' },
    description:              { en: 'Description',                      sw: 'Maelezo' },
    notes:                    { en: 'Notes',                            sw: 'Maelezo ya Ziada' },
    remarks:                  { en: 'Remarks',                          sw: 'Maoni' },
    reference:                { en: 'Reference',                        sw: 'Marejeo' },
    references:               { en: 'References',                       sw: 'Marejeo' },
    materials:                { en: 'Materials',                        sw: 'Vifaa' },
    resources:                { en: 'Resources',                        sw: 'Rasilimali' },
    assessment:               { en: 'Assessment',                       sw: 'Tathmini' },
    objectives:               { en: 'Learning Objectives',              sw: 'Malengo ya Ujifunzaji' },
    outcomes:                 { en: 'Learning Outcomes',                sw: 'Matokeo ya Ujifunzaji' },
    activity:                 { en: 'Activity',                         sw: 'Shughuli' },
    activities:               { en: 'Activities',                       sw: 'Shughuli' },
    introduction:             { en: 'Introduction',                     sw: 'Utangulizi' },
    methodology:              { en: 'Teaching Methods',                 sw: 'Mbinu za Kufundishia' },
    homework:                 { en: 'Homework / Assignment',            sw: 'Kazi ya Nyumbani' },
  };

  function tlmOptions(lg) {
    if (window.AXP_TLM) return window.AXP_TLM.options(lg);
    if (window.console) console.warn('AXP_TLM missing: the browser is still using an old lessonplannew00038.js (clear the jsDelivr cache).');
    return [];
  }

  const UI = {
    en: {
      welcomeIntro:    'Hello! <i class="bi bi-emoji-smile"></i> I am your **AcademixPoint Assistant**. I will guide you step-by-step through building your Lesson Plan. Choose your language to begin:',
      langChosen:      'English selected. Let\'s begin! <i class="bi bi-mortarboard-fill"></i>',
      blankOption:     '\u2014 Leave blank \u2014',
      customWrite:     'Type my own\u2026',
      submitBtn:       'Send',
      typeHere:        'Type here\u2026',
      tlmInstruction:  'Tap to select one or more materials. Tap again to deselect. Then tap **Done** when finished.',
      tlmDoneBtn:      'Done \u2014 use selected materials',
      tlmCustomHint:   'Type a material name and press Enter or Add:',
      tlmAddBtn:       'Add',
      tlmNone:         'Nothing selected yet. Tap items above.',
      skipBtn:         'Skip this field',
      backBtnLabel:    'Back',
      completeMsg:     '<i class="bi bi-check-circle-fill" style="color:#1e9e52;"></i> All done! Every field has been filled. You can now **close this assistant** and click **"Create Lesson Plan"** on the form to generate your PDF.',
      closeBtnLabel:   'Close Assistant',
      backConfirm:     'Going back to **{field}**\u2026',
      leftBlank:       'Left blank',
      advancingStep:   '<i class="bi bi-arrow-right-circle-fill" style="color:var(--accent,#4a3aff);"></i> Moving to Step **{n}**\u2026',
      selectQ: [
        'Which **{field}** applies to this lesson?',
        'Please choose the correct **{field}**.',
        'Select the **{field}** from the options below.',
        'What is the **{field}** for this lesson?',
        'Pick the appropriate **{field}**.',
      ],
      textQ: [
        'Please enter the **{field}**.',
        'What is the **{field}** for this lesson?',
        'Type the **{field}** in the box below.',
        'Provide the **{field}** to continue.',
        'Fill in the **{field}**.',
      ],
      numberQ: [
        'How many for **{field}**?',
        'Enter a number for **{field}**.',
        'What is the **{field}** count?',
      ],
      dateQ: [
        'What **{field}** should be recorded?',
        'Pick the **{field}** for this lesson.',
        'Enter the **{field}**.',
      ],
      tlmQ: [
        'Which **Teaching & Learning Materials** will you use for this lesson?',
        'Select the **T&L Materials** needed \u2014 you can pick multiple.',
        'What **resources and materials** are required? Select all that apply.',
        'Pick the **learning materials** for this lesson \u2014 multiple selections allowed.',
      ],
    },
    sw: {
      welcomeIntro:    'Habari! <i class="bi bi-emoji-smile"></i> Mimi ni **Msaidizi wa AcademixPoint**. Nitakuongoza hatua kwa hatua kuunda Andalio la Somo lako. Chagua lugha yako ili tuanze:',
      langChosen:      'Kiswahili kimechaguliwa. Tuanze! <i class="bi bi-mortarboard-fill"></i>',
      blankOption:     '\u2014 Wacha wazi \u2014',
      customWrite:     'Andika mwenyewe\u2026',
      submitBtn:       'Tuma',
      typeHere:        'Andika hapa\u2026',
      tlmInstruction:  'Gusa kuchagua vifaa moja au zaidi. Gusa tena kuondoa uchaguzi. Kisha bonyeza **Imekamilika** ukimaliza.',
      tlmDoneBtn:      'Imekamilika \u2014 tumia vifaa vilivyochaguliwa',
      tlmCustomHint:   'Andika jina la kifaa na ubonyeze Enter au Ongeza:',
      tlmAddBtn:       'Ongeza',
      tlmNone:         'Hakuna kilichochaguliwa bado. Gusa vifaa hapo juu.',
      skipBtn:         'Ruka sehemu hii',
      backBtnLabel:    'Rudi Nyuma',
      completeMsg:     '<i class="bi bi-check-circle-fill" style="color:#1e9e52;"></i> Imekamilika! Sehemu zote zimejazwa. Unaweza sasa **kufunga msaidizi huu** na kubonyeza **"Create Lesson Plan"** kwenye fomu ili kupata PDF yako.',
      closeBtnLabel:   'Funga Msaidizi',
      backConfirm:     'Ninarudi kwenye **{field}**\u2026',
      leftBlank:       'Imeachwa wazi',
      advancingStep:   '<i class="bi bi-arrow-right-circle-fill" style="color:var(--accent,#4a3aff);"></i> Inaendelea hadi Hatua ya **{n}**\u2026',
      selectQ: [
        '**{field}** ipi inayofaa somo hili?',
        'Tafadhali chagua **{field}** sahihi.',
        'Chagua **{field}** kutoka kwenye orodha hapa chini.',
        '**{field}** ya somo hili ni ipi?',
        'Bainisha **{field}** inayofaa.',
      ],
      textQ: [
        'Tafadhali ingiza **{field}**.',
        '**{field}** ya somo hili ni nini?',
        'Andika **{field}** katika kisanduku hapa chini.',
        'Toa **{field}** ili tuendelee.',
        'Jaza **{field}**.',
      ],
      numberQ: [
        'Ni ngapi kwa **{field}**?',
        'Ingiza nambari ya **{field}**.',
        '**{field}** ni ngapi?',
      ],
      dateQ: [
        '**{field}** ipi iandikwe?',
        'Chagua **{field}** ya somo hili.',
        'Ingiza **{field}**.',
      ],
      tlmQ: [
        '**Vifaa vya Kufundishia na Kujifunzia** gani vitatumika katika somo hili?',
        'Chagua **Vifaa vya Kufundishia** vinavyohitajika \u2014 unaweza kuchagua zaidi ya kimoja.',
        '**Rasilimali na vifaa** gani vinahitajika? Chagua vyote vinavyofaa.',
        'Bainisha **vifaa vya ujifunzaji** vya somo hili \u2014 uchaguzi wa vingi unaruhusiwa.',
      ],
    },
  };

  let lang = 'en';
  let qCounters = { select: 0, text: 0, number: 0, date: 0, tlm: 0 };
  let processedElements = new Set();
  let historyStack = [];
  let tlmSelected = new Set();
  let _advancing = false;

  const chatTrigger  = document.getElementById('axp-chat-trigger');
  const chatWidget   = document.getElementById('axp-chat-widget');
  const chatLog      = document.getElementById('chat-widget-log');
  const chatControls = document.getElementById('chat-widget-controls');
  const chatNavBar   = document.getElementById('chat-navigation-bar');
  const chatBackBtn  = document.getElementById('chat-back-btn');

  if (!chatTrigger || !chatWidget || !chatLog || !chatControls) return;

  function scrollBottom() {
    requestAnimationFrame(() => { chatLog.scrollTop = chatLog.scrollHeight; });
  }

  function bold(text) {
    return String(text || '').replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--navy,#0a192f)">$1</strong>');
  }

  function appendBot(text) {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;justify-content:flex-start;width:100%;margin-bottom:6px;';
    const bub = document.createElement('div');
    bub.style.cssText = 'padding:9px 12px;font-size:0.8rem;line-height:1.55;max-width:90%;background:var(--surface,#fff);color:var(--text,#1a1a2e);border:1px solid var(--border,#e2e8f0);border-left:3px solid var(--accent,#4a3aff);';
    bub.innerHTML = bold(text);
    row.appendChild(bub);
    chatLog.appendChild(row);
    scrollBottom();
  }

  function appendUser(text, icon) {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;justify-content:flex-end;width:100%;margin-bottom:6px;';
    const bub = document.createElement('div');
    bub.style.cssText = 'padding:8px 12px;font-size:0.8rem;line-height:1.5;max-width:90%;background:var(--accent,#4a3aff);color:#fff;display:flex;align-items:center;gap:6px;flex-wrap:wrap;';
    if (icon) {
      const i = document.createElement('i');
      i.className = icon;
      i.style.flexShrink = '0';
      bub.appendChild(i);
    }
    bub.appendChild(document.createTextNode(text));
    row.appendChild(bub);
    chatLog.appendChild(row);
    scrollBottom();
  }

  function translateField(rawLabel, id) {
    const key = (id || rawLabel || '').toLowerCase().replace(/[\s_\-*:()]/g, '');
    if (DICT[key]) return DICT[key][lang];
    return (rawLabel || id || 'field').replace(/[*:]/g, '').trim();
  }

  function pickQ(type, fieldLabel) {
    const pool = UI[lang][type + 'Q'];
    if (!pool) return fieldLabel;
    const idx = qCounters[type] % pool.length;
    qCounters[type]++;
    return pool[idx].replace(/\{field\}/g, fieldLabel);
  }

  function getTotalSteps() {
    const indicators = document.querySelectorAll('.step-indicator[data-step]');
    if (indicators.length) return indicators.length;
    const stages = document.querySelectorAll('.form-content .step[data-step], .step[data-step]');
    return stages.length || 5;
  }

  function getCurrentStepNumber() {
    const active = document.querySelector('.step-indicator.active');
    if (active) return parseInt(active.getAttribute('data-step')) || 1;
    const stages = document.querySelectorAll('.form-content .step[data-step], .step[data-step]');
    for (let i = 0; i < stages.length; i++) {
      if (stages[i].classList.contains('active')) return i + 1;
    }
    return 1;
  }

  function clickNextBtn() {
    const btn = document.getElementById('nextBtn');
    if (btn && btn.style.display !== 'none' && !btn.disabled) {
      btn.click();
      return true;
    }
    return false;
  }

  function isElVisible(el) {
    if (!el || el.type === 'hidden' || el.disabled) return false;
    let node = el;
    while (node && node !== document.body) {
      const cs = window.getComputedStyle(node);
      if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') return false;
      node = node.parentElement;
    }
    return true;
  }

  function getLabelText(field) {
    if (field.id) {
      const lbl = document.querySelector(`label[for="${field.id}"]`);
      if (lbl) return lbl.innerText.replace(/[*:\n]/g, '').trim();
    }
    const wrapLbl = field.closest('label');
    if (wrapLbl) return wrapLbl.innerText.replace(/[*:\n]/g, '').replace(field.value || '', '').trim();
    let sib = field.previousElementSibling;
    while (sib) {
      if (sib.tagName === 'LABEL') return sib.innerText.replace(/[*:\n]/g, '').trim();
      sib = sib.previousElementSibling;
    }
    return field.getAttribute('aria-label') || field.placeholder || field.name || field.id || 'field';
  }

  function findUnprocessedFieldInCurrentStep() {
  const activeStep = document.querySelector('.form-content .step.active, .step.active');
  if (!activeStep) return null;

  const fields = activeStep.querySelectorAll(
    'select, input:not([type=checkbox]):not([type=radio]):not([type=submit]):not([type=button]), textarea'
  );

  for (const field of fields) {
    if (['tlmSearch', 'tlmManualInput'].includes(field.id)) continue;
    if (processedElements.has(field)) continue;

    if (field.id === 'tlmaterials') {
      return {
        element:  field,
        rawLabel: 'Teaching & Learning Materials',
        label:    translateField('Teaching & Learning Materials', 'tlmaterials'),
        stepNum:  getCurrentStepNumber(),
        isTLM:    true,
      };
    }

    if (!isElVisible(field)) continue;

    const rawLabel = getLabelText(field);
    return {
      element:  field,
      rawLabel,
      label:    translateField(rawLabel, field.id || field.name),
      stepNum:  getCurrentStepNumber(),
      isTLM:    false,
    };
  }
  return null;
}

  function advanceToNextStep(callback) {
    if (_advancing) return;
    const currentStep = getCurrentStepNumber();
    const totalSteps  = getTotalSteps();

    if (currentStep >= totalSteps) {
      callback(null);
      return;
    }

    _advancing = true;
    const nextStepNum = currentStep + 1;
    appendBot(UI[lang].advancingStep.replace('{n}', String(nextStepNum)));

    const clicked = clickNextBtn();
    if (!clicked) {
      _advancing = false;
      callback(null);
      return;
    }

    let attempts = 0;
    const poll = setInterval(() => {
      attempts++;
      const newStep = getCurrentStepNumber();
      if (newStep === nextStepNum || attempts > 20) {
        clearInterval(poll);
        _advancing = false;
        setTimeout(() => {
          const field = findUnprocessedFieldInCurrentStep();
          if (field) {
            callback(field);
          } else if (getCurrentStepNumber() < getTotalSteps()) {
            advanceToNextStep(callback);
          } else {
            callback(null);
          }
        }, 150);
      }
    }, 100);
  }

  function getNextField(callback) {
    const field = findUnprocessedFieldInCurrentStep();
    if (field) {
      callback(field);
      return;
    }

    const currentStep = getCurrentStepNumber();
    const totalSteps  = getTotalSteps();

    if (currentStep >= totalSteps) {
      callback(null);
      return;
    }

    advanceToNextStep(callback);
  }

  function clearControls() { chatControls.innerHTML = ''; }

  function renderSelectControl(fieldObj) {
    const { element } = fieldObj;
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;flex-direction:column;gap:3px;max-height:190px;overflow-y:auto;padding:2px 0;';

    let opts = [];
    if (element.tagName === 'SELECT') {
      opts = Array.from(element.options).map(o => ({ value: o.value, text: (o.innerText || o.value || '').trim() }));
    } else if (element.list) {
      opts = Array.from(element.list.options).map(o => ({ value: o.value || '', text: o.value || '' }));
    }

    const seen = new Set();
    opts = opts.filter(o => { if (seen.has(o.value)) return false; seen.add(o.value); return true; });

    opts.forEach(opt => {
      const empty = !opt.value || opt.value.trim() === '' || opt.value.toLowerCase() === 'none';
      if (empty && element.required) return;
      const display = empty ? UI[lang].blankOption : opt.text;
      const icon    = empty ? 'bi bi-dash-circle' : 'bi bi-check2-circle';
      const btn = makeOptBtn(display, icon);
      btn.onclick = () => commitField(fieldObj, opt.value, display, icon);
      wrapper.appendChild(btn);
    });

    if (element.tagName === 'INPUT' && element.list) {
      wrapper.appendChild(makeCustomBtn(fieldObj));
    }
    if (!element.required) wrapper.appendChild(makeSkipBtn(fieldObj));

    chatControls.appendChild(wrapper);
    scrollBottom();
  }

  function renderTLMControl(fieldObj) {
    tlmSelected.clear();

    const hiddenTLM = document.getElementById('tlmaterials');
    if (hiddenTLM) {
      hiddenTLM.value = '';
      hiddenTLM.dispatchEvent(new Event('input', { bubbles: true }));
      hiddenTLM.dispatchEvent(new Event('change', { bubbles: true }));
    }

    const tlmChipsWrap = document.getElementById('tlmChips');
    const tlmPlaceholder = document.getElementById('tlmPlaceholder');
    if (tlmChipsWrap) {
      tlmChipsWrap.querySelectorAll('.tlm-chip').forEach(c => c.remove());
    }
    if (tlmPlaceholder) tlmPlaceholder.style.display = '';

    const tlmGrid = document.getElementById('tlmGrid');
    if (tlmGrid) {
      tlmGrid.querySelectorAll('.tlm-item.checked').forEach(item => {
        item.classList.remove('checked');
      });
    }

    const selectedSubject = (document.getElementById('subject') || {}).value || '';
const isSwahiliSubj = [
  "Kiswahili",
  "Fasihi ya Kiswahili", 
  "Historia Ya Tanzania na Maadili",
  "Elimu ya Dini ya Kiislam"
].includes(selectedSubject);
const opts = tlmOptions(isSwahiliSubj ? 'sw' : 'en');

    const instr = document.createElement('div');
    instr.style.cssText = 'font-size:0.72rem;color:var(--text2,#3a3a5c);line-height:1.5;margin-bottom:6px;padding:0 2px;';
    instr.innerHTML = bold(UI[lang].tlmInstruction);
    chatControls.appendChild(instr);

    const grid = document.createElement('div');
    grid.id = 'bot-tlm-grid';
    grid.style.cssText = 'display:flex;flex-wrap:wrap;gap:5px;max-height:160px;overflow-y:auto;padding:2px;margin-bottom:8px;';

    opts.forEach(opt => {
      const chip = document.createElement('button');
      chip.setAttribute('data-tlm-val', opt.value);
      chip.style.cssText = chipStyle(false);
      chip.innerHTML = `<i class="bi bi-tools" style="font-size:0.7rem;"></i> ${opt.label}`;
      chip.onclick = () => toggleTLMChip(opt.value, chip);
      grid.appendChild(chip);
    });
    chatControls.appendChild(grid);

    const summary = document.createElement('div');
    summary.id = 'bot-tlm-summary';
    summary.style.cssText = 'font-size:0.7rem;color:var(--text3,#7a7a9a);min-height:20px;margin-bottom:6px;padding:0 2px;';
    chatControls.appendChild(summary);
    updateTLMSummary(summary);

    const customRow = document.createElement('div');
    customRow.style.cssText = 'display:flex;gap:5px;align-items:center;margin-bottom:6px;';
    const customHint = document.createElement('span');
    customHint.style.cssText = 'font-size:0.66rem;color:var(--text3);white-space:nowrap;';
    customHint.textContent = UI[lang].tlmCustomHint;
    const customInp = document.createElement('input');
    customInp.type = 'text';
    customInp.placeholder = lang === 'sw' ? 'Aina ya kifaa\u2026' : 'Material name\u2026';
    customInp.style.cssText = 'flex:1;font-size:0.75rem;padding:5px 7px;border:1px solid var(--border,#e2e8f0);background:var(--surface2);color:var(--text);outline:none;';
    const addBtn = document.createElement('button');
    addBtn.textContent = UI[lang].tlmAddBtn;
    addBtn.style.cssText = 'font-size:0.72rem;padding:5px 10px;background:var(--accent,#4a3aff);color:#fff;border:none;cursor:pointer;font-weight:700;';
    const addCustom = () => {
      const v = customInp.value.trim();
      if (!v) return;
      tlmSelected.add(v);
      customInp.value = '';
      const chip = document.createElement('button');
      chip.setAttribute('data-tlm-val', v);
      chip.style.cssText = chipStyle(true);
      chip.innerHTML = `<i class="bi bi-plus-circle" style="font-size:0.7rem;"></i> ${v}`;
      chip.onclick = () => toggleTLMChip(v, chip);
      grid.appendChild(chip);
      updateTLMSummary(summary);
    };
    addBtn.onclick = addCustom;
    customInp.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); addCustom(); } };
    customRow.appendChild(customHint);
    customRow.appendChild(customInp);
    customRow.appendChild(addBtn);
    chatControls.appendChild(customRow);

    const doneBtn = document.createElement('button');
    doneBtn.style.cssText = 'width:100%;display:flex;align-items:center;justify-content:center;gap:6px;font-size:0.78rem;font-weight:800;padding:10px;background:var(--green,#1e9e52);color:#fff;border:none;cursor:pointer;letter-spacing:0.3px;text-transform:uppercase;';
    doneBtn.innerHTML = `<i class="bi bi-check-circle-fill"></i> ${UI[lang].tlmDoneBtn}`;
    doneBtn.onclick = () => {
      const vals = Array.from(tlmSelected).join(', ');
      if (!vals) {
        const warn = document.getElementById('bot-tlm-warn');
        if (!warn) {
          const w = document.createElement('div');
          w.id = 'bot-tlm-warn';
          w.style.cssText = 'font-size:0.7rem;color:#e4405f;padding:4px 6px;margin-bottom:4px;';
          w.innerHTML = lang === 'sw'
            ? '<i class="bi bi-exclamation-triangle-fill"></i> Tafadhali chagua angalau kifaa kimoja.'
            : '<i class="bi bi-exclamation-triangle-fill"></i> Please select at least one material.';
          doneBtn.parentNode.insertBefore(w, doneBtn);
        }
        return;
      }
      syncToRealTLMWidget(vals);
      commitField(fieldObj, vals, vals, 'bi bi-tools');
    };
    chatControls.appendChild(doneBtn);

    if (!fieldObj.element.required) chatControls.appendChild(makeSkipBtn(fieldObj));
    scrollBottom();
  }

  function syncToRealTLMWidget(csvValue) {
    const hiddenInput = document.getElementById('tlmaterials');
    if (!hiddenInput) return;

    hiddenInput.value = csvValue;
    hiddenInput.dispatchEvent(new Event('input', { bubbles: true }));
    hiddenInput.dispatchEvent(new Event('change', { bubbles: true }));

    const tlmChipsWrap  = document.getElementById('tlmChips');
    const tlmPlaceholder = document.getElementById('tlmPlaceholder');
    const tlmGridEl      = document.getElementById('tlmGrid');

    if (tlmChipsWrap) {
      tlmChipsWrap.querySelectorAll('.tlm-chip').forEach(c => c.remove());

      if (csvValue) {
        if (tlmPlaceholder) tlmPlaceholder.style.display = 'none';
        csvValue.split(',').forEach(val => {
          const v = val.trim();
          if (!v) return;
          const chip = document.createElement('span');
          chip.className = 'tlm-chip';
          chip.innerHTML = v + '<button class="tlm-chip-remove" title="Remove" type="button"><i class="bi bi-x-lg"></i></button>';
          chip.querySelector('.tlm-chip-remove').addEventListener('click', function () {
            chip.remove();
            const remaining = Array.from(tlmChipsWrap.querySelectorAll('.tlm-chip'))
              .map(c => c.childNodes[0].textContent.trim())
              .filter(Boolean);
            hiddenInput.value = remaining.join(', ');
            hiddenInput.dispatchEvent(new Event('input', { bubbles: true }));
            hiddenInput.dispatchEvent(new Event('change', { bubbles: true }));
            if (!remaining.length && tlmPlaceholder) tlmPlaceholder.style.display = '';
          });
          tlmChipsWrap.appendChild(chip);
        });
      } else {
        if (tlmPlaceholder) tlmPlaceholder.style.display = '';
      }
    }

    if (tlmGridEl && csvValue) {
      const selected = csvValue.split(',').map(v => v.trim().toLowerCase());
      tlmGridEl.querySelectorAll('.tlm-item').forEach(item => {
        const itemVal = (item.getAttribute('data-value') || '').toLowerCase();
        if (selected.includes(itemVal)) {
          item.classList.add('checked');
        }
      });
    }
    if (window.AXP_TLM) window.AXP_TLM.fromList(csvValue);
  }

  function chipStyle(active) {
    return active
      ? 'display:inline-flex;align-items:center;gap:4px;padding:4px 9px;font-size:0.72rem;font-weight:700;cursor:pointer;border:none;background:var(--accent,#4a3aff);color:#fff;transition:background 0.15s;'
      : 'display:inline-flex;align-items:center;gap:4px;padding:4px 9px;font-size:0.72rem;font-weight:600;cursor:pointer;border:1px solid var(--border2,#b8badd);background:var(--surface2,#eef0ff);color:var(--text,#1a1a2e);transition:background 0.15s;';
  }

  function toggleTLMChip(val, chipEl) {
    if (tlmSelected.has(val)) {
      tlmSelected.delete(val);
      chipEl.style.cssText = chipStyle(false);
    } else {
      tlmSelected.add(val);
      chipEl.style.cssText = chipStyle(true);
    }
    const warn = document.getElementById('bot-tlm-warn');
    if (warn) warn.remove();
    const summary = document.getElementById('bot-tlm-summary');
    if (summary) updateTLMSummary(summary);
  }

  function updateTLMSummary(summaryEl) {
    const arr = Array.from(tlmSelected);
    if (!arr.length) {
      summaryEl.style.color = 'var(--text3,#7a7a9a)';
      summaryEl.textContent = UI[lang].tlmNone;
    } else {
      summaryEl.style.color = 'var(--green,#1e9e52)';
      window.axpIconText(summaryEl, 'check-lg', arr.join(' \u00b7 '));
    }
  }

  function renderTextControl(fieldObj) {
    const { element } = fieldObj;
    const group = document.createElement('div');
    group.style.cssText = 'display:flex;gap:6px;align-items:stretch;';

    const isTA = element.tagName === 'TEXTAREA';
    const inp = document.createElement(isTA ? 'textarea' : 'input');
    if (!isTA) inp.type = (['number', 'date'].includes(element.type)) ? element.type : 'text';
    inp.placeholder = UI[lang].typeHere;
    inp.value = element.value || '';
    if (isTA) { inp.rows = 2; inp.style.resize = 'vertical'; }
    inp.style.cssText = (inp.style.cssText || '') + 'flex:1;font-size:0.78rem;padding:7px 9px;background:var(--surface2,#f1f5f9);border:1px solid var(--border,#e2e8f0);color:var(--text,#333);outline:none;';

    const sendBtn = document.createElement('button');
    sendBtn.innerHTML = `<span>${UI[lang].submitBtn}</span> <i class="bi bi-send-fill"></i>`;
    sendBtn.style.cssText = 'font-size:0.75rem;padding:7px 12px;background:var(--accent,#4a3aff);color:#fff;border:none;cursor:pointer;display:flex;align-items:center;gap:4px;white-space:nowrap;font-weight:700;';

    const submit = () => {
      const val = inp.value.trim();
      if (element.required && !val) { inp.style.borderColor = '#ef4444'; inp.focus(); return; }
      commitField(fieldObj, val, val || UI[lang].leftBlank, 'bi bi-chat-left-text');
    };
    if (!isTA) inp.onkeydown = e => { if (e.key === 'Enter') submit(); };
    sendBtn.onclick = submit;

    group.appendChild(inp);
    group.appendChild(sendBtn);
    chatControls.appendChild(group);
    if (!element.required) chatControls.appendChild(makeSkipBtn(fieldObj));
    inp.focus();
    scrollBottom();
  }
  
  function renderSpecificActivityControl(fieldObj) {
  var selectedSubject = (document.getElementById('subject') || {}).value || '';
  var subLang = (window.__axpIsSwahiliSubject && window.__axpIsSwahiliSubject(selectedSubject))
    ? 'sw' : 'en';

  var mainSel = document.getElementById('mainlesson');
  var mainText = mainSel
    ? (mainSel.tagName === 'SELECT'
        ? (mainSel.options[mainSel.selectedIndex]
            ? mainSel.options[mainSel.selectedIndex].text : '')
        : (mainSel.value || ''))
    : '';

  var classVal = (document.getElementById('classes') || {}).value || '';

  renderTextControl(fieldObj);

  if (!mainText || !selectedSubject || !classVal) return;

  var hint = document.createElement('div');
  hint.id = 'sa-chat-hint';
  hint.style.cssText = 'font-size:.7rem;color:var(--text3);font-weight:600;'
    + 'margin-bottom:5px;display:flex;align-items:center;gap:5px;';
  hint.innerHTML = '<i class="bi bi-arrow-repeat" style="animation:saSpin 1s linear infinite;'
    + 'color:var(--accent);"></i> '
    + (subLang === 'sw' ? 'Inapakia mapendekezo ya AI\u2026' : 'Loading AI suggestions\u2026');
  chatControls.insertBefore(hint, chatControls.firstChild);

  window.__axpFetchAISpecificActivities(selectedSubject, classVal, mainText)
    .then(function (result) {
      var hintEl = document.getElementById('sa-chat-hint');
      if (hintEl) hintEl.remove();

      if (!result.ok || !result.activities || !result.activities.length) return;

      var chipsLabel = document.createElement('div');
      chipsLabel.style.cssText = 'font-size:.7rem;color:var(--accent);font-weight:700;'
        + 'margin-bottom:5px;display:flex;align-items:center;gap:5px;';
      chipsLabel.innerHTML = '<i class="bi bi-stars"></i> '
        + (subLang === 'sw'
            ? 'Mapendekezo ya AI (bonyeza kutumia):'
            : 'AI suggestions \u2014 tap to use:');

      var chipsRow = document.createElement('div');
      chipsRow.style.cssText = 'display:flex;flex-wrap:wrap;gap:5px;margin-bottom:8px;';

      result.activities.forEach(function (s) {
        var chip = document.createElement('button');
        chip.type = 'button';
        chip.style.cssText = 'display:inline-flex;align-items:center;gap:4px;padding:5px 10px;'
          + 'font-size:.72rem;font-weight:600;cursor:pointer;border:1px solid var(--border2);'
          + 'background:var(--surface2);color:var(--text);font-family:var(--font);';
        chip.innerHTML = '<i class="bi bi-plus-circle" style="font-size:.65rem;'
          + 'color:var(--accent);"></i> '
          + s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
        chip.onclick = function () {
          commitField(fieldObj, s, s, 'bi bi-pencil-square');
        };
        chipsRow.appendChild(chip);
      });

      chatControls.insertBefore(chipsRow, chatControls.firstChild);
      chatControls.insertBefore(chipsLabel, chipsRow);
      scrollBottom();
    })
    .catch(function () {
      var hintEl = document.getElementById('sa-chat-hint');
      if (hintEl) hintEl.remove();
    });
}
  
  function makeOptBtn(label, icon) {
    const btn = document.createElement('button');
    btn.style.cssText = 'display:flex;align-items:center;gap:7px;text-align:left;font-size:0.78rem;padding:6px 9px;width:100%;background:var(--surface2,#f8fafc);border:1px solid var(--border,#e2e8f0);cursor:pointer;color:var(--text,#333);transition:background 0.12s;';
    btn.innerHTML = `<i class="${icon}" style="font-size:0.85rem;flex-shrink:0;color:var(--accent,#4a3aff);"></i><span style="line-height:1.35;">${label}</span>`;
    return btn;
  }

  function makeCustomBtn(fieldObj) {
    const btn = document.createElement('button');
    btn.style.cssText = 'display:flex;align-items:center;gap:6px;font-size:0.75rem;padding:6px 9px;width:100%;background:transparent;border:1px dashed var(--accent,#4a3aff);cursor:pointer;color:var(--accent,#4a3aff);margin-top:3px;font-weight:700;';
    btn.innerHTML = `<i class="bi bi-pencil-square"></i><span>${UI[lang].customWrite}</span>`;
    btn.onclick = () => { clearControls(); renderTextControl(fieldObj); };
    return btn;
  }

  function makeSkipBtn(fieldObj) {
    const btn = document.createElement('button');
    btn.style.cssText = 'display:flex;align-items:center;gap:6px;font-size:0.72rem;padding:5px 9px;width:100%;background:transparent;border:1px dashed var(--border,#e2e8f0);cursor:pointer;color:var(--text3,#888);margin-top:4px;';
    btn.innerHTML = `<i class="bi bi-skip-forward"></i><span>${UI[lang].skipBtn}</span>`;
    btn.onclick = () => commitField(fieldObj, '', UI[lang].leftBlank, 'bi bi-dash-circle');
    return btn;
  }

  function commitField(fieldObj, value, displayText, icon) {
    historyStack.push({
      element:   fieldObj.element,
      label:     fieldObj.label,
      stepNum:   fieldObj.stepNum,
      prevValue: fieldObj.element.value,
    });
    processedElements.add(fieldObj.element);

    fieldObj.element.value = value;
    ['input', 'change'].forEach(ev =>
      fieldObj.element.dispatchEvent(new Event(ev, { bubbles: true }))
    );

    appendUser(displayText, icon);
    clearControls();
    setTimeout(askNext, 380);
  }

  function askNext() {
    clearControls();
    chatNavBar.style.display = historyStack.length > 0 ? 'flex' : 'none';
    if (chatBackBtn) {
      chatBackBtn.innerHTML = `<i class="bi bi-arrow-left"></i> ${UI[lang].backBtnLabel}`;
    }

    getNextField(fieldObj => {
      if (!fieldObj) { handleComplete(); return; }

      let qText;
      if (fieldObj.isTLM) {
        const pool = UI[lang].tlmQ;
        qText = pool[qCounters.tlm % pool.length];
        qCounters.tlm++;
      } else if (fieldObj.element.tagName === 'SELECT' || (fieldObj.element.tagName === 'INPUT' && fieldObj.element.list)) {
        qText = pickQ('select', fieldObj.label);
      } else if (fieldObj.element.type === 'number') {
        qText = pickQ('number', fieldObj.label);
      } else if (fieldObj.element.type === 'date') {
        qText = pickQ('date', fieldObj.label);
      } else {
        qText = pickQ('text', fieldObj.label);
      }

      appendBot(qText);

if (fieldObj.isTLM) {
  renderTLMControl(fieldObj);
} else if (fieldObj.element.id === 'specificLesson') {
  renderSpecificActivityControl(fieldObj);
} else if (fieldObj.element.tagName === 'SELECT' || (fieldObj.element.tagName === 'INPUT' && fieldObj.element.list)) {
  renderSelectControl(fieldObj);
} else {
  renderTextControl(fieldObj);
}
    });
  }

  function handleComplete() {
    appendBot(UI[lang].completeMsg);
    chatNavBar.style.display = 'none';
    clearControls();

    const closeBtn = document.createElement('button');
    closeBtn.style.cssText = 'width:100%;display:flex;align-items:center;justify-content:center;gap:7px;font-size:0.8rem;font-weight:800;padding:11px;background:var(--navy,#0d1b2e);color:#fff;border:none;cursor:pointer;letter-spacing:0.4px;text-transform:uppercase;margin-top:4px;';
    closeBtn.innerHTML = `<i class="bi bi-x-circle-fill"></i> ${UI[lang].closeBtnLabel}`;
    closeBtn.onclick = () => {
      chatWidget.style.display = 'none';
      if (chatTrigger) chatTrigger.style.display = 'flex';
    };
    chatControls.appendChild(closeBtn);
    scrollBottom();
  }

  if (chatBackBtn) {
    chatBackBtn.onclick = () => {
      if (!historyStack.length) return;
      const prev = historyStack.pop();
      processedElements.delete(prev.element);
      prev.element.value = prev.prevValue;
      ['input', 'change'].forEach(ev =>
        prev.element.dispatchEvent(new Event(ev, { bubbles: true }))
      );
      appendBot(UI[lang].backConfirm.replace('{field}', prev.label));
      clearControls();
      setTimeout(askNext, 340);
    };
  }

  function injectLangToggle() {
    let tgl = document.getElementById('axp-lang-toggle');
    if (tgl) tgl.remove();
    tgl = document.createElement('button');
    tgl.id = 'axp-lang-toggle';
    tgl.title = 'Switch language / Badilisha lugha';
    tgl.style.cssText = 'font-size:0.7rem;padding:3px 9px;background:transparent;border:1px solid var(--border,#e2e8f0);cursor:pointer;color:var(--accent,#4a3aff);display:flex;align-items:center;gap:4px;font-weight:700;letter-spacing:0.5px;';
    tgl.innerHTML = `<i class="bi bi-translate"></i> ${lang === 'en' ? 'SW' : 'EN'}`;
    tgl.onclick = () => {
      lang = lang === 'en' ? 'sw' : 'en';
      qCounters = { select: 0, text: 0, number: 0, date: 0, tlm: 0 };
      tgl.innerHTML = `<i class="bi bi-translate"></i> ${lang === 'en' ? 'SW' : 'EN'}`;
      appendBot(lang === 'en' ? 'Switched to **English**. Continuing\u2026' : 'Imebadilishwa kwenda **Kiswahili**. Inaendelea\u2026');
      clearControls();
      setTimeout(askNext, 380);
    };
    chatNavBar.appendChild(tgl);
  }

  function initChat() {
    chatLog.innerHTML = '';
    clearControls();
    chatNavBar.style.display = 'none';
    processedElements.clear();
    historyStack = [];
    tlmSelected.clear();
    _advancing = false;
    qCounters = { select: 0, text: 0, number: 0, date: 0, tlm: 0 };
    lang = 'en';
    injectLangToggle();

    appendBot(UI.en.welcomeIntro);

    const row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:8px;';
    [
      { code: 'en', label: 'English', flag: 'gb' },
      { code: 'sw', label: 'Kiswahili', flag: 'tz' },
    ].forEach(choice => {
      const btn = document.createElement('button');
      btn.style.cssText = 'flex:1;font-size:0.8rem;padding:9px 8px;background:var(--surface2,#f8fafc);border:1px solid var(--border,#e2e8f0);cursor:pointer;display:flex;align-items:center;justify-content:center;gap:5px;font-weight:700;color:var(--text,#333);';
      btn.innerHTML = `<span class="axp-flag axp-flag-${choice.flag}"></span> ${choice.label}`;
      btn.onclick = () => {
        lang = choice.code;
        qCounters = { select: 0, text: 0, number: 0, date: 0, tlm: 0 };
        const tgl = document.getElementById('axp-lang-toggle');
        if (tgl) tgl.innerHTML = `<i class="bi bi-translate"></i> ${lang === 'en' ? 'SW' : 'EN'}`;
        appendUser(choice.label, 'bi bi-translate');
        clearControls();
        appendBot(UI[lang].langChosen);
        setTimeout(askNext, 420);
      };
      row.appendChild(btn);
    });
    chatControls.appendChild(row);
    scrollBottom();
  }

  chatTrigger.addEventListener('click', () => {
    chatWidget.style.display = 'flex';
    chatTrigger.style.display = 'none';
    scrollBottom();
  });

  const closeBtn = document.getElementById('close-chat-btn');
  if (closeBtn) closeBtn.addEventListener('click', () => {
    chatWidget.style.display = 'none';
    if (chatTrigger) chatTrigger.style.display = 'flex';
  });

  const resetBtn = document.getElementById('reset-chat-btn');
  if (resetBtn) resetBtn.addEventListener('click', initChat);

  setTimeout(initChat, 900);
})();
</script>
  
  <script>
(function () {
  'use strict';

  var SWAHILI_SUBJECTS = [
    'Kiswahili', 'Fasihi ya Kiswahili',
    'Historia Ya Tanzania na Maadili', 'Elimu ya Dini ya Kiislam'
  ];
  function isSwahiliSubject(s) { return SWAHILI_SUBJECTS.indexOf(s) !== -1; }

  var _memCache = {};

  function normKey(subject, classVal, mainActivity) {
    return [subject, classVal, mainActivity]
      .map(function (s) { return String(s || '').toLowerCase().replace(/\s+/g, ' ').trim(); })
      .join('||');
  }

  function fetchAIActivities(subject, classVal, mainActivity) {
    var key = normKey(subject, classVal, mainActivity);
    if (_memCache[key]) {
      return Promise.resolve({ ok: true, activities: _memCache[key] });
    }

    var apiUrl = window.AXP_API_URL || '';
    var token = (typeof AUTH !== 'undefined' && AUTH.getSessionToken) ? AUTH.getSessionToken() : '';

    if (!apiUrl) {
      console.warn('[SpecificActivities] window.AXP_API_URL is not set.');
      return Promise.resolve({ ok: false, reason: 'no-config', message: 'API not configured.' });
    }
    if (!token) {
      console.warn('[SpecificActivities] No session token.');
      return Promise.resolve({ ok: false, reason: 'no-token', message: 'Not signed in.' });
    }

   return fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'getSpecificActivities',
        token: token,
        subject: subject,
        classVal: classVal,
        mainActivity: mainActivity
      })
    })
      .then(function (r) {
        if (!r.ok) {
          return { ok: false, reason: 'http', message: 'HTTP ' + r.status };
        }
        return r.json().then(function (resp) {
          if (resp && resp.success && Array.isArray(resp.activities) && resp.activities.length) {
            _memCache[key] = resp.activities;
            return { ok: true, activities: resp.activities };
          }
          console.warn('[SpecificActivities] Backend returned no activities:', resp && resp.error);
          return { ok: false, reason: 'backend', message: (resp && resp.error) || 'No suggestions returned.', errorCode: resp && resp.errorCode };
        });
      })
      .catch(function (err) {
        console.error('[SpecificActivities] Network/fetch error:', err);
        return { ok: false, reason: 'network', message: 'Network error.' };
      });
  }

  var _sty = document.createElement('style');
  _sty.textContent = [
    '.sa-suggest-wrap{margin-top:7px;display:none;background:var(--surface2);',
      'border:1px solid var(--border);border-left:3px solid var(--accent);padding:8px 10px;}',
    '.sa-suggest-wrap.show{display:block;animation:fadeIn .2s ease;}',
    '.sa-suggest-wrap.sa-error{border-left-color:#c0392b;}',
    '.sa-suggest-label{font-size:.66rem;font-weight:700;color:var(--accent);',
      'text-transform:uppercase;letter-spacing:.6px;margin-bottom:6px;',
      'display:flex;align-items:center;gap:5px;}',
    '.sa-suggest-chips{display:flex;flex-wrap:wrap;gap:5px;}',
    '.sa-chip{display:inline-flex;align-items:center;gap:4px;background:var(--surface);',
      'border:1px solid var(--border2);color:var(--text2);font-size:.7rem;',
      'padding:5px 10px;cursor:pointer;font-family:var(--font);',
      'transition:background .12s,color .12s,border-color .12s;}',
    '',
    '.sa-chip i{font-size:.65rem;flex-shrink:0;}',
    '.sa-suggest-status{font-size:.68rem;color:var(--text3);display:flex;align-items:center;gap:5px;}',
    '.sa-suggest-status.sa-error-text{color:#c0392b;}',
    '.sa-suggest-status i.bi-arrow-repeat{animation:saSpin 1s linear infinite;}',
    '.sa-retry-link{margin-left:4px;color:var(--accent);text-decoration:underline;cursor:pointer;background:none;border:none;font-size:.68rem;padding:0;font-family:var(--font);}',
    '@keyframes saSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}',
  ].join('');
  document.head.appendChild(_sty);

  function ensureSuggestUI() {
    var specInput = document.getElementById('specificLesson');
    if (!specInput) return null;
    var existing = document.getElementById('saSuggestWrap');
    if (existing) return existing;
    var wrap = document.createElement('div');
    wrap.className = 'sa-suggest-wrap';
    wrap.id = 'saSuggestWrap';
    wrap.innerHTML =
      '<div class="sa-suggest-label">'
      + '<i class="bi bi-stars"></i>'
      + '<span id="saSuggestLabelText">AI suggestions (tap to use):</span>'
      + '</div>'
      + '<div class="sa-suggest-chips" id="saSuggestChips"></div>'
      + '<div class="sa-suggest-status" id="saSuggestStatus" style="display:none;"></div>';
    var fg = specInput.closest('.form-group') || specInput.parentNode;
    fg.appendChild(wrap);
    return wrap;
  }

  function renderChips(list) {
    var chipsEl = document.getElementById('saSuggestChips');
    var specInput = document.getElementById('specificLesson');
    if (!chipsEl || !specInput) return;
    chipsEl.innerHTML = '';
    list.forEach(function (s) {
      var chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'sa-chip';
      chip.innerHTML = '<i class="bi bi-plus-circle"></i> '
        + String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
      chip.addEventListener('click', function () {
        specInput.value = s;
        specInput.dispatchEvent(new Event('input', { bubbles: true }));
        specInput.dispatchEvent(new Event('change', { bubbles: true }));
        specInput.classList.remove('error');
        var err = specInput.parentElement.querySelector('.error-message');
        if (err) err.classList.remove('show');
        specInput.focus();
      });
      chipsEl.appendChild(chip);
    });
  }

  function setStatus(mode, text, onRetry) {
    var statusEl = document.getElementById('saSuggestStatus');
    if (!statusEl) return;
    if (!text) {
      statusEl.style.display = 'none';
      statusEl.className = 'sa-suggest-status';
      statusEl.innerHTML = '';
      return;
    }
    statusEl.style.display = 'flex';
    statusEl.className = 'sa-suggest-status' + (mode === 'error' ? ' sa-error-text' : '');
    var icon = mode === 'loading' ? '<i class="bi bi-arrow-repeat"></i> '
             : mode === 'error'   ? '<i class="bi bi-exclamation-circle"></i> '
             : '';
    statusEl.innerHTML = icon + text;
    if (onRetry) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'sa-retry-link';
      btn.textContent = 'Retry';
      btn.addEventListener('click', onRetry);
      statusEl.appendChild(btn);
    }
  }

  function reasonToMessage(result, lang) {
    var sw = lang === 'sw';
    switch (result.reason) {
      case 'no-token':
        return sw ? 'Tafadhali ingia kwenye akaunti yako kupata mapendekezo.'
                  : 'Please sign in to get AI suggestions.';
      case 'no-config':
        return sw ? 'Huduma ya mapendekezo haijasanidiwa.'
                  : 'Suggestion service is not configured.';
      default:
        return sw ? 'Imeshindikana kupata mapendekezo. Bonyeza kujaribu tena.'
                  : 'Could not load AI suggestions. Tap to retry.';
    }
  }

  function renderSuggestions() {
    var mainSel = document.getElementById('mainlesson');
    var specInput = document.getElementById('specificLesson');
    var wrap = ensureSuggestUI();
    if (!mainSel || !specInput || !wrap) return;

    var selectedValue = mainSel.tagName === 'SELECT' ? mainSel.value : (mainSel.value || '');
    var selectedText = mainSel.tagName === 'SELECT'
      ? (mainSel.options[mainSel.selectedIndex] ? mainSel.options[mainSel.selectedIndex].text : '')
      : (mainSel.value || '');

    var subject = (document.getElementById('subject') || {}).value || '';
    var classVal = (document.getElementById('classes') || {}).value || '';
    var lang = isSwahiliSubject(subject) ? 'sw' : 'en';

    var labelEl = document.getElementById('saSuggestLabelText');
    if (labelEl) {
      labelEl.textContent = lang === 'sw'
        ? 'Mapendekezo ya AI (bonyeza kutumia):'
        : 'AI suggestions (tap to use):';
    }

    wrap.classList.remove('sa-error');
    document.getElementById('saSuggestChips').innerHTML = '';

    if (!selectedValue || !selectedText) {
      wrap.classList.remove('show');
      setStatus('idle', '');
      return;
    }

    if (!subject || !classVal) {
      wrap.classList.add('show');
      setStatus('error', lang === 'sw'
        ? 'Chagua somo na darasa kwanza kupata mapendekezo ya AI.'
        : 'Select a subject and class first to get AI suggestions.');
      return;
    }

    wrap.classList.add('show');
    setStatus('loading', lang === 'sw' ? 'Inapakia mapendekezo ya AI\u2026' : 'Loading AI suggestions\u2026');

    fetchAIActivities(subject, classVal, selectedText).then(function (result) {
      var stillSameSelection = mainSel.tagName === 'SELECT'
        ? (mainSel.options[mainSel.selectedIndex] ? mainSel.options[mainSel.selectedIndex].text : '')
        : (mainSel.value || '');
      if (stillSameSelection !== selectedText) return;

      if (result.ok) {
        renderChips(result.activities);
        setStatus('idle', '');
      } else {
        wrap.classList.add('sa-error');
        setStatus('error', reasonToMessage(result, lang), function () {
          renderSuggestions();
        });
      }
    });
  }

  function attach() {
    var mainSel = document.getElementById('mainlesson');
    var subjectEl = document.getElementById('subject');
    if (!mainSel || !subjectEl) { setTimeout(attach, 300); return; }

    mainSel.addEventListener('change', function () { setTimeout(renderSuggestions, 50); });
    subjectEl.addEventListener('change', function () { setTimeout(renderSuggestions, 300); });

    ['topicLesson', 'compLesson', 'classes'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('change', function () { setTimeout(renderSuggestions, 400); });
    });

    var step3 = document.querySelector('.step[data-step="3"]');
    if (step3) {
      new MutationObserver(function () {
        var el = document.getElementById('mainlesson');
        if (el && el.tagName === 'INPUT' && !el._saBound) {
          el._saBound = true;
          el.addEventListener('input', function () { setTimeout(renderSuggestions, 300); });
        }
      }).observe(step3, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attach);
  } else {
    attach();
  }

  window.__axpIsSwahiliSubject = isSwahiliSubject;
  window.__axpFetchAISpecificActivities = fetchAIActivities;

})();
</script>
  
  <script>
    
    function injectSubscriptionBar(profile) {
  var existing = document.getElementById('axp-sub-info-bar');
  if (existing) existing.remove();

  if (!profile) return;

  var paidUntil    = profile.paidUntil    || '';
  var activatedAt  = profile.activatedAt  || '';
  var registeredAt = profile.registeredAt || '';
  var status       = profile.status       || 'pending';

  if (!(typeof AUTH !== 'undefined' && AUTH.getUser && AUTH.getUser())) return;

  var daysRemaining = null;
  var isExpired = false;
  if (paidUntil) {
    var now = new Date();
    var end = new Date(paidUntil);
    var diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
    daysRemaining = diff;
    isExpired = (end - now) <= 0;
  }

  function fmtDate(iso) {
    if (!iso) return '\u2014';
    try {
      return new Date(iso).toLocaleDateString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric'
      });
    } catch(e) { return '\u2014'; }
  }

  var daysColor, daysIcon, daysText;
  if (!paidUntil || status !== 'active') {
    daysColor = '#b45309';
    daysIcon  = 'bi-clock-fill';
    daysText  = '\u2014';
  } else if (isExpired) {
    daysColor = '#e4405f';
    daysIcon  = 'bi-x-circle-fill';
    daysText  = 'Expired';
  } else if (daysRemaining <= 7) {
    daysColor = '#e4405f';
    daysIcon  = 'bi-exclamation-triangle-fill';
    daysText  = daysRemaining + ' day' + (daysRemaining === 1 ? '' : 's');
  } else if (daysRemaining <= 14) {
    daysColor = '#f5a623';
    daysIcon  = 'bi-hourglass-split';
    daysText  = daysRemaining + ' days';
  } else {
    daysColor = '#1e9e52';
    daysIcon  = 'bi-shield-check-fill';
    daysText  = daysRemaining + ' days';
  }

  function fmtShort(iso) {
    if (!iso) return '\u2014';
    try {
      var d = new Date(iso);
      var m = d.toLocaleDateString('en-GB', { month: 'short' });
      return ('0' + d.getDate()).slice(-2) + ' ' + m + " '" + String(d.getFullYear()).slice(-2);
    } catch(e) { return '\u2014'; }
  }

  var isNum = paidUntil && status === 'active' && !isExpired && daysRemaining !== null;
  var bigText = isNum ? String(daysRemaining) : daysText;
  var unitText = isNum ? (daysRemaining === 1 ? 'day left' : 'days left') : '';

  if (!document.getElementById('axp-sb-style')) {
    var st = document.createElement('style');
    st.id = 'axp-sb-style';
    st.textContent = [
      '#axp-sub-info-bar{display:flex;flex-wrap:nowrap;align-items:stretch;gap:0;width:100%;box-sizing:border-box;',
        'background:var(--surface,#fff);border-bottom:2px solid var(--border,#d8daff);',
        'font-family:var(--font,"Space Grotesk",Arial,sans-serif);overflow:hidden;}',
      '#axp-sub-info-bar .sb-cell{display:flex;align-items:center;gap:clamp(4px,1vw,8px);',
        'padding:clamp(5px,1.2vw,8px) clamp(5px,1.6vw,14px);border-right:1px solid var(--border,#d8daff);',
        'flex:1 1 0;min-width:0;box-sizing:border-box;}',
      '#axp-sub-info-bar .sb-cell:last-child{border-right:none;}',
      '#axp-sub-info-bar .sb-cell.sb-days{flex:2.3 1 0;}',
      '#axp-sub-info-bar .sb-ico{width:clamp(22px,3vw,30px);height:clamp(22px,3vw,30px);border-radius:50%;',
        'display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:clamp(.65rem,1.4vw,.82rem);}',
      '#axp-sub-info-bar .sb-txt{min-width:0;flex:1;}',
      '#axp-sub-info-bar .sb-lbl{font-size:clamp(.44rem,1.5vw,.58rem);font-weight:700;text-transform:uppercase;',
        'letter-spacing:.5px;color:var(--text3,#7a7a9a);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.25;}',
      '#axp-sub-info-bar .sb-val{font-size:clamp(.58rem,1.9vw,.76rem);font-weight:700;color:var(--text,#1a1a2e);',
        'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3;}',
      '#axp-sub-info-bar .sb-short{display:none;}',
      '#axp-sub-info-bar .sb-count{display:flex;align-items:baseline;gap:4px;white-space:nowrap;line-height:1;}',
      '#axp-sub-info-bar .sb-big{font-family:var(--mono,monospace);font-weight:800;font-size:clamp(1.05rem,4.2vw,1.65rem);letter-spacing:-.5px;}',
      '#axp-sub-info-bar .sb-big.sb-word{font-size:clamp(.8rem,3vw,1.1rem);}',
      '#axp-sub-info-bar .sb-unit{font-size:clamp(.5rem,1.7vw,.68rem);font-weight:700;opacity:.85;overflow:hidden;text-overflow:ellipsis;}',
      '#axp-sub-info-bar .sb-cd{display:flex;align-items:flex-start;gap:clamp(1px,.5vw,4px);line-height:1;white-space:nowrap;}',
      '#axp-sub-info-bar .sb-u{display:flex;flex-direction:column;align-items:center;min-width:2ch;}',
      '#axp-sub-info-bar .sb-u b{font-family:var(--mono,monospace);font-weight:800;font-size:clamp(.78rem,3.6vw,1.4rem);letter-spacing:-.3px;font-variant-numeric:tabular-nums;}',
      '#axp-sub-info-bar .sb-u i{font-style:normal;font-size:clamp(.34rem,1.2vw,.5rem);font-weight:700;text-transform:uppercase;letter-spacing:.4px;margin-top:2px;opacity:.8;}',
      '#axp-sub-info-bar .sb-sep{font-family:var(--mono,monospace);font-weight:800;font-size:clamp(.78rem,3.6vw,1.4rem);opacity:.45;}',
      '@media (max-width:640px){',
        '#axp-sub-info-bar .sb-long{display:none;}',
        '#axp-sub-info-bar .sb-short{display:inline;}',
        '#axp-sub-info-bar .sb-cell.sb-days{justify-content:center;text-align:center;}',
        '#axp-sub-info-bar .sb-cell.sb-days .sb-txt{flex:0 1 auto;display:flex;flex-direction:column;align-items:center;}',
        '#axp-sub-info-bar .sb-cell.sb-days .sb-lbl{text-align:center;margin-bottom:3px;}',
        '#axp-sub-info-bar .sb-cell.sb-days .sb-cd,#axp-sub-info-bar .sb-cell.sb-days .sb-count{justify-content:center;}',
      '}',
      '@media (max-width:480px){',
        '#axp-sub-info-bar .sb-ico{display:none;}',
        '#axp-sub-info-bar .sb-cell{padding:6px 5px;}',
        '#axp-sub-info-bar .sb-lbl{letter-spacing:.2px;}',
      '}',
      '@media (max-width:340px){',
        '#axp-sub-info-bar .sb-unit{display:none;}',
      '}'
    ].join('');
    document.head.appendChild(st);
  }

  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function cdParts(ms) {
    if (ms < 0) ms = 0;
    var t = Math.floor(ms / 1000);
    return { d: Math.floor(t / 86400), h: Math.floor(t % 86400 / 3600), m: Math.floor(t % 3600 / 60), s: t % 60 };
  }
  var end0 = paidUntil ? new Date(paidUntil).getTime() : 0;
  function cdHTML(ms, color) {
    var c = cdParts(ms);
    function u(k, v, lbl) { return '<span class="sb-u"><b data-k="' + k + '">' + v + '</b><i>' + lbl + '</i></span>'; }
    var sep = '<span class="sb-sep">:</span>';
    return '<div class="sb-cd" style="color:' + color + ';">' + u('d', c.d, 'days') + sep + u('h', pad2(c.h), 'hrs') +
      sep + u('m', pad2(c.m), 'min') + sep + u('s', pad2(c.s), 'secs') + '</div>';
  }

  function cell(extraCls, iconBg, iconHtml, label, valueHtml) {
    return '<div class="sb-cell ' + extraCls + '">' +
      '<div class="sb-ico" style="background:' + iconBg + ';">' + iconHtml + '</div>' +
      '<div class="sb-txt"><div class="sb-lbl">' + label + '</div>' + valueHtml + '</div></div>';
  }
  function dateVal(iso) {
    return '<div class="sb-val"><span class="sb-long">' + fmtDate(iso) + '</span><span class="sb-short">' + fmtShort(iso) + '</span></div>';
  }

  var bar = document.createElement('div');
  bar.id = 'axp-sub-info-bar';
  bar.setAttribute('role', 'status');
  bar.setAttribute('aria-label', isNum ? (daysRemaining + ' days remaining') : ('Subscription: ' + daysText));

  bar.innerHTML = [
    cell('sb-days', daysColor + '22',
      '<i class="bi ' + daysIcon + '" style="color:' + daysColor + ';"></i>',
      'Days Remaining',
      isNum ? cdHTML(end0 - Date.now(), daysColor)
            : '<div class="sb-count" style="color:' + daysColor + ';"><span class="sb-big sb-word">' + bigText + '</span></div>'),
    cell('', 'rgba(74,58,255,.1)',
      '<i class="bi bi-person-plus-fill" style="color:var(--accent,#4A3AFF);"></i>',
      'Date Registered', dateVal(registeredAt)),
    cell('', 'rgba(30,158,82,.12)',
      '<i class="bi bi-patch-check-fill" style="color:#1e9e52;"></i>',
      'Date Activated', dateVal(activatedAt)),
    cell('', 'rgba(13,27,46,.08)',
      '<i class="bi bi-calendar-x-fill" style="color:var(--navy,#0d1b2e);"></i>',
      'Access Ends', dateVal(paidUntil)),
  ].join('');

  if (window._axpSbTimer) { clearInterval(window._axpSbTimer); window._axpSbTimer = null; }
  if (isNum) {
    window._axpSbTimer = setInterval(function() {
      var ms = end0 - Date.now();
      if (ms <= 0) {
        clearInterval(window._axpSbTimer); window._axpSbTimer = null;
        injectSubscriptionBar(typeof AUTH !== 'undefined' && AUTH.getProfile ? AUTH.getProfile() : profile);
        return;
      }
      var c = cdParts(ms), vals = { d: c.d, h: pad2(c.h), m: pad2(c.m), s: pad2(c.s) };
      for (var k in vals) {
        var el = bar.querySelector('b[data-k="' + k + '"]');
        if (el && el.textContent !== String(vals[k])) el.textContent = vals[k];
      }
    }, 1000);
  }

  var progressContainer = document.querySelector('.progress-container');
  if (progressContainer) {
    progressContainer.parentNode.insertBefore(bar, progressContainer);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    injectSubscriptionBar(
      typeof AUTH !== 'undefined' && AUTH.getProfile ? AUTH.getProfile() : null
    );
  }, 1200);
});

(function() {
  var _origApply = window.applySiteWideActive;
  if (typeof _origApply === 'function') {
    window.applySiteWideActive = function(profile) {
      _origApply(profile);
      injectSubscriptionBar(profile);
    };
  }
  var _lastPaidUntil = '';
  setInterval(function() {
    var p = typeof AUTH !== 'undefined' && AUTH.getProfile ? AUTH.getProfile() : null;
    var pu = p ? ((p.paidUntil || '') + '|' + (p.activatedAt || '') + '|' + (p.registeredAt || '')) : '';
    if (pu !== _lastPaidUntil) {
      _lastPaidUntil = pu;
      injectSubscriptionBar(p);
    }
  }, 5000);
})();
  </script>
  
  <script>
(function(){
  'use strict';
  function stripStreamLocal(classVal){
    return (classVal||'').replace(/\s+[A-Za-z]$/,'').trim();
  }
  function refreshQuickBar(){
    var subject=(document.getElementById('subject')||{}).value||'';
    var classVal=(document.getElementById('classes')||{}).value||'';
    var bar=document.getElementById('quickSowLogbookBar');
    if(!bar)return;
    bar.style.display=(subject&&classVal)?'flex':'none';
  }
  function bindQuickBar(){
    var sowBtn=document.getElementById('quickSowBtn');
    var lbBtn=document.getElementById('quickLogbookBtn');
    if(sowBtn){
      sowBtn.addEventListener('click',function(){
        var subject=(document.getElementById('subject')||{}).value||'';
        var classVal=(document.getElementById('classes')||{}).value||'';
        var baseClass=stripStreamLocal(classVal);
        if(!subject||!baseClass){axpAlert('Please select Subject and Class in Step 2 first.');return;}
        if(typeof window.openSOWForSubject==='function'){
          window.openSOWForSubject(subject,baseClass,[]);
        }
      });
    }
    if(lbBtn){
      lbBtn.addEventListener('click',function(){
        var subject=(document.getElementById('subject')||{}).value||'';
        var classVal=(document.getElementById('classes')||{}).value||'';
        var baseClass=stripStreamLocal(classVal);
        if(!subject||!baseClass){axpAlert('Please select Subject and Class in Step 2 first.');return;}
        if(typeof window.openLogbookForSubject==='function'){
          window.openLogbookForSubject(subject,baseClass);
        }
      });
    }
    var subEl=document.getElementById('subject');
    var clsEl=document.getElementById('classes');
    if(subEl)subEl.addEventListener('change',function(){setTimeout(refreshQuickBar,200);});
    if(clsEl)clsEl.addEventListener('change',function(){setTimeout(refreshQuickBar,200);});
    refreshQuickBar();
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',bindQuickBar);}
  else{bindQuickBar();}
  window.addEventListener('load',function(){setTimeout(refreshQuickBar,1500);});
})();
</script>
  
  <script>
(function () {
  'use strict';

  if (window.__AXP_LP_AUDIT__) return;
  window.__AXP_LP_AUDIT__ = true;

  var STEP_LABELS = {
    1: 'Teacher Information',
    2: 'Schedule Information',
    3: 'Syllabus Information',
    4: 'Students Information',
    5: 'Lesson Plan Details'
  };

  var ACTION_VERB_FLAGS = [
    'explain', 'discuss', 'describe', 'demonstrate', 'analyse', 'analyze',
    'calculate', 'evaluate', 'solve', 'compare', 'define', 'identify',
    'list', 'state', 'outline',
    'eleza', 'jadili', 'fafanua', 'onyesha', 'linganisha', 'bainisha', 'taja'
  ];

  function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function val(id) { var el = document.getElementById(id); return el ? (el.value || '') : ''; }
  function elFor(id) { return document.getElementById(id); }

  function isConditionallyHidden(el) {
    var node = el.parentElement;
    while (node && node !== document.body) {
      if (node.style && node.style.display === 'none') return true;
      node = node.parentElement;
    }
    return false;
  }

  function fieldLabel(id, fallback) {
    var lblEl = document.querySelector('label[for="' + id + '"]');
    if (lblEl) return lblEl.textContent.replace(/\*/g, '').trim();
    return fallback || id;
  }

  function validateSpecificActivity(value) {
    var _subjEl = document.getElementById('subject');
    if (_subjEl && window.axpIsFrZhSubject && window.axpIsFrZhSubject(_subjEl.value)) return null;
    var lower = ' ' + value.toLowerCase().trim() + ' ';
    for (var i = 0; i < ACTION_VERB_FLAGS.length; i++) {
      var v = ACTION_VERB_FLAGS[i];
      if (lower.indexOf(' ' + v + ' ') !== -1 || lower.trim().indexOf(v) === 0) {
        return 'Contains the action word "' + v + '" \u2014 action words belong in Step 5, not here.';
      }
    }
    return null;
  }

  function buildRules() {
    var rules = [];

    rules.push({ step: 1, id: 'school', required: true });
    rules.push({ step: 1, id: 'teacherName', required: true });
    rules.push({ step: 1, id: 'dateOption', required: true });
    rules.push({ step: 1, id: 'date', requiredIf: function () { return val('dateOption') === 'set'; } });

    rules.push({ step: 2, id: 'subject', required: true });
    rules.push({ step: 2, id: 'classes', required: true });
    rules.push({ step: 2, id: 'streams', required: true });
    rules.push({ step: 2, id: 'period', required: true });
    rules.push({ step: 2, id: 'customMinutes', min: 1, requiredIf: function () { return val('period') === 'custom_duration'; } });
    rules.push({ step: 2, id: 'periodType', requiredIf: function () { return val('period') === 'custom_duration'; } });
    rules.push({ step: 2, id: 'distributionType', requiredIf: function () { return val('period') === 'custom_distribution'; } });
    rules.push({
      step: 2, id: 'customTotalMinutes', min: 1,
      requiredIf: function () { return val('period') === 'custom_distribution' && val('distributionType') === 'custom'; }
    });
    ['introMinutes', 'developmentMinutes', 'designMinutes', 'realizationMinutes'].forEach(function (fid) {
      rules.push({ step: 2, id: fid, min: 1, requiredIf: function () { return val('period') === 'custom_distribution'; } });
    });
    rules.push({ step: 2, id: 'hourCodes', required: true });
    rules.push({ step: 2, id: 'minCodes', required: true });

    rules.push({ step: 3, id: 'topicLesson', required: true });
    rules.push({ step: 3, id: 'compLesson', required: true });
    rules.push({ step: 3, id: 'mainlesson', required: true });
    rules.push({ step: 3, id: 'specificLesson', required: true, custom: validateSpecificActivity });
    rules.push({ step: 3, id: 'tlmaterials', required: true, alwaysVisible: true });
    rules.push({ step: 3, id: 'refLesson', required: true });

    rules.push({ step: 4, id: 'studentsOption', required: true });

    rules.push({ step: 5, id: 'wrdImp1', required: true });
    rules.push({ step: 5, id: 'wrdImp2', required: true });
    rules.push({ step: 5, id: 'remarkOption', required: true });
    rules.push({ step: 5, id: 'customRemark', requiredIf: function () { return val('remarkOption') === 'custom'; } });

    return rules;
  }

  function runAudit() {
    var issues = [];

    buildRules().forEach(function (rule) {
      var el = elFor(rule.id);
      if (!el) return;
      if (!rule.alwaysVisible && isConditionallyHidden(el)) return;

      var isRequired = rule.required || (rule.requiredIf && rule.requiredIf());
      var raw = (el.value || '').toString().trim();

      if (isRequired) {
        if (!raw) {
          issues.push({ step: rule.step, id: rule.id, label: fieldLabel(rule.id), message: 'This field is required but was left empty.', el: el });
          return;
        }
        if (rule.min !== undefined) {
          var num = parseFloat(raw);
          if (isNaN(num) || num < rule.min) {
            issues.push({ step: rule.step, id: rule.id, label: fieldLabel(rule.id), message: 'Enter a valid number (at least ' + rule.min + ').', el: el });
            return;
          }
        }
      }
      if (rule.custom && raw) {
        var msg = rule.custom(raw);
        if (msg) issues.push({ step: rule.step, id: rule.id, label: fieldLabel(rule.id), message: msg, el: el });
      }
    });

    if (val('period') === 'custom_distribution') {
      var dtype = val('distributionType');
      var target = dtype === 'single' ? 40 : dtype === 'double' ? 80 : (parseInt(val('customTotalMinutes')) || 0);
      var sum = ['introMinutes', 'developmentMinutes', 'designMinutes', 'realizationMinutes']
        .reduce(function (s, id) { return s + (parseInt(val(id)) || 0); }, 0);
      if (target > 0 && sum !== target) {
        issues.push({
          step: 2, id: 'introMinutes', label: 'Time Distribution',
          message: 'Stages add up to ' + sum + ' minutes but must total ' + target + ' minutes.',
          el: elFor('introMinutes')
        });
      }
    }

    if (val('studentsOption') === 'set') {
      var fr = parseInt(val('femaleReg')) || 0, mr = parseInt(val('maleReg')) || 0;
      var fp = parseInt(val('femalePres')) || 0, mp = parseInt(val('malePres')) || 0;
      if (fr > 0 && fp > fr) issues.push({ step: 4, id: 'femalePres', label: 'Girls Present', message: 'Girls Present (' + fp + ') cannot exceed Registered Girls (' + fr + ').', el: elFor('femalePres') });
      if (mr > 0 && mp > mr) issues.push({ step: 4, id: 'malePres', label: 'Boys Present', message: 'Boys Present (' + mp + ') cannot exceed Registered Boys (' + mr + ').', el: elFor('malePres') });
    }

    return issues;
  }

  function refreshBadges(issues) {
    document.querySelectorAll('.step-indicator[data-step]').forEach(function (ind) {
      var step = parseInt(ind.getAttribute('data-step'), 10);
      var count = issues.filter(function (i) { return i.step === step; }).length;
      var badge = ind.querySelector('.axp-audit-badge');
      if (count > 0) {
        if (!badge) {
          badge = document.createElement('span');
          badge.className = 'axp-audit-badge';
          badge.style.cssText = 'position:absolute;top:-6px;right:-6px;background:#e4405f;color:#fff;font-size:9px;font-weight:800;min-width:15px;height:15px;border-radius:50%;display:flex;align-items:center;justify-content:center;line-height:1;padding:0 2px;font-family:inherit;';
          ind.style.position = 'relative';
          ind.appendChild(badge);
        }
        badge.textContent = count > 9 ? '9+' : String(count);
      } else if (badge) {
        badge.remove();
      }
    });
  }

  function refreshBanner(issues) {
    var submitBtn = document.getElementById('submit-lesson-plan');
    var btnsWrap = document.querySelector('.buttons');
    var banner = document.getElementById('axpAuditBanner');
    var visible = submitBtn && btnsWrap && submitBtn.style.display !== 'none';

    if (!visible || !issues.length) {
      if (banner) banner.remove();
      return;
    }
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'axpAuditBanner';
      banner.style.cssText = 'display:flex;align-items:center;gap:7px;background:#fff5f7;border:1px solid #ffd6de;border-left:3px solid #e4405f;padding:8px 11px;margin-top:12px;font-size:.72rem;color:#c0392b;font-weight:600;cursor:pointer;font-family:inherit;';
      btnsWrap.parentNode.insertBefore(banner, btnsWrap);
      banner.addEventListener('click', function () { showAuditModal(runAudit()); });
    }
    var n = issues.length;
    banner.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> ' + n + ' issue' + (n === 1 ? '' : 's') +
      ' need' + (n === 1 ? 's' : '') + ' fixing before you save \u2014 tap to review.';
  }

  var _debounce;
  function scheduleAudit() {
    clearTimeout(_debounce);
    _debounce = setTimeout(function () {
      var issues = runAudit();
      refreshBadges(issues);
      refreshBanner(issues);
    }, 350);
  }

  function getCurrentStep() {
    var active = document.querySelector('.step-indicator.active');
    return active ? parseInt(active.getAttribute('data-step'), 10) : 1;
  }
  function goToStep(target, cb) {
    var prevBtn = document.getElementById('prevBtn');
    var guard = 0;
    (function step() {
      var now = getCurrentStep();
      if (now <= target || !prevBtn || guard++ > 10) { setTimeout(function () { if (cb) cb(); }, 150); return; }
      prevBtn.click();
      setTimeout(step, 80);
    })();
  }
  function highlightField(el) {
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('error');
    var fg = el.closest('.form-group');
    if (fg) { var em = fg.querySelector('.error-message'); if (em) em.classList.add('show'); }
    setTimeout(function () { try { el.focus(); } catch (e) {} }, 300);
  }

  function injectStyle() {
    if (document.getElementById('axpAuditStyle')) return;
    var s = document.createElement('style');
    s.id = 'axpAuditStyle';
    s.textContent = '@keyframes axpAuditIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}';
    document.head.appendChild(s);
  }

  function closeAuditModal() {
    var ov = document.getElementById('axpAuditOverlay');
    if (ov && ov.parentNode) ov.parentNode.removeChild(ov);
  }

  function showAuditModal(issues) {
    closeAuditModal();
    injectStyle();
    if (!issues.length) return;

    var grouped = {};
    issues.forEach(function (i) { (grouped[i.step] = grouped[i.step] || []).push(i); });
    var stepsOrder = Object.keys(grouped).map(Number).sort(function (a, b) { return a - b; });

    var html = '<div style="background:#fff;width:100%;max-width:520px;max-height:88vh;overflow-y:auto;border-top:4px solid #e4405f;animation:axpAuditIn .25s ease;font-family:inherit;">';
    html += '<div style="background:#0d1b2e;padding:16px 44px 16px 18px;position:relative;">'
      + '<button id="axpAuditCloseBtn" style="position:absolute;top:10px;right:10px;background:rgba(255,255,255,.15);border:none;color:#fff;width:26px;height:26px;cursor:pointer;font-size:.9rem;">&times;</button>'
      + '<div style="display:flex;align-items:center;gap:9px;">'
      + '<div style="width:38px;height:38px;background:#e4405f;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><i class="bi bi-exclamation-triangle-fill" style="color:#fff;font-size:1.1rem;"></i></div>'
      + '<div><div style="color:#fff;font-weight:800;font-size:.9rem;text-transform:uppercase;letter-spacing:.5px;">' + issues.length + ' issue' + (issues.length === 1 ? '' : 's') + ' to fix</div>'
      + '<div style="color:rgba(255,255,255,.6);font-size:.7rem;">Found before saving your lesson plan</div></div></div></div>';

    html += '<div style="padding:14px 16px;">';
    stepsOrder.forEach(function (stepNum) {
      html += '<div style="margin-bottom:14px;">'
        + '<div style="font-size:.66rem;font-weight:800;color:#4A3AFF;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;border-bottom:1px solid #d8daff;padding-bottom:4px;">Step '
        + stepNum + ' \u2014 ' + STEP_LABELS[stepNum] + '</div>';
      grouped[stepNum].forEach(function (issue) {
        html += '<div class="axp-audit-row" data-step="' + stepNum + '" data-id="' + issue.id + '" style="display:flex;align-items:flex-start;gap:9px;padding:8px 9px;background:#eef0ff;border-left:3px solid #e4405f;margin-bottom:6px;cursor:pointer;">'
          + '<i class="bi bi-x-circle-fill" style="color:#e4405f;font-size:.82rem;margin-top:2px;flex-shrink:0;"></i>'
          + '<div style="flex:1;"><div style="font-weight:700;font-size:.75rem;color:#1a1a2e;">' + esc(issue.label) + '</div>'
          + '<div style="font-size:.68rem;color:#3a3a5c;line-height:1.4;">' + esc(issue.message) + '</div></div>'
          + '<i class="bi bi-arrow-right-circle" style="color:#4A3AFF;font-size:.85rem;flex-shrink:0;margin-top:2px;"></i></div>';
      });
      html += '</div>';
    });
    html += '</div>';
    html += '<div style="padding:6px 16px 16px;"><button id="axpAuditCloseBtn2" style="width:100%;background:#e4e6ff;color:#3a3a5c;border:1px solid #b8badd;padding:10px;font-size:.76rem;font-weight:700;cursor:pointer;text-transform:uppercase;letter-spacing:.4px;font-family:inherit;">Close</button></div>';
    html += '</div>';

    var overlay = document.createElement('div');
    overlay.id = 'axpAuditOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(5,5,5,.82);z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:14px;font-family:"Space Grotesk",Arial,sans-serif;';
    overlay.innerHTML = html;
    document.body.appendChild(overlay);

    overlay.querySelectorAll('.axp-audit-row').forEach(function (row) {
      row.addEventListener('click', function () {
        var stepNum = parseInt(row.getAttribute('data-step'), 10);
        var id = row.getAttribute('data-id');
        closeAuditModal();
        goToStep(stepNum, function () { highlightField(elFor(id)); });
      });
    });
    var c1 = document.getElementById('axpAuditCloseBtn'), c2 = document.getElementById('axpAuditCloseBtn2');
    if (c1) c1.addEventListener('click', closeAuditModal);
    if (c2) c2.addEventListener('click', closeAuditModal);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeAuditModal(); });
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('#submit-lesson-plan');
    if (!btn) return;
    var issues = runAudit();
    refreshBadges(issues);
    refreshBanner(issues);
    if (issues.length) {
      e.preventDefault();
      e.stopPropagation();
      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      showAuditModal(issues);
    }
  }, true);

  document.addEventListener('input', scheduleAudit, true);
  document.addEventListener('change', scheduleAudit, true);
  document.addEventListener('click', function (e) {
    if (e.target.closest && (e.target.closest('#nextBtn') || e.target.closest('#prevBtn'))) {
      setTimeout(scheduleAudit, 200);
    }
  }, true);

  function init() { scheduleAudit(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else setTimeout(init, 500);

})();
</script>
  <script>
(function () {
  'use strict';

  var BTN_ID   = 'axp-recheck-btn';
  var TOAST_ID = 'axp-recheck-toast';
  var _checking = false;

  function getToken()   { return (typeof AUTH !== 'undefined' && AUTH.getSessionToken) ? AUTH.getSessionToken() : ''; }
  function getProfile() { return (typeof AUTH !== 'undefined' && AUTH.getProfile)      ? AUTH.getProfile()      : null; }
  function getUser()    { return (typeof AUTH !== 'undefined' && AUTH.getUser)         ? AUTH.getUser()         : null; }
  function apiUrl()     { return window.AXP_API_URL || ''; }

  function isFullyActive(p) {
    if (!p || p.status !== 'active') return false;
    var pu = p.paidUntil || '';
    return !!(pu && new Date(pu) > new Date());
  }

  function injectStyles() {
    if (document.getElementById('axp-recheck-styles')) return;
    var s = document.createElement('style');
    s.id = 'axp-recheck-styles';
    s.textContent = [
      '#axp-recheck-wrap{display:none;align-items:center;justify-content:flex-end;',
        'padding:8px 16px;background:var(--surface,#fff);border-bottom:1px solid var(--border,#d8daff);}',
      '#axp-recheck-wrap.axp-rc-wrap-show{display:flex;}',
      '#' + BTN_ID + '{display:inline-flex;align-items:center;gap:5px;background:var(--accent,#4A3AFF);',
        'color:#fff;border:none;padding:6px 13px;font-size:.7rem;font-weight:700;letter-spacing:.4px;',
        'text-transform:uppercase;cursor:pointer;font-family:var(--font,"Space Grotesk",sans-serif);',
        'white-space:nowrap;flex-shrink:0;}',
      '#' + BTN_ID + ':disabled{opacity:.6;cursor:not-allowed;}',
      '#' + BTN_ID + ' .axp-rc-spin{display:inline-block;animation:axpRcSpin .8s linear infinite;}',
      '@keyframes axpRcSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}',
      '#' + TOAST_ID + '{position:fixed;bottom:22px;left:50%;transform:translateX(-50%);',
        'z-index:2147483647;padding:10px 18px;font-size:.78rem;font-weight:700;color:#fff;',
        'font-family:var(--font,"Space Grotesk",sans-serif);display:flex;align-items:center;gap:8px;',
        'white-space:nowrap;opacity:0;transition:opacity .3s ease;}',
      '#' + TOAST_ID + '.axp-rc-toast-show{opacity:1;}'
    ].join('');
    document.head.appendChild(s);
  }

  function injectButton() {
    var existing = document.getElementById(BTN_ID);
    if (existing) return existing;

    var progressContainer = document.querySelector('.progress-container');
    if (!progressContainer || !progressContainer.parentNode) return null;

    var wrap = document.createElement('div');
    wrap.id = 'axp-recheck-wrap';

    var btn = document.createElement('button');
    btn.id = BTN_ID;
    btn.type = 'button';
    btn.innerHTML = '<i class="bi bi-arrow-repeat"></i><span>Refresh Status</span>';
    btn.addEventListener('click', onRecheckClick);

    wrap.appendChild(btn);
    progressContainer.parentNode.insertBefore(wrap, progressContainer);
    return btn;
  }

  function setBtnLoading(loading) {
    var btn = document.getElementById(BTN_ID);
    if (!btn) return;
    btn.disabled = loading;
    var icon = btn.querySelector('i');
    var label = btn.querySelector('span');
    if (loading) {
      if (icon) icon.classList.add('axp-rc-spin');
      if (label) label.textContent = 'Checking\u2026';
    } else {
      if (icon) icon.classList.remove('axp-rc-spin');
      if (label) label.textContent = 'Refresh Status';
    }
  }

  function showToast(msg, kind) {
    var old = document.getElementById(TOAST_ID);
    if (old && old.parentNode) old.parentNode.removeChild(old);

    var bg = kind === 'success' ? '#1e9e52' : (kind === 'error' ? '#e4405f' : '#0d1b2e');
    var icon = kind === 'success' ? 'bi-check-circle-fill' : (kind === 'error' ? 'bi-exclamation-triangle-fill' : 'bi-info-circle-fill');

    var t = document.createElement('div');
    t.id = TOAST_ID;
    t.style.background = bg;
    t.innerHTML = '<i class="bi ' + icon + '"></i><span>' + msg + '</span>';
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('axp-rc-toast-show'); });
    setTimeout(function () {
      t.classList.remove('axp-rc-toast-show');
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 350);
    }, 4200);
  }

  function refreshButtonVisibility() {
    var btn = injectButton();
    if (!btn) return;
    var wrap = document.getElementById('axp-recheck-wrap');
    var user = getUser();
    var profile = getProfile();
    var shouldShow = !!user && !isFullyActive(profile);
    if (wrap) wrap.classList.toggle('axp-rc-wrap-show', shouldShow);
  }

  function applyProfileEverywhere(newProfile) {
    var cached = getProfile();

    if (cached) {
      Object.keys(newProfile).forEach(function (k) { cached[k] = newProfile[k]; });
    }

    try { localStorage.setItem('axp_profile', JSON.stringify(cached || newProfile)); } catch (e) {}

    var fullyActive = isFullyActive(cached || newProfile);

    var badge = document.getElementById('statusBadge');
    if (badge) {
      if (fullyActive) {
        badge.className = 'nav-pill active-pill';
        badge.innerHTML = '<i class="bi bi-check-circle-fill"></i><span class="badge-label"> Active</span>';
      } else {
        badge.className = 'nav-pill pending-pill';
        badge.innerHTML = '<i class="bi bi-clock-fill"></i><span class="badge-label"> Pending</span>';
      }
    }

    var nameEl = document.getElementById('statusName');
    if (nameEl && cached && cached.fullName) nameEl.textContent = cached.fullName;

    var payBar = document.getElementById('paymentNoticeBar');
    var sidebarPayBox = document.getElementById('sidebarPayBox');
    if (payBar) payBar.classList.toggle('show', !fullyActive);
    if (sidebarPayBox) sidebarPayBox.style.display = fullyActive ? 'none' : 'block';

    var settingsBadge = document.getElementById('settingAccBadge');
    var settingsSub = document.getElementById('settingAccStatus');
    if (settingsBadge) {
      settingsBadge.className = 'nav-pill ' + (fullyActive ? 'active-pill' : 'pending-pill');
      settingsBadge.textContent = fullyActive ? 'Active' : 'Pending';
    }
    if (settingsSub) {
      settingsSub.textContent = fullyActive
        ? 'Your account is fully activated.'
        : 'Contact us to activate your account.';
    }

    if (fullyActive) {
      var floatBtn = document.getElementById('axp-float');
      if (floatBtn) floatBtn.classList.remove('axp-float-show');
      try { sessionStorage.removeItem('axp_payment_shown'); } catch (e) {}
    }

    refreshButtonVisibility();
  }

  function onRecheckClick() {
    if (_checking) return;

    var token = getToken();
    var api = apiUrl();

    if (!api || !token) {
      showToast('Session not found \u2014 please sign in again.', 'error');
      setTimeout(function () {
        if (typeof AUTH !== 'undefined' && AUTH.showAuthPopup) AUTH.showAuthPopup();
      }, 900);
      return;
    }

    _checking = true;
    setBtnLoading(true);

    var beforeProfile = getProfile();
    var wasActiveBefore = isFullyActive(beforeProfile);

    fetch(api + '?action=checkSession&token=' + encodeURIComponent(token))
      .then(function (r) { return r.json(); })
      .then(function (data) {
        _checking = false;
        setBtnLoading(false);

        if (!data || !data.success || !data.profile) {
          showToast('Your session expired \u2014 please sign in again.', 'error');
          try { if (typeof AUTH !== 'undefined' && AUTH.signOut) AUTH.signOut(); } catch (e) {}
          setTimeout(function () {
            if (typeof AUTH !== 'undefined' && AUTH.showAuthPopup) AUTH.showAuthPopup();
          }, 900);
          return;
        }

        var fresh = data.profile;
        applyProfileEverywhere(fresh);

        if (isFullyActive(fresh)) {
          showToast('Your account is now active! Enjoy full access.', 'success');
        } else if (!wasActiveBefore && fresh.status !== (beforeProfile ? beforeProfile.status : '')) {
          showToast('Status updated: ' + (fresh.status || 'pending') + '.', 'info');
        } else {
          showToast('Still pending \u2014 no change yet. Try again shortly.', 'info');
        }
      })
      .catch(function () {
        _checking = false;
        setBtnLoading(false);
        showToast('Network error \u2014 check your connection and try again.', 'error');
      });
  }

  function init() {
    injectStyles();
    injectButton();
    refreshButtonVisibility();

    var lastUserKey = '';
    setInterval(function () {
      var u = getUser();
      var key = u ? u.email : '';
      if (key !== lastUserKey) {
        lastUserKey = key;
        setTimeout(refreshButtonVisibility, 300);
      }
    }, 2000);
  }

  window.AXP_RECHECK = { check: onRecheckClick, refreshVisibility: refreshButtonVisibility };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else setTimeout(init, 500);
})();
</script>
 <script>
(function(){
  'use strict';

  function isSignedIn(){
    return typeof AUTH !== 'undefined' && AUTH.isAuthenticated && AUTH.isAuthenticated();
  }
  function stripStreamLocal(classVal){
    return (classVal||'').replace(/\s+[A-Za-z]$/,'').trim();
  }
  function closeSidebarIfMobile(){
    if(window.innerWidth>768)return;
    var sb=document.getElementById('axp-sidebar'), ov=document.getElementById('sidebar-overlay');
    if(sb)sb.classList.remove('open');
    if(ov)ov.classList.remove('show');
  }
  function getClassOptions(){
    if(typeof CLASSES_DATA!=='undefined' && Array.isArray(CLASSES_DATA)) return CLASSES_DATA;
    return [{value:'',text:'Select Class'}];
  }
  function getSubjectsForClass(classVal){
    var map = window.AXP_CLASS_SUBJECT_MAP;
    if(map && classVal && map[classVal] && map[classVal].length){
      return map[classVal].slice().sort(function (x, y) {
        return x.localeCompare(y, undefined, { sensitivity: 'base' });
      });
    }
    if(typeof SUBJECTS!=='undefined' && Array.isArray(SUBJECTS)){
      return SUBJECTS.filter(function(o){return o.value;}).map(function(o){return o.value;});
    }
    return [];
  }
  function stepTwoHasSelection(){
    var subject = (document.getElementById('subject')||{}).value || '';
    var classVal = (document.getElementById('classes')||{}).value || '';
    return !!(subject && classVal);
  }

  var _accessInfo=null;
  var _agentMode=false;

  function injectRequestPanel(){
    if(document.getElementById('panel-request-access'))return;
    var contentInner=document.querySelector('.content-inner');
    if(!contentInner)return;

    var classOpts = getClassOptions().filter(function(o){return o.value;});
    var classOptionsHTML = '<option value="">Select Class</option>' + classOpts.map(function(o){
      return '<option value="'+String(o.value).replace(/"/g,'&quot;')+'">'+o.text+'</option>';
    }).join('');

    var panel=document.createElement('div');
    panel.className='main-panel';
    panel.id='panel-request-access';
    injectReqStyles();
    panel.innerHTML=[
      '<div class="rq-hero">',
      '  <button class="rq-back" onclick="window.axpReqBack()"><i class="bi bi-arrow-left"></i> Back</button>',
      '  <div class="rq-hero-row">',
      '    <div class="rq-hero-icon"><i class="bi bi-lightning-charge-fill"></i></div>',
      '    <div>',
      '      <div class="rq-eyebrow" id="rqEyebrow">Quick Request</div>',
      '      <h2 class="rq-title" id="rqTitle">Get your Scheme of Work &amp; Logbook</h2>',
      '      <p class="rq-sub" id="rqSub">Pick your class and subject, choose what you need, and you\'re done in seconds.</p>',
      '    </div>',
      '  </div>',
      '  <div class="rq-steps">',
      '    <div class="rq-step is-on" id="rqStep1"><span>1</span> Class</div>',
      '    <div class="rq-step-line"></div>',
      '    <div class="rq-step" id="rqStep2"><span>2</span> Subject</div>',
      '    <div class="rq-step-line"></div>',
      '    <div class="rq-step" id="rqStep3"><span>3</span> Items</div>',
      '  </div>',
      '</div>',
      '<div class="rq-body">',
      '  <div class="rq-card" id="axpReqAgentCard" style="display:none;margin-bottom:12px;">',
      '    <div class="rq-grid">',
      '      <div class="rq-field"><label for="axpAgTEmail"><i class="bi bi-envelope-fill"></i> Teacher email <b>*</b></label><input id="axpAgTEmail" type="email" autocomplete="off" placeholder="teacher@gmail.com" style="width:100%;padding:11px 12px;border:1.5px solid var(--border2);background:var(--surface);color:var(--text);font-size:.85rem;font-family:var(--font);box-sizing:border-box;"></div>',
      '      <div class="rq-field"><label for="axpAgTName"><i class="bi bi-person-fill"></i> Teacher name <b>*</b></label><input id="axpAgTName" type="text" autocomplete="off" style="width:100%;padding:11px 12px;border:1.5px solid var(--border2);background:var(--surface);color:var(--text);font-size:.85rem;font-family:var(--font);box-sizing:border-box;"></div>',
      '      <div class="rq-field"><label for="axpAgTSchool"><i class="bi bi-building"></i> School <b>*</b></label><input id="axpAgTSchool" type="text" autocomplete="off" style="width:100%;padding:11px 12px;border:1.5px solid var(--border2);background:var(--surface);color:var(--text);font-size:.85rem;font-family:var(--font);box-sizing:border-box;"></div>',
      '    </div>',
      '  </div>',
      '  <div class="rq-card">',
      '    <div class="rq-grid">',
      '      <div class="rq-field">',
      '        <label for="axpReqClass"><i class="bi bi-mortarboard-fill"></i> Class <b>*</b></label>',
      '        <div class="rq-select"><select id="axpReqClass">'+classOptionsHTML+'</select></div>',
      '      </div>',
      '      <div class="rq-field">',
      '        <label for="axpReqSubject"><i class="bi bi-bookmark-fill"></i> Subject <b>*</b></label>',
      '        <div class="rq-select rq-combo-host"><select id="axpReqSubject" disabled style="display:none"><option value="">Select Class First</option></select>',
      '          <div class="axp-combo-wrap" id="axpReqSubjCombo">',
      '            <button type="button" class="axp-combo-trigger" id="axpReqSubjBtn" disabled><span class="axp-combo-trigger-text placeholder" id="axpReqSubjText">Select Class First</span></button>',
      '            <div class="axp-combo-panel" id="axpReqSubjPanel">',
      '              <div class="axp-combo-search-wrap"><i class="bi bi-search axp-combo-search-icon"></i><input type="text" id="axpReqSubjSearch" class="axp-combo-search-input" placeholder="Search subject\u2026" autocomplete="off"><button type="button" class="axp-combo-search-clear" id="axpReqSubjClear" title="Clear"><i class="bi bi-x-lg"></i></button></div>',
      '              <div class="axp-combo-list" id="axpReqSubjList"></div>',
      '            </div>',
      '          </div>',
      '        </div>',
      '      </div>',
      '    </div>',
      '  </div>',
      '  <div class="rq-label-row"><span>What do you need?</span><em>Choose one or both</em></div>',
      '  <div class="rq-options">',
      '    <label class="rq-opt">',
      '      <input type="checkbox" id="axpReqSowCb">',
      '      <div class="rq-opt-card">',
      '        <span class="rq-tick"><i class="bi bi-check-lg"></i></span>',
      '        <div class="rq-opt-ico sow"><i class="bi bi-journal-text"></i></div>',
      '        <div class="rq-opt-name">Scheme of Work</div>',
      '        <div class="rq-opt-desc">Full term-by-term teaching scheme, ready to print.</div>',
      '      </div>',
      '    </label>',
      '    <label class="rq-opt">',
      '      <input type="checkbox" id="axpReqLbCb">',
      '      <div class="rq-opt-card">',
      '        <span class="rq-tick"><i class="bi bi-check-lg"></i></span>',
      '        <div class="rq-opt-ico lb"><i class="bi bi-book-half"></i></div>',
      '        <div class="rq-opt-name">Logbook</div>',
      '        <div class="rq-opt-desc">Daily teaching record, neatly formatted.</div>',
      '      </div>',
      '    </label>',
      '  </div>',
      '  <div class="rq-total" id="axpReqTotalBox">',
      '    <div class="rq-total-glow"></div>',
      '    <div class="rq-total-top"><span class="rq-total-label"><i class="bi bi-wallet-fill"></i> Amount to pay</span><span class="rq-total-badge">Secure</span></div>',
      '    <div class="rq-total-amt"><small>Tshs</small> <span id="axpReqAmount">0</span></div>',
      '    <div class="rq-total-note" id="axpReqAmountNote">Select subject, class and at least one item.</div>',
      '  </div>',
      '  <div id="axpReqErr" class="rq-err" style="display:none;"></div>',
      '  <button class="rq-submit" id="axpReqSubmitBtn"><span>Continue</span> <i class="bi bi-arrow-right-circle-fill"></i></button>',
      '  <div class="rq-foot"><i class="bi bi-shield-check"></i> Instant access after activation &middot; Works on any device</div>',
      '</div>',
    ].join('');
    contentInner.appendChild(panel);

    document.getElementById('axpReqClass').addEventListener('change', function(){
      populateSubjectSelectForRequestPanel(this.value);
    });
    document.getElementById('axpReqSubject').addEventListener('change', function(){
      _accessInfo=null;
      updateReqAmountDisplay();
    });
    document.getElementById('axpReqSowCb').addEventListener('change', updateReqAmountDisplay);
    document.getElementById('axpReqLbCb').addEventListener('change', updateReqAmountDisplay);
    document.getElementById('axpReqSubmitBtn').addEventListener('click', submitRequestPanel);

    (function(){
      var sel=document.getElementById('axpReqSubject'),btn=document.getElementById('axpReqSubjBtn'),
          txt=document.getElementById('axpReqSubjText'),pnl=document.getElementById('axpReqSubjPanel'),
          inp=document.getElementById('axpReqSubjSearch'),clr=document.getElementById('axpReqSubjClear'),
          lst=document.getElementById('axpReqSubjList');
      if(!sel||!btn||!pnl||!inp||!lst)return;
      var matches=[],hl=-1;
      function opts(){return Array.prototype.map.call(sel.options,function(o){return {value:o.value,text:o.text};}).filter(function(o){return o.value!=='';});}
      function render(q){
        q=(q||'').trim().toLowerCase();
        var all=opts();
        matches=q?all.filter(function(o){return o.text.toLowerCase().indexOf(q)!==-1;}):all;
        hl=-1;lst.innerHTML='';
        if(!matches.length){lst.innerHTML='<div class="axp-combo-empty">No matching subject</div>';return;}
        matches.forEach(function(o,i){
          var it=document.createElement('div');
          it.className='axp-combo-item'+(o.value===sel.value?' selected':'');
          it.textContent=o.text;
          it.addEventListener('mousedown',function(e){e.preventDefault();pick(o.value);});
          lst.appendChild(it);
        });
      }
      function pick(v){sel.value=v;sel.dispatchEvent(new Event('change',{bubbles:true}));sync();close();}
      function open(){if(sel.disabled)return;btn.classList.add('open');pnl.classList.add('show');inp.value='';clr.classList.remove('show');render('');setTimeout(function(){inp.focus();},0);}
      function close(){btn.classList.remove('open');pnl.classList.remove('show');}
      function sync(){
        var o=sel.options[sel.selectedIndex];
        if(o&&o.value){txt.textContent=o.text;txt.classList.remove('placeholder');}
        else{txt.textContent=sel.disabled?'Select Class First':'Select Subject';txt.classList.add('placeholder');}
        btn.disabled=sel.disabled;close();
      }
      function mark(){var its=lst.querySelectorAll('.axp-combo-item');its.forEach(function(it,i){it.classList.toggle('hl',i===hl);});if(its[hl])its[hl].scrollIntoView({block:'nearest'});}
      btn.addEventListener('click',function(e){e.stopPropagation();pnl.classList.contains('show')?close():open();});
      inp.addEventListener('input',function(){clr.classList.toggle('show',!!this.value);render(this.value);});
      clr.addEventListener('click',function(){inp.value='';clr.classList.remove('show');render('');inp.focus();});
      inp.addEventListener('keydown',function(e){
        if(e.key==='Escape'){close();btn.focus();}
        else if(e.key==='ArrowDown'){e.preventDefault();if(matches.length){hl=Math.min(hl+1,matches.length-1);mark();}}
        else if(e.key==='ArrowUp'){e.preventDefault();if(matches.length){hl=Math.max(hl-1,0);mark();}}
        else if(e.key==='Enter'){e.preventDefault();if(hl>=0&&matches[hl])pick(matches[hl].value);else if(matches.length===1)pick(matches[0].value);}
      });
      document.addEventListener('click',function(e){if(!pnl.contains(e.target)&&!btn.contains(e.target))close();});
      window.__axpReqSubjSync=sync;
      sync();
    })();
  }

  function injectReqStyles(){
    if(document.getElementById('axpReqStyles'))return;
    var st=document.createElement('style');
    st.id='axpReqStyles';
    st.textContent=[
      '#panel-request-access{background:linear-gradient(180deg,#f4f5ff 0%,#fff 42%);}',
      '.rq-hero{position:relative;overflow:hidden;padding:16px 18px 20px;color:#fff;background:radial-gradient(120% 140% at 100% 0%,rgba(245,197,24,.28) 0%,rgba(245,197,24,0) 45%),linear-gradient(135deg,#0d1b2e 0%,#1d1f6b 55%,#4A3AFF 100%);}',
      '.rq-hero:before,.rq-hero:after{content:"";position:absolute;border-radius:50%;pointer-events:none;background:rgba(255,255,255,.06);}',
      '.rq-hero:before{width:180px;height:180px;right:-50px;top:-70px;}',
      '.rq-hero:after{width:120px;height:120px;left:-40px;bottom:-60px;}',
      '.rq-back{position:relative;z-index:1;display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.22);color:#fff;padding:6px 12px;font-size:.7rem;font-weight:600;cursor:pointer;font-family:var(--font);margin-bottom:14px;border-radius:0;backdrop-filter:blur(6px);transition:background .2s,transform .2s;}',
      '',
      '.rq-hero-row{position:relative;z-index:1;display:flex;gap:14px;align-items:center;}',
      '.rq-hero-icon{flex:0 0 auto;width:54px;height:54px;border-radius:0;display:flex;align-items:center;justify-content:center;font-size:1.6rem;color:#0d1b2e;background:linear-gradient(135deg,#ffe27a,#F5C518);animation:rqFloat 3.4s ease-in-out infinite;}',
      '@keyframes rqFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}',
      '.rq-eyebrow{font-size:.6rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#F5C518;margin-bottom:3px;}',
      '.rq-title{font-size:1.15rem;font-weight:800;line-height:1.2;margin:0;color:#fff;letter-spacing:.2px;}',
      '.rq-sub{font-size:.72rem;color:rgba(255,255,255,.72);margin:5px 0 0;line-height:1.5;}',
      '#panel-request-access .rq-hero .rq-sub{color:#fff!important;opacity:.92;}',
      '#panel-request-access .rq-hero .rq-title{color:#fff!important;}',
      '#panel-request-access .rq-hero .rq-eyebrow{color:#F5C518!important;}',
      '.rq-steps{position:relative;z-index:1;display:flex;align-items:center;gap:8px;margin-top:18px;}',
      '.rq-step{display:flex;align-items:center;gap:6px;font-size:.68rem;font-weight:600;color:rgba(255,255,255,.55);transition:color .3s;white-space:nowrap;}',
      '.rq-step span{width:22px;height:22px;border-radius:0;display:inline-flex;align-items:center;justify-content:center;font-size:.66rem;font-weight:800;border:1.5px solid rgba(255,255,255,.35);transition:all .3s;}',
      '.rq-step.is-on{color:#fff;}',
      '.rq-step.is-on span{border-color:#F5C518;background:#F5C518;color:#0d1b2e;}',
      '.rq-step.is-done{color:#fff;}',
      '.rq-step.is-done span{border-color:#34d399;background:#34d399;color:#06281c;}',
      '.rq-step-line{flex:1;height:2px;border-radius:0;background:rgba(255,255,255,.18);min-width:12px;}',
      '.rq-body{padding:18px;}',
      '.rq-card{background:#fff;border:1px solid var(--border);border-radius:0;padding:16px;margin-top:-30px;position:relative;z-index:2;}',
      '.rq-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}',
      '@media(max-width:560px){.rq-grid{grid-template-columns:1fr;}}',
      '.rq-field label{display:flex;align-items:center;gap:6px;font-size:.7rem;font-weight:700;letter-spacing:.4px;text-transform:uppercase;color:var(--text2);margin-bottom:6px;}',
      '.rq-field label i{color:var(--accent);}',
      '.rq-field label b{color:#e5484d;}',
      '.rq-select{position:relative;}',
      '.rq-select:after{content:"";position:absolute;right:14px;top:50%;width:8px;height:8px;margin-top:-6px;border-right:2.5px solid var(--accent);border-bottom:2.5px solid var(--accent);transform:rotate(45deg);pointer-events:none;border-radius:0;}',
      '.rq-select select{width:100%;appearance:none;-webkit-appearance:none;padding:11px 34px 11px 12px;font-size:.85rem;font-weight:600;font-family:var(--font);color:var(--text);background:var(--surface2);border:1.5px solid var(--border);border-radius:0;outline:none;transition:border-color .2s,box-shadow .2s,background .2s;cursor:pointer;}',
      '',
      '.rq-select select:focus{border-color:var(--accent);background:#fff;}',
      '.rq-combo-host:after{display:none;}',
      '.rq-combo-host .axp-combo-trigger{padding:11px 34px 11px 12px;font-size:.85rem;font-weight:600;border:1.5px solid var(--border);border-radius:0;background-color:var(--surface2);}',
      '.rq-combo-host .axp-combo-trigger.open,.rq-combo-host .axp-combo-trigger:focus{border-color:var(--accent);background-color:#fff;}',
      '.rq-combo-host .axp-combo-panel{border:1.5px solid var(--accent);background:#fff;z-index:60;margin-top:0;}',
      '.rq-combo-host .axp-combo-list{max-height:240px;}',
      '.rq-combo-host .axp-combo-search-input{font-size:.85rem;}',
      '.rq-select select:disabled{opacity:.55;cursor:not-allowed;}',
      '.rq-label-row{display:flex;justify-content:space-between;align-items:baseline;margin:22px 2px 10px;}',
      '.rq-label-row span{font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:1.2px;color:var(--text);}',
      '.rq-label-row em{font-style:normal;font-size:.66rem;color:var(--text3);}',
      '.rq-options{display:grid;grid-template-columns:1fr 1fr;gap:12px;}',
      '@media(max-width:420px){.rq-options{grid-template-columns:1fr;}}',
      '.rq-opt{display:block;cursor:pointer;margin:0;}',
      '.rq-opt input{position:absolute;opacity:0;pointer-events:none;width:1px;height:1px;}',
      '.rq-opt-card{position:relative;height:100%;padding:16px 14px 14px;background:#fff;border:2px solid var(--border);border-radius:0;transition:transform .2s,box-shadow .2s,border-color .2s,background .2s;}',
      '',
      '.rq-opt input:focus-visible+.rq-opt-card{}',
      '.rq-opt input:checked+.rq-opt-card{border-color:var(--accent);background:linear-gradient(180deg,#f3f1ff,#fff);}',
      '.rq-tick{position:absolute;top:10px;right:10px;width:22px;height:22px;border-radius:0;display:flex;align-items:center;justify-content:center;font-size:.75rem;color:#fff;background:var(--accent);transform:scale(0);opacity:0;transition:transform .25s cubic-bezier(.34,1.56,.64,1),opacity .2s;}',
      '.rq-opt input:checked+.rq-opt-card .rq-tick{transform:scale(1);opacity:1;}',
      '.rq-opt-ico{width:42px;height:42px;border-radius:0;display:flex;align-items:center;justify-content:center;font-size:1.25rem;color:#fff;margin-bottom:10px;}',
      '.rq-opt-ico.sow{background:linear-gradient(135deg,#6a5bff,#4A3AFF);}',
      '.rq-opt-ico.lb{background:linear-gradient(135deg,#1d3557,#0d1b2e);}',
      '.rq-opt-name{font-size:.88rem;font-weight:800;color:var(--text);}',
      '.rq-opt-desc{font-size:.68rem;color:var(--text3);line-height:1.45;margin-top:3px;}',
      '.rq-total{position:relative;overflow:hidden;margin-top:20px;padding:16px 18px;border-radius:0;color:#fff;background:linear-gradient(135deg,#0d1b2e,#1a2d4a 60%,#243b63);border:1px solid rgba(245,197,24,.55);}',
      '.rq-total-glow{position:absolute;right:-40px;top:-50px;width:160px;height:160px;border-radius:50%;background:radial-gradient(circle,rgba(245,197,24,.35),rgba(245,197,24,0) 70%);pointer-events:none;}',
      '.rq-total-top{position:relative;display:flex;justify-content:space-between;align-items:center;}',
      '.rq-total-label{font-size:.64rem;text-transform:uppercase;letter-spacing:1.6px;color:rgba(255,255,255,.65);display:flex;align-items:center;gap:6px;}',
      '.rq-total-badge{font-size:.58rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#0d1b2e;background:#F5C518;padding:3px 9px;border-radius:0;}',
      '.rq-total-amt{position:relative;font-family:var(--mono);font-size:2.1rem;font-weight:800;color:#F5C518;margin:8px 0 4px;line-height:1.1;}',
      '.rq-total-amt small{font-size:.8rem;font-weight:700;color:rgba(255,255,255,.7);margin-right:2px;}',
      '.rq-total-amt.rq-pop{animation:rqPop .45s ease;}',
      '@keyframes rqPop{0%{transform:scale(.92);opacity:.5}60%{transform:scale(1.06)}100%{transform:scale(1);opacity:1}}',
      '.rq-total-note{position:relative;font-size:.7rem;color:rgba(255,255,255,.7);line-height:1.5;}',
      '.rq-err{margin-top:12px;padding:10px 14px;font-size:.75rem;font-weight:600;color:#b4232a;background:#fff1f2;border:1px solid #ffc9cf;border-left:4px solid #e5484d;border-radius:0;animation:rqShake .35s;}',
      '@keyframes rqShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}',
      '.rq-submit{width:100%;margin-top:16px;padding:14px;border:none;border-radius:0;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;font-family:var(--font);font-size:.9rem;font-weight:800;letter-spacing:.6px;text-transform:uppercase;color:#fff;background:linear-gradient(135deg,#6a5bff,#4A3AFF 55%,#3326d9);transition:transform .2s,box-shadow .2s,filter .2s;}',
      '.rq-submit i{font-size:1.15rem;transition:transform .2s;}',
      '',
      '',
      '.rq-submit:active{transform:translateY(0) scale(.99);}',
      '.rq-foot{text-align:center;font-size:.66rem;color:var(--text3);margin-top:12px;}',
      '.rq-foot i{color:#16a34a;margin-right:4px;}',
      '#axpStageOneReqBar{gap:10px;padding:12px 16px;background:linear-gradient(180deg,#f4f5ff,#fff);}',
      '.rq-quick{flex:1;display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:0;cursor:pointer;font-family:var(--font);text-align:left;border:1.5px solid var(--border);background:#fff;transition:transform .2s,box-shadow .2s,border-color .2s;}',
      '',
      '.rq-quick .qi{flex:0 0 auto;width:34px;height:34px;border-radius:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:1rem;}',
      '.rq-quick.sow .qi{background:linear-gradient(135deg,#6a5bff,#4A3AFF);}',
      '.rq-quick.lb .qi{background:linear-gradient(135deg,#1d3557,#0d1b2e);}',
      '.rq-quick.sow{background:#eef0ff;border-color:#4A3AFF;}',
      '.rq-quick.lb{background:#fff4cc;border-color:#F5C518;}',
      '.rq-quick b{display:block;font-size:.76rem;font-weight:800;color:var(--text);}',
      '.rq-quick small{display:block;font-size:.62rem;color:var(--text3);margin-top:1px;}',
      '.rq-quick .go{margin-left:auto;color:var(--accent);font-size:.9rem;}'
    ].join('\n');
    document.head.appendChild(st);
  }

  function syncReqSteps(){
    var c=(document.getElementById('axpReqClass')||{}).value;
    var sub=(document.getElementById('axpReqSubject')||{}).value;
    var feats=currentReqFeatures().length;
    var s=[document.getElementById('rqStep1'),document.getElementById('rqStep2'),document.getElementById('rqStep3')];
    if(!s[0])return;
    var done=[!!c, !!(c&&sub), !!(c&&sub&&feats)];
    var active = !c?0 : !sub?1 : 2;
    s.forEach(function(el,i){
      el.classList.toggle('is-done', done[i]);
      el.classList.toggle('is-on', !done[i] && i===active);
      var n=el.querySelector('span');
      if(n) n.innerHTML = done[i] ? '<i class="bi bi-check-lg"></i>' : String(i+1);
    });
  }

  function populateSubjectSelectForRequestPanel(classVal){
    var subjSel=document.getElementById('axpReqSubject');
    if(!subjSel)return;
    var list=getSubjectsForClass(classVal);
    subjSel.innerHTML='<option value="">'+(list.length?'Select Subject':'Select Class First')+'</option>'+
      list.map(function(s){return '<option value="'+String(s).replace(/"/g,'&quot;')+'">'+s+'</option>';}).join('');
    subjSel.disabled = list.length===0;
    _accessInfo=null;
    if(window.__axpReqSubjSync)window.__axpReqSubjSync();
    updateReqAmountDisplay();
  }

  function currentReqFeatures(){
    var sowCb=document.getElementById('axpReqSowCb');
    var lbCb=document.getElementById('axpReqLbCb');
    var out=[];
    if(sowCb && sowCb.checked) out.push('sow');
    if(lbCb && lbCb.checked) out.push('logbook');
    return out;
  }

  function updateReqAmountDisplay(){
    var amountEl=document.getElementById('axpReqAmount');
    var noteEl=document.getElementById('axpReqAmountNote');
    if(!amountEl)return;
    syncReqSteps();

    var subject = (document.getElementById('axpReqSubject')||{}).value || '';
    var classVal = (document.getElementById('axpReqClass')||{}).value || '';
    var features = currentReqFeatures();

    if(!subject || !classVal || !features.length){
      amountEl.textContent='0';
      if(noteEl) noteEl.textContent='Select subject, class and at least one item.';
      return;
    }

    if(!_accessInfo){
      if(noteEl) noteEl.textContent='Checking price\u2026';
      amountEl.textContent='\u2026';
      if(window.AXP_FEATURES && window.AXP_FEATURES.checkAccess){
        window.AXP_FEATURES.checkAccess(subject, classVal, function(resp){
          if(!resp || !resp.price){
            amountEl.textContent='\u2014';
            if(noteEl) noteEl.textContent='Could not load prices from the server. Please check your connection and try again.';
            return;
          }
          _accessInfo = resp;
          renderReqAmountFromInfo();
        });
      }
      return;
    }
    renderReqAmountFromInfo();
  }

  function renderReqAmountFromInfo(){
    var amountEl=document.getElementById('axpReqAmount');
    var noteEl=document.getElementById('axpReqAmountNote');
    if(!amountEl || !_accessInfo)return;

    var features = currentReqFeatures();
    var price = _accessInfo.price || {};
    var access = _accessInfo.access || {};

    var total=0, alreadyActive=[], toPay=[], priceMissing=false;
    features.forEach(function(f){
      var active = !_agentMode && window.AXP_FEATURES && window.AXP_FEATURES.isActive && window.AXP_FEATURES.isActive(access[f]);
      if(active){ alreadyActive.push(f); }
      else {
        toPay.push(f);
        var pf = Number(price[f]);
        if(!isFinite(pf)) priceMissing = true; else total += pf;
      }
    });
    if(priceMissing){
      amountEl.textContent='\u2014';
      if(noteEl) noteEl.textContent='Could not load prices from the server. Please check your connection and try again.';
      return;
    }

    amountEl.textContent = total.toLocaleString();
    if(amountEl.parentNode){ amountEl.parentNode.classList.remove('rq-pop'); void amountEl.parentNode.offsetWidth; amountEl.parentNode.classList.add('rq-pop'); }

    if(!features.length){
      if(noteEl) noteEl.textContent='Select at least one item.';
    }else if(!toPay.length){
      if(noteEl) window.axpIconText(noteEl,'check-lg','Already activated \u2014 no payment needed, will open directly.');
    }else if(alreadyActive.length){
      if(noteEl) noteEl.textContent='Tshs '+total.toLocaleString()+' for: '+toPay.join(', ')+' ('+alreadyActive.join(', ')+' already active).';
    }else{
      if(noteEl) noteEl.textContent='Tshs '+total.toLocaleString()+' for: '+toPay.join(', ')+'.';
    }
  }

  function submitRequestPanel(){
    var subject  = document.getElementById('axpReqSubject').value;
    var classVal = document.getElementById('axpReqClass').value;
    var features = currentReqFeatures();
    var errEl    = document.getElementById('axpReqErr');

    if(!classVal){ errEl.textContent='Please select a Class.'; errEl.style.display='block'; return; }
    if(!subject){ errEl.textContent='Please select a Subject.'; errEl.style.display='block'; return; }
    if(!features.length){ errEl.textContent='Please select Scheme of Work, Logbook, or both.'; errEl.style.display='block'; return; }
    errEl.style.display='none';

    var baseClass = stripStreamLocal(classVal);
    if(_agentMode){
      var t = {
        email:((document.getElementById('axpAgTEmail')||{}).value||'').trim().toLowerCase(),
        name:((document.getElementById('axpAgTName')||{}).value||'').trim(),
        school:((document.getElementById('axpAgTSchool')||{}).value||'').trim()
      };
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)){ errEl.textContent='Enter the teacher\'s valid email.'; errEl.style.display='block'; return; }
      if(!t.name || !t.school){ errEl.textContent='Enter the teacher\'s name and school.'; errEl.style.display='block'; return; }
      if(typeof window.axpAgentSubmit !== 'function'){ errEl.textContent='Not ready yet. Try again in a moment.'; errEl.style.display='block'; return; }
      var sb = document.getElementById('axpReqSubmitBtn'); if(sb){ sb.disabled = true; sb.style.opacity = '.6'; }
      window.axpAgentSubmit(t, features, subject, baseClass, function(err){
        if(sb){ sb.disabled = false; sb.style.opacity = '1'; }
        if(err){ errEl.textContent = err; errEl.style.display='block'; }
      });
      return;
    }
    proceedWithRequest(features, subject, baseClass);
  }

  function proceedWithRequest(features, subject, classVal){
    if(!window.AXP_FEATURES || !window.AXP_FEATURES.checkAccess){
      axpAlert('Request system is not ready yet. Please try again in a moment.');
      return;
    }
    function openPanelFor(featureType){
      if(featureType==='sow' && typeof window.openSOWForSubject==='function'){
        window.openSOWForSubject(subject, classVal, []);
      } else if(featureType==='logbook' && typeof window.openLogbookForSubject==='function'){
        window.openLogbookForSubject(subject, classVal);
      }
    }
    window.AXP_FEATURES.checkAccess(subject, classVal, function(resp){
      if(!resp || !resp.price){ axpAlert('Could not load prices from the server. Please check your connection and try again.'); return; }
      var price = resp.price;
      var access = resp.access || {};
      var alreadyActive = features.filter(function(f){ return window.AXP_FEATURES.isActive(access[f]); });
      var needsPayment  = features.filter(function(f){ return !window.AXP_FEATURES.isActive(access[f]); });

      alreadyActive.forEach(openPanelFor);
      if(!needsPayment.length) return;

      var cart = needsPayment.map(function(f){
        return {
          featureType:f, subject:subject, classVal:classVal,
          amount:price[f],
          label:(f==='sow'?'Scheme of Work':'Logbook')+' \u2013 '+subject+' '+classVal,
          checked:true
        };
      });
      window.AXP_FEATURES.openPaywall(cart, function(){ needsPayment.forEach(openPanelFor); });
    });
  }

  var _barCreated = false;

  function ensureMainStageOneBar(){
    injectReqStyles();
    if(_barCreated)return document.getElementById('axpStageOneReqBar');
    var lpPanel=document.getElementById('panel-lessonplan');
    if(!lpPanel)return null;
    var pageHeader=lpPanel.querySelector('.page-header');
    if(!pageHeader)return null;

    var bar=document.createElement('div');
    bar.id='axpStageOneReqBar';
    bar.style.cssText='display:none;border-bottom:1px solid var(--border);';
    bar.innerHTML=[
      '<button type="button" class="rq-quick sow" id="axpStageOneSowBtn">',
      '  <span class="qi"><i class="bi bi-journal-text"></i></span>',
      '  <span><b>Scheme of Work</b><small>Request now</small></span>',
      '  <i class="bi bi-arrow-right-circle-fill go"></i>',
      '</button>',
      '<button type="button" class="rq-quick lb" id="axpStageOneLbBtn">',
      '  <span class="qi"><i class="bi bi-book-half"></i></span>',
      '  <span><b>Logbook</b><small>Request now</small></span>',
      '  <i class="bi bi-arrow-right-circle-fill go"></i>',
      '</button>',
    ].join('');
    pageHeader.parentNode.insertBefore(bar, pageHeader.nextSibling);

    document.getElementById('axpStageOneSowBtn').addEventListener('click', function(){
      openRequestPanel('sow');
    });
    document.getElementById('axpStageOneLbBtn').addEventListener('click', function(){
      openRequestPanel('logbook');
    });

    _barCreated = true;
    return bar;
  }

  function setStageOneBarVisible(show){
    var bar = ensureMainStageOneBar();
    if(!bar)return;
    bar.style.display = show ? 'flex' : 'none';
  }

  function refreshStageOneBarVisibility(){
    var show = isSignedIn() && !stepTwoHasSelection();
    setStageOneBarVisible(show);
  }

  function bindStepTwoWatchers(){
    var subEl=document.getElementById('subject');
    var clsEl=document.getElementById('classes');
    if(subEl && !subEl._axpReqBound){
      subEl._axpReqBound=true;
      subEl.addEventListener('change', refreshStageOneBarVisibility);
    }
    if(clsEl && !clsEl._axpReqBound){
      clsEl._axpReqBound=true;
      clsEl.addEventListener('change', refreshStageOneBarVisibility);
    }
  }

  function setAgentUi(on){
    _agentMode = !!on;
    var card=document.getElementById('axpReqAgentCard'); if(card) card.style.display = on ? 'block' : 'none';
    var set=function(id,t){ var e=document.getElementById(id); if(e) e.innerHTML=t; };
    set('rqEyebrow', on ? 'Grant Access' : 'Quick Request');
    set('rqTitle', on ? 'Request for a teacher' : 'Get your Scheme of Work &amp; Logbook');
    set('rqSub', on ? 'Enter the teacher, then pick class, subject and what they need.' : 'Pick your class and subject, choose what you need, and you\'re done in seconds.');
    var sb=document.querySelector('#axpReqSubmitBtn span'); if(sb) sb.textContent = on ? 'Request & send on WhatsApp' : 'Continue';
    if(!on){ ['axpAgTEmail','axpAgTName','axpAgTSchool'].forEach(function(i){ var e=document.getElementById(i); if(e) e.value=''; }); }
  }
  window.axpReqBack = function(){
    if(_agentMode && typeof window.axpOpenAgentPanel === 'function'){ window.axpOpenAgentPanel(); return; }
    showPanel('lessonplan');
  };
  function openRequestPanel(presetFeature, agent){
    if(!isSignedIn()){
      if(typeof AUTH!=='undefined' && AUTH.showAuthPopup) AUTH.showAuthPopup();
      return;
    }
    injectRequestPanel();
    setAgentUi(agent === true);

    var classSel=document.getElementById('axpReqClass');
    if(classSel) classSel.value='';
    populateSubjectSelectForRequestPanel('');
    var sowCb=document.getElementById('axpReqSowCb');
    var lbCb=document.getElementById('axpReqLbCb');
    if(sowCb) sowCb.checked = presetFeature==='sow';
    if(lbCb) lbCb.checked = presetFeature==='logbook';
    var errEl=document.getElementById('axpReqErr');
    if(errEl) errEl.style.display='none';
    _accessInfo=null;
    updateReqAmountDisplay();

    showPanel('request-access');
    closeSidebarIfMobile();
  }

  var _sbCreated = false;
  function ensureSidebarButton(){
    if(_sbCreated)return;
    var anchor = document.getElementById('sb-savedplans') || document.getElementById('sb-syllabus') || document.getElementById('sb-lessonplan');
    if(!anchor)return;

    var section=document.createElement('div');
    section.className='axp-nav-section';
    section.id='sb-request-access-section';
    section.textContent='Quick Request';
    section.style.display='none';
    anchor.parentNode.insertBefore(section, anchor.nextSibling);

    var btn=document.createElement('button');
    btn.className='axp-nav-btn';
    btn.id='sb-request-access';
    btn.style.display='none';
    btn.innerHTML='<i class="bi bi-lightning-charge-fill"></i> Request SOW / Logbook';
    btn.addEventListener('click', function(){ openRequestPanel(null); });
    section.parentNode.insertBefore(btn, section.nextSibling);

    _sbCreated = true;
  }

  function refreshSidebarVisibility(){
    ensureSidebarButton();
    var signed = isSignedIn();
    var btn = document.getElementById('sb-request-access');
    var sec = document.getElementById('sb-request-access-section');
    if(btn) btn.style.display = signed ? 'flex' : 'none';
    if(sec) sec.style.display = signed ? 'block' : 'none';
  }

  window.axpOpenQuickRequestPanel = openRequestPanel;

  function init(){
    ensureMainStageOneBar();
    ensureSidebarButton();
    bindStepTwoWatchers();
    refreshStageOneBarVisibility();
    refreshSidebarVisibility();

    var lastKey='';
    setInterval(function(){
      var signed=isSignedIn();
      var key = signed ? ((AUTH.getUser()||{}).email||'signed') : '';
      if(key!==lastKey){
        lastKey=key;
        refreshStageOneBarVisibility();
        refreshSidebarVisibility();
      }
      bindStepTwoWatchers();
    }, 2000);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 800);
  }
})();
</script> 
  
  <script>
(function () {
  'use strict';

  var EXAM_KB_API_URL = 'https://script.google.com/macros/s/AKfycbyMbU8n4ybqXbW8N1EJvUV-wGUWAWSGmcNnWSDZIAUsfyKUhuGkx5YlN9euY3QaF-l3/exec';

  var state = {
    school: '', teacherName: '', dateOption: '', date: '',
    classes: '', subject: '', streams: '', period: '',
    topicLesson: '', compLesson: '', mainlesson: '', specificLesson: '',
    tlmaterials: '', refLesson: '',
    studentsOption: '',
    wrdImp1: '', wrdImp2: '', remarkOption: ''
  };

  var intentsCache = {};
  var currentIntentsResult = null;
  var readyCallbacks = [];
  var notFoundCallbacks = [];
  var isFetching = false;

  var ASSESSMENT_TYPES = [
    { key: 'oral',     label: 'Oral Questions', icon: 'bi-chat-left-quote-fill', available: true },
    { key: 'exercise', label: 'Exercise',        icon: 'bi-pencil-square',        available: true },
    { key: 'quiz',     label: 'Quiz',            icon: 'bi-patch-question',       available: true },
    { key: 'test',     label: 'Test',            icon: 'bi-journal-check',        available: true },
    { key: 'exam',     label: 'Exam',            icon: 'bi-mortarboard-fill',     available: false }
  ];

  function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  function cacheKey(cls, subj, main) {
    return [cls, subj, main].map(function (s) { return String(s || '').trim().toLowerCase(); }).join('|');
  }

  function readSelectOrInputText(id) {
    var el = document.getElementById(id);
    if (!el) return '';
    if (el.tagName === 'SELECT') {
      var opt = el.options[el.selectedIndex];
      return opt ? (opt.text || opt.value || '').trim() : '';
    }
    return (el.value || '').trim();
  }
  function readValue(id) {
    var el = document.getElementById(id);
    return el ? (el.value || '').trim() : '';
  }

  function refreshState() {
    state.school = readValue('school');
    state.teacherName = readValue('teacherName');
    state.dateOption = readValue('dateOption');
    state.date = readValue('date');

    state.classes = readValue('classes');
    state.subject = readSelectOrInputText('subject');
    state.streams = readValue('streams');
    state.period = readValue('period');

    state.topicLesson = readSelectOrInputText('topicLesson');
    state.compLesson = readSelectOrInputText('compLesson');
    state.mainlesson = readSelectOrInputText('mainlesson');
    state.specificLesson = readValue('specificLesson');
    state.tlmaterials = readValue('tlmaterials');
    state.refLesson = readSelectOrInputText('refLesson');

    state.studentsOption = readValue('studentsOption');

    state.wrdImp1 = readValue('wrdImp1');
    state.wrdImp2 = readValue('wrdImp2');
    state.remarkOption = readValue('remarkOption');

    return state;
  }

  function getCurrentStageNumber() {
    var active = document.querySelector('.step-indicator.active');
    return active ? (parseInt(active.getAttribute('data-step'), 10) || 1) : 1;
  }

  function fireReady(resp) {
    readyCallbacks.forEach(function (cb) { try { cb(resp); } catch (e) { console.error(e); } });
  }
  function fireNotFound(resp) {
    notFoundCallbacks.forEach(function (cb) { try { cb(resp); } catch (e) { console.error(e); } });
  }

  var _panelInjected = false;

  function injectQuestionBankPanel() {
    if (_panelInjected) return;
    var contentInner = document.querySelector('.content-inner');
    if (!contentInner) return;

    var panel = document.createElement('div');
    panel.className = 'main-panel';
    panel.id = 'panel-questionbank';
    panel.innerHTML = [
      '<div class="panel-header">',
      '  <button class="panel-back" id="qbankBackBtn"><i class="bi bi-arrow-left"></i> Back</button>',
      '  <h2><i class="bi bi-patch-question-fill"></i> Question Bank</h2>',
      '  <p id="qbankSubtitle">Fetch AI-generated question material for the currently selected Main Activity \u2014 use it to build Oral Questions, Exercises, Quizzes or Tests.</p>',
      '</div>',
      '<div class="panel-body" id="qbankPanelBody"></div>',
    ].join('');
    contentInner.appendChild(panel);

    var backBtn = document.getElementById('qbankBackBtn');
    if (backBtn) backBtn.addEventListener('click', function () { if (typeof showPanel === 'function') showPanel('lessonplan'); });

    _panelInjected = true;
  }

  function selectionSummaryHTML() {
    var cls = state.classes || '\u2014';
    var subj = state.subject || '\u2014';
    var main = state.mainlesson || '\u2014';
    return [
      '<div style="background:var(--surface2);border:1px solid var(--border);border-left:3px solid var(--accent);padding:9px 12px;margin-bottom:14px;font-size:.76rem;color:var(--text2);line-height:1.7;">',
      '  <div><strong style="color:var(--text);">Class:</strong> ' + esc(cls) + '</div>',
      '  <div><strong style="color:var(--text);">Subject:</strong> ' + esc(subj) + '</div>',
      '  <div><strong style="color:var(--text);">Main Activity:</strong> ' + esc(main) + '</div>',
      '</div>'
    ].join('');
  }

  function renderIdleState() {
    var body = document.getElementById('qbankPanelBody');
    if (!body) return;
    var hasSelection = !!(state.classes && state.subject && state.mainlesson);

    body.innerHTML = [
      selectionSummaryHTML(),
      hasSelection
        ? '<div class="sow-state" style="padding:34px 18px;">' +
          '  <i class="bi bi-patch-question-fill" style="font-size:2.4rem;color:var(--border2);"></i>' +
          '  <div class="sow-state-title" style="margin-top:10px;">Ready to fetch</div>' +
          '  <div class="sow-state-sub">Click below to load question material for this Main Activity \u2014 for use in Oral Questions, Exercises, Quizzes or Tests.</div>' +
          '  <button class="sow-tool-btn accent" id="qbankStartBtn" style="margin-top:16px;"><i class="bi bi-cloud-download"></i> Load Question Bank</button>' +
          '</div>'
        : '<div class="sow-state" style="padding:34px 18px;">' +
          '  <i class="bi bi-exclamation-triangle-fill" style="font-size:2.2rem;color:var(--gold);"></i>' +
          '  <div class="sow-state-title" style="margin-top:10px;">Selection incomplete</div>' +
          '  <div class="sow-state-sub">Please go back and select a Class, Subject and Main Activity (Steps 2\u20133) first.</div>' +
          '  <button class="sow-tool-btn neutral" id="qbankGoBackBtn" style="margin-top:16px;"><i class="bi bi-arrow-left"></i> Go to Lesson Plan</button>' +
          '</div>'
    ].join('');

    var startBtn = document.getElementById('qbankStartBtn');
    if (startBtn) startBtn.addEventListener('click', beginFetch);
    var goBackBtn = document.getElementById('qbankGoBackBtn');
    if (goBackBtn) goBackBtn.addEventListener('click', function () { if (typeof showPanel === 'function') showPanel('lessonplan'); });
  }

  function renderLoadingState() {
    var body = document.getElementById('qbankPanelBody');
    if (!body) return;
    body.innerHTML = [
      selectionSummaryHTML(),
      '<div class="sow-state" style="padding:40px 18px;">',
      '  <span class="sow-spinner"></span>',
      '  <div class="sow-state-title" style="margin-top:12px;">Fetching question data\u2026</div>',
      '  <div class="sow-state-sub">Contacting the AcademixPoint data center. This only happens once per Main Activity.</div>',
      '</div>'
    ].join('');
  }

  function buildAssessmentButtonsHTML() {
    return ASSESSMENT_TYPES.map(function (t) {
      if (t.available) {
        return '<button class="sow-tool-btn accent" data-qbank-type="' + t.key + '" style="flex:1;justify-content:center;min-width:140px;"><i class="bi ' + t.icon + '"></i> ' + esc(t.label) + '</button>';
      }
      return '<button class="sow-tool-btn neutral" disabled title="Coming soon" style="flex:1;justify-content:center;min-width:140px;cursor:not-allowed;opacity:.55;position:relative;"><i class="bi ' + t.icon + '"></i> ' + esc(t.label) +
        '<span style="font-size:.52rem;font-weight:800;letter-spacing:.4px;text-transform:uppercase;background:var(--gold);color:var(--navy);padding:1px 5px;margin-left:6px;">Soon</span></button>';
    }).join('');
  }

  function renderSuccessState(resp) {
    var body = document.getElementById('qbankPanelBody');
    if (!body) return;

    var intents = (resp && resp.intents) || [];
    var count = (resp && resp.intentCount) || intents.length || 0;

    var listHtml = intents.slice(0, 8).map(function (it, idx) {
      return '<div style="padding:8px 10px;background:var(--surface2);border:1px solid var(--border);margin-bottom:6px;font-size:.74rem;color:var(--text2);">' +
        '<strong style="color:var(--text);">' + (idx + 1) + '.</strong> ' + esc(it.intentText || '') +
        (it.markAllocation ? ' <span style="color:var(--text3);">(' + it.markAllocation + ' mk)</span>' : '') +
        '</div>';
    }).join('');

    var moreNote = intents.length > 8
      ? '<div style="font-size:.68rem;color:var(--text3);margin-bottom:10px;">+' + (intents.length - 8) + ' more item(s) loaded and ready.</div>'
      : '';

    body.innerHTML = [
      selectionSummaryHTML(),
      '<div style="display:flex;align-items:center;gap:8px;background:#edfff4;border:1px solid #a8e6c0;border-left:3px solid var(--green);padding:10px 12px;margin-bottom:14px;">',
      '  <i class="bi bi-check-circle-fill" style="color:var(--green);font-size:1.1rem;"></i>',
      '  <div style="font-size:.78rem;color:#155724;"><strong>' + count + ' question item' + (count === 1 ? '' : 's') + ' loaded successfully</strong><br>' +
      '  <span style="font-size:.7rem;color:#2f6b45;">Data received from the AcademixPoint data center for &ldquo;' + esc(state.mainlesson) + '&rdquo;.</span></div>',
      '</div>',
      intents.length ? '<div class="panel-section-title">Preview</div>' + listHtml + moreNote : '',
      '<div class="panel-section-title">Build Assessment</div>',
      '<div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">',
      buildAssessmentButtonsHTML(),
      '</div>',
      '<div style="font-size:.66rem;color:var(--text3);margin-bottom:10px;"><i class="bi bi-info-circle"></i> Exam builder is not available yet \u2014 coming in a future update.</div>',
      '<div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap;">',
      '  <button class="sow-tool-btn neutral" id="qbankReloadBtn" style="flex:1;justify-content:center;min-width:180px;"><i class="bi bi-arrow-clockwise"></i> Reload</button>',
      '</div>'
    ].join('');

    Array.prototype.forEach.call(body.querySelectorAll('[data-qbank-type]'), function (btn) {
      btn.addEventListener('click', function () {
        handleBuildAssessment(btn.getAttribute('data-qbank-type'), resp);
      });
    });

    var reloadBtn = document.getElementById('qbankReloadBtn');
    if (reloadBtn) reloadBtn.addEventListener('click', function () {
      var key = cacheKey(state.classes, state.subject, state.mainlesson);
      delete intentsCache[key];
      beginFetch();
    });
  }

  function renderNotFoundState(message) {
    var body = document.getElementById('qbankPanelBody');
    if (!body) return;
    body.innerHTML = [
      selectionSummaryHTML(),
      '<div class="sow-state" style="padding:34px 18px;">',
      '  <i class="bi bi-search" style="font-size:2.2rem;color:var(--gold);"></i>',
      '  <div class="sow-state-title" style="margin-top:10px;">No question data available yet</div>',
      '  <div class="sow-state-sub">' + esc(message || 'No data available for this selection yet.') + '</div>',
      '  <button class="sow-tool-btn neutral" id="qbankRetryBtn" style="margin-top:16px;"><i class="bi bi-arrow-clockwise"></i> Try Again</button>',
      '</div>'
    ].join('');
    var retryBtn = document.getElementById('qbankRetryBtn');
    if (retryBtn) retryBtn.addEventListener('click', beginFetch);
  }

  function renderErrorState(message) {
    var body = document.getElementById('qbankPanelBody');
    if (!body) return;
    body.innerHTML = [
      selectionSummaryHTML(),
      '<div class="sow-state" style="padding:34px 18px;">',
      '  <i class="bi bi-exclamation-triangle-fill" style="font-size:2.2rem;color:var(--red);"></i>',
      '  <div class="sow-state-title" style="margin-top:10px;color:var(--red);">Could not load data</div>',
      '  <div class="sow-state-sub">' + esc(message || 'Something went wrong. Please try again.') + '</div>',
      '  <button class="sow-tool-btn accent" id="qbankRetryErrBtn" style="margin-top:16px;"><i class="bi bi-arrow-clockwise"></i> Try Again</button>',
      '</div>'
    ].join('');
    var retryBtn = document.getElementById('qbankRetryErrBtn');
    if (retryBtn) retryBtn.addEventListener('click', beginFetch);
  }

    function handleBuildAssessment(assessmentType, resp) {
    var typeDef = ASSESSMENT_TYPES.filter(function (t) { return t.key === assessmentType; })[0];
    if (!typeDef || !typeDef.available) {
      console.info('[AXP Flow Tracker] "' + assessmentType + '" is not available yet.');
      return;
    }
    generateAssessmentQuestionsRequest(assessmentType, resp);
  }

  function generateAssessmentQuestionsRequest(assessmentType, resp) {
    refreshState();

    var mainIntents = ((resp && resp.intents) || [])
      .map(function (it) { return it.intentText; })
      .filter(Boolean);

    if (!mainIntents.length) {
      axpAlert('No main intents loaded \u2014 please reload the question bank first.');
      return;
    }
    if (!state.specificLesson) {
      axpAlert('No Specific Activity found \u2014 please fill Step 3 (Specific Activity) first.');
      return;
    }

    var api   = window.AXP_API_URL || '';
    var token = (typeof AUTH !== 'undefined' && AUTH.getSessionToken) ? AUTH.getSessionToken() : '';
    if (!api || !token) { axpAlert('Please sign in first.'); return; }

    renderAssessmentLoadingState(assessmentType);

    fetch(api, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action:           'generateAssessmentQuestions',
        token:            token,
        subject:          state.subject,
        classVal:         state.classes,
        mainActivity:     state.mainlesson,
        specificActivity: state.specificLesson,
        assessmentType:   assessmentType,
        mainIntents:      mainIntents
      })
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data && data.success) renderAssessmentResultState(assessmentType, data);
        else renderAssessmentErrorState(assessmentType, (data && data.error) || 'Could not generate questions.');
      })
      .catch(function (err) {
        renderAssessmentErrorState(assessmentType, 'Network error: ' + err.message);
      });
  }

  function renderAssessmentLoadingState(assessmentType) {
    var body = document.getElementById('qbankPanelBody');
    if (!body) return;
    body.innerHTML = [
      selectionSummaryHTML(),
      '<div class="sow-state" style="padding:34px 18px;">',
      '  <span class="sow-spinner"></span>',
      '  <div class="sow-state-title" style="margin-top:10px;">Building ' + esc(assessmentType) + '&hellip;</div>',
      '  <div class="sow-state-sub">Matching your Specific Activity to a Main Intent and generating questions.</div>',
      '</div>'
    ].join('');
  }

  function renderAssessmentErrorState(assessmentType, message) {
    var body = document.getElementById('qbankPanelBody');
    if (!body) return;
    body.innerHTML = [
      selectionSummaryHTML(),
      '<div class="sow-state" style="padding:34px 18px;">',
      '  <i class="bi bi-exclamation-triangle-fill" style="font-size:2.2rem;color:var(--red);"></i>',
      '  <div class="sow-state-title" style="margin-top:10px;color:var(--red);">Could not build ' + esc(assessmentType) + '</div>',
      '  <div class="sow-state-sub">' + esc(message) + '</div>',
      '  <button class="sow-tool-btn accent" id="qbankAssessRetryBtn" style="margin-top:16px;"><i class="bi bi-arrow-clockwise"></i> Back to Question Bank</button>',
      '</div>'
    ].join('');
    var btn = document.getElementById('qbankAssessRetryBtn');
    if (btn) btn.addEventListener('click', function () { renderIdleState(); beginFetch(); });
  }

  function renderAssessmentResultState(assessmentType, data) {
    var body = document.getElementById('qbankPanelBody');
    if (!body) return;

    var questions = data.questions || {};
    var sections  = '';

    Object.keys(questions).forEach(function (type) {
      var items = questions[type] || [];
      if (!items.length) return;
      sections += '<div class="panel-section-title">' + esc(_qbankTypeLabel(type)) + '</div>';
      items.forEach(function (q, idx) { sections += _qbankRenderQuestionItem(type, q, idx); });
    });

    if (!sections) sections = '<div style="padding:20px;color:var(--text3);font-size:.8rem;">No questions were generated.</div>';

    body.innerHTML = [
      selectionSummaryHTML(),
      '<div style="display:flex;align-items:center;gap:8px;background:#edfff4;border:1px solid #a8e6c0;border-left:3px solid var(--green);padding:10px 12px;margin-bottom:14px;">',
      '  <i class="bi bi-check-circle-fill" style="color:var(--green);font-size:1.1rem;"></i>',
      '  <div style="font-size:.78rem;color:#155724;"><strong>' + esc(assessmentType) + ' ready</strong><br>',
      '  <span style="font-size:.7rem;color:#2f6b45;">Matched Intent: &ldquo;' + esc(data.matchedIntent || '') + '&rdquo;</span></div>',
      '</div>',
      sections,
      '<div style="display:flex;gap:8px;margin-top:14px;">',
      '  <button class="sow-tool-btn neutral" id="qbankBackToBankBtn" style="flex:1;justify-content:center;"><i class="bi bi-arrow-left"></i> Back to Question Bank</button>',
      '</div>'
    ].join('');

    var backBtn = document.getElementById('qbankBackToBankBtn');
    if (backBtn) backBtn.addEventListener('click', function () {
      var key    = cacheKey(state.classes, state.subject, state.mainlesson);
      var cached = intentsCache[key];
      if (cached && cached.success) renderSuccessState(cached);
      else renderIdleState();
    });
  }

  function _qbankTypeLabel(type) {
    var labels = {
      multipleChoice: 'Multiple Choice Questions',
      matching:       'Matching Items',
      shortAnswer:    'Short Answer Questions',
      calculation:    'Calculation Questions'
    };
    return labels[type] || type;
  }

  function _qbankRenderQuestionItem(type, q, idx) {
    var n = idx + 1;
    if (type === 'multipleChoice') {
      var opts = (q.options || []).map(function (o) { return '<div style="padding:2px 0;">' + esc(o) + '</div>'; }).join('');
      return '<div style="padding:9px 11px;background:var(--surface2);border:1px solid var(--border);margin-bottom:8px;font-size:.78rem;">' +
        '<div style="font-weight:700;margin-bottom:4px;">' + n + '. ' + esc(q.question || '') + '</div>' +
        opts +
        '<div style="margin-top:4px;color:var(--green);font-size:.7rem;"><strong>Answer:</strong> ' + esc(q.correctAnswer || '') + '</div>' +
        '</div>';
    }
    if (type === 'matching') {
      var colA = (q.columnA || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
      var colB = (q.columnB || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
      return '<div style="padding:9px 11px;background:var(--surface2);border:1px solid var(--border);margin-bottom:8px;font-size:.78rem;">' +
        '<div style="display:flex;gap:14px;">' +
        '<div style="flex:1;"><strong>Column A</strong><ul style="margin:4px 0 0 16px;padding:0;">' + colA + '</ul></div>' +
        '<div style="flex:1;"><strong>Column B</strong><ul style="margin:4px 0 0 16px;padding:0;">' + colB + '</ul></div>' +
        '</div></div>';
    }
    if (type === 'shortAnswer') {
      return '<div style="padding:9px 11px;background:var(--surface2);border:1px solid var(--border);margin-bottom:8px;font-size:.78rem;">' +
        '<div style="font-weight:700;margin-bottom:4px;">' + n + '. ' + esc(q.question || '') + '</div>' +
        '<div style="color:var(--text3);font-size:.72rem;"><strong>Model Answer:</strong> ' + esc(q.modelAnswer || '') + '</div>' +
        '</div>';
    }
    if (type === 'calculation') {
      return '<div style="padding:9px 11px;background:var(--surface2);border:1px solid var(--border);margin-bottom:8px;font-size:.78rem;">' +
        '<div style="font-weight:700;margin-bottom:4px;">' + n + '. ' + esc(q.question || '') + '</div>' +
        '<div style="color:var(--text3);font-size:.72rem;"><strong>Working:</strong> ' + esc(q.workingSteps || '') + '</div>' +
        '<div style="color:var(--green);font-size:.72rem;"><strong>Answer:</strong> ' + esc(q.finalAnswer || '') + '</div>' +
        '</div>';
    }
    return '';
  }

  function fetchMainActivityIntents(classLevel, subject, mainActivity, onDone) {
    if (!EXAM_KB_API_URL || EXAM_KB_API_URL.indexOf('PASTE_') === 0) {
      if (onDone) onDone({ ok: false, reason: 'not-configured' });
      return;
    }
    if (!classLevel || !subject || !mainActivity) {
      if (onDone) onDone({ ok: false, reason: 'missing-fields' });
      return;
    }

    var key = cacheKey(classLevel, subject, mainActivity);
    if (intentsCache[key]) {
      currentIntentsResult = intentsCache[key];
      fireReady(currentIntentsResult);
      if (onDone) onDone({ ok: intentsCache[key].success !== false, cached: true, resp: currentIntentsResult });
      return;
    }

    isFetching = true;
    updateButtonState();

    fetch(EXAM_KB_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'getMainActivityIntents',
        classLevel: classLevel,
        subject: subject,
        mainActivity: mainActivity
      })
    })
      .then(function (r) {
        return r.text().then(function (raw) {
          var trimmed = (raw || '').trim();
          if (trimmed.indexOf('<') === 0) {
            var err = new Error('DEPLOYMENT_ERROR');
            err.isDeploymentError = true;
            throw err;
          }
          try {
            return JSON.parse(trimmed);
          } catch (e) {
            var parseErr = new Error('BAD_JSON');
            parseErr.isDeploymentError = true;
            throw parseErr;
          }
        });
      })
      .then(function (resp) {
        isFetching = false;
        intentsCache[key] = resp;
        currentIntentsResult = resp;

        if (resp && resp.success) {
          console.log('[AXP Flow Tracker] Loaded ' + (resp.intentCount || 0) + ' item(s) for "' +
            resp.mainActivity + '" (' + resp.subject + ' \u2014 ' + resp.classLevel + ').');
          fireReady(resp);
          if (onDone) onDone({ ok: true, cached: false, resp: resp });
        } else {
          var msg = (resp && resp.message) ||
            'AcademixPoint data center: no data available for this selection yet.';
          console.info('[AXP Flow Tracker] ' + msg);
          fireNotFound(resp);
          if (onDone) onDone({ ok: false, reason: 'not-found', resp: resp, message: msg });
        }
      })
      .catch(function (err) {
        isFetching = false;
        console.error('[AXP Flow Tracker] Network error fetching question data:', err);

        var reason = 'network';
        if (err && err.isDeploymentError) reason = 'deployment';
        else if (err && /Failed to fetch/i.test(err.message || '')) reason = 'cors-or-offline';

        if (onDone) onDone({ ok: false, reason: reason, error: err });
      })
      .finally(function () { updateButtonState(); });
  }

  function beginFetch() {
    if (isFetching) return;
    refreshState();

    if (!state.classes || !state.subject || !state.mainlesson) {
      renderIdleState();
      return;
    }

    renderLoadingState();

    fetchMainActivityIntents(state.classes, state.subject, state.mainlesson, function (result) {
      if (result.ok) {
        renderSuccessState(result.resp);
      } else if (result.reason === 'not-found') {
        renderNotFoundState(result.message);
      } else if (result.reason === 'deployment') {
        renderErrorState('Data service is temporarily unavailable \u2014 the backend needs to be redeployed. Please contact support.');
      } else if (result.reason === 'cors-or-offline') {
        renderErrorState('Could not reach the data service (connection blocked). Please check your internet connection and try again shortly.');
      } else if (result.reason === 'network') {
        renderErrorState('Network error \u2014 please check your connection and try again.');
      } else if (result.reason === 'not-configured') {
        renderErrorState('Question data service is not configured yet.');
      } else if (result.reason === 'missing-fields') {
        renderIdleState();
      } else {
        renderErrorState('Something went wrong. Please try again.');
      }
    });
  }

  var WATCH_IDS = ['classes', 'subject', 'mainlesson', 'topicLesson', 'compLesson'];

  function bindWatchers() {
    WATCH_IDS.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && !el._axpFlowBound) {
        el._axpFlowBound = true;
        el.addEventListener('change', function () {
          refreshState();
          updateButtonState();
        });
      }
    });

    var form = document.getElementById('lessonPlanForm');
    if (form && !form._axpFlowBound) {
      form._axpFlowBound = true;
      form.addEventListener('input', function () { refreshState(); updateButtonState(); }, true);
      form.addEventListener('change', function () { refreshState(); updateButtonState(); }, true);
    }
  }

  var _btnInjected = false;
  var _btnEls = null;

  function ensureSidebarButton() {
    if (_btnInjected) return _btnEls;
    var sidebar = document.getElementById('axp-sidebar');
    if (!sidebar) return null;

    var anchor = document.getElementById('sb-syllabus') ||
      document.getElementById('sb-savedplans') ||
      document.getElementById('sb-lessonplan');
    if (!anchor) return null;

    var section = document.createElement('div');
    section.className = 'axp-nav-section';
    section.id = 'sb-qbank-section';
    section.textContent = 'Oral, Exercises, Quizzes & Tests';

    var btn = document.createElement('button');
    btn.className = 'axp-nav-btn';
    btn.id = 'sb-qbank-fetch';
    btn.type = 'button';
    btn.style.cssText = 'display:flex;align-items:center;gap:8px;width:100%;';
    btn.innerHTML =
      '<i class="bi bi-patch-question-fill"></i>' +
      '<span id="sb-qbank-label" style="flex:1;text-align:left;">Question Bank</span>' +
      '<span id="sb-qbank-badge" style="font-size:.54rem;font-weight:800;letter-spacing:.3px;' +
      'padding:2px 7px;border-radius:0;background:var(--surface3,#e4e6ff);color:var(--text3,#7a7a9a);' +
      'white-space:nowrap;flex-shrink:0;"></span>';

    btn.addEventListener('click', function () {
      injectQuestionBankPanel();
      refreshState();

      var hasSelection = !!(state.classes && state.subject && state.mainlesson);
      var key = hasSelection ? cacheKey(state.classes, state.subject, state.mainlesson) : null;
      var cached = key ? intentsCache[key] : null;

      if (cached && cached.success) {
        renderSuccessState(cached);
      } else if (cached && cached.success === false) {
        renderNotFoundState(cached.message);
      } else {
        renderIdleState();
      }

      if (typeof showPanel === 'function') showPanel('questionbank');

      if (window.innerWidth <= 768) {
        var sb2 = document.getElementById('axp-sidebar');
        var ov2 = document.getElementById('sidebar-overlay');
        if (sb2) sb2.classList.remove('open');
        if (ov2) ov2.classList.remove('show');
      }
    });

    anchor.parentNode.insertBefore(section, anchor.nextSibling);
    section.parentNode.insertBefore(btn, section.nextSibling);

    _btnInjected = true;
    _btnEls = {
      section: section,
      btn: btn,
      label: btn.querySelector('#sb-qbank-label'),
      badge: btn.querySelector('#sb-qbank-badge')
    };
    updateButtonState();
    return _btnEls;
  }

  function updateButtonState() {
    var els = _btnEls;
    if (!els) return;

    var hasSelection = !!(state.classes && state.subject && state.mainlesson);
    var key = hasSelection ? cacheKey(state.classes, state.subject, state.mainlesson) : null;
    var cached = key ? intentsCache[key] : null;

    els.btn.disabled = isFetching;
    els.btn.style.cursor = isFetching ? 'not-allowed' : 'pointer';
    els.btn.style.opacity = isFetching ? '.7' : '';

    if (isFetching) {
      els.badge.textContent = 'Loading\u2026';
      els.badge.style.background = 'rgba(245,197,24,.18)';
      els.badge.style.color = '#b45309';
    } else if (!hasSelection) {
      els.badge.textContent = 'Select first';
      els.badge.style.background = 'var(--surface3,#e4e6ff)';
      els.badge.style.color = 'var(--text3,#7a7a9a)';
    } else if (cached && cached.success) {
      window.axpIconText(els.badge,'check-lg','Loaded');
      els.badge.style.background = 'rgba(30,158,82,.15)';
      els.badge.style.color = 'var(--green,#1e9e52)';
    } else if (cached && cached.success === false) {
      els.badge.textContent = 'Not found';
      els.badge.style.background = 'rgba(228,64,95,.12)';
      els.badge.style.color = 'var(--red,#e4405f)';
    } else {
      els.badge.textContent = 'Not loaded';
      els.badge.style.background = 'var(--surface3,#e4e6ff)';
      els.badge.style.color = 'var(--text3,#7a7a9a)';
    }
  }

  function init() {
    bindWatchers();
    refreshState();
    setInterval(function () {
      bindWatchers();
      ensureSidebarButton();
    }, 1500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.AXP_FLOW_TRACKER = {
    getState: function () { return refreshState(); },
    getCurrentStage: getCurrentStageNumber,
    getIntents: function () { return currentIntentsResult; },
    getCachedIntents: function (classLevel, subject, mainActivity) {
      return intentsCache[cacheKey(classLevel, subject, mainActivity)] || null;
    },
    isFetching: function () { return isFetching; },
    onIntentsReady: function (cb) { if (typeof cb === 'function') readyCallbacks.push(cb); },
    onNotFound: function (cb) { if (typeof cb === 'function') notFoundCallbacks.push(cb); }
  };
})();
</script>

<script>

window.axpRenderSampleLP = function (target) {
  if (!target) return;
  var src = document.getElementById('lessonTemp');
  if (!src) return;
  var c = src.cloneNode(true), T = 'first-angle projection symbol conventions';
  function set(id, h) { var e = c.querySelector('#' + id); if (e) e.innerHTML = h; }
  set('schoolNm', 'Sample Secondary School'); set('lessonTch', 'Sample Teacher');
  set('lessonClss', 'Form Two'); set('lessonStrm', 'A'); set('lessonSbjt', 'Technical Drawing');
  set('lessonTm', '08 : 00 A.M - 08 : 40 A.M'); set('lessonDt', '30.10.2026');
  set('sylbsMnObj', 'Constructing orthographic projection');
  set('sylbsCmp', 'Drawing in the first-angle orthographic projection');
  set('sylbsSbtp', 'Projecting blocks in the first-angle projection system');
  set('sylbsSpobj', 'Explain ' + T);
  set('sylbsMts', 'Pictures showing ' + T);
  set('sylbsRfrs', 'Tanzania Institute of Education. (2025). Technical Drawing for secondary schools student\'s book, form two. Tanzania Institute of Education.');
  set('introCont', 5); set('newKnow', 15); set('reinCont', 10); set('refleCont', 10);
  set('intro1', 'Use pictures showing ' + T + ' to prompt students\' curiosity and pose introductory questions');
  set('intro2', 'Engage with the pictures and respond to the teacher\'s questions about ' + T);
  set('intro3', 'Introductory questions about ' + T + ' are answered correctly');
  set('new1', 'Display pictures showing ' + T + ' and facilitate a guided discussion using the following questions:<br>(a) What do you observe from the pictures?<br>(b) How does this relate to ' + T + '?<br>(c) Why is it important to learn about ' + T + ' in everyday life?');
  set('new2', 'Study the pictures and answer the guiding questions about ' + T);
  set('new3', 'Key concepts of ' + T + ' have been explained by the student');
  set('rein1', 'Arrange students into groups and guide them with the following tasks:<br>(a) Explain ' + T + ' in their own words.<br>(b) Identify the relevance of ' + T + ' in daily life.');
  set('rein2', 'Collaborate in groups to complete the tasks and present their results to the class');
  set('rein3', 'Understanding of ' + T + ' has been demonstrated by the student in the group');
  set('reflect1', 'Ask each student to select an activity card and explain ' + T + ' independently');
  set('reflect2', 'Select an activity card and explain ' + T + ' on their own');
  set('reflect3', 'Each student has shown understanding of ' + T + ' on their own');
  set('remarkComm', ' Using participatory methods and appropriate resources, students demonstrated the ability to explain ' + T + '. A few students require additional support, which will be provided in the following lesson.');
  target.innerHTML = '<div class="axp-sample-lp-wrap" style="margin:12px auto;"><div class="axp-sample-lp-page" style="position:relative;width:1080px;background:#fff;color:#000;padding:10px 0 24px;transform-origin:top left;"></div></div>';
  var wrap = target.firstChild, page = wrap.firstChild;
  page.appendChild(c);
  if (window.axpFitDetails) window.axpFitDetails(page);
  var wm = document.createElement('div');
  wm.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;overflow:hidden;';
  wm.innerHTML = '<span style="font-size:260px;font-weight:800;color:rgba(200,30,30,.10);transform:rotate(-28deg);font-family:Helvetica,Arial,sans-serif;">SAMPLE</span>';
  page.appendChild(wm);
  function scale() {
    if (!wrap.isConnected) { window.removeEventListener('resize', scale); return; }
    var s = Math.min(1, ((target.clientWidth || 1104) - 24) / 1080);
    page.style.transform = 'scale(' + s + ')';
    wrap.style.width = (1080 * s) + 'px';
    wrap.style.height = (page.offsetHeight * s) + 'px';
  }
  window.addEventListener('resize', scale);
  scale(); setTimeout(scale, 60);
};
(function () {
  function closeSb() {
    if (window.innerWidth > 768) return;
    var sb = document.getElementById('axp-sidebar'), ov = document.getElementById('sidebar-overlay');
    if (sb) sb.classList.remove('open');
    if (ov) ov.classList.remove('show');
  }
  function makePanel(id, icon, title, subtitle, bodyId) {
    if (document.getElementById('panel-' + id)) return;
    var host = document.getElementById('panel-howto');
    if (!host || !host.parentNode) return;
    var p = document.createElement('div');
    p.className = 'main-panel';
    p.id = 'panel-' + id;
    p.innerHTML =
      '<div class="panel-header">' +
      '<button class="panel-back" onclick="showPanel(\'lessonplan\')"><i class="bi bi-arrow-left"></i> Back</button>' +
      '<h2><i class="bi ' + icon + '"></i> ' + title + '</h2><p>' + subtitle + '</p></div>' +
      '<div style="display:flex;align-items:center;gap:8px;padding:8px 14px;background:rgba(74,58,255,.07);border-bottom:1px solid var(--border);font-size:.7rem;color:var(--text2);line-height:1.5;">' +
      '<i class="bi bi-eye-fill" style="color:var(--accent);flex-shrink:0;"></i>' +
      '<span>Sample for viewing only \u2014 it cannot be downloaded. Your own document is created from your lesson plans.</span></div>' +
      '<div id="' + bodyId + '" oncontextmenu="return false;" style="background:#e8e8e8;min-height:200px;-webkit-user-select:none;user-select:none;"></div>';
    host.parentNode.appendChild(p);
  }
  function wire(btnId, panelName, bodyId, renderFn) {
    var btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', function () {
      showPanel(panelName);
      var target = document.getElementById(bodyId);
      if (typeof window[renderFn] === 'function') window[renderFn](target);
      closeSb();
    });
  }
  function init() {
    makePanel('samplesow', 'bi-journal-text', 'Sample Scheme of Work', 'How a finished Scheme of Work looks (Biology, Form Two).', 'sampleSowBody');
    makePanel('samplelp', 'bi-file-earmark-richtext', 'Sample Lesson Plan', 'How a finished Lesson Plan looks (Technical Drawing, Form Two).', 'sampleLpBody');
    makePanel('samplelogbook', 'bi-book-half', 'Sample Logbook', 'How a finished Subject Logbook looks (Biology, Form Two).', 'sampleLogbookBody');
    wire('sb-samplesow', 'samplesow', 'sampleSowBody', 'axpRenderSampleSOW');
    wire('sb-samplelogbook', 'samplelogbook', 'sampleLogbookBody', 'axpRenderSampleLogbook');
    wire('sb-samplelp', 'samplelp', 'sampleLpBody', 'axpRenderSampleLP');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
</script>
  
<script>
(function () {
  'use strict';
  function $(i) { return document.getElementById(i); }
  function val(i) { var e = $(i); return e ? String(e.value || '').trim() : ''; }

  window.axpFitDetails = function (root) {
    var t = root && root.querySelector('.details-tb'); if (!t) return;
    t.style.tableLayout = 'fixed'; t.style.width = '94%';
    var W = ['10%', '36.5%', '17%', '36.5%'];
    Array.prototype.forEach.call(t.rows, function (r) {
      Array.prototype.forEach.call(r.cells, function (td, i) {
        td.style.width = W[i]; td.style.whiteSpace = 'nowrap'; td.style.overflow = 'hidden';
        var size = parseFloat(getComputedStyle(td).fontSize) || 13;
        while (td.scrollWidth > td.clientWidth + 1 && size > 7) { size -= 0.5; td.style.fontSize = size + 'px'; }
      });
    });
  };
  function fill() {
    var src = $('lessonTemp'); if (!src) return null;
    window.AXP_WORDING = window.AXP_WORDING || {};
    window.AXP_WORDING.seed = (Math.floor(Math.random() * 2147483646) + 1);
    try { updateContent(); } catch (e) { if (window.console) console.error('Preview could not be built', e); }
    return src.cloneNode(true);
  }

  function open() {
    var old = $('axp-lp-preview'); if (old) old.remove();
    var missing = [];
    if (!val('specificLesson')) missing.push('Specific Learning Activity');
    if (!val('wrdImp2')) missing.push('Action Word');
    if (!val('tlmaterials')) missing.push('T&L Resources');
    var clone = fill(); if (!clone) return;
    var ov = document.createElement('div'); ov.id = 'axp-lp-preview';
    ov.style.cssText = 'position:fixed;inset:0;z-index:10200;background:rgba(0,0,0,.7);display:flex;flex-direction:column;';
    ov.innerHTML = '<div style="background:#14143a;color:#fff;padding:10px 14px;display:flex;align-items:center;gap:10px;flex-shrink:0;">' +
      '<i class="bi bi-eye-fill"></i><div style="flex:1;font-size:.8rem;font-weight:700;">Preview \u2014 this is how your lesson plan will look</div>' +
      '<button type="button" id="axp-lp-prev-create" style="background:#1e9e52;color:#fff;border:none;padding:7px 14px;font-weight:700;font-size:.75rem;cursor:pointer;"><i class="bi bi-check-circle-fill"></i> Create Lesson Plan</button>' +
      '<button type="button" id="axp-lp-prev-close" style="background:#e4405f;color:#fff;border:none;padding:7px 14px;font-weight:700;font-size:.75rem;cursor:pointer;"><i class="bi bi-x-lg"></i> Close</button></div>' +
      (missing.length ? '<div style="background:#fff5d6;color:#7a5200;padding:7px 14px;font-size:.72rem;flex-shrink:0;"><b>Not filled yet:</b> ' + missing.join(', ') + '. The preview will update once you complete them.</div>' : '') +
      '<div id="axp-lp-prev-scroll" style="flex:1;overflow:auto;padding:12px;background:#e8e8e8;-webkit-overflow-scrolling:touch;"><div id="axp-lp-prev-wrap" style="margin:0 auto;"><div id="axp-lp-prev-page" style="width:1080px;background:#fff;color:#000;padding:10px 0 24px;transform-origin:top left;"></div></div></div>';
    document.body.appendChild(ov);
    var page = $('axp-lp-prev-page'); page.appendChild(clone);
    window.axpFitDetails(page);
    function scale() {
      var avail = $('axp-lp-prev-scroll').clientWidth - 24, s = Math.min(1, avail / 1080), w = $('axp-lp-prev-wrap');
      page.style.transform = 'scale(' + s + ')'; w.style.width = (1080 * s) + 'px'; w.style.height = (page.offsetHeight * s) + 'px';
    }
    scale(); setTimeout(scale, 50);
    function close() { window.removeEventListener('resize', scale); ov.remove(); }
    window.addEventListener('resize', scale);
    $('axp-lp-prev-close').addEventListener('click', close);
    $('axp-lp-prev-create').addEventListener('click', function () {
      close();
      var sb = $('submit-lesson-plan');
      if (sb) sb.click();
    });
  }

  function init() {
    var sub = $('submit-lesson-plan'); if (!sub || $('axp-preview-lp')) return;
    var btn = document.createElement('button'); btn.type = 'button'; btn.id = 'axp-preview-lp'; btn.className = 'btn btn-secondary';
    btn.innerHTML = '<i class="bi bi-eye-fill"></i> Preview Lesson Plan';
    sub.parentNode.insertBefore(btn, sub);
    function vis() { btn.style.display = sub.style.display === 'none' ? 'none' : ''; }
    new MutationObserver(vis).observe(sub, { attributes: true, attributeFilter: ['style'] }); vis();
    btn.addEventListener('click', open);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
</script>
<script>
(function(){
  var el=document.getElementById('loadingIndicator'),box=document.getElementById('axpLdLogo'),msg=document.getElementById('axpLdMsg');
  if(!el||!box||!msg||!window.MutationObserver)return;
  var ICO={
    key:'<svg viewBox="0 0 24 24"><circle pathLength="1" cx="8" cy="15" r="4"/><path pathLength="1" d="M11 12L20 3"/><path pathLength="1" d="M17 6l3 3"/><path pathLength="1" d="M15 8l2 2"/></svg>',
    shield:'<svg viewBox="0 0 24 24"><path pathLength="1" d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6z"/><path pathLength="1" d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
    book:'<svg viewBox="0 0 24 24"><path pathLength="1" d="M12 6C10 4.5 7 4 4 4v14c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2z"/><path pathLength="1" d="M12 6v14"/></svg>',
    spark:'<svg viewBox="0 0 24 24"><path pathLength="1" d="M12 3l2 7 7 2-7 2-2 7-2-7-7-2 7-2z"/></svg>',
    done:'<svg viewBox="0 0 24 24"><circle pathLength="1" cx="12" cy="12" r="9"/><path pathLength="1" d="M7.5 12.5l3 3 6-7"/></svg>'
  };
  var msgs=[
    {t:'Welcome back \u2014 signing you in',i:'key'},
    {t:'Keeping your session safe and secure',i:'shield'},
    {t:'Gathering your lessons and plans',i:'book'},
    {t:'Polishing every little detail for you',i:'spark'},
    {t:'Almost there \u2014 thank you for waiting',i:'done'}
  ],mi=0,tDraw=null,tMsg=null,tFade=null,svgHTML=null;
  function logo(){
    if(svgHTML)return svgHTML;
    var src=document.querySelector('#axp-nav .axp-nav-brand .axl')||document.querySelector('.axl');
    svgHTML=src?src.outerHTML:'';return svgHTML;
  }
  function draw(){box.classList.remove('fade');box.innerHTML=logo();}
  var ico=document.getElementById('axpLdIco');
  function show(n){msg.textContent=msgs[n].t;if(ico){ico.innerHTML='';void ico.offsetWidth;ico.innerHTML=ICO[msgs[n].i];}}
  function cycle(){
    draw();
    tFade=setTimeout(function(){box.classList.add('fade');},2300);
  }
  function start(){
    stop();mi=0;show(0);
    cycle();tDraw=setInterval(cycle,2800);
    tMsg=setInterval(function(){
      msg.classList.add('swap');
      setTimeout(function(){mi=(mi+1)%msgs.length;show(mi);msg.classList.remove('swap');},350);
    },2800);
  }
  function stop(){clearInterval(tDraw);clearInterval(tMsg);clearTimeout(tFade);tDraw=tMsg=tFade=null;}
  new MutationObserver(function(){
    if(el.classList.contains('show')){if(!tDraw)start();}else{stop();}
  }).observe(el,{attributes:true,attributeFilter:['class']});
})();
</script>
<style id="axp-popup-logo-css">
.axp-pl{display:flex;align-items:center;justify-content:center;width:100%;box-sizing:border-box;padding:9px 14px;background:#fff;border-bottom:1px solid var(--border,#e2e8f0);flex-shrink:0;}
.axp-pl .axl{display:block;width:auto;height:30px;}
.axp-pl .axl .in{stroke:#16124a;}
.axp-pl .axl .dt.in,.axp-pl .axl .afill{fill:#16124a;}
.axp-pl .axl .wh{stroke:#fff;}
@media(max-width:480px){.axp-pl{padding:7px 12px;}.axp-pl .axl{height:26px;}}
</style>
<script>
(function(){
  var SEL='.auth-popup,.axp-dlg,.profile-popup,.reference-year-popup,.sow-modal,.axp-popup,#axp-backdate-modal>div,#axpAuditOverlay>div';
  var svg=null;
  function logo(){
    if(svg!==null)return svg;
    var src=document.querySelector('#axp-nav .axp-nav-brand .axl')||document.querySelector('.axl');
    svg=src?src.outerHTML:'';return svg;
  }
  function add(box){
    if(!box||box.nodeType!==1||box.querySelector(':scope > .axp-pl'))return;
    var l=logo();if(!l)return;
    var d=document.createElement('div');d.className='axp-pl';d.innerHTML=l;
    box.insertBefore(d,box.firstChild);
  }
  function scan(root){
    if(!root||root.nodeType!==1)return;
    if(root.matches&&root.matches(SEL))add(root);
    var list=root.querySelectorAll?root.querySelectorAll(SEL):[];
    for(var i=0;i<list.length;i++)add(list[i]);
  }
  var queued=false,pending=[];
  function flush(){
    queued=false;var items=pending;pending=[];
    for(var i=0;i<items.length;i++){
      var n=items[i];
      if(!n.isConnected)continue;
      scan(n);
      var up=n.closest&&n.closest(SEL);if(up)add(up);
    }
  }
  function init(){
    scan(document.body);
    new MutationObserver(function(recs){
      for(var i=0;i<recs.length;i++){
        var r=recs[i];
        if(r.target&&r.target.nodeType===1)pending.push(r.target);
        for(var j=0;j<r.addedNodes.length;j++)if(r.addedNodes[j].nodeType===1)pending.push(r.addedNodes[j]);
      }
      if(!queued&&pending.length){queued=true;requestAnimationFrame(flush);}
    }).observe(document.body,{childList:true,subtree:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
</script>

<script>
(function () {
  'use strict';
  function $(i){ return document.getElementById(i); }
  function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
  function fmt(d){ if(!d) return ''; var x=new Date(d); return isNaN(x)?'':x.toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'}); }

  function ensurePanel(){
    if ($('panel-myaccess')) return;
    var host = $('panel-howto'); if (!host || !host.parentNode) return;
    var p = document.createElement('div');
    p.className = 'main-panel'; p.id = 'panel-myaccess';
    p.innerHTML =
      '<div class="panel-header"><button class="panel-back" onclick="showPanel(\'lessonplan\')"><i class="bi bi-arrow-left"></i> Back</button>' +
      '<h2><i class="bi bi-patch-check-fill"></i> My Access &amp; Activations</h2>' +
      '<p>Your account status and every subject you have activated for Logbook and Scheme of Work.</p></div>' +
      '<div class="panel-body" id="myAccessBody" style="padding:14px;"></div>';
    host.parentNode.appendChild(p);
  }

  function goBtn(txt, icon, ft, subject, classVal){
    return '<button type="button" class="axp-acc-go" data-ft="'+ft+'" data-s="'+esc(subject)+'" data-c="'+esc(classVal)+'" title="Open '+esc(txt)+' \u2014 '+esc(subject)+' '+esc(classVal)+'" ' +
      'style="display:inline-flex;align-items:center;gap:4px;padding:3px 9px;font-size:.64rem;font-weight:800;color:#0f7a3a;background:#e9fff2;border:1px solid #a8e6c0;cursor:pointer;font-family:var(--font);">' +
      '<i class="bi '+icon+'"></i> '+txt+' <i class="bi bi-box-arrow-up-right" style="font-size:.6rem;opacity:.7;"></i></button>';
  }
  document.addEventListener('click', function(e){
    var b = e.target.closest ? e.target.closest('.axp-acc-go') : null;
    if (!b) return;
    e.preventDefault();
    var ft = b.getAttribute('data-ft'), s = b.getAttribute('data-s'), c = b.getAttribute('data-c');
    if (ft === 'logbook' && typeof window.openLogbookForSubject === 'function') window.openLogbookForSubject(s, c);
    else if (ft === 'sow' && typeof window.openSOWForSubject === 'function') window.openSOWForSubject(s, c, []);
  });
  var _st = document.createElement('style');
  _st.textContent = '.axp-acc-go:hover{background:#d4f7e2!important;border-color:#16a34a!important;}.axp-acc-go:active{transform:translateY(1px);}';
  document.head.appendChild(_st);


  var _st2 = document.createElement('style');
  _st2.textContent =
    '.axp-mini-card{padding:6px 10px;background:var(--surface);border:1px solid var(--border);border-left:4px solid #16a34a;}' +
    '.axp-mini-head{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;}' +
    '.axp-mini-title{font-size:.62rem;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--text);}' +
    '.axp-mini-meta{display:inline-flex;align-items:center;gap:8px;font-size:.62rem;color:var(--text3);}' +
    '.axp-mini-meta a{font-weight:700;color:var(--accent);text-decoration:none;}' +
    '.axp-mini-chips{display:flex;flex-wrap:wrap;gap:4px;margin-top:5px;}' +
    '.axp-mini-chip{display:inline-flex;align-items:center;gap:3px;padding:1px 2px 1px 7px;background:var(--surface2);border:1px solid var(--border);font-size:.64rem;color:var(--text);max-width:100%;}' +
    '.axp-mini-txt{max-width:190px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600;}' +
    '.axp-mini-txt b{color:var(--accent);font-weight:800;}' +
    '.axp-mini-ico{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;padding:0;font-size:.68rem;color:#0f7a3a;background:#e9fff2;border:1px solid #a8e6c0;cursor:pointer;}' +
    '.axp-mini-ico:hover{background:#d4f7e2;border-color:#16a34a;}' +
    '.axp-mini-more{padding:1px 8px;font-size:.64rem;font-weight:800;color:var(--accent);background:transparent;border:1px dashed var(--accent);cursor:pointer;font-family:var(--font);}' +
    '.axp-mini-legend{margin-top:4px;font-size:.58rem;color:var(--text3);}' +
    '@media(max-width:480px){.axp-mini-txt{max-width:130px;}}';
  document.head.appendChild(_st2);

  function badge(state){
    var map = {
      active:  ['#0f7a3a','#e9fff2','#a8e6c0','bi-check-circle-fill','Active'],
      pending: ['#6b4f00','#fffbea','#f3dc8a','bi-hourglass-split','Pending'],
      expired: ['#a12020','#fff0f0','#f1b5b5','bi-x-circle-fill','Expired'],
      none:    ['#777','#f4f4f4','#ddd','bi-dash-circle','Not activated']
    };
    var m = map[state] || map.none;
    return '<span style="display:inline-flex;align-items:center;gap:4px;padding:3px 8px;font-size:.66rem;font-weight:800;color:'+m[0]+';background:'+m[1]+';border:1px solid '+m[2]+';white-space:nowrap;"><i class="bi '+m[3]+'"></i> '+m[4]+'</span>';
  }

  function accountCard(){
    var prof = ((typeof AUTH!=='undefined'&&AUTH) && AUTH.getProfile) ? AUTH.getProfile() : null;
    var active = !!(prof && prof.status === 'active');
    var until  = prof && prof.paidUntil ? new Date(prof.paidUntil) : null;
    var expired = !!(until && until < new Date());
    var state = active && !expired ? 'active' : (expired ? 'expired' : 'pending');
    var daysLeft = (until && !expired) ? Math.ceil((until - new Date())/86400000) : 0;
    return '<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;padding:12px 14px;margin-bottom:14px;background:var(--surface);border:1px solid var(--border);border-left:4px solid '+(state==='active'?'#16a34a':state==='expired'?'#dc2626':'#f59e0b')+';">' +
      '<div><div style="font-size:.62rem;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--text3);">Lesson Plan account</div>' +
      '<div style="font-size:.82rem;font-weight:700;color:var(--text);margin-top:2px;">' + esc((prof&&prof.fullName)||'') + '</div>' +
      '<div style="font-size:.7rem;color:var(--text2);margin-top:2px;">' +
        (state==='active' ? 'Valid until '+fmt(until)+' ('+daysLeft+' day'+(daysLeft===1?'':'s')+' left)' :
         state==='expired' ? 'Expired on '+fmt(until) : 'Not yet activated') + '</div></div>' +
      '<div>'+badge(state)+'</div></div>';
  }

  function render(resp){
    var body = $('myAccessBody'); if (!body) return;
    var html = accountCard();
    if (!resp || !resp.success) {
      html += '<div style="padding:14px;background:#fff0f0;border:1px solid #f1b5b5;font-size:.76rem;color:#a12020;">Could not load your activations. ' + esc((resp&&resp.error)||'Check your connection.') +
              ' <a href="#" id="myAccessRetry">Retry</a></div>';
      body.innerHTML = html; var r=$('myAccessRetry'); if(r) r.addEventListener('click',function(e){e.preventDefault();load();}); return;
    }
    var groups = {}, order = [];
    (resp.items||[]).forEach(function(it){
      if (it.featureType !== 'logbook' && it.featureType !== 'sow') return;
      var k = it.subject + '||' + it.classVal;
      if (!groups[k]) { groups[k] = {subject:it.subject, classVal:it.classVal, logbook:null, sow:null}; order.push(k); }
      groups[k][it.featureType] = it;
    });
    order.sort(function(a,b){
      function score(g){ return ((g.logbook&&g.logbook.status==='active')?2:0)+((g.sow&&g.sow.status==='active')?2:0); }
      return score(groups[b]) - score(groups[a]) || groups[a].subject.localeCompare(groups[b].subject);
    });
    var nLb = 0, nSow = 0;
    order.forEach(function(k){ var g=groups[k]; if(g.logbook&&g.logbook.status==='active')nLb++; if(g.sow&&g.sow.status==='active')nSow++; });

    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px;">' +
      '<div style="padding:10px;text-align:center;background:var(--surface);border:1px solid var(--border);"><div style="font-size:1.4rem;font-weight:800;color:var(--accent);font-family:var(--mono);">'+nLb+'</div><div style="font-size:.64rem;font-weight:700;color:var(--text2);text-transform:uppercase;letter-spacing:.5px;"><i class="bi bi-book-half"></i> Active Logbooks</div></div>' +
      '<div style="padding:10px;text-align:center;background:var(--surface);border:1px solid var(--border);"><div style="font-size:1.4rem;font-weight:800;color:var(--accent);font-family:var(--mono);">'+nSow+'</div><div style="font-size:.64rem;font-weight:700;color:var(--text2);text-transform:uppercase;letter-spacing:.5px;"><i class="bi bi-journal-text"></i> Active Schemes of Work</div></div></div>';

    if (!order.length) {
      html += '<div style="padding:26px 14px;text-align:center;background:var(--surface);border:1px dashed var(--border2);color:var(--text3);"><i class="bi bi-journal-x" style="font-size:2rem;display:block;margin-bottom:8px;"></i>' +
              '<div style="font-size:.82rem;font-weight:700;color:var(--text2);margin-bottom:4px;">No Logbook or Scheme of Work yet</div>' +
              '<div style="font-size:.72rem;">Choose a subject and class in Step 2, then use the Logbook or Scheme of Work button to request access.</div></div>';
    } else {
      html += '<div style="font-size:.64rem;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--text);margin-bottom:6px;">Subjects &amp; classes</div>' +
              '<div style="overflow-x:auto;border:1px solid var(--border);"><table style="width:100%;border-collapse:collapse;font-size:.74rem;background:var(--surface);">' +
              '<thead><tr style="background:var(--surface2);text-align:left;"><th style="padding:8px 10px;">Subject</th><th style="padding:8px 10px;">Class</th><th style="padding:8px 10px;">Logbook</th><th style="padding:8px 10px;">Scheme of Work</th></tr></thead><tbody>';
      order.forEach(function(k){
        var g = groups[k];
        function cell(f, ft){ return f ? (f.status==='active' ? goBtn('Open', ft==='logbook'?'bi-book-half':'bi-journal-text', ft, g.subject, g.classVal) : badge(f.status)) + (f.status==='active' && f.confirmedAt ? '<div style="font-size:.6rem;color:var(--text3);margin-top:2px;">since '+fmt(f.confirmedAt)+'</div>' : '') : badge('none'); }
        html += '<tr style="border-top:1px solid var(--border);"><td style="padding:8px 10px;font-weight:700;">'+esc(g.subject)+'</td><td style="padding:8px 10px;">'+esc(g.classVal)+'</td><td style="padding:8px 10px;">'+cell(g.logbook,'logbook')+'</td><td style="padding:8px 10px;">'+cell(g.sow,'sow')+'</td></tr>';
      });
      html += '</tbody></table></div>';
    }
    if (resp.academicYear) html += '<div style="font-size:.64rem;color:var(--text3);margin-top:8px;">Academic year '+esc(resp.academicYear)+' &middot; Logbook / Scheme of Work access is per subject and class.</div>';
    body.innerHTML = html;
  }

  function load(){
    var body = $('myAccessBody'); if (!body) return;
    body.innerHTML = accountCard() + '<div style="padding:20px;text-align:center;color:var(--text3);font-size:.76rem;"><i class="bi bi-hourglass-split"></i> Loading your activations\u2026</div>';
    var token = ((typeof AUTH!=='undefined'&&AUTH) && AUTH.getSessionToken) ? AUTH.getSessionToken() : '';
    var api = window.AXP_API_URL || '';
    if (!token || !api) { render({success:false, error:'Please sign in again.'}); return; }
    fetch(api + '?action=getMyFeatureAccess&token=' + encodeURIComponent(token))
      .then(function(r){ return r.json(); }).then(render)
      .catch(function(){ render({success:false, error:'Network error.'}); });
  }

  function open(){
    ensurePanel();
    if (typeof showPanel === 'function') showPanel('myaccess');
    load();
    if ((typeof AUTH!=='undefined'&&AUTH) && AUTH.refreshProfile) AUTH.refreshProfile(function(){ var b=$('myAccessBody'); if(b && b.firstChild){ var tmp=document.createElement('div'); tmp.innerHTML=accountCard(); b.replaceChild(tmp.firstChild,b.firstChild); } });
    if (window.innerWidth <= 768) { var sb=$('axp-sidebar'), ov=$('sidebar-overlay'); if(sb)sb.classList.remove('open'); if(ov)ov.classList.remove('show'); }
  }

  var _last = null, _miniTimer = null;
  function onStep1(){ return !!document.querySelector('.step.active[data-step="1"]'); }

  function renderMini(resp){
    var el = $('myAccessMini'); if (!el) return;
    var prof = ((typeof AUTH!=='undefined'&&AUTH) && AUTH.getProfile) ? AUTH.getProfile() : null;
    var signedIn = !!((typeof AUTH!=='undefined'&&AUTH) && AUTH.isAuthenticated && AUTH.isAuthenticated());
    if (!signedIn || !onStep1()) { el.style.display = 'none'; return; }
    var until = prof && prof.paidUntil ? new Date(prof.paidUntil) : null;
    var expired = !!(until && until < new Date());
    var active = !!(prof && prof.status === 'active') && !expired;
    var state = active ? 'active' : (expired ? 'expired' : 'pending');

    var rows = [];
    if (resp && resp.success) {
      var g = {}, order = [];
      (resp.items||[]).forEach(function(it){
        if (it.status !== 'active' || (it.featureType !== 'logbook' && it.featureType !== 'sow')) return;
        var k = it.subject + '||' + it.classVal;
        if (!g[k]) { g[k] = {subject:it.subject, classVal:it.classVal, lb:false, sow:false}; order.push(k); }
        if (it.featureType === 'logbook') g[k].lb = true; else g[k].sow = true;
      });
      rows = order.map(function(k){ return g[k]; });
    }
    if (!resp || !resp.success || !rows.length) { el.innerHTML = ''; el.style.display = 'none'; return; }
    var SHOW = 6;
    function shortClass(c){
      var m = {'form one':'F1','form two':'F2','form three':'F3','form four':'F4','form five':'F5','form six':'F6'}[String(c).toLowerCase().trim()];
      return m || c;
    }
    function ico(icon, ft, r, title){
      return '<button type="button" class="axp-acc-go axp-mini-ico" data-ft="'+ft+'" data-s="'+esc(r.subject)+'" data-c="'+esc(r.classVal)+'" title="'+esc(title+' \u2014 '+r.subject+' '+r.classVal)+'">' +
             '<i class="bi '+icon+'"></i></button>';
    }
    function chipFor(r){
      var full = r.subject + ' \u00b7 ' + r.classVal;
      return '<span class="axp-mini-chip" title="'+esc(full)+'">' +
        '<span class="axp-mini-txt">'+esc(r.subject)+' <b>'+esc(shortClass(r.classVal))+'</b></span>' +
        (r.lb ? ico('bi-book-half','logbook',r,'Open Logbook') : '') +
        (r.sow ? ico('bi-journal-text','sow',r,'Open Scheme of Work') : '') + '</span>';
    }
    var expanded = !!window.__axpMiniExpanded;
    var vis = expanded ? rows : rows.slice(0, SHOW);
    var chips = vis.map(chipFor).join('') +
      (rows.length > SHOW ? '<button type="button" id="axpMiniMore" class="axp-mini-more">'+(expanded ? 'Show less' : '+'+(rows.length-SHOW)+' more')+'</button>' : '');

    el.innerHTML =
      '<div class="axp-mini-card" style="border-left-color:'+(state==='active'?'#16a34a':state==='expired'?'#dc2626':'#f59e0b')+';">' +
      '<div class="axp-mini-head">' +
        '<span class="axp-mini-title"><i class="bi bi-patch-check-fill"></i> My Access</span>' +
        '<span class="axp-mini-meta">' + badge(state) + (state==='active' && until ? '<span>until '+fmt(until)+'</span>' : '') +
          '<a href="#" id="myAccessMore">View all \u2192</a></span></div>' +
      '<div class="axp-mini-chips">' + chips + '</div>' +
      '<div class="axp-mini-legend"><i class="bi bi-book-half"></i> Logbook &nbsp; <i class="bi bi-journal-text"></i> Scheme of Work &mdash; tap an icon to open</div></div>';
    el.style.display = 'block';
    var mb = $('axpMiniMore');
    if (mb) mb.addEventListener('click', function(){ window.__axpMiniExpanded = !window.__axpMiniExpanded; renderMini(resp); });
    var more = $('myAccessMore'); if (more) more.addEventListener('click', function(e){ e.preventDefault(); open(); });
  }

  function fetchAccess(cb){
    var token = ((typeof AUTH!=='undefined'&&AUTH) && AUTH.getSessionToken) ? AUTH.getSessionToken() : '';
    var api = window.AXP_API_URL || '';
    if (!token || !api) { cb(null); return; }
    fetch(api + '?action=getMyFeatureAccess&token=' + encodeURIComponent(token))
      .then(function(r){ return r.json(); }).then(cb).catch(function(){ cb({success:false}); });
  }

  function refreshMini(attempt){
    attempt = attempt || 0;
    var signedIn = !!((typeof AUTH!=='undefined'&&AUTH) && AUTH.isAuthenticated && AUTH.isAuthenticated());
    if (!signedIn) { renderMini(null); if (attempt < 20) { clearTimeout(_miniTimer); _miniTimer = setTimeout(function(){ refreshMini(attempt+1); }, 1500); } return; }
    renderMini(_last);
    fetchAccess(function(resp){ if (resp === null) return; _last = resp; renderMini(resp); });
  }

  function watchSteps(){
    var form = $('lessonPlanForm') || document.querySelector('.form-content');
    if (!form) return;
    var was1 = onStep1();
    new MutationObserver(function(){
      var now1 = onStep1();
      if (now1 !== was1) { was1 = now1; if (now1) refreshMini(); else { var e=$('myAccessMini'); if(e) e.style.display='none'; } }
    }).observe(form, {attributes:true, attributeFilter:['class'], subtree:true});
  }

  function init(){
    ensurePanel();
    var b=$('sb-myaccess'); if(b) b.addEventListener('click', open);
    window.axpOpenMyAccess = open;
    window.axpRefreshMyAccess = refreshMini;
    watchSteps();
    refreshMini();
    setInterval(function(){ if (onStep1()) refreshMini(); }, 60000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
</script>

<script>
(function () {
  'use strict';
  function $(i){ return document.getElementById(i); }
  function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
  function api(){ return window.AXP_API_URL || ''; }
  function token(){ return ((typeof AUTH!=='undefined'&&AUTH) && AUTH.getSessionToken) ? AUTH.getSessionToken() : ''; }
  var _status = null, _cfg = null;
  var FIELD = 'width:100%;padding:9px 10px;border:1.5px solid var(--border2);background:var(--surface);color:var(--text);font-size:.8rem;font-family:var(--font);box-sizing:border-box;';
  var LBL = 'display:block;font-size:.66rem;font-weight:800;letter-spacing:.5px;text-transform:uppercase;color:var(--text2);margin:0 0 4px;';

  function statusBadge(s){
    var m = {active:['#0f7a3a','#e9fff2','#a8e6c0','Active'], pending:['#6b4f00','#fffbea','#f3dc8a','Pending'],
             rejected:['#a12020','#fff0f0','#f1b5b5','Rejected'], expired:['#a12020','#fff0f0','#f1b5b5','Expired']}[s] || ['#777','#f4f4f4','#ddd',s||'—'];
    return '<span style="padding:2px 7px;font-size:.62rem;font-weight:800;color:'+m[0]+';background:'+m[1]+';border:1px solid '+m[2]+';">'+m[3]+'</span>';
  }

  function ensurePanel(){
    if ($('panel-agent')) return;
    var host = $('panel-howto'); if (!host || !host.parentNode) return;
    var p = document.createElement('div');
    p.className = 'main-panel'; p.id = 'panel-agent';
    p.innerHTML =
      '<div class="panel-header"><button class="panel-back" onclick="showPanel(\'lessonplan\')"><i class="bi bi-arrow-left"></i> Back</button>' +
      '<h2><i class="bi bi-people-fill"></i> Grant Access</h2>' +
      '<p>Request a Logbook or Scheme of Work for any teacher and earn 3 free lesson-plan days per teacher.</p></div>' +
      '<div class="panel-body" id="agentBody" style="padding:14px;"></div>';
    host.parentNode.appendChild(p);
  }

  function classList(){
    var m = window.AXP_CLASS_SUBJECT_MAP;
    if (m) return Object.keys(m);
    var out = []; var el = $('classes');
    if (el) Array.prototype.forEach.call(el.options, function(o){ if (o.value) out.push(o.value); });
    return out;
  }
  function subjectsFor(c){
    var m = window.AXP_CLASS_SUBJECT_MAP;
    return (m && m[c]) ? m[c].slice().sort(function(a,b){return a.localeCompare(b,undefined,{sensitivity:'base'});}) : [];
  }

  function tile(icon, value, label, sub){
    return '<div style="padding:10px 8px;text-align:center;background:var(--surface);border:1px solid var(--border);">' +
      '<div style="font-size:1.35rem;font-weight:800;color:var(--accent);font-family:var(--mono);line-height:1.1;">'+value+'</div>' +
      '<div style="font-size:.62rem;font-weight:800;color:var(--text2);text-transform:uppercase;letter-spacing:.4px;margin-top:3px;"><i class="bi '+icon+'"></i> '+label+'</div>' +
      (sub ? '<div style="font-size:.6rem;color:var(--text3);margin-top:2px;">'+sub+'</div>' : '') + '</div>';
  }
  function fmtDate(d){ var x=new Date(d); return isNaN(x)?'':x.toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'}); }

  function pointsCard(s){
    var st = s.stats || {};
    var lpLine = s.lessonPlanDaysLeft > 0
      ? 'Lesson plan active until <strong style="color:#fff;">'+fmtDate(s.lessonPlanUntil)+'</strong> ('+s.lessonPlanDaysLeft+' day'+(s.lessonPlanDaysLeft===1?'':'s')+' left)'
      : 'Lesson plan not active right now &mdash; free days are added to whatever time you have.';
    return '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px;margin-bottom:10px;">' +
        tile('bi-book-half', st.logbookCreated||0, 'Logbooks created', (st.logbookPending? st.logbookPending+' pending':'')) +
        tile('bi-journal-text', st.sowCreated||0, 'Schemes created', (st.sowPending? st.sowPending+' pending':'')) +
        tile('bi-stars', s.teachersCounted, 'Teachers', 'confirmed') +
        tile('bi-calendar-plus', s.daysEarned, 'Free days added', 'to your lesson plan') +
      '</div>' +
      '<div style="padding:12px 14px;margin-bottom:14px;background:linear-gradient(135deg,var(--navy),#1a2d4a);color:#fff;border-top:3px solid var(--gold);">' +
        '<div style="font-size:.7rem;color:rgba(255,255,255,.9);">Earn <strong style="color:var(--gold);">+'+s.rewardDays+' free lesson-plan days</strong> for every teacher you work for. Each teacher counts once, after the admin confirms their payment.</div>' +
        '<div style="font-size:.66rem;color:rgba(255,255,255,.8);margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,255,255,.15);">'+lpLine+'</div></div>';
  }

  function freeDaysCard(s){
    var list = s.freeDays || [];
    if (!list.length) return '';
    var total = 0;
    var rows = list.map(function(e){
      total += e.days;
      var who = e.type === 'admin' ? '<strong>Added by admin</strong>' : '<strong>'+esc(e.teacherName||'Teacher')+'</strong><div style="font-size:.64rem;color:var(--text3);">'+esc(e.teacherEmail)+'</div>';
      var days = e.days > 0 ? '+'+e.days+' day'+(e.days===1?'':'s') : '&mdash;';
      return '<tr style="border-top:1px solid var(--border);"><td style="padding:7px 10px;">'+who+'</td>' +
        '<td style="padding:7px 10px;font-family:var(--mono);font-weight:800;color:#0f7a3a;white-space:nowrap;">'+days+'</td>' +
        '<td style="padding:7px 10px;color:var(--text3);white-space:nowrap;">'+(e.at?fmtDate(e.at):'')+'</td></tr>';
    }).join('');
    return '<div style="font-size:.64rem;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--text);margin-bottom:6px;">Free days earned</div>' +
      '<div style="overflow-x:auto;border:1px solid var(--border);margin-bottom:14px;"><table style="width:100%;border-collapse:collapse;font-size:.74rem;background:var(--surface);">' +
      '<thead><tr style="background:var(--surface2);text-align:left;"><th style="padding:7px 10px;">Teacher</th><th style="padding:7px 10px;">Days</th><th style="padding:7px 10px;">Date</th></tr></thead><tbody>'+rows+'</tbody>' +
      '<tfoot><tr style="border-top:2px solid var(--border);background:var(--surface2);"><td style="padding:7px 10px;font-weight:800;">Total</td><td style="padding:7px 10px;font-family:var(--mono);font-weight:800;" colspan="2">'+total+' day'+(total===1?'':'s')+'</td></tr></tfoot></table></div>';
  }

  function ctaCard(){
    var btn = 'display:flex;align-items:center;gap:10px;width:100%;padding:12px 14px;border:1.5px solid var(--border2);background:var(--surface);color:var(--text);font-family:var(--font);font-size:.82rem;font-weight:800;cursor:pointer;text-align:left;';
    return '<div style="padding:14px;margin-bottom:14px;background:var(--surface);border:1px solid var(--border);">' +
      '<div style="font-size:.7rem;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--text);margin-bottom:4px;"><i class="bi bi-person-plus-fill"></i> New request for a teacher</div>' +
      '<div style="font-size:.7rem;color:var(--text3);margin-bottom:10px;">Choose what to request. You will pick the class and subject the same way as on your own account.</div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;">' +
        '<button type="button" id="agGoSow" style="'+btn+'"><i class="bi bi-journal-text"></i> Scheme of Work <i class="bi bi-arrow-right-circle-fill" style="margin-left:auto;"></i></button>' +
        '<button type="button" id="agGoLb" style="'+btn+'"><i class="bi bi-book-half"></i> Logbook <i class="bi bi-arrow-right-circle-fill" style="margin-left:auto;"></i></button>' +
      '</div>' +
      '<div id="agMsg" style="display:none;margin-top:10px;padding:8px 10px;font-size:.74rem;"></div>' +
      '<div style="font-size:.64rem;color:var(--text3);margin-top:8px;">The teacher\'s access is switched on after the admin confirms the payment. The request is saved under the teacher\'s email.</div></div>';
  }
  function bindCta(){
    var s=$('agGoSow'), l=$('agGoLb');
    if (s) s.addEventListener('click', function(){ if (window.axpOpenQuickRequestPanel) window.axpOpenQuickRequestPanel('sow', true); });
    if (l) l.addEventListener('click', function(){ if (window.axpOpenQuickRequestPanel) window.axpOpenQuickRequestPanel('logbook', true); });
  }
  function bindOpen(){
    Array.prototype.forEach.call(document.querySelectorAll('[data-ag-open]'), function(b){
      b.addEventListener('click', function(){
        var r = (_status && _status.requests || [])[parseInt(b.getAttribute('data-ag-open'), 10)];
        if (!r) return;
        window.AXP_AGENT_CTX = { featureType:r.featureType, subject:r.subject, classVal:r.classVal,
                                 teacherName:r.teacherName, school:r.school, teacherEmail:r.teacherEmail };
        if (r.featureType === 'sow' && typeof window.openSOWForSubject === 'function') window.openSOWForSubject(r.subject, r.classVal, []);
        else if (r.featureType === 'logbook' && typeof window.openLogbookForSubject === 'function') window.openLogbookForSubject(r.subject, r.classVal);
      });
    });
  }
  var _lastMsg = null;
  function showLastMsg(){ if (_lastMsg) msg(_lastMsg.text, _lastMsg.ok); }

  function historyCard(s){
    if (!s.requests.length) return '<div style="padding:18px;text-align:center;font-size:.76rem;color:var(--text3);background:var(--surface);border:1px dashed var(--border2);">No requests yet.</div>';
    var rows = s.requests.map(function(r, idx){
      return '<tr style="border-top:1px solid var(--border);"><td style="padding:7px 10px;"><strong>'+esc(r.teacherName||'—')+'</strong><div style="font-size:.64rem;color:var(--text3);">'+esc(r.teacherEmail)+'</div></td>' +
        '<td style="padding:7px 10px;">'+esc(r.subject)+' &middot; '+esc(r.classVal)+'</td>' +
        '<td style="padding:7px 10px;">'+(r.featureType==='sow'?'Scheme of Work':'Logbook')+'</td>' +
        '<td style="padding:7px 10px;">'+statusBadge(r.status)+'</td>' +
        '<td style="padding:7px 10px;font-family:var(--mono);">'+esc(r.reference)+'</td>' +
        '<td style="padding:7px 10px;white-space:nowrap;">'+(r.status==='active'
          ? '<button type="button" data-ag-open="'+idx+'" style="background:var(--accent);color:#fff;border:none;padding:6px 12px;font-size:.7rem;font-weight:800;cursor:pointer;font-family:var(--font);"><i class="bi bi-box-arrow-up-right"></i> Open</button>'
          : (r.status==='pending' ? '<span style="font-size:.64rem;color:var(--text3);">Waiting for admin</span>' : '')) + '</td></tr>';
    }).join('');
    return '<div style="font-size:.64rem;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--text);margin-bottom:6px;">My requests</div>' +
      '<div style="overflow-x:auto;border:1px solid var(--border);"><table style="width:100%;border-collapse:collapse;font-size:.74rem;background:var(--surface);">' +
      '<thead><tr style="background:var(--surface2);text-align:left;"><th style="padding:7px 10px;">Teacher</th><th style="padding:7px 10px;">Subject &middot; Class</th><th style="padding:7px 10px;">Item</th><th style="padding:7px 10px;">Status</th><th style="padding:7px 10px;">Ref</th><th style="padding:7px 10px;"></th></tr></thead><tbody>'+rows+'</tbody></table></div>';
  }

  function msg(text, ok){
    var el = $('agMsg'); if (!el) return;
    el.style.display = 'block';
    el.style.background = ok ? '#e9fff2' : '#fff0f0';
    el.style.border = '1px solid ' + (ok ? '#a8e6c0' : '#f1b5b5');
    el.style.color = ok ? '#0f7a3a' : '#a12020';
    el.innerHTML = text;
  }

  function render(){
    var body = $('agentBody'); if (!body) return;
    if (!_status || !_status.success) { body.innerHTML = '<div style="padding:14px;background:#fff0f0;border:1px solid #f1b5b5;color:#a12020;font-size:.76rem;">Could not load Grant Access. '+esc((_status&&_status.error)||'')+' <a href="#" id="agRetry">Retry</a></div>'; var r=$('agRetry'); if(r) r.addEventListener('click',function(e){e.preventDefault();loadStatus(render);}); return; }
    if (!_status.isAgent) { body.innerHTML = '<div style="padding:18px;text-align:center;color:var(--text3);font-size:.78rem;">Grant Access has not been enabled for this account.</div>'; return; }
    body.innerHTML = pointsCard(_status) + ctaCard() + freeDaysCard(_status) + historyCard(_status);
    bindCta();
    bindOpen();
    showLastMsg();
    loadPrices();
  }

  function loadPrices(){
    if (!window.AXP_PAYCFG) return;
    window.AXP_PAYCFG.load().then(function(cfg){
      _cfg = cfg;
      var a=$('agPriceLb'), b=$('agPriceSow');
      if (a) a.textContent = Number(cfg.price.logbook).toLocaleString();
      if (b) b.textContent = Number(cfg.price.sow).toLocaleString();
    }).catch(function(){});
  }

  function waText(ref, f, total, lines){
    var cfg = _cfg || (window.AXP_PAYCFG && AXP_PAYCFG.get && AXP_PAYCFG.get()) || {};
    var payTo = cfg.payTo || {};
    var prof = ((typeof AUTH!=='undefined'&&AUTH) && AUTH.getProfile) ? AUTH.getProfile() : {};
    return '\uD83C\uDF93 *ACADEMIXPOINT - MALIPO (WAKALA)*\n\n' +
      '\uD83D\uDC64 Wakala: *' + ((prof && prof.fullName) || '') + '*\n\uD83D\uDCE7 ' + (((typeof AUTH!=='undefined'&&AUTH)&&AUTH.getUser&&AUTH.getUser()||{}).email||'') + '\n\n' +
      '\uD83E\uDDD1\u200D\uD83C\uDFEB Mwalimu: *' + f.name + '*\n\uD83D\uDCE7 ' + f.email + '\n\uD83C\uDFEB ' + f.school + '\n\uD83D\uDCDA ' + f.subject + ' - ' + f.cls + '\n' +
      '\uD83D\uDD11 Payment ID: *' + ref + '*\n\n' + lines + '\n\n\uD83D\uDCB0 *Jumla: Tshs ' + total + '*\n\n' +
      '\uD83D\uDCCC *Jinsi ya Kulipa:*\n 1. Tuma kiasi hiki kwenye namba (YAS): ' + (payTo.number||'') + ' (' + (payTo.name||'') + ').\n 2. Tuma screenshot ya muamala\n 3. Subiri uwezeshaji\n\n_Asante \uD83C\uDF93_';
  }

  window.axpAgentSubmit = function(t, feats, subject, classVal, done){
    var f = { email:t.email, name:t.name, school:t.school, cls:classVal, subject:subject };
    var ref = String(Math.floor(Math.random()*900)+100);
    fetch(api(), { method:'POST', headers:{'Content-Type':'text/plain;charset=utf-8'}, body: JSON.stringify({
        action:'agentRequestFeaturePayment', token:token(), reference:ref, teacherEmail:f.email, teacherName:f.name,
        school:f.school, subject:f.subject, classVal:f.cls, features:feats }) })
    .then(function(r){ return r.json(); })
    .then(function(resp){
      if (!resp || !resp.success) return done((resp&&resp.error)||'Request failed. Try again.');
      if (!resp.breakdown || !resp.breakdown.length) { _lastMsg = {text: esc(resp.message||'Already active.'), ok:true}; done(null); open(); return; }
      var lines = resp.breakdown.map(function(b){ return '- ' + (b.featureType==='sow'?'Scheme of Work':'Logbook') + ' \u2013 ' + b.subject + ' ' + b.classVal + ': Tshs ' + b.amount; }).join('\n');
      var number = (_cfg && _cfg.whatsappNumber) || (window.AXP_PAYCFG && AXP_PAYCFG.get && AXP_PAYCFG.get().whatsappNumber) || '';
      var url = 'https://wa.me/' + number + '?text=' + encodeURIComponent(waText(resp.reference, f, resp.total, lines));
      _lastMsg = { ok:true, text:'<strong>Request saved</strong> for ' + esc(f.name) + '. Payment ID: <strong style="font-family:var(--mono);font-size:1rem;">'+esc(resp.reference)+'</strong> &middot; Total Tshs '+Number(resp.total).toLocaleString()+
          '<br><a href="'+url+'" target="_blank" rel="noopener" style="display:inline-block;margin-top:6px;padding:6px 12px;background:#25D366;color:#fff;font-weight:800;text-decoration:none;"><i class="bi bi-whatsapp"></i> Open WhatsApp</a>' };
      window.open(url, '_blank');
      done(null);
      open();
    })
    .catch(function(){ done('Network error. Try again.'); });
  };

  function setBtn(show){ var b=$('sb-agent'); if (b) b.style.display = show ? '' : 'none'; }
  var _lastEmail = null;
  function currentEmail(){
    var u = ((typeof AUTH!=='undefined'&&AUTH) && AUTH.getUser) ? AUTH.getUser() : null;
    return ((typeof AUTH!=='undefined'&&AUTH) && AUTH.isAuthenticated && AUTH.isAuthenticated() && u && u.email) ? String(u.email).toLowerCase() : '';
  }
  function loadStatus(cb){
    if (!token() || !api()) { _status = {success:false, error:'Please sign in again.'}; setBtn(false); cb && cb(); return; }
    fetch(api() + '?action=getAgentStatus&token=' + encodeURIComponent(token()))
      .then(function(r){ return r.json(); })
      .then(function(r){ _status = r; setBtn(!!(r && r.success && r.isAgent)); cb && cb(); })
      .catch(function(){ _status = {success:false, error:'Network error.'}; setBtn(false); cb && cb(); });
  }

  function open(){
    if (!currentEmail() || (_status && _status.success && !_status.isAgent)) { setBtn(false); return; }
    ensurePanel();
    if (typeof showPanel === 'function') showPanel('agent');
    var body = $('agentBody'); if (body) body.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text3);font-size:.76rem;"><i class="bi bi-hourglass-split"></i> Loading\u2026</div>';
    loadStatus(render);
    if (window.innerWidth <= 768) { var sb=$('axp-sidebar'), ov=$('sidebar-overlay'); if(sb)sb.classList.remove('open'); if(ov)ov.classList.remove('show'); }
  }

  function boot(){
    setBtn(false);
    setInterval(function(){
      var e = currentEmail();
      if (e !== _lastEmail) {
        _lastEmail = e; _status = null;
        if (!e) { setBtn(false); var pa=$('panel-agent'); if (pa && pa.classList.contains('active') && typeof showPanel==='function') showPanel('lessonplan'); }
        else loadStatus();
      }
    }, 2000);
    setInterval(function(){ if (currentEmail()) loadStatus(); }, 5 * 60 * 1000);
  }

  function init(){
    ensurePanel();
    var b = $('sb-agent'); if (b) b.addEventListener('click', open);
    window.axpOpenAgentPanel = open;
    boot();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
</script>
</body>
</html>
