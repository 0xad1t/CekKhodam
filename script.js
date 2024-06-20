const khodamStorage = {};

function handleClick() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const namaSpan = document.getElementById('nama');
    const khodamSpan = document.getElementById('khodam');

    if (nameInput === '') {
        namaSpan.textContent = 'Nama: Nama tidak boleh kosong!';
        khodamSpan.textContent = 'Jenis Khodam: -';
        return;
    }

    // Cek apakah nama sudah ada di storage
    if (!khodamStorage[nameInput]) {
        const khodams = [
            'Harimau Tidur',
            'Naga Lucu',
            'Garuda Gembira',
            'Macan Kocak',
            'Gajah Gila',
            'Tikus Imut',
            'Kucing Ngantuk',
            'Bebek Bercanda',
            'Sapi Santai',
            'Ayam Berkokok'
        ];
        const khodam = khodams[Math.floor(Math.random() * khodams.length)];
        khodamStorage[nameInput] = khodam;
    }

    namaSpan.textContent = `Nama: ${nameInput}`;
    khodamSpan.textContent = `Jenis Khodam: ${khodamStorage[nameInput]}`;
}
