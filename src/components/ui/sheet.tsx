
import React, { useState, createContext, useContext } from 'react';
type CtxT = { open:boolean; setOpen:(v:boolean)=>void };
const Ctx = createContext<CtxT | null>(null);
export const Sheet: React.FC<{children:React.ReactNode}> = ({children}) => {
  const [open,setOpen] = useState(false);
  return <Ctx.Provider value={{open,setOpen}}>{children}</Ctx.Provider>;
};
export const SheetTrigger: React.FC<{asChild?:boolean; children:React.ReactNode}> = ({children}) => {
  const ctx = useContext(Ctx)!;
  return <span onClick={()=>ctx.setOpen(true)}>{children}</span>;
};
export const SheetHeader: React.FC<{children:React.ReactNode}> = ({children}) => <div className="pb-2 border-b">{children}</div>;
export const SheetTitle: React.FC<{children:React.ReactNode}> = ({children}) => <div className="text-lg font-semibold">{children}</div>;
export const SheetContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className='', children}) => {
  const ctx = useContext(Ctx)!;
  if (!ctx.open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30" onClick={()=>ctx.setOpen(false)} />
      <div className={['fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl p-4', className].join(' ')}>{children}</div>
    </div>
  );
};
