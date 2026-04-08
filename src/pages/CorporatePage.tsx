import { useTranslation } from 'react-i18next'
import { InnerHero } from '../components/InnerHero'
import { workshopVideoEmbedSrc } from '../data/content'

export function CorporatePage() {
  const { t } = useTranslation()

  return (
    <main>
      <InnerHero title={t('nav.corporate')} />

      <section className="corporate">
        <div className="corporate__container">
          <h2 className="corporate__heading">Bilimle Şekillenen Yaklaşım</h2>
          <p className="corporate__paragraph">
            Gloseria, dermatoloji ve medikal estetik alanında profesyonel kullanıma yönelik ürünler
            geliştiren bir markadır. Ürünlerimiz, cildin biyolojik yapısını merkeze alan bilimsel
            formülasyon anlayışıyla tasarlanır. Hedefimiz; hekimlerin klinik uygulamalarında
            güvenle kullanabileceği, yüksek etkinlik sunan ve sürdürülebilir sonuçlar sağlayan
            çözümler üretmektir.
          </p>

          <div className="corporate__missionVision">
            <div className="corporate__callout">
              <h5 className="corporate__calloutTitle">Misyonumuz</h5>
              <p className="corporate__calloutText">
                Dermatologlar ve medikal estetik hekimleri için; bilimsel temellere dayanan, klinik
                doğruluğu yüksek ve hasta memnuniyetini destekleyen çözümler geliştirmek.
              </p>
            </div>

            <div className="corporate__callout">
              <h5 className="corporate__calloutTitle">Vizyonumuz</h5>
              <p className="corporate__calloutText">
                Alanında; yenilikçi yaklaşımı, prestijli marka duruşu ve klinik başarı odaklı
                ürünleriyle ulusal ve uluslararası ölçekte referans alınan bir marka olmak.
              </p>
            </div>
          </div>

          <section className="corporate__split">
            <div className="corporate__media">
              <img
                className="corporate__image"
                src="/images/gloseria-about.webp"
                alt="Gloseria kurumsal etkinlik"
                loading="lazy"
              />
              <p className="corporate__paragraph corporate__paragraph--belowMedia">
                Gloseria, dermo-kozmetik alanında kaliteyi yalnızca formülasyonla sınırlamayan; üretim
                süreçlerinden klinik geri bildirimlere kadar tüm aşamalarda yüksek standartları benimseyen
                bir markadır. Ürün geliştirme yaklaşımımız; etkinlik, güvenlik ve profesyonel kullanım
                gereksinimlerini aynı noktada buluşturmayı hedefler.
              </p>
            </div>

            <div className="corporate__valuesBlock">
              <h3 className="corporate__subheading corporate__subheading--tight">Değerlerimiz</h3>
              <div className="corporate__valuesList">
                <div className="corporate__value">
                  <h6 className="corporate__valueTitle">Bilimsel Güvenilirlik</h6>
                  <p className="corporate__valueText">
                    Tüm ürünlerimiz, güncel bilimsel veriler ve klinik geri bildirimler doğrultusunda
                    geliştirilir.
                  </p>
                </div>
                <div className="corporate__value">
                  <h6 className="corporate__valueTitle">Profesyonel Odaklılık</h6>
                  <p className="corporate__valueText">
                    Gloseria, yalnızca profesyonel kullanım gereksinimlerine uygun çözümler sunar.
                  </p>
                </div>
                <div className="corporate__value">
                  <h6 className="corporate__valueTitle">Yüksek Etkinlik</h6>
                  <p className="corporate__valueText">
                    Formülasyonlarımız, hedefe yönelik aktif içerikler ile maksimum klinik performans
                    sağlayacak şekilde tasarlanır.
                  </p>
                </div>
                <div className="corporate__value">
                  <h6 className="corporate__valueTitle">Sürekli Gelişim</h6>
                  <p className="corporate__valueText">
                    Ürün portföyümüz, dermatoloji ve medikal estetik alanındaki yenilikler doğrultusunda
                    sürekli güncellenir.
                  </p>
                </div>
                <div className="corporate__value">
                  <h6 className="corporate__valueTitle">Eğitim ve Paylaşım</h6>
                  <p className="corporate__valueText">
                    Uygulamalı workshoplar ve klinik buluşmalarla bilgi paylaşımını ve profesyonel
                    gelişimi destekleriz.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <p className="corporate__paragraph corporate__paragraph--afterSplit">
            Bu bütüncül bakış açısı, Gloseria’yı klinik uygulamalarda sürdürülebilir ve güvenilir bir
            çözüm ortağı haline getirir.
          </p>

          <section className="corporate__workshopCard" aria-label="Workshop">
            <div className="corporate__workshopMedia" aria-hidden="true">
              <iframe
                className="corporate__workshopVideo"
                src={workshopVideoEmbedSrc}
                title=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <div className="corporate__workshopContent">
              <h3 className="corporate__workshopTitle">Profesyonel Deneyimin Bir Parçası</h3>
              <p className="corporate__workshopText">
                Gloseria, farklı şehirlerde düzenlediği uygulamalı workshoplar ile klinik bilgi ve
                deneyimi bir araya getirir. Bu organizasyonlar, hekimlerin uygulama yetkinliğini
                artırmak ve klinik standartları yükseltmek amacıyla tasarlanır.
              </p>
              <a className="corporate__workshopCta" href="#workshop">
                WORKSHOP’LARI KEŞFET
              </a>
            </div>
          </section>

          <section className="corporate__future">
            <h3 className="corporate__subheading">Geleceğe Bakış</h3>
            <h5 className="corporate__futureLead">
              Gloseria, medikal estetik alanında kalite, güven ve prestiji bir araya getirerek; bilimle
              güçlenen çözümler sunmaya devam eder.
            </h5>
          </section>
        </div>
      </section>
    </main>
  )
}

