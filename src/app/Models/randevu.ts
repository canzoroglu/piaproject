/*
Randevuları listelediğim sayfada kullandığım verileri içeren dosya
Hangi kliniklerin olduğu, buralarda hangi doktorların çalıştığı bilgilerini API'den almalıyım 
*/

export class Randevu {
  date: Date;
  doctor: string;
  klinik: string;
  constructor(date: Date, doctor:string, klinik:string)
  {
    this.date = date;
    this.doctor = doctor;
    this.klinik = klinik;
  }
}

export const klinikler = ["Göz", "Ortopedi", "Dahiliye", "Cildiye"];


