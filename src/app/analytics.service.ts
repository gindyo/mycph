import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  
  trackBookingClick(serviceName: string): void {
    // Send event to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'book_now_clicked', {
        service_name: serviceName,
        page_title: document.title
      });
    }
  }

  trackPhoneClick(phoneNumber: string): void {
    // Send event to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        phone_number: phoneNumber,
        page_title: document.title
      });
    }
  }
}
