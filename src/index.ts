import flatten from "lodash.flatten"

type VoA<T> = T[] | T
type Children = VoA<JSX.Element | string | null>[]
type JSXChildren = VoA<JSX.Element | null>

export function jsx(
  tagName: string,
  attributes: {},
  ...children: Children
): JSX.Element {
  const normalizedChildren = flatten(children).filter(n => n != null)

  if (normalizedChildren.every(v => typeof v === "string")) {
    return { tagName, attributes, content: normalizedChildren.join(" ") }
  } else {
    return {
      tagName,
      attributes,
      children: normalizedChildren as JSX.Element[]
    }
  }
}

type ElementProperties = {
  mjml: {
    /**
     * if set to "desktop", will force desktop display on outlook. Otherwise outlook will display mobile version since it ignores media queries
     */
    owa?: string
    /**
     * used as <html lang=""> attribute
     */
    lang?: string
    children?: JSXChildren
  }
  "mj-head": { children?: JSXChildren }
  "mj-body": {
    /**
     * the general background color
     */
    "background-color"?: string
    /**
     * class name, added to the root HTML element created
     */
    "css-class"?: string
    /**
     * email's width
     *
     * @default 600px
     */
    width?: string
    children?: JSXChildren
  }
  "mj-include": { path: string }
  "mj-attributes": { children?: JSXChildren }
  "mj-breakpoint": {
    /**
     * breakpoint's value
     */
    width?: string
  }
  "mj-font": {
    /**
     * url of the font
     */
    href?: string
    /**
     * name of the font
     */
    name?: string
  }
  "mj-preview": { children: string }
  "mj-style": {
    /**
     * set to "inline" to inline styles
     */
    inline?: string
    children: string
  }
  "mj-title": { children: string }
  "mj-accordion": {
    /**
     * border
     */
    border?: string
    /**
     * background-color of the cell
     */
    "container-background-color"?: string
    /**
     * class name, added to the root HTML element created
     */
    "css-class"?: string
    /**
     * font
     *
     * @default Ubuntu, Helvetica, Arial, sans-serif
     */
    "font-family"?: string
    /**
     * icon alignment
     */
    "icon-align"?: string
    /**
     * icon width
     *
     * @default 32px
     */
    "icon-height"?: string
    /**
     * display icon left or right
     *
     * @default right
     */
    "icon-position"?: string
    /**
     * alt text when accordion is unwrapped
     */
    "icon-unwrapped-alt"?: string
    /**
     * icon when accordion is unwrapped
     *
     * @default http://i.imgur.com/w4uTygT.png
     */
    "icon-unwrapped-url"?: string
    /**
     * icon height
     *
     * @default 32px
     */
    "icon-width"?: string
    /**
     * alt text when accordion is wrapped
     *
     * @default +
     */
    "icon-wrapped-alt"?: string
    /**
     * icon when accordion is wrapped
     *
     * @default http://i.imgur.com/bIXv1bk.png
     */
    "icon-wrapped-url"?: string
    /**
     * padding
     *
     * @default 10px 25px
     */
    padding?: string
    /**
     * padding bottom
     */
    "padding-bottom"?: string
    /**
     * padding left
     */
    "padding-left"?: string
    /**
     * padding right
     */
    "padding-right"?: string
    /**
     * padding top
     */
    "padding-top"?: string
    children?: JSXChildren
  }
  "mj-accordion-element": {
    /**
     * background color
     */
    "background-color"?: string
    /**
     * class name, added to the root HTML element created
     */
    "css-class"?: string
    /**
     * font
     *
     * @default Ubuntu, Helvetica, Arial, sans-serif
     */
    "font-family"?: string
    /**
     * icon alignment
     *
     * @default middle
     */
    "icon-align"?: string
    /**
     * icon width
     *
     * @default 32px
     */
    "icon-height"?: string
    /**
     * display icon left or right
     *
     * @default right
     */
    "icon-position"?: string
    /**
     * alt text when accordion is unwrapped
     *
     * @default -
     */
    "icon-unwrapped-alt"?: string
    /**
     * icon when accordion is unwrapped
     *
     * @default http://i.imgur.com/w4uTygT.png
     */
    "icon-unwrapped-url"?: string
    /**
     * icon height
     *
     * @default 32px
     */
    "icon-width"?: string
    /**
     * alt text when accordion is wrapped
     *
     * @default +
     */
    "icon-wrapped-alt"?: string
    /**
     * icon when accordion is wrapped
     *
     * @default http://i.imgur.com/bIXv1bk.png
     */
    "icon-wrapped-url"?: string
    children?: JSXChildren
  }
  "mj-accordion-title": {
    /**
     * background color
     */
    "background-color"?: string
    /**
     * text color
     */
    color?: string
    /**
     * class name, added to the root HTML element created
     */
    "css-class"?: string
    /**
     * font family
     *
     * @default Ubuntu, Helvetica, Arial, sans-serif
     */
    "font-family"?: string
    /**
     * font size
     *
     * @default 13px
     */
    "font-size"?: string
    /**
     * padding
     *
     * @default 16px
     */
    padding?: string
    /**
     * padding bottom
     */
    "padding-bottom"?: string
    /**
     * padding left
     */
    "padding-left"?: string
    /**
     * padding right
     */
    "padding-right"?: string
    /**
     * padding top
     */
    "padding-top"?: string
    children?: JSXChildren
  }
  "mj-accordion-text": {
    /**
     * background color
     */
    "background-color"?: string
    /**
     * text color
     */
    color?: string
    /**
     * class name, added to the root HTML element created
     */
    "css-class"?: string
    /**
     * font family
     *
     * @default Ubuntu, Helvetica, Arial, sans-serif
     */
    "font-family"?: string
    /**
     * font size
     *
     * @default 13px
     */
    "font-size"?: string
    /**
     * padding
     *
     * @default 16px
     */
    padding?: string
    /**
     * padding bottom
     */
    "padding-bottom"?: string
    /**
     * padding left
     */
    "padding-left"?: string
    /**
     * padding right
     */
    "padding-right"?: string
    /**
     * padding top
     */
    "padding-top"?: string
    children?: JSXChildren
  }
  "mj-button": {
    /**
     * horizontal alignment
     *
     * @default center
     */
    align?: string
    /**
     * button background-color
     *
     * @default #414141
     */
    "background-color"?: string
    /**
     * css border format
     */
    border?: string
    /**
     * css border format
     */
    "border-bottom"?: string
    /**
     * css border format
     */
    "border-left"?: string
    /**
     * border radius
     *
     * @default 3px
     */
    "border-radius"?: string
    /**
     * css border format
     */
    "border-right"?: string
    /**
     * css border format
     */
    "border-top"?: string
    /**
     * text color
     *
     * @default #ffffff
     */
    color?: string
    /**
     * button container background color
     */
    "container-background-color"?: string
    /**
     * class name, added to the root HTML element created
     */
    "css-class"?: string
    /**
     * font name
     *
     * @default Ubuntu, Helvetica, Arial, sans-serif
     */
    "font-family"?: string
    /**
     * text size
     *
     * @default 13px
     */
    "font-size"?: string
    /**
     * normal/italic/oblique
     */
    "font-style"?: string
    /**
     * text thickness
     *
     * @default normal
     */
    "font-weight"?: string
    /**
     * button height
     */
    height?: string
    /**
     * link to be triggered when the button is clicked
     */
    href?: string
    /**
     * inner button padding
     *
     * @default 10px 25px
     */
    "inner-padding"?: string
    /**
     * line-height on link
     *
     * @default 120%
     */
    "line-height"?: string
    /**
     * supports up to 4 parameters
     *
     * @default 10px 25px
     */
    padding?: string
    /**
     * bottom offset
     */
    "padding-bottom"?: string
    /**
     * left offset
     */
    "padding-left"?: string
    /**
     * right offset
     */
    "padding-right"?: string
    /**
     * top offset
     */
    "padding-top"?: string
    /**
     * specify the rel attribute for the button link
     */
    rel?: string
    /**
     * specify the target attribute for the button link
     *
     * @default _blank
     */
    target?: string
    /**
     * text-align button content
     */
    "text-align"?: string
    /**
     * underline/overline/none
     */
    "text-decoration"?: string
    /**
     * capitalize/uppercase/lowercase
     */
    "text-transform"?: string
    /**
     * vertical alignment
     *
     * @default middle
     */
    "vertical-align"?: string
    /**
     * button width
     */
    width?: string
    children: string
  }
  "mj-carousel": {
    /**
     * horizontal alignment
     *
     * @default center
     */
    align?: string
    /**
     * column background color
     */
    "background-color"?: string
    /**
     * border radius
     */
    "border-radius"?: string
    /**
     * class name, added to the root HTML element created
     */
    "css-class"?: string
    /**
     * width of the icons on left and right of the main image
     *
     * @default 44px
     */
    "icon-width"?: string
    /**
     * icon on the left of the main image
     *
     * @default https://i.imgur.com/xTh3hln.png
     */
    "left-icon"?: string
    /**
     * icon on the right of the main image
     *
     * @default https://i.imgur.com/os7o9kz.png
     */
    "right-icon"?: string
    /**
     * border of the thumbnails
     */
    "tb-border"?: string
    /**
     * border-radius of the thumbnails
     */
    "tb-border-radius"?: string
    /**
     * css border color of the hovered thumbnail
     */
    "tb-hover-border-color"?: string
    /**
     * css border color of the selected thumbnail
     */
    "tb-selected-border-color"?: string
    /**
     * thumbnail width
     */
    "tb-width"?: string
    /**
     * display or not the thumbnails (visible or hidden)
     */
    thumbnails?: string
    children?: JSXChildren
  }
  "mj-carousel-image": {
    /**
     * image description
     */
    alt?: string
    /**
     * class name, added to the root HTML element created
     */
    "css-class"?: string
    /**
     * link to redirect to on click
     */
    href?: string
    /**
     * specify the rel attribute
     */
    rel?: string
    /**
     * image source
     */
    src?: string
    /**
     * link target on click
     */
    target?: string
    /**
     * image source to have a thumbnail different than the image it's linked to
     */
    "thumbnails-src"?: string
    /**
     * tooltip & accessibility
     */
    title?: string
  }
  "mj-column": {
    /**
     * background color for a column
     *
     * @default n/a
     */
    "background-color"?: string
    /**
     * css border format
     *
     * @default none
     */
    border?: string
    /**
     * css border format
     *
     * @default n/a
     */
    "border-bottom"?: string
    /**
     * css border format
     *
     * @default n/a
     */
    "border-left"?: string
    /**
     * css border format
     *
     * @default n/a
     */
    "border-right"?: string
    /**
     * css border format
     *
     * @default n/a
     */
    "border-top"?: string
    /**
     * border radius (only applied on the background-color, not the border)
     *
     * @default n/a
     */
    "border-radius"?: string
    /**
     * column width
     *
     * @default (100 / number of non-raw elements in section)%
     */
    width?: string
    /**
     * middle/top/bottom
     *
     * @default top
     */
    "vertical-align"?: string
    /**
     * supports up to 4 parameters
     *
     * @default n/a
     */
    padding?: string
    /**
     * section top offset
     *
     * @default n/a
     */
    "padding-top"?: string
    /**
     * section bottom offset
     *
     * @default n/a
     */
    "padding-bottom"?: string
    /**
     * section left offset
     *
     * @default n/a
     */
    "padding-left"?: string
    /**
     * section right offset
     *
     * @default n/a
     */
    "padding-right"?: string
    /**
     * class name, added to the root HTML element created
     *
     * @default n/a
     */
    "css-class"?: string
    children?: JSXChildren
  }
  "mj-divider": {
    /**
     * divider color
     *
     * @default #000000
     */
    "border-color"?: string
    /**
     * dashed/dotted/solid
     *
     * @default solid
     */
    "border-style"?: string
    /**
     * divider's border width
     *
     * @default 4px
     */
    "border-width"?: string
    /**
     * inner element background color
     *
     * @default n/a
     */
    "container-background-color"?: string
    /**
     * class name, added to the root HTML element created
     *
     * @default n/a
     */
    "css-class"?: string
    /**
     * supports up to 4 parameters
     *
     * @default 10px 25px
     */
    padding?: string
    /**
     * bottom offset
     *
     * @default n/a
     */
    "padding-bottom"?: string
    /**
     * left offset
     *
     * @default n/a
     */
    "padding-left"?: string
    /**
     * right offset
     *
     * @default n/a
     */
    "padding-right"?: string
    /**
     * top offset
     *
     * @default n/a
     */
    "padding-top"?: string
    /**
     * divider width
     *
     * @default 100%
     */
    width?: string
  }
  "mj-group": {
    /**
     * group width
     *
     * @default (100 / number of non-raw elements in section)%
     */
    width?: string
    /**
     * middle/top/bottom
     *
     * @default top
     */
    "vertical-align"?: string
    /**
     * background color for a group
     *
     * @default n/a
     */
    "background-color"?: string
    /**
     * set the display order of direct children
     *
     * @default ltr
     */
    direction?: string
    /**
     * class name, added to the root HTML element created
     *
     * @default n/a
     */
    "css-class"?: string
    children?: JSXChildren
  }
  "mj-hero": {
    /**
     * hero background color
     *
     * @default #ffffff
     */
    "background-color"?: string
    /**
     * height of the image used (mandatory in fixed-height mode)
     *
     * @default none
     */
    "background-height"?: string
    /**
     * background image position
     *
     * @default center center
     */
    "background-position"?: string
    /**
     * absolute background url
     *
     * @default n/a
     */
    "background-url"?: string
    /**
     * width of the image used
     *
     * @default parent element width
     */
    "background-width"?: string
    /**
     * class name, added to the root HTML element created
     *
     * @default n/a
     */
    "css-class"?: string
    /**
     * hero section height (required for fixed-height mode)
     *
     * @default 0px
     */
    height?: string
    /**
     * choose if the height is fixed based on the height attribute or fluid
     *
     * @default fluid-height
     */
    mode?: string
    /**
     * supports up to 4 parameters
     *
     * @default 0px
     */
    padding?: string
    /**
     * bottom offset
     *
     * @default 0px
     */
    "padding-bottom"?: string
    /**
     * left offset
     *
     * @default 0px
     */
    "padding-left"?: string
    /**
     * right offset
     *
     * @default 0px
     */
    "padding-right"?: string
    /**
     * top offset
     *
     * @default 0px
     */
    "padding-top"?: string
    /**
     * content vertical alignment
     *
     * @default top
     */
    "vertical-align"?: string
    /**
     * hero container width
     *
     * @default parent element width
     */
    width?: string
    children?: JSXChildren
  }
  "mj-image": {
    /**
     * image alignment
     *
     * @default center
     */
    align?: string
    /**
     * image description
     *
     * @default n/a
     */
    alt?: string
    /**
     * css border definition
     *
     * @default none
     */
    border?: string
    /**
     * border radius
     *
     * @default n/a
     */
    "border-radius"?: string
    /**
     * inner element background color
     *
     * @default n/a
     */
    "container-background-color"?: string
    /**
     * class name, added to the root HTML element created
     *
     * @default n/a
     */
    "css-class"?: string
    /**
     * if "true", will be full width on mobile even if width is set
     *
     * @default n/a
     */
    "fluid-on-mobile"?: string
    /**
     * image height
     *
     * @default auto
     */
    height?: string
    /**
     * link to redirect to on click
     *
     * @default n/a
     */
    href?: string
    /**
     * supports up to 4 parameters
     *
     * @default 10px 25px
     */
    padding?: string
    /**
     * bottom offset
     *
     * @default n/a
     */
    "padding-bottom"?: string
    /**
     * left offset
     *
     * @default n/a
     */
    "padding-left"?: string
    /**
     * right offset
     *
     * @default n/a
     */
    "padding-right"?: string
    /**
     * top offset
     *
     * @default n/a
     */
    "padding-top"?: string
    /**
     * specify the rel attribute
     *
     * @default n/a
     */
    rel?: string
    /**
     * image source
     *
     * @default n/a
     */
    src?: string
    /**
     * enables to set a different image source based on the viewport
     *
     * @default n/a
     */
    srcset?: string
    /**
     * link target on click
     *
     * @default _blank
     */
    target?: string
    /**
     * tooltip & accessibility
     *
     * @default n/a
     */
    title?: string
    /**
     * image width
     *
     * @default 100%
     */
    width?: string
  }
  "mj-navbar": {
    /**
     * align content left/center/right
     *
     * @default center
     */
    align?: string
    /**
     * base url for children components
     *
     * @default n/a
     */
    "base url"?: string
    /**
     * class name, added to the root HTML element created
     *
     * @default n/a
     */
    "css-class"?: string
    /**
     * activate the hamburger navigation on mobile if the value is hamburger
     *
     * @default n/a
     */
    hamburger?: string
    /**
     * hamburger icon alignment, left/center/right (hamburger mode required)
     *
     * @default center
     */
    "ico-align"?: string
    /**
     * char code for a custom close icon (hamburger mode required)
     *
     * @default 8855
     */
    "ico-close"?: string
    /**
     * hamburger icon color (hamburger mode required)
     *
     * @default #000000
     */
    "ico-color"?: string
    /**
     * hamburger icon font (only on hamburger mode)
     *
     * @default Ubuntu, Helvetica, Arial, sans-serif
     */
    "ico-font-family"?: string
    /**
     * hamburger icon size (hamburger mode required)
     *
     * @default 30px
     */
    "ico-font-size"?: string
    /**
     * hamburger icon line height (hamburger mode required)
     *
     * @default 30px
     */
    "ico-line-height"?: string
    /**
     * char code for a custom open icon (hamburger mode required)
     *
     * @default 9776
     */
    "ico-open"?: string
    /**
     * hamburger icon padding, supports up to 4 parameters (hamburger mode required)
     *
     * @default 10px
     */
    "ico-padding"?: string
    /**
     * hamburger icon bottom offset (hamburger mode required)
     *
     * @default 10px
     */
    "ico-padding-bottom"?: string
    /**
     * hamburger icon left offset (hamburger mode required)
     *
     * @default 10px
     */
    "ico-padding-left"?: string
    /**
     * hamburger icon right offset (hamburger mode required)
     *
     * @default 10px
     */
    "ico-padding-right"?: string
    /**
     * hamburger icon top offset (hamburger mode required)
     *
     * @default 10px
     */
    "ico-padding-top"?: string
    /**
     * hamburger icon text decoration none/underline/overline/line-through (hamburger mode required)
     *
     * @default none
     */
    "ico-text-decoration"?: string
    /**
     * hamburger icon text transformation none/capitalize/uppercase/lowercase (hamburger mode required)
     *
     * @default none
     */
    "ico-text-transform"?: string
    children: JSXChildren
  }
  "mj-navbar-link": {
    /**
     * text color
     *
     * @default #000000
     */
    color?: string
    /**
     * class name, added to the root HTML element created
     *
     * @default n/a
     */
    "css-class"?: string
    /**
     * font
     *
     * @default Ubuntu, Helvetica, Arial, sans-serif
     */
    "font-family"?: string
    /**
     * text size
     *
     * @default 13px
     */
    "font-size"?: string
    /**
     * normal/italic/oblique
     *
     * @default n/a
     */
    "font-style"?: string
    /**
     * text thickness
     *
     * @default n/a
     */
    "font-weight"?: string
    /**
     * link to redirect to on click
     *
     * @default n/a
     */
    href?: string
    /**
     * space between the lines
     *
     * @default 22px
     */
    "line-height"?: string
    /**
     * supports up to 4 parameters
     *
     * @default 10px 25px
     */
    padding?: string
    /**
     * bottom offset
     *
     * @default n/a
     */
    "padding-bottom"?: string
    /**
     * left offset
     *
     * @default n/a
     */
    "padding-left"?: string
    /**
     * right offset
     *
     * @default n/a
     */
    "padding-right"?: string
    /**
     * top offset
     *
     * @default n/a
     */
    "padding-top"?: string
    /**
     * specify the rel attribute
     *
     * @default n/a
     */
    rel?: string
    /**
     * link target on click
     *
     * @default n/a
     */
    target?: string
    /**
     * underline/overline/none
     *
     * @default n/a
     */
    "text-decoration"?: string
    /**
     * capitalize/uppercase/lowercase/none
     *
     * @default uppercase
     */
    "text-transform"?: string
  }
  "mj-raw": {
    children: string
  }
  "mj-section": {
    /**
     * section color
     *
     * @default n/a
     */
    "background-color"?: string
    /**
     * css background repeat
     *
     * @default repeat
     */
    "background-repeat"?: string
    /**
     * css background size
     *
     * @default auto
     */
    "background-size"?: string
    /**
     * background url
     *
     * @default n/a
     */
    "background-url"?: string
    /**
     * css border format
     *
     * @default none
     */
    border?: string
    /**
     * css border format
     *
     * @default n/a
     */
    "border-bottom"?: string
    /**
     * css border format
     *
     * @default n/a
     */
    "border-left"?: string
    /**
     * border radius (only applied on the background-color, not the border)
     *
     * @default n/a
     */
    "border-radius"?: string
    /**
     * css border format
     *
     * @default n/a
     */
    "border-right"?: string
    /**
     * css border format
     *
     * @default n/a
     */
    "border-top"?: string
    /**
     * class name, added to the root HTML element created
     *
     * @default n/a
     */
    "css-class"?: string
    /**
     * set the display order of direct children
     *
     * @default ltr
     */
    direction?: string
    /**
     * make the section full-width
     *
     * @default n/a
     */
    "full-width"?: string
    /**
     * supports up to 4 parameters
     *
     * @default 20px 0
     */
    padding?: string
    /**
     * section bottom offset
     *
     * @default n/a
     */
    "padding-bottom"?: string
    /**
     * section left offset
     *
     * @default n/a
     */
    "padding-left"?: string
    /**
     * section right offset
     *
     * @default n/a
     */
    "padding-right"?: string
    /**
     * section top offset
     *
     * @default n/a
     */
    "padding-top"?: string
    /**
     * css text-align
     *
     * @default center
     */
    "text-align"?: string
    children?: JSXChildren
  }
  "mj-social": {
    /**
     * left/right/center
     *
     * @default center
     */
    align?: string
    /**
     * border radius
     *
     * @default 3px
     */
    "border-radius"?: string
    /**
     * text color
     *
     * @default #333333
     */
    color?: string
    /**
     * class name, added to the root HTML element created
     *
     * @default n/a
     */
    "css-class"?: string
    /**
     * inner element background color
     *
     * @default n/a
     */
    "container-background-color"?: string
    /**
     * font name
     *
     * @default Ubuntu, Helvetica, Arial, sans-serif
     */
    "font-family"?: string
    /**
     * font size
     *
     * @default 13px
     */
    "font-size"?: string
    /**
     * font style
     *
     * @default normal
     */
    "font-style"?: string
    /**
     * font weight
     *
     * @default normal
     */
    "font-weight"?: string
    /**
     * icon height, overrides icon-size
     *
     * @default icon-size
     */
    "icon-height"?: string
    /**
     * icon size (width and height)
     *
     * @default 20px
     */
    "icon-size"?: string
    /**
     * social network surrounding padding
     *
     * @default 4px
     */
    "inner-padding"?: string
    /**
     * space between lines
     *
     * @default 22px
     */
    "line-height"?: string
    /**
     * vertical/horizontal
     *
     * @default horizontal
     */
    mode?: string
    /**
     * supports up to 4 parameters
     *
     * @default 10px 25px
     */
    padding?: string
    /**
     * bottom offset
     *
     * @default n/a
     */
    "padding-bottom"?: string
    /**
     * left offset
     *
     * @default n/a
     */
    "padding-left"?: string
    /**
     * right offset
     *
     * @default n/a
     */
    "padding-right"?: string
    /**
     * top offset
     *
     * @default n/a
     */
    "padding-top"?: string
    /**
     * padding around the icons
     *
     * @default 0px
     */
    "icon-padding"?: string
    /**
     * padding around the texts
     *
     * @default 4px 4px 4px 0
     */
    "text-padding"?: string
    /**
     * underline/overline/none
     *
     * @default none
     */
    "text-decoration"?: string
    children?: JSXChildren
  }
  "mj-social-element": {
    /**
     * left/right/center
     *
     * @default center
     */
    align?: string
    /**
     * image alt attribute
     *
     * @default none
     */
    alt?: string
    /**
     * icon color
     *
     * @default Each social name has its own default
     */
    "background-color"?: string
    /**
     * border radius
     *
     * @default 3px
     */
    "border-radius"?: string
    /**
     * text color
     *
     * @default #333333
     */
    color?: string
    /**
     * class name, added to the root HTML element created
     *
     * @default n/a
     */
    "css-class"?: string
    /**
     * font name
     *
     * @default Ubuntu, Helvetica, Arial, sans-serif
     */
    "font-family"?: string
    /**
     * font size
     *
     * @default 13px
     */
    "font-size"?: string
    /**
     * font style
     *
     * @default normal
     */
    "font-style"?: string
    /**
     * font weight
     *
     * @default normal
     */
    "font-weight"?: string
    /**
     * button redirection url
     *
     * @default none
     */
    href?: string
    /**
     * icon height, overrides icon-size
     *
     * @default icon-size
     */
    "icon-height"?: string
    /**
     * icon size (width and height)
     *
     * @default 20px
     */
    "icon-size"?: string
    /**
     * space between lines
     *
     * @default 22px
     */
    "line-height"?: string
    /**
     * vertical/horizontal
     *
     * @default horizontal
     */
    mode?: string
    /**
     * social network name, see supported list below
     *
     * @default N/A
     */
    name?: string
    /**
     * supports up to 4 parameters
     *
     * @default 4px
     */
    padding?: string
    /**
     * bottom offset
     *
     * @default n/a
     */
    "padding-bottom"?: string
    /**
     * left offset
     *
     * @default n/a
     */
    "padding-left"?: string
    /**
     * right offset
     *
     * @default n/a
     */
    "padding-right"?: string
    /**
     * top offset
     *
     * @default n/a
     */
    "padding-top"?: string
    /**
     * padding around the icon
     *
     * @default 0px
     */
    "icon-padding"?: string
    /**
     * padding around the text
     *
     * @default 4px 4px 4px 0
     */
    "text-padding"?: string
    /**
     * image source
     *
     * @default Each social name has its own default
     */
    src?: string
    /**
     * link target
     *
     * @default _blank
     */
    target?: string
    /**
     * img title attribute
     *
     * @default none
     */
    title?: string
    /**
     * underline/overline/none
     *
     * @default none
     */
    "text-decoration"?: string
  }
  "mj-spacer": {
    /**
     * inner element background color
     *
     * @default n/a
     */
    "container-background-color"?: string
    /**
     * class name, added to the root HTML element created
     *
     * @default n/a
     */
    "css-class"?: string
    /**
     * spacer height
     *
     * @default 20px
     */
    height?: string
    /**
     * supports up to 4 parameters
     *
     * @default none
     */
    padding?: string
    /**
     * bottom offset
     *
     * @default n/a
     */
    "padding-bottom"?: string
    /**
     * left offset
     *
     * @default n/a
     */
    "padding-left"?: string
    /**
     * right offset
     *
     * @default n/a
     */
    "padding-right"?: string
    /**
     * top offset
     *
     * @default n/a
     */
    "padding-top"?: string
    /**
     * vertical alignment
     *
     * @default middle
     */
    "vertical-align"?: string
    /**
     * spacer width
     *
     * @default n/a
     */
    width?: string
  }
  "mj-table": {
    /**
     * self horizontal alignment
     *
     * @default left
     */
    align?: string
    /**
     * table external border
     *
     * @default none
     */
    border?: string
    /**
     * space between cells
     *
     * @default n/a
     */
    cellpadding?: string
    /**
     * space between cell and border
     *
     * @default n/a
     */
    cellspacing?: string
    /**
     * text header & footer color
     *
     * @default #000000
     */
    color?: string
    /**
     * inner element background color
     *
     * @default n/a
     */
    "container-background-color"?: string
    /**
     * class name, added to the root HTML element created
     *
     * @default n/a
     */
    "css-class"?: string
    /**
     * font name
     *
     * @default Ubuntu, Helvetica, Arial, sans-serif
     */
    "font-family"?: string
    /**
     * font size
     *
     * @default 13px
     */
    "font-size"?: string
    /**
     * font style
     *
     * @default n/a
     */
    "font-style"?: string
    /**
     * space between lines
     *
     * @default 22px
     */
    "line-height"?: string
    /**
     * supports up to 4 parameters
     *
     * @default 10px 25px
     */
    padding?: string
    /**
     * bottom offset
     *
     * @default n/a
     */
    "padding-bottom"?: string
    /**
     * left offset
     *
     * @default n/a
     */
    "padding-left"?: string
    /**
     * right offset
     *
     * @default n/a
     */
    "padding-right"?: string
    /**
     * top offset
     *
     * @default n/a
     */
    "padding-top"?: string
    /**
     * sets the table layout.
     *
     * @default auto
     */
    "table-layout"?: string
    /**
     * table width
     *
     * @default 100%
     */
    width?: string
    children?: string
  }
  "mj-text": {
    /**
     * text color
     *
     * @default #000000
     */
    color?: string
    /**
     * font
     *
     * @default Ubuntu, Helvetica, Arial, sans-serif
     */
    "font-family"?: string
    /**
     * text size
     *
     * @default 13px
     */
    "font-size"?: string
    /**
     * normal/italic/oblique
     *
     * @default n/a
     */
    "font-style"?: string
    /**
     * text thickness
     *
     * @default n/a
     */
    "font-weight"?: string
    /**
     * space between the lines
     *
     * @default 1
     */
    "line-height"?: string
    /**
     * letter spacing
     *
     * @default none
     */
    "letter-spacing"?: string
    /**
     * The height of the element
     *
     * @default n/a
     */
    height?: string
    /**
     * underline/overline/line-through/none
     *
     * @default n/a
     */
    "text-decoration"?: string
    /**
     * uppercase/lowercase/capitalize
     *
     * @default n/a
     */
    "text-transform"?: string
    /**
     * left/right/center/justify
     *
     * @default left
     */
    align?: string
    /**
     * inner element background color
     *
     * @default n/a
     */
    "container-background-color"?: string
    /**
     * supports up to 4 parameters
     *
     * @default 10px 25px
     */
    padding?: string
    /**
     * top offset
     *
     * @default n/a
     */
    "padding-top"?: string
    /**
     * bottom offset
     *
     * @default n/a
     */
    "padding-bottom"?: string
    /**
     * left offset
     *
     * @default n/a
     */
    "padding-left"?: string
    /**
     * right offset
     *
     * @default n/a
     */
    "padding-right"?: string
    /**
     * class name, added to the root HTML element created
     *
     * @default n/a
     */
    "css-class"?: string
    children?: string
  }
  "mj-wrapper": {
    /**
     * section color
     *
     * @default n/a
     */
    "background-color"?: string
    /**
     * css background repeat
     *
     * @default repeat
     */
    "background-repeat"?: string
    /**
     * css background size
     *
     * @default auto
     */
    "background-size"?: string
    /**
     * background url
     *
     * @default n/a
     */
    "background-url"?: string
    /**
     * css border format
     *
     * @default none
     */
    border?: string
    /**
     * css border format
     *
     * @default n/a
     */
    "border-bottom"?: string
    /**
     * css border format
     *
     * @default n/a
     */
    "border-left"?: string
    /**
     * border radius
     *
     * @default n/a
     */
    "border-radius"?: string
    /**
     * css border format
     *
     * @default n/a
     */
    "border-right"?: string
    /**
     * css border format
     *
     * @default n/a
     */
    "border-top"?: string
    /**
     * class name, added to the root HTML element created
     *
     * @default n/a
     */
    "css-class"?: string
    /**
     * make the wrapper full-width
     *
     * @default n/a
     */
    "full-width"?: string
    /**
     * supports up to 4 parameters
     *
     * @default 20px 0
     */
    padding?: string
    /**
     * section bottom offset
     *
     * @default n/a
     */
    "padding-bottom"?: string
    /**
     * section left offset
     *
     * @default n/a
     */
    "padding-left"?: string
    /**
     * section right offset
     *
     * @default n/a
     */
    "padding-right"?: string
    /**
     * section top offset
     *
     * @default n/a
     */
    "padding-top"?: string
    /**
     * css text-align
     *
     * @default center
     */
    "text-align"?: string
    /**
     * css vertical-align
     *
     * @default top
     */
    "vertical-align"?: string
    children?: JSXChildren
  }
}

type UnionToIntersection<U> = (U extends any
? (k: U) => void
: never) extends (k: infer I) => void
  ? I
  : never

type AllPossibleProperties = UnionToIntersection<
  ElementProperties[keyof ElementProperties]
>

type CatchAllElementProperties = Record<
  "mj-class" | "mj-all",
  Partial<AllPossibleProperties>
>

type _IntrinsicElements = ElementProperties & CatchAllElementProperties

declare global {
  namespace JSX {
    interface Element {
      tagName: string
      attributes: object
      children?: JSXChildren
      content?: string
    }

    type ElementClass = never
    type ElementAttributesProperty = never

    interface ElementChildrenAttribute {
      children: Children
    }

    interface IntrinsicAttributes {}

    interface IntrinsicElements extends _IntrinsicElements {}
  }
}
