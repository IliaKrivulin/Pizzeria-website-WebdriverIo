describe('Pizzeria', () => {

    beforeEach(async () => {
        await browser.url(`https://pizzeria.skillbox.cc/`)
    })

    it('scenario1', async () => {
    
    const entranceButton = await $('div.login-woocommerce'); //Кнопка "войти"
    const usernameMyAccounField = await $('#username'); //Поле ввода имени пользователя или почты
    const passwordMyAccountField = await $('#password'); //Поле ввода пароля
    const entranceMeMyAccountButton = await $('button.woocommerce-button.button.woocommerce-form-login__submit'); //Кнопка "Войти"
    const menuButton = await $('#menu-item-389'); //Кнопка "меню"
    const deliveryAndPaymentButton = await $('#menu-item-381'); //Кнопка "доставка и оплата"
    const dessertMenuButton = await $('li.cat-item.cat-item-31 > [href="http://pizzeria.skillbox.cc/product-category/menu/deserts/"]'); //Кнопка "десерты"
    const beveragesMenuButton = await $('li.cat-item.cat-item-32 > [href="http://pizzeria.skillbox.cc/product-category/menu/drinks/"]'); //Кнопка "напитки"
    const pizzaMenuButton = await $('li.cat-item.cat-item-30 > [href="http://pizzeria.skillbox.cc/product-category/menu/pizza/"]'); //Кнопка "пицца"
    const fourInOnePizza = await $('li.product.type-product.post-425.status-publish.first.instock.product_cat-pizza.has-post-thumbnail.shipping-taxable.purchasable.product-type-simple'); //Пицца 4 в 1
    const fourInOnePizzaToBasketButton = await $('button.single_add_to_cart_button.button.alt'); //Кнопка "в корзину" для пиццы 4 в 1
    const cinnamonBunToBasketButton = await $('[href="?add-to-cart=437"]'); //Кнопка "в корзину" булочки с корицей
    const cappuccinoToBasketButton = await $('[href="?add-to-cart=431"]'); //Кнопка "в корзину" для капучино
    const baskethomeButton = await $('a.cart-contents.wcmenucart-contents'); //Кнопка корзины в шапке
    const couponCodeBasketField = await $('#coupon_code'); //Поле ввода купона в корзине
    const applyCouponBasketButton = await $('[name="apply_coupon"]'); //Кнопка "применить купон" 
    const sumBasketText = await $('[data-title="Сумма"] > strong > span.woocommerce-Price-amount.amount > bdi'); //сумма со скидкой
    const sortingPizzaSelect = await $('select.orderby'); //Кнопка выбора сортировки для пиццы
    const sortingPopularityPizzaSelect = await $('[value="popularity"]'); //Сортировка по популярности пиццы
    const aboutUsButton = await $('#menu-item-380'); //Кнопка "о нас"
    const promotionButton = await $('#menu-item-396'); //Кнопка "акции"
    const choosingAPizzaSideFourInOnePizza = await $('#board_pack'); //Выбор борта для пиццы 4 в 1
    const sausageBoardFourInOnePizza = await $('[value="65.00"]'); //"Колбасный" борт для пиццы 4 в 1
    
    //авторизация
    await new Promise((r) => setTimeout(r, 1000));
    entranceButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    usernameMyAccounField.click();
    await new Promise((r) => setTimeout(r, 1000));
    usernameMyAccounField.setValue('Pizzeria');
    await new Promise((r) => setTimeout(r, 1000));
    passwordMyAccountField.click();
    await new Promise((r) => setTimeout(r, 1000));
    passwordMyAccountField.setValue('Pizzeria');
    await new Promise((r) => setTimeout(r, 1000));
    entranceMeMyAccountButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //о нас
    aboutUsButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //акции
    promotionButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //доставка и оплата
    deliveryAndPaymentButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //просмотр и сортировка пиццы
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    pizzaMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    sortingPizzaSelect.click();
    await new Promise((r) => setTimeout(r, 1000));
    sortingPopularityPizzaSelect.click();
    await new Promise((r) => setTimeout(r, 1000));
    //добавление десерта
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    dessertMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    cinnamonBunToBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //добавление напитка
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    beveragesMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    cappuccinoToBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //выбор бортов и добавление пиццы
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    pizzaMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    fourInOnePizza.click();
    await new Promise((r) => setTimeout(r, 1000));
    choosingAPizzaSideFourInOnePizza.click();
    await new Promise((r) => setTimeout(r, 1000));
    sausageBoardFourInOnePizza.click();
    await new Promise((r) => setTimeout(r, 1000));
    fourInOnePizzaToBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //переход в корзину и применение купона
    baskethomeButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    couponCodeBasketField.click();
    await new Promise((r) => setTimeout(r, 1000));
    couponCodeBasketField.setValue('GIVEMEHALYAVA');
    await new Promise((r) => setTimeout(r, 1000));
    applyCouponBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    baskethomeButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //проверка уменьшения суммы на 10%
    expect($(sumBasketText)).toHaveText('688,50');
    });

    it('scenario2', async () => {
    
    const entranceButton = await $('div.login-woocommerce'); //Кнопка "войти"
    const usernameMyAccounField = await $('#username'); //Поле ввода имени пользователя или почты
    const passwordMyAccountField = await $('#password'); //Поле ввода пароля
    const entranceMeMyAccountButton = await $('button.woocommerce-button.button.woocommerce-form-login__submit'); //Кнопка "Войти"
    const menuButton = await $('#menu-item-389'); //Кнопка "меню"
    const deliveryAndPaymentButton = await $('#menu-item-381'); //Кнопка "доставка и оплата"
    const dessertMenuButton = await $('li.cat-item.cat-item-31 > [href="http://pizzeria.skillbox.cc/product-category/menu/deserts/"]'); //Кнопка "десерты"
    const beveragesMenuButton = await $('li.cat-item.cat-item-32 > [href="http://pizzeria.skillbox.cc/product-category/menu/drinks/"]'); //Кнопка "напитки"
    const pizzaMenuButton = await $('li.cat-item.cat-item-30 > [href="http://pizzeria.skillbox.cc/product-category/menu/pizza/"]'); //Кнопка "пицца"
    const fourInOnePizza = await $('li.product.type-product.post-425.status-publish.first.instock.product_cat-pizza.has-post-thumbnail.shipping-taxable.purchasable.product-type-simple'); //Пицца 4 в 1
    const fourInOnePizzaToBasketButton = await $('button.single_add_to_cart_button.button.alt'); //Кнопка "в корзину" для пиццы 4 в 1
    const cinnamonBunToBasketButton = await $('[href="?add-to-cart=437"]'); //Кнопка "в корзину" булочки с корицей
    const cappuccinoToBasketButton = await $('[href="?add-to-cart=431"]'); //Кнопка "в корзину" для капучино
    const baskethomeButton = await $('a.cart-contents.wcmenucart-contents'); //Кнопка корзины в шапке
    const couponCodeBasketField = await $('#coupon_code'); //Поле ввода купона в корзине
    const applyCouponBasketButton = await $('[name="apply_coupon"]'); //Кнопка "применить купон" 
    const sumBasketText = await $('[data-title="Сумма"] > strong > span.woocommerce-Price-amount.amount > bdi'); //сумма со скидкой
    const sortingPizzaSelect = await $('select.orderby'); //Кнопка выбора сортировки для пиццы
    const sortingPopularityPizzaSelect = await $('[value="popularity"]'); //Сортировка по популярности пиццы
    const aboutUsButton = await $('#menu-item-380'); //Кнопка "о нас"
    const promotionButton = await $('#menu-item-396'); //Кнопка "акции"
    const choosingAPizzaSideFourInOnePizza = await $('#board_pack'); //Выбор борта для пиццы 4 в 1
    const sausageBoardFourInOnePizza = await $('[value="65.00"]'); //"Колбасный" борт для пиццы 4 в 1
    const inscriptionInvalidCoupon = await $('ul.woocommerce-error > li'); //надпись "неверный купон"    

    //авторизация
    await new Promise((r) => setTimeout(r, 1000));
    entranceButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    usernameMyAccounField.click();
    await new Promise((r) => setTimeout(r, 1000));
    usernameMyAccounField.setValue('Pizzeria');
    await new Promise((r) => setTimeout(r, 1000));
    passwordMyAccountField.click();
    await new Promise((r) => setTimeout(r, 1000));
    passwordMyAccountField.setValue('Pizzeria');
    await new Promise((r) => setTimeout(r, 1000));
    entranceMeMyAccountButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //о нас
    aboutUsButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //акции
    promotionButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //доставка и оплата
    deliveryAndPaymentButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //просмотр и сортировка пиццы
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    pizzaMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    sortingPizzaSelect.click();
    await new Promise((r) => setTimeout(r, 1000));
    sortingPopularityPizzaSelect.click();
    await new Promise((r) => setTimeout(r, 1000));
    //добавление десерта
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    dessertMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    cinnamonBunToBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //добавление напитка
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    beveragesMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    cappuccinoToBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //выбор бортов и добавление пиццы
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    pizzaMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    fourInOnePizza.click();
    await new Promise((r) => setTimeout(r, 1000));
    choosingAPizzaSideFourInOnePizza.click();
    await new Promise((r) => setTimeout(r, 1000));
    sausageBoardFourInOnePizza.click();
    await new Promise((r) => setTimeout(r, 1000));
    fourInOnePizzaToBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //переход в корзину и применение купона
    baskethomeButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    couponCodeBasketField.click();
    await new Promise((r) => setTimeout(r, 1000));
    couponCodeBasketField.setValue('DC120');
    await new Promise((r) => setTimeout(r, 1000));
    applyCouponBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    baskethomeButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //проверка что сумма не уменьшилась на 10%
    expect($(sumBasketText)).toHaveText('765,00');
    await new Promise((r) => setTimeout(r, 1000));
    expect($(inscriptionInvalidCoupon)).toHaveText('Неверный купон.');
});
 
    it('scenario3', async () => {
    
    const entranceButton = await $('div.login-woocommerce'); //Кнопка "войти"
    const usernameMyAccounField = await $('#username'); //Поле ввода имени пользователя или почты
    const passwordMyAccountField = await $('#password'); //Поле ввода пароля
    const entranceMeMyAccountButton = await $('button.woocommerce-button.button.woocommerce-form-login__submit'); //Кнопка "Войти"
    const menuButton = await $('#menu-item-389'); //Кнопка "меню"
    const deliveryAndPaymentButton = await $('#menu-item-381'); //Кнопка "доставка и оплата"
    const dessertMenuButton = await $('li.cat-item.cat-item-31 > [href="http://pizzeria.skillbox.cc/product-category/menu/deserts/"]'); //Кнопка "десерты"
    const beveragesMenuButton = await $('li.cat-item.cat-item-32 > [href="http://pizzeria.skillbox.cc/product-category/menu/drinks/"]'); //Кнопка "напитки"
    const pizzaMenuButton = await $('li.cat-item.cat-item-30 > [href="http://pizzeria.skillbox.cc/product-category/menu/pizza/"]'); //Кнопка "пицца"
    const fourInOnePizza = await $('li.product.type-product.post-425.status-publish.first.instock.product_cat-pizza.has-post-thumbnail.shipping-taxable.purchasable.product-type-simple'); //Пицца 4 в 1
    const fourInOnePizzaToBasketButton = await $('button.single_add_to_cart_button.button.alt'); //Кнопка "в корзину" для пиццы 4 в 1
    const cinnamonBunToBasketButton = await $('[href="?add-to-cart=437"]'); //Кнопка "в корзину" булочки с корицей
    const cappuccinoToBasketButton = await $('[href="?add-to-cart=431"]'); //Кнопка "в корзину" для капучино
    const baskethomeButton = await $('a.cart-contents.wcmenucart-contents'); //Кнопка корзины в шапке
    const couponCodeBasketField = await $('#coupon_code'); //Поле ввода купона в корзине
    const applyCouponBasketButton = await $('[name="apply_coupon"]'); //Кнопка "применить купон" 
    const sumBasketText = await $('[data-title="Сумма"] > strong > span.woocommerce-Price-amount.amount > bdi'); //сумма со скидкой
    const sortingPizzaSelect = await $('select.orderby'); //Кнопка выбора сортировки для пиццы
    const sortingPopularityPizzaSelect = await $('[value="popularity"]'); //Сортировка по популярности пиццы
    const aboutUsButton = await $('#menu-item-380'); //Кнопка "о нас"
    const promotionButton = await $('#menu-item-396'); //Кнопка "акции"
    const choosingAPizzaSideFourInOnePizza = await $('#board_pack'); //Выбор борта для пиццы 4 в 1
    const sausageBoardFourInOnePizza = await $('[value="65.00"]'); //"Колбасный" борт для пиццы 4 в 1
    const inscriptionInvalidCoupon = await $('ul.woocommerce-error > li'); //надпись "неверный купон"    
    
    //авторизация
    await new Promise((r) => setTimeout(r, 1000));
    entranceButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    usernameMyAccounField.click();
    await new Promise((r) => setTimeout(r, 1000));
    usernameMyAccounField.setValue('Pizzeria');
    await new Promise((r) => setTimeout(r, 1000));
    passwordMyAccountField.click();
    await new Promise((r) => setTimeout(r, 1000));
    passwordMyAccountField.setValue('Pizzeria');
    await new Promise((r) => setTimeout(r, 1000));
    entranceMeMyAccountButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //о нас
    aboutUsButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //акции
    promotionButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //доставка и оплата
    deliveryAndPaymentButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //просмотр и сортировка пиццы
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    pizzaMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    sortingPizzaSelect.click();
    await new Promise((r) => setTimeout(r, 1000));
    sortingPopularityPizzaSelect.click();
    await new Promise((r) => setTimeout(r, 1000));
    //добавление десерта
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    dessertMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    cinnamonBunToBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //добавление напитка
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    beveragesMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    cappuccinoToBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //выбор бортов и добавление пиццы
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    pizzaMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    fourInOnePizza.click();
    await new Promise((r) => setTimeout(r, 1000));
    choosingAPizzaSideFourInOnePizza.click();
    await new Promise((r) => setTimeout(r, 1000));
    sausageBoardFourInOnePizza.click();
    await new Promise((r) => setTimeout(r, 1000));
    fourInOnePizzaToBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //переход в корзину и применение купона
    baskethomeButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    couponCodeBasketField.click();
    await new Promise((r) => setTimeout(r, 1000));
    couponCodeBasketField.setValue('GIVEMEHALYVA');
    await new Promise((r) => setTimeout(r, 1000));
    applyCouponBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    baskethomeButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //проверка что сумма не уменьшилась на 10%
    expect($(sumBasketText)).toHaveText('765,00');
    });

    it('scenario4', async () => {

    const entranceButton = await $('div.login-woocommerce'); //Кнопка "войти"
    const usernameMyAccounField = await $('#username'); //Поле ввода имени пользователя или почты
    const passwordMyAccountField = await $('#password'); //Поле ввода пароля
    const entranceMeMyAccountButton = await $('button.woocommerce-button.button.woocommerce-form-login__submit'); //Кнопка "Войти"
    const menuButton = await $('#menu-item-389'); //Кнопка "меню"
    const deliveryAndPaymentButton = await $('#menu-item-381'); //Кнопка "доставка и оплата"
    const dessertMenuButton = await $('li.cat-item.cat-item-31 > [href="http://pizzeria.skillbox.cc/product-category/menu/deserts/"]'); //Кнопка "десерты"
    const beveragesMenuButton = await $('li.cat-item.cat-item-32 > [href="http://pizzeria.skillbox.cc/product-category/menu/drinks/"]'); //Кнопка "напитки"
    const pizzaMenuButton = await $('li.cat-item.cat-item-30 > [href="http://pizzeria.skillbox.cc/product-category/menu/pizza/"]'); //Кнопка "пицца"
    const fourInOnePizza = await $('li.product.type-product.post-425.status-publish.first.instock.product_cat-pizza.has-post-thumbnail.shipping-taxable.purchasable.product-type-simple'); //Пицца 4 в 1
    const fourInOnePizzaToBasketButton = await $('button.single_add_to_cart_button.button.alt'); //Кнопка "в корзину" для пиццы 4 в 1
    const cinnamonBunToBasketButton = await $('[href="?add-to-cart=437"]'); //Кнопка "в корзину" булочки с корицей
    const cappuccinoToBasketButton = await $('[href="?add-to-cart=431"]'); //Кнопка "в корзину" для капучино
    const baskethomeButton = await $('a.cart-contents.wcmenucart-contents'); //Кнопка корзины в шапке
    const couponCodeBasketField = await $('#coupon_code'); //Поле ввода купона в корзине
    const applyCouponBasketButton = await $('[name="apply_coupon"]'); //Кнопка "применить купон" 
    const sumBasketText = await $('[data-title="Сумма"] > strong > span.woocommerce-Price-amount.amount > bdi'); //сумма со скидкой
    const sortingPizzaSelect = await $('select.orderby'); //Кнопка выбора сортировки для пиццы
    const sortingPopularityPizzaSelect = await $('[value="popularity"]'); //Сортировка по популярности пиццы
    const aboutUsButton = await $('#menu-item-380'); //Кнопка "о нас"
    const promotionButton = await $('#menu-item-396'); //Кнопка "акции"
    const choosingAPizzaSideFourInOnePizza = await $('#board_pack'); //Выбор борта для пиццы 4 в 1
    const sausageBoardFourInOnePizza = await $('[value="65.00"]'); //"Колбасный" борт для пиццы 4 в 1
    const goToPaymentBasketButton = await $('a.checkout-button.button.alt.wc-forward'); //Кнопка "перейти к оплате"
    //оформление заказа
    const nameOrderField = await $('#billing_first_name'); //Поле ввода имени
    const surnameOrderField = await $('#billing_last_name'); //Поле ввода фамилии 
    const addressOrderField = await $('#billing_address_1'); //Поле ввода адреса
    const cityOrderField = await $('#billing_city'); //Поле ввода города
    const billingStateOrderField = await $('#billing_state'); //Поле ввода области
    const postcodeOrderField = await $('#billing_postcode'); //Поле ввода индекса
    const phoneOrderField = await $('#billing_phone'); //Поле ввода телефона
    const emailOrderField = await $('#billing_email'); //Поле ввода почты
    const commentsOrderField = await $('#order_comments'); //Поле ввода комментария к заказу
    const paymentOnDeliveryOrderRadioButton = await $('#payment_method_cod'); //Радиокнопка "оплата при доставке"
    const acceptTheTermsOrderCheckbox = await $('#terms'); //Чекбокс "принять условия"
    const placeOrderOrderButton = await $('#place_order'); //Кнопка "оформить заказ"
    const inscriptionInvalidCoupon = await $('ul.woocommerce-error > li'); //надпись "неверный купон"

    //авторизация
    await new Promise((r) => setTimeout(r, 1000));
    entranceButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    usernameMyAccounField.click();
    await new Promise((r) => setTimeout(r, 1000));
    usernameMyAccounField.setValue('Pizzeria');
    await new Promise((r) => setTimeout(r, 1000));
    passwordMyAccountField.click();
    await new Promise((r) => setTimeout(r, 1000));
    passwordMyAccountField.setValue('Pizzeria');
    await new Promise((r) => setTimeout(r, 1000));
    entranceMeMyAccountButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //о нас
    aboutUsButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //акции
    promotionButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //доставка и оплата
    deliveryAndPaymentButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //просмотр и сортировка пиццы
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    pizzaMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    sortingPizzaSelect.click();
    await new Promise((r) => setTimeout(r, 1000));
    sortingPopularityPizzaSelect.click();
    await new Promise((r) => setTimeout(r, 1000));
    //добавление десерта
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    dessertMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    cinnamonBunToBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //добавление напитка
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    beveragesMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    cappuccinoToBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //выбор бортов и добавление пиццы
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    pizzaMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    fourInOnePizza.click();
    await new Promise((r) => setTimeout(r, 1000));
    choosingAPizzaSideFourInOnePizza.click();
    await new Promise((r) => setTimeout(r, 1000));
    sausageBoardFourInOnePizza.click();
    await new Promise((r) => setTimeout(r, 1000));
    fourInOnePizzaToBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //переход в корзину и применение купона
    baskethomeButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    couponCodeBasketField.click();
    await new Promise((r) => setTimeout(r, 1000));
    couponCodeBasketField.setValue('GIVEMEHALYAVA');
    await new Promise((r) => setTimeout(r, 1000));
    applyCouponBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    baskethomeButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //Оформление заказа
    goToPaymentBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    addressOrderField.click();
    await new Promise((r) => setTimeout(r, 1000));
    addressOrderField.setValue('test');
    await new Promise((r) => setTimeout(r, 1000));
    cityOrderField.click();
    await new Promise((r) => setTimeout(r, 1000));
    cityOrderField.setValue('test');
    await new Promise((r) => setTimeout(r, 1000));
    billingStateOrderField.click();
    await new Promise((r) => setTimeout(r, 1000));
    billingStateOrderField.setValue('test');
    await new Promise((r) => setTimeout(r, 1000));
    postcodeOrderField.click();
    await new Promise((r) => setTimeout(r, 1000));
    postcodeOrderField.setValue('199198');
    await new Promise((r) => setTimeout(r, 1000));
    phoneOrderField.click();
    await new Promise((r) => setTimeout(r, 1000));
    phoneOrderField.setValue('+79998887766');
    await new Promise((r) => setTimeout(r, 1000));
    commentsOrderField.click();
    await new Promise((r) => setTimeout(r, 1000));
    commentsOrderField.setValue('Позвонить за 30 минут');
    await new Promise((r) => setTimeout(r, 1000));
    paymentOnDeliveryOrderRadioButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    acceptTheTermsOrderCheckbox.click();
    await new Promise((r) => setTimeout(r, 1000));
    placeOrderOrderButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //Оформление второго заказа с тем же промокодом
    menuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    beveragesMenuButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    cappuccinoToBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    baskethomeButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    couponCodeBasketField.click();
    await new Promise((r) => setTimeout(r, 1000));
    couponCodeBasketField.setValue('GIVEMEHALYAVA');
    await new Promise((r) => setTimeout(r, 1000));
    applyCouponBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    baskethomeButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //Оформление заказа
    goToPaymentBasketButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    addressOrderField.click();
    await new Promise((r) => setTimeout(r, 1000));
    addressOrderField.setValue('test');
    await new Promise((r) => setTimeout(r, 1000));
    cityOrderField.click();
    await new Promise((r) => setTimeout(r, 1000));
    cityOrderField.setValue('test');
    await new Promise((r) => setTimeout(r, 1000));
    billingStateOrderField.click();
    await new Promise((r) => setTimeout(r, 1000));
    billingStateOrderField.setValue('test');
    await new Promise((r) => setTimeout(r, 1000));
    postcodeOrderField.click();
    await new Promise((r) => setTimeout(r, 1000));
    postcodeOrderField.setValue('199198');
    await new Promise((r) => setTimeout(r, 1000));
    phoneOrderField.click();
    await new Promise((r) => setTimeout(r, 1000));
    phoneOrderField.setValue('+79998887766');
    await new Promise((r) => setTimeout(r, 1000));
    commentsOrderField.click();
    await new Promise((r) => setTimeout(r, 1000));
    commentsOrderField.setValue('Позвонить за 30 минут');
    await new Promise((r) => setTimeout(r, 1000));
    paymentOnDeliveryOrderRadioButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    acceptTheTermsOrderCheckbox.click();
    await new Promise((r) => setTimeout(r, 1000));
    placeOrderOrderButton.click();
   });

   it('Bonus program', async () => {
    
    const entranceButton = await $('div.login-woocommerce'); //Кнопка "войти"
    const usernameMyAccounField = await $('#username'); //Поле ввода имени пользователя или почты
    const passwordMyAccountField = await $('#password'); //Поле ввода пароля
    const entranceMeMyAccountButton = await $('button.woocommerce-button.button.woocommerce-form-login__submit'); //Кнопка "Войти"
    const bonusProgramButton = await $('#menu-item-363'); //Кнопка "бонусная программа"
    const bonusProgramUsernameField = await $('#bonus_username'); //Поле ввода имени
    const bonusProgramPhoneField = await $('#bonus_phone'); //Поле ввода телефона
    const bonusProgramApplyForACardButton = await $('button.woocommerce-Button.woocommerce-button.button.woocommerce-form-register__submit'); //Кнопка "офомить карту"
    const successfulCardRegistrationbonusProgram = await $('#bonus_main > h3'); //Надпись "Успешное оформление карты"

    //авторизация
    await new Promise((r) => setTimeout(r, 1000));
    entranceButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    usernameMyAccounField.click();
    await new Promise((r) => setTimeout(r, 1000));
    usernameMyAccounField.setValue('Pizzeria');
    await new Promise((r) => setTimeout(r, 1000));
    passwordMyAccountField.click();
    await new Promise((r) => setTimeout(r, 1000));
    passwordMyAccountField.setValue('Pizzeria');
    await new Promise((r) => setTimeout(r, 1000));
    entranceMeMyAccountButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    //Переход в бонусную программу и оформление карты
    bonusProgramButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    bonusProgramUsernameField.click();
    await new Promise((r) => setTimeout(r, 1000));
    bonusProgramUsernameField.setValue('Pizzeria');
    await new Promise((r) => setTimeout(r, 1000));
    bonusProgramPhoneField.click();
    await new Promise((r) => setTimeout(r, 1000));
    bonusProgramPhoneField.setValue('+75556664422');
    await new Promise((r) => setTimeout(r, 1000));
    bonusProgramApplyForACardButton.click();
    await new Promise((r) => setTimeout(r, 1000));
    browser.acceptAlert()
    await new Promise((r) => setTimeout(r, 5000));
    //проверка полей ввода
    expect($(bonusProgramUsernameField)).toHaveText('Pizzeria');
    await new Promise((r) => setTimeout(r, 1000));
    expect($(bonusProgramPhoneField)).toHaveText('+75556664422');
    await new Promise((r) => setTimeout(r, 1000));
    //Проверка успешного оформления карты
    expect($(successfulCardRegistrationbonusProgram)).toHaveText('Ваша карта оформлена!');
    });
});