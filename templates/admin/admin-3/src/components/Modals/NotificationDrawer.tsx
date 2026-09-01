import React from 'react';
import { NotificationItem } from '../../types';
import { X, Bell, CheckCheck, ExternalLink } from 'lucide-react';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: NotificationItem[];
  onMarkRead: (id: string) => void;
  onMarkAllRead: () => void;
  onSelectNotification?: (linkId?: string) => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkRead,
  onMarkAllRead,
  onSelectNotification
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-[#203040]/30 backdrop-blur-xs z-50" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white border-l border-[#DCE7EC] shadow-xl flex flex-col">
        
        <div className="p-5 border-b border-[#DCE7EC] flex items-center justify-between bg-[#F5F9FB]">
          <div className="flex items-center gap-2">
            <Bell size={18} className="text-[#183B56]" />
            <h3 className="font-serif font-bold text-[#183B56] text-lg">Newsroom Notifications</h3>
          </div>
          <button onClick={onClose} className="p-2 text-[#718096] hover:bg-white rounded-xl border border-[#DCE7EC]">
            <X size={18} />
          </button>
        </div>

        <div className="p-4 border-b border-[#DCE7EC] bg-white flex items-center justify-between">
          <span className="text-xs font-mono text-[#718096]">
            {notifications.filter(n => !n.read).length} Unread notifications
          </span>
          <button
            onClick={onMarkAllRead}
            className="flex items-center gap-1 text-xs font-semibold text-[#183B56] hover:underline"
          >
            <CheckCheck size={14} /> Mark all read
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {notifications.length === 0 ? (
            <div className="text-center py-12 text-[#718096] text-xs">No notifications.</div>
          ) : (
            notifications.map(item => (
              <div
                key={item.id}
                onClick={() => {
                  onMarkRead(item.id);
                  if (item.linkId && onSelectNotification) {
                    onSelectNotification(item.linkId);
                    onClose();
                  }
                }}
                className={`
                  p-4 rounded-xl border transition-all cursor-pointer space-y-2
                  ${item.read ? 'bg-white border-[#DCE7EC] text-[#718096]' : 'bg-[#CDEFF4]/20 border-[#6FAFD4] text-[#203040] shadow-2xs'}
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#183B56]">{item.title}</span>
                  <span className="text-[10px] font-mono text-[#718096]">{item.time}</span>
                </div>
                <p className="text-xs leading-relaxed">{item.message}</p>
                {item.linkId && (
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#6FAFD4] pt-1">
                    <span>View related item</span>
                    <ExternalLink size={12} />
                  </div>
                )}
              </div>
            ))
          )}
        </div>

      </div>
    </>
  );
};
