import {
  LitElement,
  html,
  css,
  customElement,
  TemplateResult,
  CSSResult,
} from 'lit-element';
import { until } from 'lit-html/directives/until';

import { pre } from '../styles';


const styles: CSSResult = css``;


@customElement('site-root')
export class SiteRoot extends LitElement {

  accent: string = `🔥`;

  get hello(): Promise<TemplateResult> { 
    return fetch(`/data/hello.json`)
      .then(res => res.json())
      .then(data => data.map(item =>
        html`
          <card-primary
            .title=${item.title}
            .copy=${item.copy}
          ></card-primary>
        `
      ));
  }

  get hold(): Array<TemplateResult> {
    const skeletons: Array<TemplateResult> = [];
    for (let i = 0; i < 6; i++) {
      skeletons.push(html`<card-skeleton></card-skeleton>`);
    }
    return skeletons;
  }

  static styles: Array<CSSResult> = [
    pre,
    styles,
  ];

  render(): TemplateResult {
    return html`
      <site-header .emote=${this.accent}></site-header>

      <site-nav .home=${"/"}></site-nav>

      <main data-grid>

        ${until(this.hello, this.hold)}

      </main>

      <site-footer .home=${"/"}></site-footer>
    `;
  }
}
