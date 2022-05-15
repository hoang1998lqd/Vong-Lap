function hienThi() {
    let number = parseInt(document.getElementById('dauvao').value);
    let count = 0; // Đếm số lượng số nguyên tố cần hiển thị
    let n = 2    // Kiểm tra xem các giá trị nó nhận được có phải là số nguyên tố hay không
    for (count=0; count <number; ){      // Vòng lặp chạy điều kiện cho dừng đếm số khi chạm tới Number
        let check = false           //Biến check ở đây được khai báo dạng boolen thể hiện dưới dạng true false
       for (let i = 2 ; i <= Math.sqrt(n);i++){
           if (n % i===0){
               check = true;    // Bước này để kiểm tra xem điều kiện trong If có đúng k
               // nếu đúng ngay lập tức sẽ dừng vòng lặp lai
               break

           }

           }
        if (!check){
            document.write(n + "<br>");
            count++
       }
        n++

    }

}