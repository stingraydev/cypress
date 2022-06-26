describe('My First Test', () => {
    it('Getting birthdays', () => {
        let countPeople = 0;
        let countPeopleWithDate = 0;
        let countParseDate = 0;
        let aries = 0;
        let taurus = 0;
        let gemini = 0;
        let cancer = 0;
        let leo = 0;
        let virgo = 0;
        let libra = 0;
        let scorpio = 0;
        let sagittarius = 0;
        let capricorn = 0;
        let aquarius = 0;
        let pisces = 0;

        cy.visit('/');

        for (let i = 1; i <= 120; i++) {
            cy.visit(`https://pomnim.motocitizen.info/page/${i}/`);

            cy.get('[id^=post-]').then($elements => {
                const elementsLength = $elements.length;

                for (let i = 0; i < elementsLength; i++) {
                    cy.get('[id^=post-]').eq(i).click();
                    cy.get('.single-content-wrap').children().then((elems) => {
                        countPeople++;
                        const textArray = [...elems].map(elem => elem.textContent.trim());
                        let day, month, fullDate;

                        textArray.map((elem, index) => {
                            if (elem.includes('Даты:')) {
                                countPeopleWithDate++;
                                elem.trim().split(' ').map((el, index) => {

                                    if (el.includes('Даты:') && el.length > 5) {
                                        fullDate = el.slice(5).trim();
                                    }
                                    let withoutZero = el.replace(/^0+/, '');
                                    if (Boolean(Number(withoutZero[0])) && index < 3) {
                                        fullDate = el.trim();
                                    }
                                });

                                if (fullDate) {
                                    day = Number(fullDate.split('.')[0].replace(/^0+/, ''));
                                    month = Number(fullDate.split('.')[1].replace(/^0+/, ''));
                                    countParseDate++;

                                    switch (month) {
                                        case 1:
                                            if (day <= 20) {
                                                capricorn++;
                                            }
                                            else {
                                                aquarius++;
                                            }
                                            break;
                                        case 2:
                                            if (day <= 20) {
                                                aquarius++;
                                            }
                                            else {
                                                pisces++;
                                            }
                                            break;
                                        case 3:
                                            if (day <= 20) {
                                                pisces++;
                                            }
                                            else {
                                                aries++;
                                            }
                                            break;
                                        case 4:
                                            if (day <= 20) {
                                                aries++;
                                            }
                                            else {
                                                taurus++;
                                            }
                                            break;
                                        case 5:
                                            if (day <= 20) {
                                                taurus++;
                                            }
                                            else {
                                                gemini++;
                                            }
                                            break;
                                        case 6:
                                            if (day <= 20) {
                                                gemini++;
                                            }
                                            else {
                                                cancer++;
                                            }
                                            break;
                                        case 7:
                                            if (day <= 20) {
                                                cancer++;
                                            }
                                            else {
                                                leo++;
                                            }
                                            break;
                                        case 8:
                                            if (day <= 20) {
                                                leo++;
                                            }
                                            else {
                                                virgo++;
                                            }
                                            break;
                                        case 9:
                                            if (day <= 20) {
                                                virgo++;
                                            }
                                            else {
                                                libra++;
                                            }
                                            break;
                                        case 10:
                                            if (day <= 20) {
                                                libra++;
                                            }
                                            else {
                                                scorpio++;
                                            }
                                            break;
                                        case 11:
                                            if (day <= 20) {
                                                scorpio++;
                                            }
                                            else {
                                                sagittarius++;
                                            }
                                            break;
                                        case 12:
                                            if (day <= 20) {
                                                sagittarius++;
                                            }
                                            else {
                                                capricorn++;
                                            }
                                            break;
                                    }
                                    console.log("Овны: " + aries);
                                    console.log("Тельцы: " + taurus);
                                    console.log("Близнецы: " + gemini);
                                    console.log("Раки: " + cancer);
                                    console.log("Львы: " + leo);
                                    console.log("Девы: " + virgo);
                                    console.log("Весы: " + libra);
                                    console.log("Скорпионы: " + scorpio);
                                    console.log("Стрельцы: " + sagittarius);
                                    console.log("Козероги: " + capricorn);
                                    console.log("Водолеи: " + aquarius);
                                    console.log("Рыбы: " + pisces);

                                    console.log("Проверено людей: " + countPeople);
                                    console.log("Людей с датами рождения: " + countPeopleWithDate);
                                    console.log("Удалось спарсить: " + countParseDate);
                                }
                            }
                        });
                    });
                    cy.go('back');
                }
            });
        }
    });
});

