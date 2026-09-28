export const slugify = (text: string) => {
  return text
    .toString() // Memastikan input berupa string
    .normalize("NFD") // Memisah karakter beraksen (misal: é -> e + accent)
    .replace(/[\u0300-\u036f]/g, "") // Menghapus tanda aksen
    .toLowerCase() // Mengubah semua huruf menjadi kecil
    .trim() // Menghapus spasi di awal & akhir string
    .replace(/[^a-z0-0\s-]/g, "") // Menghapus karakter khusus (selain huruf, angka, spasi, -)
    .replace(/[\s_]+/g, "-") // Mengubah spasi & underscore (_) menjadi satu tanda hubung (-)
    .replace(/-+/g, "-"); // Menggabungkan beberapa tanda hubung berturut-turut menjadi satu (-)
};
