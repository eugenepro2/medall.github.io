<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);

?>

    <section class="kind">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12">
                    <div class="heading">
                        <h2><?= $arParams['TOP_TITLE']?></h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="kind__row">
            <article data-img="<?= $arResult["SECTIONS"][0]["PICTURE"]["SRC"] ?>" data-id="1"
                     class="kind__big">
                <div style="background-image: url('<?= $arResult["SECTIONS"][0]["PICTURE"]["SRC"] ?>')" class="kind__big__old glitch glitch--style-3 glitch--vertical">
                    <div class="glitch__img"></div>
                    <div class="glitch__img"></div>
                    <div class="glitch__img"></div>
                    <div class="glitch__img"></div>
                    <div class="glitch__img"></div>
                </div>
                <div class="kind__big__new glitch glitch--style-3 glitch--vertical">
                    <div class="glitch__img"></div>
                    <div class="glitch__img"></div>
                    <div class="glitch__img"></div>
                    <div class="glitch__img"></div>
                    <div class="glitch__img"></div>
                </div>
                <div>
                    <h1><?= $arResult["SECTIONS"][0]["NAME"] ?></h1>
                    <ul>
                        <? foreach ($arResult["SECTIONS"][0]["ITEMS"] as $it => $item) { ?>
                            <li><a href="<?= $item["DETAIL_PAGE_URL"] ?>"><?= $item["NAME"] ?></a></li>
                        <? } ?>
                    </ul>
                </div>
            </article>
            <div class="kind__tabs__row">

                <? foreach ($arResult["SECTIONS"] as $i => $element) { ?>
                    <div class="kind__tabs  <? if ($i == 0) echo "active"; ?> kind-<?= ($i + 1); ?>">
                        <div class="tabs">
                            <ul class="tabs__caption">
                                <li class="active"><i class="icon icon-price"></i>Цены</li>
                                <li><i class="icon icon-article"></i>Статьи</li>
                                <li><i class="icon icon-before"></i>До и после</li>
                                <li><i class="icon icon-review"></i>Отзывы</li>
                            </ul>

                            <? if ($element["LINK_PRICES"]) { ?>
                                <div class="tabs__content tabs__price active">
                                    <? foreach ($element["LINK_PRICES"] as $p => $price) { ?>
                                        <a href="#" class="tabs__price__block">
                                            <p><?= $price["NAME"]; ?>
                                                <i></i></p><span><?= $price["PROPERTY_PRICE_VALUE"]; ?></span></a>
                                    <? } ?>
                                </div>
                            <? } ?>

                            <? if ($element["ARTICLES_LIST"]) { ?>
                                <div class="tabs__content tabs__article">
                                    <? foreach ($element["ARTICLES_LIST"] as $a => $article) { ?>
                                        <a href="<?= $article["DETAIL_PAGE_URL"]; ?>">
                                            <article class="tabs__article__block">
                                                <header><img src="<?= $article["IMG"]["src"]; ?>" alt=""></header>
                                                <section>
                                                    <h1><?= $article["NAME"]; ?></h1>
                                                </section>
                                            </article>
                                        </a>
                                    <? } ?>
                                </div>
                            <? } ?>
                            <? if ($element["BEFORE_AFTER"]) { ?>
                                <div class="tabs__content tabs__before">
                                    <h2>Результаты работы наших хирургов</h2>
                                    <div class="tabs__before__photos">

                                        <? foreach ($element["BEFORE_AFTER"] as $b => $before) { ?>
                                            <img src="<?= $before["src"]; ?>">
                                        <? } ?>

                                    </div>
                                </div>
                            <? } ?>

                            <? if ($element["REVIEWS_LIST"]) { ?>
                                <div class="tabs__content tabs__review">
                                    <h2>Отзывы наших клиентов</h2>
                                    <div class="owl-carousel owl-theme review-slider">

                                        <? foreach ($element["REVIEWS_LIST"] as $r => $review) { ?>
                                            <div class="item">
                                                <h3><b><?= $review["NAME"]; ?></b> пишет:</h3>
                                                <?= $review["DESCRIPTION"]; ?>
                                                <div class="item__info">

                                                    <? if ($review["UF_REVIEW_DATE"]) { ?>
                                                        <div class="item__info__block">
                                                            <p>Дата: </p><span><?= $review["UF_REVIEW_DATE"]; ?></span>
                                                        </div>
                                                    <? } ?>

                                                    <? if ($review["UF_REVIEW_DOCTOR"]) { ?>
                                                        <div class="item__info__block">
                                                            <p>Хирург</p>
                                                            <span><?= $review["UF_REVIEW_DOCTOR"]; ?></span>
                                                        </div>
                                                    <? } ?>

                                                    <? if ($review["UF_REVIEW_OPER"]) { ?>
                                                        <div class="item__info__block">
                                                            <p>Операция:</p>
                                                            <span><?= $review["UF_REVIEW_OPER"]; ?></span>
                                                        </div>
                                                    <? } ?>

                                                </div>
                                            </div>
                                        <? } ?>

                                    </div>
                                    <div class="tabs__review__prev">
                                        < Предыдущий отзыв </div>
                                    <div class="tabs__review__next">Следующий отзыв ></div>
                                </div>

                            <? } ?>

                        </div>
                    </div>
                <? } ?>


            </div>
            <div class="kind__small__row">
                <? foreach ($arResult["SECTIONS"] as $i => $element) { ?>

                    <div data-img="<?= $element["PICTURE"]["SRC"] ?>" data-id="<?= $i + 1; ?>"
                         class="kind__click kind__small <? if ($i == 0) echo "hidden-sm hidden-md"; ?>">
                        <div class="kind__small__new glitch glitch--style-3 glitch--vertical">
                            <div class="glitch__img"></div>
                            <div class="glitch__img"></div>
                            <div class="glitch__img"></div>
                            <div class="glitch__img"></div>
                            <div class="glitch__img"></div>
                        </div>
                        <article style="background-image: url('<?= $element["PICTURE"]["SRC"] ?>')" class="glitch glitch--style-3 glitch--vertical">
                            <div class="glitch__img"></div>
                            <div class="glitch__img"></div>
                            <div class="glitch__img"></div>
                            <div class="glitch__img"></div>
                            <div class="glitch__img"></div>
                            <h1><?= $element["NAME"] ?></h1>
                            <ul>
                                <? foreach ($element["ITEMS"] as $it => $item) { ?>
                                    <li><a href="<?= $item["DETAIL_PAGE_URL"] ?>"><?= $item["NAME"] ?></a></li>
                                <? } ?>
                            </ul>
                        </article>
                    </div>

                <? } ?>
            </div>

        </div>
    </section>

<?php
//pr($arResult);
?>