<<<<<<< HEAD
import { useState } from "react";
import './GaleriPage.css';
import { useGaleriPagination } from "../../hooks/galeri/useGaleriPagination";

const GaleriPage = () => {
   const [dataTable] = useState({
      current_page: 1,
      per_page: 1000,
      total: 0,
   });

   const { data, isLoading } = useGaleriPagination(
      dataTable,
      ''
   );

   const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' }); // Get full month name
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
   };

   return (
      <div className="galeri-box-container">
         {isLoading && (
            <div className="spinner-border text-primary" role="status">
               <span className="visually-hidden">Loading...</span>
            </div>
         )}
         {!isLoading &&
            data?.data?.map((x, i) => {
               return (
                  <div className="galeri-box" key={i}>
                     <div className="galeri-image-box">
                        <img src={x?.gambarGaleri} alt={x?.nama} className="galeri-image" />
                     </div>
                     <p className="galeri-title">
                        {x?.nama}
                     </p>
                     <p className="galeri-date">
                        {x?.tanggal ? formatDate(x.tanggal) : ''}
                     </p>
                  </div>
               );
            })
         }
         {!isLoading && data?.data?.length === 0 && (
            <div className="galeri-box">
               <p className="galeri-title">
                  Data tidak ditemukan
               </p>
            </div>
         )}
      </div>
   );
}

export default GaleriPage;
=======
import './GaleriPage.css'

const GaleriPage = () => {
   return (
      <div className="galeri-box-container">
         <div className="galeri-box">
            <img src="/assets/img/kegiatan.png" alt="" />
            <p className="galeri-title">
               Judul kegiatan 1
            </p>
            <p className="galeri-date">
               Tanggal bulan tahun
            </p>
         </div>
         <div className="galeri-box">
            <img src="/assets/img/kegiatan.png" alt="" />
            <p className="galeri-title">
               Judul kegiatan 1
            </p>
            <p className="galeri-date">
               Tanggal bulan tahun
            </p>
         </div>
      </div>
   )
}

export default GaleriPage
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
