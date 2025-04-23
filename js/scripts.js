/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function downloadFileClassDiagram() {
    window.location.href='../assets/diagrams/class_diagram.pdf';
}

function downloadFileUCDiagram() {
    window.location.href='../assets/img/diagrams/use_case_diagram.png';
}

function downloadFileUCDDescDiagram() {
    window.location.href='../assets/diagrams/ucd_popis.pdf';
}

function downloadAuthenticable() {
    window.location.href='../assets/codes/Authenticable.h';
}

function downloadCodeAuthorizationCPP() {
    window.location.href='../assets/codes/CodeAuthorization.cpp';
}

function downloadCodeAuthorizationH() {
    window.location.href='../assets/codes/CodeAuthorization.h';
}

function downloadEmployeeCPP() {
    window.location.href='../assets/codes/Employee.cpp';
}

function downloadEmployeeH() {
    window.location.href='../assets/codes/Employee.h';
}

function downloadParkingLotCPP() {
    window.location.href='../assets/codes/ParkingLot.cpp';
}

function downloadParkingLotH() {
    window.location.href='../assets/codes/ParkingLot.h';
}

function downloadParkingSpotCPP() {
    window.location.href='../assets/codes/ParkingSpot.cpp';
}

function downloadParkingSpotH() {
    window.location.href='../assets/codes/ParkingSpot.h';
}

function downloadParkingSystemCPP() {
    window.location.href='../assets/codes/ParkingSystem.cpp';
}

function downloadParkingSystemH() {
    window.location.href='../assets/codes/ParkingSystem.h';
}

function downloadReservationCPP() {
    window.location.href='../assets/codes/Reservation.cpp';
}

function downloadReservationH() {
    window.location.href='../assets/codes/Reservation.h';
}

function downloadSSOAuthorizationCPP() {
    window.location.href='../assets/codes/SSOAuthorization.cpp';
}

function downloadSSOAuthorizationH() {
    window.location.href='../assets/codes/SSOAuthorization.h';
}

function downloadStudentCPP() {
    window.location.href='../assets/codes/Student.cpp';
}

function downloadStudentH() {
    window.location.href='../assets/codes/Student.h';
}

function downloadUserH() {
    window.location.href='../assets/codes/User.h';
}

function downloadUserCPP() {
    window.location.href='../assets/codes/User.cpp';
}

function downloadVisitorCPP() {
    window.location.href='../assets/codes/Visitor.cpp';
}

function downloadVisitorH() {
    window.location.href='../assets/codes/Visitor.h';
}

function downloadFileUCDScenar() {
    window.location.href='../assets/diagrams/ucd_scenar.pdf';
}

function downloadFileBPMN() {
    window.location.href='../assets/diagrams/bpmn.pdf';
}

function downloadFileActivityDiagram() {
    window.location.href='../assets/diagrams/activity_diagram.pdf';
}

function downloadFileSequenceDiagram() {
    window.location.href='../assets/diagrams/sequence_diagram.pdf';
}

function downloadParkingTs() {
    window.location.href='../assets/codes/Parking.tsx';
}

function downloadAuthTs() {
    window.location.href='../assets/codes/AuthService.tsx';
}

function downloadServiceTs() {
    window.location.href='../assets/codes/ParkingService.tsx';
}

function downloadDoc() {
    window.location.href='../doc.pdf';
}

function downloadStatechartDiagram() {
    window.location.href='../assets/diagrams/statechart_diagram.pdf';
}