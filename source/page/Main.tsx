import { createCell, Fragment } from 'web-cell';
import { Jumbotron } from 'boot-cell/source/Content/Jumbotron';
import { Button } from 'boot-cell/source/Form/Button';

import members from '../data/members-china.json';

export function MainPage() {
  return (
    <>
      <Jumbotron
        className="mt-3 text-center"
        title="JavaScript 中文兴趣组"
        description="致力于提供一个加强中国 JavaScript 社区对 JavaScript 语言标准（ECMAScript）工作的参与的平台"
      >
        <p className="mb-4">
          JSCIG 主要侧重于确定中国 JavaScript 开发者的需求、帮助 Ecma
          的中国成员熟悉 TC39 标准流程、讨论可能提交给 TC39
          的提案、标准的测试、实现以及和 JavaScript
          相关的标准化机会，同时协助中国 JavaScript 社区对 JavaScript
          语言的发展进行参与和贡献。
        </p>

        <Button className="mr-3" size="lg" color="success" href="proposals">
          查阅提案
        </Button>
        <Button
          size="lg"
          target="_blank"
          href="https://github.com/JSCIG/es-discuss/issues"
        >
          参与讨论
        </Button>
      </Jumbotron>

      <h2 className="text-center">TC39 中国会员</h2>

      <section className="d-flex flex-wrap justify-content-around mb-4">
        {members.map(({ link, logo, name }) => (
          <a className="d-block m-3 text-center" target="_blank" href={link}>
            <img title={name} src={logo} />
          </a>
        ))}
      </section>
    </>
  );
}
