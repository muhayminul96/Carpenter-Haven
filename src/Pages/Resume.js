import React from "react";

const Resume = () => {
  return (
    <div class="mx-20 my-8 text-center">
      <div>
        <h1 class="py-6 text-5xl md:text-5xl font-bold text-primary">
          My Portfolio
        </h1>
        <p class="pt-5 text-2xl lg:text-4xl leading-relaxed">
          Syed Muhayminul Islam
        </p>

        <p class="py-5 text-base lg:text-lg leading-relaxed">
          muhayminul96@gmail.com <br />
          +880 1935778149
        </p>
      </div>
      <div>
        <div>
          <p class="py-5 text-3xl md:text-5xl leading-relaxed">
            Educational Qualification
          </p>
        </div>
        <div>
          <div class="overflow-x-auto my-10">
            <table class="table w-full lg:w-screen">
              <thead>
                <tr class="hover">
                  <th>#</th>
                  <th className="font-extrabold text-xl">Degree</th>
                  <th className="font-extrabold text-xl">Division/Subject</th>
                  <th className="font-extrabold text-xl">University/Board</th>
                  <th className="font-extrabold text-xl">Result</th>
                  <th className="font-extrabold text-xl">Passing Year</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover">
                  <th>1</th>
                  <td>Bachalor of Science</td>
                  <td>Computer Science and Engineering</td>
                  <td>Daffodil International University</td>
                  <td>3.59</td>
                  <td>2021</td>
                </tr>

                <tr class="hover">
                  <th>2</th>
                  <td>BTEB</td>
                  <td>Computer</td>
                  <td>Jessore</td>
                  <td>2.86 out of 4.00</td>
                  <td>2018</td>
                </tr>

                <tr class="hover">
                  <th>3</th>
                  <td>Secondary School Certificate</td>
                  <td>Science</td>
                  <td>Jessore</td>
                  <td>3.94 out of 5.00</td>
                  <td>2012</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
          <p class="py-5 mb-8 text-3xl md:text-5xl leading-relaxed">
              My Project
            </p>
          <div class="overflow-x-auto">

            <table class="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Mobile Bari</td>
                  <td>
                    <a
                      target="blank"
                      href="https://vigilant-bardeen-deeb4e.netlify.app/"
                    >
                      https://vigilant-bardeen-deeb4e.netlify.app/
                    </a>
                  </td>
                </tr>

                <tr>
                  <th>2</th>
                  <td>Cholo Ghuri</td>
                  <td>
                    <a target="blank" href="https://cholo-ghuri-4f174.web.app/">
                      https://cholo-ghuri-4f174.web.app/
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Sports House</td>
                  <td>
                    <a
                      target="blank"
                      href="https://sports-house-185ed.web.app/"
                    >
                      https://sports-house-185ed.web.app/
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
          <div/>
          </div>
      </div>
    </div>
  );
};

export default Resume;
