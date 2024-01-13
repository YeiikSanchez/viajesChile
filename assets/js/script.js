$(document).ready(() => {
    $('[data-bs-toggle="tooltip"]').tooltip();

    $(".scroll").click(function () {
        const targetHash = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(targetHash).offset().top - 70
            },
            800
        );
    });
});
