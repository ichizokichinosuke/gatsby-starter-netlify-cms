import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const AboutPageTemplate = ({
  image,
  title,
  subheading,
  // content,
  // contentComponent
}) => {
  const heroImage = getImage(image) || image;
  const facilityMapImage = "../img/facility-map.png";
  const imageHeight = 250;
  const imageWidth = 500;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading}/>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-2">会社概要</h2>
                <div className="columns">
                  <div className="column">
                    <div className="content">
                      <table className="table is-hoverable has-text-lefted is-striped">
                        <tbody>
                          <tr>
                            <th>会社名</th>
                            <td>株式会社鹿児島美掃</td>
                          </tr>
                          <tr>
                            <th>代表取締役社長</th>
                            <td>小野陽子</td>
                          </tr>
                          <tr>
                            <th>所在地</th>
                            <td>〒890-0022 鹿児島県鹿児島市小野町3263番地</td>
                          </tr>
                          <tr>
                            <th>連絡先</th>
                            <td>TEL: 099-204-9893, FAX: 099-204-9894, EMAIL: kk-bisou@lime.ocn.ne.jp</td>
                          </tr>
                          <tr>
                            <th>設立</th>
                            <td>平成24年5月22日</td>
                          </tr>
                          <tr>
                            <th>資本金</th>
                            <td>1000万円</td>
                          </tr>
                          <tr>
                            <th rowSpan={4}>主な事業内容</th>
                            <td>
                              <span style={{margin: "0 6em 0 0 "}}>産業廃棄物処分業</span>鹿児島市 第08224168330号
                              <br /><span style={{margin: "0 14em 0 0 "}}></span>福岡県 第04000168330号
                              <br /><span style={{margin: "0 14em 0 0 "}}></span>宮崎県 第04503168330号
                            </td>
                          </tr>
                          <tr>
                            <td><span style={{margin: "0 4em 0 0 "}}>産業廃棄物収集運搬業</span>鹿児島県 第04609168330号</td>
                          </tr>
                          <tr>
                            <td><span style={{margin: "0 2em 0 0 "}}>産業廃棄物積替え又は保管</span>鹿児島市 第08211168330号</td>
                          </tr>
                          <tr>
                            <td>
                              <span style={{margin: "0 8em 0 0 "}}>再生骨材販売</span>鹿児島県 鹿リ認第30-8号
                              <br /><span style={{margin: "0 18.28em 0 0 "}}></span>鹿リ認第30-9号
                            </td>
                          </tr>
                          <tr>
                            <th>取引銀行</th>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="content">
                  <h2 className="title is-2">関連企業</h2>
                  <h3 className="title is-3">KBパートナーズ株式会社</h3>
                  <table className="table is-hoverable has-text-lefted is-striped">
                    <tbody>
                      <tr>
                        <th>代表取締役社長</th>
                        <td>小野凌雅</td>
                      </tr>
                      <tr>
                        <th>所在地</th>
                        <td>〒890-0022 鹿児島県鹿児島市小野町3282番地</td>
                      </tr>
                      <tr>
                        <th>連絡先</th>
                        <td>TEL: 099-204-9886, FAX: 099-204-9894</td>
                      </tr>

                      <tr>
                        <th>資本金</th>
                        <td>300万円</td>
                      </tr>
                      <tr>
                        <th>設立</th>
                        <td>令和2年5月</td>
                      </tr>
                      <tr>
                        <th>事業内容</th>
                        <td>土捨て場事業及び再生砕石販売</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="section">
                <div className="content">
                  <h2 className="title is-2">沿革</h2>

                </div>
              </div>
              <div className="section">
                  <h2 className="title is-2">アクセスマップ</h2>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54369.05701784793!2d130.47149757910157!3d31.604649499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e5e9ba77af365%3A0xd06b46970b11da10!2z77yI5qCq77yJ6bm_5YWQ5bO2576O5o6D!5e0!3m2!1sja!2sjp!4v1643469837469!5m2!1sja!2sjp" width="1000" height="500" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
              </div>
              {/* <div className="section">
                <h2 className="title is-2">場内地図</h2>
                <StaticImage src={facilityMapImage} width={imageWidth}/>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        subheading={post.frontmatter.subheading}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
