'use client';
import { useEffect } from 'react';
import Pagination from '../components/pagination';
import { HyperText } from "@/components/ui/hyper-text";

// // 使用动态导入并禁用 SSR，避免在服务端渲染时出错，Rive 组件依赖浏览器 API，必须在客户端渲染
import dynamic from "next/dynamic";
const RivsAnimat = dynamic(() => import("../components/rivePlayer"), {
    ssr: false,
});
// import RivsAnimat from '../components/rivePlayer';

const riveList = [
    {
        title: 'BNB Chain Depth Optimization and Low-Cost Transactions',
        rive: 'H2',
        desc: `100% focused on BSC. BNHP’s  ZERO‑Latency Sniper Engine integrates BSC liquidity to confirm trades <2s. BSC‑exclusive MEV protection is coming to prevent jamming. Leveraging BSC’s low fees, our ultra‑low model saves 0.5–1% per trade, helping small traders join the MEME craze.`
    },
    {
        title: 'Enhanced Smart Wallet Copy Trading and Automation',
        rive: 'H4',
        desc: `Build a secure AI‑protected replication system with layered controls: per‑rep limit, real‑time stop‑loss, anti‑rug alerts. AFK supports BSC‑only trench sniping, using holder/ liquidity data for >85% accuracy. Smarter automation to prevent copy regret.`
    },
    {
        title: 'Community-driven alerts & Data analysis',
        rive: 'H1',
        desc: `Establish a BSC Community Alert DAO where users add custom filters and earn $BNHP. 24/7 support with Discord/X real‑time feedback. Build a MEME heatmap focused on BSC to track Binance CEX linkage signals in real time, helping capture cross‑platform opportunities early.`
    },
    {
        title: 'AI-Powered Protection system and scam token detection',
        rive: 'H3',
        desc: `Multidimensional detection: combine BSC on‑chain data and X signals to rate token risk in real time. AI tuned to BSC anti-RUG tactics, targeting >90% detection accuracy. BSC Risk Dashboard updates 0–100 scores every 0.5s;  <60 auto‑trigger alerts.`
    },
]

export default function Mod4() {

    // useEffect(() => {
    //     const rivsBoxs = document.querySelector('.rivsBox');
    //     if (!rivsBoxs) return;
    //     let setTime;
    //     rivsBoxs.addEventListener('touchstart', (e) => {
    //         rivsBoxs.style.pointerEvents = 'none';
    //         setTime && clearTimeout(setTime);
    //     });
    //     rivsBoxs.addEventListener('touchend', (e) => {
    //         setTime = setTimeout(() => (rivsBoxs.style.pointerEvents = 'all'), 500);
    //     });
    // }, []);

    return (
        <>
            <div className='relative w-full max-yt:px-[var(--padx)] rivsBox'>
                <div className='w-screen absolute top-0 left-0 -z-1 border-[#2B2B2B] cut-border' />
                <div className="w-base text-white border border-b-0 border-[#2B2B2B] relative z-10 overflow-hidden bg-[#0B0B0B] bg-[url(/assets/imgs/fixed-bg.png)] bg-cover bg-no-repeat max-bw:bg-none">
                    <Pagination page='03' title='FUNCTION' centerClassName='max-qw:left-[55%]' />

                    <div className='w-full h-full p-[40px] grid grid-cols-2 gap-4 max-qw:p-3 max-bw:flex max-bw:flex-col'>
                        {
                            riveList.map((item, idx) => (
                                <div key={idx + 'asdf'} className='bg-[#161616] p-[40px] max-qw:p-3 min-h-[592px] max-qw:min-h-fit'>
                                    <div className='flex items-center justify-between'>
                                        <div className='w-2 h-2 bg-white' />
                                        <div className='text-[#B2B2B2] text-[12px]'>/&nbsp;&nbsp;&nbsp;00{idx + 1}</div>
                                    </div>
                                    <div className='w-full h-[340px] mt-4 relative max-qw:h-[55vw]'>
                                        {/* <img className='w-full h-full object-cover absolute' src='/assets/imgs/rive-bg.png' /> */}
                                        <div className='text-white w-full h-full absolute z-10 flex items-center justify-center max-qw:pointer-events-none-'>
                                            <RivsAnimat code={item.rive} />
                                        </div>
                                    </div>
                                    <div className='mt-6 text-[20px] text-[#E3E3E3] font-normal max-qw:!mt-4'>
                                        <HyperText>{item.title}</HyperText>
                                    </div>
                                    <div className='mt-4 text-[14px] text-[rgba(255,255,255,0.40)] font-normal leading-[20px] tracking-[-0.28px]'>
                                        <HyperText>{item.desc}</HyperText>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
