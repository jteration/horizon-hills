<%EnableSessionState=False
host = Request.ServerVariables("HTTP_HOST")

if host = "horizonhillscampionco.com" or host = "www.horizonhillscampionco.com" then
response.redirect("https://www.horizonhillscampionco.com/")

else
response.redirect("https://www.horizonhillscampionco.com/error")

end if
%>