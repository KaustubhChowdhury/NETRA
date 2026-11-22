import React from 'react';
import { X, Award, Users, BookOpen, Layers, CheckCircle2, Calendar, FileText } from 'lucide-react';

interface AboutProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutProjectModal: React.FC<AboutProjectModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#0E2233] border border-[#28B8D8]/30 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with Bennett Branding */}
        <div className="relative bg-gradient-to-r from-[#0B2545] to-[#132C40] p-6 border-b border-[#28B8D8]/20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/95 p-1.5 rounded-xl shadow-md flex items-center justify-center">
              <img src="/bennett-logo.png" alt="Bennett University" className="h-10 w-auto object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-widest text-[#28B8D8] uppercase bg-[#28B8D8]/10 px-2 py-0.5 rounded-full border border-[#28B8D8]/30">
                  CSET211 Academic Project
                </span>
                <span className="text-[11px] text-slate-400 font-medium">Session 2026–27</span>
              </div>
              <h2 className="text-lg font-bold text-white tracking-tight mt-1">
                NETRA: AI ANPR & Trajectory Platform
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-200">
          {/* Project Title Block */}
          <div className="bg-[#132C40]/80 p-4 rounded-xl border border-white/5 space-y-1">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Official Project Title</div>
            <div className="text-base font-bold text-white leading-snug">
              Vehicle Number Plate ANPR Detection and Multi-Camera Trajectory Tracking (NETRA)
            </div>
            <div className="text-xs text-[#28B8D8] flex items-center gap-1.5 pt-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Statistical Machine Learning • School of Computer Science Engineering & Technology</span>
            </div>
          </div>

          {/* Supervisor & Authors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Faculty Supervisor */}
            <div className="bg-[#102A44] p-4 rounded-xl border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#56D6B0] uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Faculty Supervisor</span>
              </div>
              <div>
                <div className="text-base font-bold text-white">Mrs. Shivanshi Shrivastava</div>
                <div className="text-xs text-slate-400">Department of Computer Science & Engineering</div>
                <div className="text-xs text-slate-400">Bennett University (Times of India Group)</div>
              </div>
            </div>

            {/* Student Authors */}
            <div className="bg-[#102A44] p-4 rounded-xl border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#28B8D8] uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Project Authors</span>
              </div>
              <ul className="space-y-1.5 text-xs">
                <li className="flex justify-between items-center bg-[#0B2545]/60 px-2 py-1 rounded">
                  <span className="font-semibold text-white">Kaustubh Chowdhury</span>
                  <span className="font-mono text-[#8FBCE6]">S25CSEU0210</span>
                </li>
                <li className="flex justify-between items-center bg-[#0B2545]/60 px-2 py-1 rounded">
                  <span className="font-semibold text-white">Shivaji Bhushan</span>
                  <span className="font-mono text-[#8FBCE6]">S25CSEU0195</span>
                </li>
                <li className="flex justify-between items-center bg-[#0B2545]/60 px-2 py-1 rounded">
                  <span className="font-semibold text-white">Atiksh Sharma</span>
                  <span className="font-mono text-[#8FBCE6]">S25CSEU0192</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Architecture & Pipeline Highlights */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#28B8D8]" />
              <span>Core System Architecture (6-Pillar Workflow)</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="bg-[#132C40] p-2.5 rounded-lg border border-white/5">
                <div className="font-bold text-[#28B8D8]">1. Ingestion & Preprocessing</div>
                <div className="text-slate-400 text-[11px] mt-0.5">OpenCV CLAHE contrast & deskewing</div>
              </div>
              <div className="bg-[#132C40] p-2.5 rounded-lg border border-white/5">
                <div className="font-bold text-[#28B8D8]">2. Vehicle Tracking</div>
                <div className="text-slate-400 text-[11px] mt-0.5">YOLOv8 + ByteTrack ID persistence</div>
              </div>
              <div className="bg-[#132C40] p-2.5 rounded-lg border border-white/5">
                <div className="font-bold text-[#28B8D8]">3. Plate Localization</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Sub-pixel YOLOv8 plate detector</div>
              </div>
              <div className="bg-[#132C40] p-2.5 rounded-lg border border-white/5">
                <div className="font-bold text-[#28B8D8]">4. Dual OCR & Fusion</div>
                <div className="text-slate-400 text-[11px] mt-0.5">EasyOCR + Tesseract with RTO grammar</div>
              </div>
              <div className="bg-[#132C40] p-2.5 rounded-lg border border-white/5">
                <div className="font-bold text-[#28B8D8]">5. Cross-Camera Match</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Spatial-temporal trajectory graph</div>
              </div>
              <div className="bg-[#132C40] p-2.5 rounded-lg border border-white/5">
                <div className="font-bold text-[#28B8D8]">6. Tactical Operations</div>
                <div className="text-slate-400 text-[11px] mt-0.5">FastAPI + React WebSockets console</div>
              </div>
            </div>
          </div>

          {/* Test Set Benchmarks */}
          <div className="bg-[#0B2545]/60 p-3.5 rounded-xl border border-white/5 flex flex-wrap items-center justify-around gap-4 text-center">
            <div>
              <div className="text-lg font-black text-[#56D6B0]">~92%</div>
              <div className="text-[11px] text-slate-400">Vehicle Detection</div>
            </div>
            <div className="h-8 w-px bg-white/10 hidden sm:block" />
            <div>
              <div className="text-lg font-black text-[#28B8D8]">~88%</div>
              <div className="text-[11px] text-slate-400">OCR Recognition</div>
            </div>
            <div className="h-8 w-px bg-white/10 hidden sm:block" />
            <div>
              <div className="text-lg font-black text-[#F3B63F]">~150 ms</div>
              <div className="text-[11px] text-slate-400">Latency / Frame</div>
            </div>
            <div className="h-8 w-px bg-white/10 hidden sm:block" />
            <div>
              <div className="text-lg font-black text-[#8FBCE6]">80,000+</div>
              <div className="text-[11px] text-slate-400">Trained Dataset</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0B2545] border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#28B8D8]" />
            <span>Submitted: 10 October 2026</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#28B8D8] text-[#081522] font-bold text-xs hover:bg-[#56D6B0] transition-colors shadow-sm"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
