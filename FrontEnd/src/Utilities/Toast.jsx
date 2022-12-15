import Swal from "sweetalert2"

const defaultToastParams = {
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
}

export function SuccessToast(title) {
    const Toast = Swal.mixin({
        ...defaultToastParams,

    })
    
    Toast.fire({
        icon: 'success',
        title: title
      })

}

export function ErrorToast(title) {
    const Toast = Swal.mixin({
        ...defaultToastParams,
        timer: 7000,
    })
    
    Toast.fire({
        icon: 'error',
        title: title
      })

}