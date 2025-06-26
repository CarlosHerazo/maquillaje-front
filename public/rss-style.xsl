<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>Feed RSS - Belleza Glam</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; color: #333; }
          h1 { color: #d63384; border-bottom: 2px solid #f3d9e6; padding-bottom: 10px; }
          .channel-info { background-color: #fff5f7; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
          .item { margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px dashed #f3d9e6; }
          .item-title { color: #d63384; font-size: 1.2em; margin-bottom: 5px; }
          .item-link { color: #6f42c1; text-decoration: none; }
          .item-link:hover { text-decoration: underline; }
          .item-date { color: #6c757d; font-size: 0.9em; }
          .item-category { display: inline-block; background-color: #f3d9e6; color: #d63384; padding: 2px 8px; border-radius: 12px; font-size: 0.8em; margin-top: 5px; }
        </style>
      </head>
      <body>
        <h1><xsl:value-of select="rss/channel/title"/></h1>
        
        <div class="channel-info">
          <p><xsl:value-of select="rss/channel/description"/></p>
          <p>URL: <a href="{rss/channel/link}"><xsl:value-of select="rss/channel/link"/></a></p>
        </div>
        
        <xsl:for-each select="rss/channel/item">
          <div class="item">
            <h2 class="item-title"><xsl:value-of select="title"/></h2>
            <p><a href="{link}" class="item-link"><xsl:value-of select="link"/></a></p>
            <p><xsl:value-of select="description"/></p>
            <p class="item-date">Publicado: <xsl:value-of select="pubDate"/></p>
            <span class="item-category"><xsl:value-of select="category"/></span>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>