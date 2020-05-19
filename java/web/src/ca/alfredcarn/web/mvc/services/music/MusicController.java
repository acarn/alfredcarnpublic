package ca.alfredcarn.web.mvc.services.music;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class MusicController {

	@RequestMapping( value = "/", method = RequestMethod.GET)
	public String index(ModelMap model) {
		return "index";
	}
	
}
