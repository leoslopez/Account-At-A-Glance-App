using System;
using System.Collections.Generic;
using NewsAtAGlance.Model;
using System.IO;
using System.Net;
using System.Xml;
using System.Text;

namespace AccountAtAGlance.Model.Repository.Helpers
{
    public class NewsEngine
    {
        private const string BASE_URL = "http://www.google.com.ar/ig/api?news";        
        private const string LANGUAGE_FILTER = "&hl=";
        private const string SECTION_FILTER = "=";

        // TODO: replace section string by enum (1:sports, 2:entertainment, etc)
        public List<News> GetNews(string language, string section)
        {
            XmlDocument doc = CreateDoc(language, section);
            return ParseNews(doc);                                    
        }        
        
        private XmlDocument CreateDoc(string language, string section)
        {
            Encoding enc = Encoding.GetEncoding("iso-8859-1");

            string url = string.Concat(BASE_URL, SECTION_FILTER, section, LANGUAGE_FILTER, language);

            WebRequest request = WebRequest.Create(url);            
            WebResponse response = request.GetResponse();

            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream, enc);
            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            response.Close();

            XmlDocument xDoc = new XmlDocument();
            xDoc.LoadXml(responseFromServer);

            return xDoc;            
        }

        public List<News> ParseNews(XmlDocument xmlDoc)
        {
            List<News> news = new List<News>();

            try
            {
                foreach (XmlNode item in xmlDoc.SelectNodes("/xml_api_reply/news/news_entry"))
                {
                    News aNew = new News();
                    aNew.Title = item.SelectSingleNode("title").Attributes["data"].InnerText;
                    aNew.Url = item.SelectSingleNode("url").Attributes["data"].InnerText;
                    aNew.Snippet = item.SelectSingleNode("snippet").Attributes["data"].InnerText;
                    aNew.Source = item.SelectSingleNode("source").Attributes["data"].InnerText;
                    aNew.ClusterUrl = item.SelectSingleNode("cluster_url").Attributes["data"].InnerText;

                    news.Add(aNew);
                }

            }
            catch (Exception ex)
            {
                news = null;
            }

            return news;
        }
    }
}