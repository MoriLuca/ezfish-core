namespace Models.ToNg {
    
    public class LakesInfo{
        public int id { get; set; }
        public int[] giornoDiApertura { get; set; }
        public string nome {get;set;}
        public string indirizzo {get;set;}
        public string telefono {get;set;}
        public string email {get;set;}
        public string[] info {get;set;}
        public string prewievImg {get;set;}

        public LakesInfo (core.LagoBasic basic) {
            id = basic.Id;
            nome = basic.Nome;
            indirizzo = basic.Indirizzo;
            telefono = basic.Telefono;
            email = basic.Email;
            prewievImg = basic.PreviewImg;
            info = new string[]{basic.LagoInfo.InfoIta,basic.LagoInfo.InfoEng};
            giornoDiApertura = new int[]{
                (int)basic.LagoApertura.Lun,
                (int)basic.LagoApertura.Mar,
                (int)basic.LagoApertura.Mer,
                (int)basic.LagoApertura.Gio,
                (int)basic.LagoApertura.Ven,
                (int)basic.LagoApertura.Sab,
                (int)basic.LagoApertura.Dom,
            };

        }

    }
}