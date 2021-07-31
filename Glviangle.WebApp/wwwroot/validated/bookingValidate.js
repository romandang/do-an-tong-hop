function validateFormBooking() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const category = document.getElementById('category').value;
    const gender = document.getElementById('gender').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;

    const errorMessage = [];
    if (!name || name == "") {
        let message = "Bạn phải nhập tên<br/>";
        errorMessage.push(message);
    }
    if (!date || date == "") {
        let message = "Bạn phải chọn ngày đặt lịch<br/>";
        errorMessage.push(message);
    }
    if (!email || email == "") {
        let message = "Bạn phải nhập email<br/>";
        errorMessage.push(message);
    }
    if (!category || category == "") {
        let message = "Bạn phải chọn chủ đề cần tư vấn<br/>";
        errorMessage.push(message);
    }
    if (!dateOfBirth || dateOfBirth == "") {
        let message = "Bạn phải nhập ngày sinh<br/>";
        errorMessage.push(message);
    }
    if (!phone || phone == "") {
        let message = "Bạn phải nhập số điện thoại<br/>";
        errorMessage.push(message);
    }
    if (!gender || gender == "") {
        let message = "Bạn phải chọn giới tính<br/>";
        errorMessage.push(message);
    }

    showMessage(errorMessage);
}

function validateFormTuvan() {
    const idTimeFrame = document.getElementById('idTimeFrame').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const service = document.getElementById('service').value;

    const errorMessage = [];
    if (!idTimeFrame || idTimeFrame == "") {
        let message = "Bạn phải chọn thời gian đặt lịch<br/>";
        errorMessage.push(message);
    }
    if (!name || name == "") {
        let message = "Bạn phải nhập tên<br/>";
        errorMessage.push(message);
    }

    if (!phone || phone == "") {
        let message = "Bạn phải nhập số điện thoại<br/>";
        errorMessage.push(message);
    }

    if (!gender || gender == "") {
        let message = "Bạn phải chọn giới tính<br/>";
        errorMessage.push(message);
    }

    if (!service || service == "") {
        let message = "Bạn phải chọn dịch vụ cần tư vấn<br/>";
        errorMessage.push(message);
    }

    showMessage(errorMessage);

 
}

/**
 * @param { Array } errorMessage
 */
function showMessage(errorMessage) {
    if (errorMessage.length > 0) {
        Swal.fire({
            icon: 'error',
            title: 'Vui lòng kiểm tra lại thông tin',
            html: `<div style="color: #c0392b;">
                ${errorMessage}
            </div>`,
            confirmButtonColor: "#c0392b"
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Chúc mừng bạn đã đặt lịch thành công!',
            text: "Gliviangle sẽ gửi thông tin cuộc gọi vào SMS của quý khách sau ít phút",
            confirmButtonColor: "#2ecc71"
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            }
        });
    }
}