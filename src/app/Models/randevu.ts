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

const klinikler:any = {"Göz":["Ali", "Veli"], "Ortopedi": ["Ahmet", "Mehmet"], "Dahiliye":["Selim", "Ayşe"], 
"Cildiye":["Fatma", "Murat"]}
const randevuList: Randevu[] = [];
for (const klinik in klinikler) {
    for (const doctor of klinikler[klinik]) {
        for (let day = 1; day < 6; day++) {
        let today = new Date();
        let [year, month] = [today.getFullYear(), today.getMonth()];
        for (let hour = 9; hour < 12; hour++) {
            for (let minute = 0; minute < 60; minute+=20) {
                let randevuDate = new Date(year, month, day, hour, minute, 0);
                randevuList.push(new Randevu(randevuDate, doctor, klinik))
            }
            
        }
    }
    }
}
export const randevular: Randevu[] = [...randevuList]

