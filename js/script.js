window.addEventListener('DOMContentLoaded', () => {
  
  const content = document.querySelector('.content');
  const input = document.querySelector('.input');
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    // bersihkan isi element content
    content.innerHTML = '';
    // menghilangkan karakter spasi dan merubah huruf menjadi kecil semua
    const value = input.value.replace(/\s/g, '').toLowerCase();
    // jika input kosong maka berikan peringatan
    if (!value) return alert('input is empty!');
    // jalankan fungsi palindromeChecker()
    palindromeChecker(value);
  });
  
  function palindromeChecker(value) {
    // pecah menjadi beberapa bagian, balikkan string, lalu gabungkan
    // contoh : candra => c,a,n,d,r,a => a,r,d,n,a,c => ardnac
    const result = [...value].reverse().join('');
    const type = value === result ? 'success' : 'error';
    const message = value === result ? `Yes. it's palindrome` : `No. it's not palindrome`;
    content.innerHTML = showMessage(type, message);
  }
  
  function showMessage(type, message) {
    return `
      <div class="message-box ${type}">
        <span>${message}</span>
      </div>
    `;
  }
  
});